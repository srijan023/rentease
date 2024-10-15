import { insertVerficiationToken } from "@/services/insertVerficiationTokens";
import { generateToken } from "@/utils/verificationTokens";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("id")
    if (!userId) {
      throw "UserId could not be found"
    }
    const token = await generateToken(userId.toString())

    const response = await insertVerficiationToken(token, parseInt(userId), "VERIFICATION")

    if (!response.success) {
      throw response.error
    }

    return NextResponse.json({
      success: true,
      message: "Verification email sent"
    })
  } catch (err: any) {
    return NextResponse.json({
      error: err.message
    }, { status: 500 })
  }
}
