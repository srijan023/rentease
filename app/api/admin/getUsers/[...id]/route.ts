import { findUserDetailsFromId } from "@/services/findUserFromDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { id: string[] } }) {
  try {
    const userId = parseInt(params.id[0]);

    if (!userId) {
      throw {
        message: "User Id needs to be provided"
      }
    }

    const response = await findUserDetailsFromId(userId)
    if (!response.success) {
      return NextResponse.json({
        success: false,
        error: response.error,
      }, { status: response.status })
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
