import { getNotification, markNotificationRead } from "@/services/messagesAndNotifications"
import { NextRequest, NextResponse } from "next/server"

// route for message with an id
export async function GET(_request: NextRequest, { params }: { params: { id: string[] } }) {
  try {
    const messageId = parseInt(params.id[0])

    if (!messageId) {
      throw {
        message: "Unexpected error occured"
      }
    }

    const response = await getNotification(messageId)
    if (!response.success) {
      throw { message: response.error }
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

export async function PATCH(request: NextRequest, { params }: { params: { id: string[] } }) {
  try {
    const notId = parseInt(params.id[0])
    const userId = request.headers.get("id")

    if (!userId) {
      throw {
        message: "Unexpected error"
      }
    }

    if (!notId) {
      throw {
        message: "Unexpected error occured"
      }
    }

    const reqBody = await request.json()

    if (reqBody.action == "markRead") {
      const response = await markNotificationRead(notId, parseInt(userId))
      if (!response.success) {
        throw {
          message: response.error
        }
      }
      return NextResponse.json({
        success: true,
        message: "Marked as read"
      }, { status: 200 })
    }
    else {
      return NextResponse.json({
        success: false,
        message: "Invalid operation"
      }, { status: 400 })

    }
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 })
  }
}


