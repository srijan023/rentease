import { getAllMessage } from "@/services/messagesAndNotifications";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const id = request.headers.get("id")
    if (!id) {
      return NextResponse.json({
        success: false,
        error: "You are not authenticated"
      }, { status: 401 })
    }
    const response = await getAllMessage(parseInt(id))
    if (!response.success) {
      throw {
        message: response.error
      }
    }
    return NextResponse.json({
      success: true,
      data: response.data
    })

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    })
  }
}
