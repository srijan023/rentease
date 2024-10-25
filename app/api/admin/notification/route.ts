import { getAllNotifications, insertNotification } from "@/services/messagesAndNotifications"
import { NextRequest, NextResponse } from "next/server"

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

export async function POST(request: NextRequest) {
  const { message } = await request.json()
  try {
    const response = await insertNotification(message)
    if (!response.success) {
      throw {
        message: response.error
      }
    }

    return NextResponse.json({
      success: true,
      message: "Notification sent successfully"
    }, { status: 202 })

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 })

  }
}
