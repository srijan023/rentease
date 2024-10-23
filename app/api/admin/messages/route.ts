import { insertMessage, insertNotification } from "@/services/messagesAndNotifications";
import { NextRequest, NextResponse } from "next/server";
import { getAllMessage } from "@/services/messagesAndNotifications";

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

export async function POST(request: NextRequest) {
  const { message, receiver } = await request.json();

  try {
    let response
    if (!receiver) {
      // it is a notification
      response = await insertNotification(message)
      if (!response.success) {
        throw {
          message: response.error
        }
      }
    } else {
      // it is a message
      response = await insertMessage(message, parseInt(receiver))
      if (!response.success) {
        throw {
          message: response.error
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: "Inserted message / notification successfully"
    }, { status: 202 })

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 })
  }
}

