import { validateAdminCredentials } from "@/helpers/validateAdminCredentials";
import { changeAdminPassword } from "@/services/adminPasswordManagement";
import { hashPassword } from "@/utils/passwordHashes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()

    const { email, password, newPassword } = reqBody
    const isValid = await validateAdminCredentials(email, password);

    if (!isValid.success) {
      return NextResponse.json({
        error: isValid.error,
        success: false
      }, { status: isValid.status })
    }

    const hashedPassword = await hashPassword(newPassword);

    const databaseResponse = await changeAdminPassword(email, hashedPassword);

    if (!databaseResponse.success) {
      throw {
        message: databaseResponse.error
      }
    }

    return NextResponse.json({
      success: true,
      message: "Password changed successfully"
    }, { status: 202 })

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 })
  }
}
