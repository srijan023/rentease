import { findExistingAdmin } from "@/services/adminAccountManagement";
import { validateHashedPasswords } from "@/utils/passwordHashes";
import { validateLoginRequest } from "@/validations/personValidation";

export async function validateAdminCredentials(email: string, password: string) {
  try {

    const reqBody = { email, password }
    const isValidInput = validateLoginRequest(reqBody)

    if (!isValidInput.success) {
      return {
        success: false,
        error: isValidInput.errors,
        status: 400
      }
    }

    const existingUser = await findExistingAdmin(email);
    if (!existingUser.success) {
      return {
        success: false,
        error: "No user found with provided details",
        status: 404
      }
    }

    const person = existingUser.data;

    if (!person) {
      return {
        success: false,
        error: "Unexpected error occured",
        status: 500
      }
    }

    const isValidPassword = validateHashedPasswords(password, person.password);

    if (!isValidPassword) {
      return {
        success: false,
        error: "Incorrect password",
        status: 401
      }
    }

    return {
      success: true,
      message: "Login successful",
      id: person.id,
      name: person.name,
      email: person.email,
      status: 200
    }

  } catch (err: any) {
    return {
      success: false,
      error: err.message,
      status: 500
    }
  }
}
