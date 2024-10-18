import { validateAdminCredentials } from "@/helpers/validateAdminCredentials";
import { generateJWTToken } from "@/utils/JWTTokens";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email, password } = reqBody;

    const person = await validateAdminCredentials(email, password)
    // const isValidInput = validateLoginRequest(reqBody);
    //
    // if (!isValidInput.success) {
    //   return NextResponse.json(
    //     {
    //       message: "Invalid data format",
    //       error: isValidInput.errors,
    //     },
    //     { status: 400 },
    //   );
    // }
    //
    // const { email, password } = reqBody;
    //
    // const existingUser = await findExistingAdmin(email);
    // if (!existingUser.success) {
    //   return NextResponse.json(
    //     {
    //       error: "Incorrect email provided",
    //     },
    //     { status: 404 },
    //   );
    // }
    //
    // const person = existingUser.data;
    //
    // if (!person) {
    //   throw {
    //     message: "Unexpected error occured"
    //   };
    // }
    //
    // const isValidPassword = validateHashedPasswords(password, person.password);
    //
    // if (!isValidPassword) {
    //   return NextResponse.json(
    //     {
    //       error: "Incorrect password",
    //     },
    //     { status: 401 },
    //   );
    // }

    if (!person.success) {
      return NextResponse.json({
        success: false,
        error: person.error
      }, { status: person.status })
    }

    if (!person.email || !person.id || !person.id) {
      throw {
        message: "Unexpected error"
      }
    }

    const response = NextResponse.json(
      {
        message: "Login successful",
        id: person.id,
        name: person.name,
      },
      { status: 200 },
    );

    generateJWTToken(person.email, person.id, person.name, response);

    return response;

  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message,
      },
      { status: 500 },
    );
  }
}
