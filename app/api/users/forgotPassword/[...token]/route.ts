import { generateJWTToken } from "@/utils/JWTTokens";
import { validateVerificationToken } from "@/utils/validateEmailTokens";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { token: string[] } }) {
  try {
    const response = await validateVerificationToken(params.token[0], "RESET")

    if (!response.success) {
      return NextResponse.json({
        error: response.status
      }, { status: response.status })
    }

    if (!response.user?.id) {
      throw {
        message: "Unexpected error on reset password"
      }
    }

    const id = response.user.id
    const email = response.user.email
    const name = response.user.name


    const nxtResponse = NextResponse.redirect(`${process.env.DOMAIN_NAME}/resetPassword`, { status: 302 })

    generateJWTToken(email, id, name, nxtResponse)

    return nxtResponse

  } catch (err: any) {
    return NextResponse.json({
      error: err.message
    }, { status: 500 })

  }
}
