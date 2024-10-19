import { getAllUsers } from "@/services/findUserFromDB";
import { NextResponse } from "next/server";

export async function GET() {

  try {
    const data = await getAllUsers();
    if (!data.success) {
      return NextResponse.json({
        success: false,
        message: data.error
      }, { status: data.status })
    }

    return NextResponse.json({
      success: true,
      data: data.data
    }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, {
      status: 500
    })
  }
}
