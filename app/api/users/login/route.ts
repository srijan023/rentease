import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()

    const { email, password } = reqBody;

    const person = await prisma.person.findFirst({
      where: {
        email
      }
    })

    if (!person) {
      return NextResponse.json({
        error: "Incorrect email provided"
      }, { status: 404 })
    }

    const validPassword = await bcryptjs.compare(password, person.password)

    if (!validPassword) {
      return NextResponse.json({
        error: "Incorrect password"
      }, { status: 401 })
    }

    const tokenData = {
      id: person.id,
      name: person.name,
      email: person.email
    }

    const token = jwt.sign({ data: tokenData }, process.env.JWT_SECRET || "defaultSecret")

    const response = NextResponse.json({
      message: "Login successful",
      id: person.id,
      name: person.name
    }, { status: 200 })

    response.cookies.set("token", token, {
      httpOnly: true
    })

    return response
  } catch (err: any) {
    return NextResponse.json({
      error: err.message
    }, { status: 500 })
  }
}
