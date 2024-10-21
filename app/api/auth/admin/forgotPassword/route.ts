import { createRandomString } from "@/utils/createRandomString"
import { insertPasswordToDB } from "@/services/adminPasswordManagement"
import { sendEmail } from "@/services/sendEmails"
import { hashPassword } from "@/utils/passwordHashes"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const email = process.env.ADMIN_EMAIL
    if (!email) {
      return NextResponse.json({
        error: "Email is not defined on environment"
      }, { status: 500 })
    }
    const string = createRandomString(10)

    const hashedPassword = await hashPassword(string);

    const databaseResponse = await insertPasswordToDB(hashedPassword, email)

    if (!databaseResponse.success) {
      throw {
        message: databaseResponse.error
      }
    }

    const response = await sendEmail(string, email, "ADMIN_PASS")

    if (!response.success) {
      throw {
        message: response.error
      }
    }

    if (!response.success) {
      return {
        message: "Mail could be sent as this moment"
      }
    }

    return NextResponse.json({
      success: true,
      message: "Mail with the initial password sent"
    }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({
      error: err.message,
      success: false
    }, { status: 500 })
  }
}
