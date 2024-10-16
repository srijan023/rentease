import { findUserDetailsFromId } from "@/services/findFromDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const id = request.headers.get("id")
    if (!id) {
      throw {
        message: "Internal server error"
      };
    }

    // fetching the user information from the database
    const res = await findUserDetailsFromId(+id)

    if (!res.success) {
      return NextResponse.json({
        error: "No user with that entry exists"
      }, { status: 404 })
    }

    return NextResponse.json(res, { status: 200 })

  } catch (err: any) {
    return NextResponse.json({
      meessage: err.message
    }, { status: 500 })
  }
}

