
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      success: true,
      message: "You have been successfully logout"
    }, { status: 200 })

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0)
    })

    return response
  } catch (err: any) {
    return NextResponse.json({
      error: err.message
    }, { status: 500 })
  }
}
