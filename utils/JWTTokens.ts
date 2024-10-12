import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

export function generateJWTToken(email: string, id: number, name: string, response: NextResponse) {
  const tokenData = {
    id: id,
    name: name,
    email: email
  }

  const token = jwt.sign({ data: tokenData }, process.env.JWT_SECRET || "defaultSecret")

  response.cookies.set("token", token, {
    httpOnly: true
  })

  return
}
