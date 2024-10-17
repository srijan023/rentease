import { sendEmail } from "@/services/sendEmails";
import { insertVerficiationToken } from "@/services/updateVerificationTokens";
import { generateToken } from "@/utils/verificationTokens";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("id")
    if (!userId) {
      throw {
        message: "UserId could not be found"
      }
    }
    const token = await generateToken(userId.toString())

    const response = await insertVerficiationToken(token, "VERIFICATION", parseInt(userId), "")

    if (!response.success) {
      throw response.error
    }

    const userEmail = request.headers.get("email")
    if (!userEmail) {
      throw {
        message: "User Email not found on header"
      }
    }
    const emailResponse = await sendEmail(token, userEmail, "VERIFICATION")

    if (emailResponse.success) {
      return NextResponse.json({
        success: true,
        message: "Verification email sent"
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
