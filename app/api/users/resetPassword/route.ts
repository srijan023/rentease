import { updatePassword } from "@/services/updateUserData";
import { hashPassword } from "@/utils/passwordHashes";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const passwordSchema = z.string().min(6, "It should at least 6 characters long")

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  try {
    const userId = request.headers.get("id")

    const isValidPassword = passwordSchema.safeParse(password)

    if (!isValidPassword.success) {
      return NextResponse.json({
        error: isValidPassword.error.flatten(),
        success: false
      }, { status: 400 })
    }

    const hashedPassword = await hashPassword(password)

    if (!userId) {
      throw {
        message: "User id is not found"
      }
    }

    const response = await updatePassword(hashedPassword, parseInt(userId))

    return NextResponse.json({
      message: "Password updated successfully",
      success: true
    }, { status: 202 })

  } catch (err: any) {
    return NextResponse.json({
      error: err.message
    }, { status: 500 })
  }

}
