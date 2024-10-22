import { getAllMessage } from "@/services/messagesAndNotifications";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { userId } = await request.json()
  try {
    const response = await getAllMessage(userId)
    if (!response.success) {
      throw {
        message: response.error
      }
    }
    return NextResponse.json({
      success: true,
      data: response.data
    }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      data: err.message
    }, { status: 500 })
  }
}
