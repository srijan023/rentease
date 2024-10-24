import { findExistingUser } from "@/services/findUserFromDB";
import { updatePassword } from "@/services/updateUserData";
import { hashPassword, validateHashedPasswords } from "@/utils/passwordHashes";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const passwordSchema = z.string().min(6, "It should at least 6 characters long")

export async function POST(request: NextRequest) {
  const { email, password, newPassword } = await request.json()

  try {
    const userId = request.headers.get("id")

    const isValidPassword = passwordSchema.safeParse(newPassword)

    if (!isValidPassword.success) {
      return NextResponse.json({
        error: isValidPassword.error.flatten(),
        success: false
      }, { status: 400 })
    }

    const findUser = await findExistingUser(email)

    if (!findUser.success) {
      return NextResponse.json({
        success: false,
        error: "User with the provided email does not exist"
      }, { status: 404 })
    }

    if (!findUser.user) {
      throw {
        message: "Unexpected error occured"
      }
    }

    const validatePassword = await validateHashedPasswords(password, findUser.user.password)
    if (!validatePassword) {
      return NextResponse.json({
        error: "Passwords do not match",
        success: false
      }, { status: 401 })
    }

    const hashedPassword = await hashPassword(newPassword)

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
