import { deleteMessage, getMessage, hideMessageAdmin, updateMessageContent } from "@/services/messagesAndNotifications";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest, { params }: { params: { id: string[] } }) {
  try {
    const messageId = parseInt(params.id[0])

    if (!messageId) {
      throw {
        message: "Unexpected error occured"
      }
    }

    const response = await getMessage(messageId)
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

export async function DELETE(_request: NextRequest, { params }: { params: { id: string[] } }) {
  try {
    const messageId = parseInt(params.id[0])

    if (!messageId) {
      throw {
        message: "Unexpected error occured"
      }
    }

    const response = await deleteMessage(messageId)

    if (!response.success) {
      throw { message: response.error }
    }

    return NextResponse.json({
      success: true,
      message: "Message deleted successfully"
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
    const messageId = parseInt(params.id[0])

    if (!messageId) {
      throw {
        message: "Unexpected error occured"
      }
    }

    const reqBody = await request.json()

    if (reqBody.action == "deleteFromAdmin") {
      // set deleteFromAdmin = true which hides the message from admin
      const response = await hideMessageAdmin(messageId)
      if (!response.success) {
        throw {
          message: response.error
        }
      }

      return NextResponse.json({
        success: true,
        message: "Deleted from admin"
      }, { status: 200 })

    } else if (reqBody.action == "updateContent") {
      // update the content of the message
      const response = await updateMessageContent(messageId, reqBody.content)
      if (!response.success) {
        throw {
          message: response.error
        }
      }

      return NextResponse.json({
        success: true,
        message: "Content updated"
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

