import { hideMessageUser, markRead } from "@/services/messagesAndNotifications"
import { NextRequest, NextResponse } from "next/server"

export async function PATCH(request: NextRequest, { params }: { params: { id: string[] } }) {
  try {
    const messageId = parseInt(params.id[0])

    if (!messageId) {
      throw {
        message: "Unexpected error occured"
      }
    }

    const reqBody = await request.json()

    if (reqBody.action == "deleteFromUser") {
      // set deleteFromAdmin = true which hides the message from admin
      const response = await hideMessageUser(messageId)
      if (!response.success) {
        throw {
          message: response.error
        }
      }

      return NextResponse.json({
        success: true,
        message: "Deleted from user"
      }, { status: 200 })

    } else if (reqBody.action == "markRead") {
      // update the content of the message
      const response = await markRead(messageId)
      if (!response.success) {
        throw {
          message: response.error
        }
      }

      return NextResponse.json({
        success: true,
        message: "Marked as read"
      }, { status: 200 })

    } else {
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
