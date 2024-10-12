import { insertRelationalDetailsSignup } from "@/services/insertToDB";
import { generateJWTToken } from "@/utils/JWTTokens";
import { hashPassword } from "@/utils/passwordHashes";
import { validateSignupRequest } from "@/validations/personValidation";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()

    const validationResult = validateSignupRequest(reqBody)

    if (!validationResult.success) {
      return NextResponse.json({
        success: false,
        error: validationResult.errors
      }, { status: 400 })
    }

    const { emergency_contact, prev_landlord, ...userDetails } = reqBody;

    // inserting hashed password to replace the plain text password
    userDetails.password = await hashPassword(userDetails.password)

    const result = await insertRelationalDetailsSignup(emergency_contact, prev_landlord, userDetails)
    const response = NextResponse.json({
      response: result.id
    }, { status: 201 })

    generateJWTToken(result.email, result.id, result.name, response)

    return response

  } catch (err: any) {
    // TODO: better error handling

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code == "P2002") {
        return NextResponse.json(
          {
            error: "A user already exists with this email"
          },
          { status: 500 })
      }
    }
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
