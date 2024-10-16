import { sendEmail } from "@/services/sendEmails";
import { insertVerficiationToken } from "@/services/updateVerificationTokens";
import { generateToken } from "@/utils/verificationTokens";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()

    const { email } = reqBody
    if (!email) {
      throw {
        message: "User email not found"
      }
    }

    const token = await generateToken(email)

    const response = await insertVerficiationToken(token, "RESET", 0, email)

    if (!response.success) {
      throw response.error
    }

    const emailResponse = await sendEmail(token, email, "RESET")

    if (emailResponse.success) {
      return NextResponse.json({
        success: true,
        message: "Reset password link sent to the user email"
      })
    } else {
      return NextResponse.json({
        success: false,
        error: emailResponse.error
      })
    }

  } catch (err: any) {
    return NextResponse.json({
      error: err.message
    }, { status: 500 })
  }
}
