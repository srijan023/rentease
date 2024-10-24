import { getAllNotifications } from "@/services/messagesAndNotifications"
import { NextResponse } from "next/server"

// TODO: Don't give every notification filter where there is hide from user
export async function GET() {
  try {
    const response = await getAllNotifications()
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
      error: err.message
    }, { status: 500 })
  }
}

