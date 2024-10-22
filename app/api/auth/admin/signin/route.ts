import { validateAdminCredentials } from "@/helpers/validateAdminCredentials";
import { generateJWTToken } from "@/utils/JWTTokens";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email, password } = reqBody;

    const person = await validateAdminCredentials(email, password)

    if (!person.success) {
      return NextResponse.json({
        success: false,
        error: person.error
      }, { status: person.status })
    }

    if (!person.email || !person.id || !person.name) {
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

    generateJWTToken(person.email, person.id, person.name, response, "ADMIN");

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
