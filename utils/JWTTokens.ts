import { findExistingAdmin } from "@/services/adminAccountManagement"
import { tokenData } from "@/validations/propsTypes"
import { jwtVerify, SignJWT } from "jose"
import { NextRequest, NextResponse } from "next/server"


export async function generateJWTToken(email: string, id: number, name: string, response: NextResponse) {
  const tokenData = {
    id: id,
    name: name,
    email: email
  }
  const key = new TextEncoder().encode(process.env.JWT_SECRET || "defaultSecret")
  const alg = 'HS256'
  const token = await new SignJWT(tokenData)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('10d')
    .sign(key)

  response.cookies.set("token", token, {
    httpOnly: true,
    sameSite: true,
  })

  return
}

export async function validateJWTToken(request: NextRequest) {
  const token = request.cookies.get("token")?.value || ""
  if (!token) {
    return {
      success: false,
      error: "Token is not present"
    }
  }

  try {
    const key = new TextEncoder().encode(process.env.JWT_SECRET || "defaultSecret")
    const { payload, protectedHeader: _ } = await jwtVerify(token, key)
    return {
      success: true,
      data: {
        id: payload.id,
        name: payload.name,
        email: payload.email
      }
    }
  } catch (err: any) {
    return {
      success: false,
      error: "Token could not be verified"
    }
  }
}

export async function validateAdminToken(request: NextRequest) {
  const token = request.cookies.get("token")?.value || ""

  if (!token) {
    return {
      success: false,
      error: "Token is not present",
      status: 401
    }
  }

  try {
    const key = new TextEncoder().encode(process.env.JWT_SECRET || "defaultSecret")
    const { payload, protectedHeader: _ } = await jwtVerify(token, key)

    const email = payload.email
    if (!email) {
      return {
        success: false,
        error: "Email is not present on payload",
        status: 401
      }
    }
    const response = await findExistingAdmin(email.toString())
    if (!response.success) {
      return {
        success: false,
        error: "Admin could not be verified",
        status: 401
      }
    }

    return {
      success: true,
      data: response.data
    }

  } catch (err: any) {
    return {
      success: false,
      error: err.message,
      status: 500
    }
  }
}
