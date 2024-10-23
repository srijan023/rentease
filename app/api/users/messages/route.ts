import { NextRequest, NextResponse } from "next/server";
import { getAllMessage } from "@/services/messagesAndNotifications";

export async function GET(request: NextRequest) {
  const id = request.headers.get("id")
  if (!id) {
    throw {
      message: "User id not found on header"
    }
  }
  try {
    const response = await getAllMessage(parseInt(id))
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
