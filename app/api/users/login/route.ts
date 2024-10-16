import { NextRequest, NextResponse } from "next/server";
import { findExisitingUser } from "@/services/findFromDB";
import { validateHashedPasswords } from "@/utils/passwordHashes";
import { generateJWTToken } from "@/utils/JWTTokens";
import { validateLoginRequest } from "@/validations/personValidation";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()

    const isValidInput = validateLoginRequest(reqBody)

    if (!isValidInput.success) {
      return NextResponse.json({
        message: "Invalid data format",
        error: isValidInput.errors
      }, { status: 400 })
    }

    const { email, password } = reqBody;

    const existingUser = await findExisitingUser(email)
    if (!existingUser.success) {
      return NextResponse.json({
        error: "Incorrect email provided"
      }, { status: 404 })
    }

    const person = existingUser.user

    if (!person) {
      throw {
        message: "Unexpected error occured"
      };
    }

    const isValidPassword = validateHashedPasswords(password, person.password)

    if (!isValidPassword) {
      return NextResponse.json({
        error: "Incorrect password"
      }, { status: 401 })
    }

    const response = NextResponse.json({
      message: "Login successful",
      id: person.id,
      name: person.name
    }, { status: 200 })

    generateJWTToken(person.email, person.id, person.name, response)

    return response

  } catch (err: any) {
    return NextResponse.json({
      error: err.message
    }, { status: 500 })
  }
}
