import prisma from "@/db";
import { personSchema } from "@/validations/personSchema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()

    const validationResult = personSchema.safeParse(reqBody)

    if (!validationResult.success) {
      return NextResponse.json({
        "success": false,
        "errors": validationResult.error.flatten()
      }, { status: 400 })
    }

    const { emergency_contact, prev_landlord, ...userDetails } = reqBody;

    // emergency contact is a must
    emergency_contact["person_type"] = "Emergency_Contact"

    // previous landlord is optional
    if (prev_landlord) {
      prev_landlord["person_type"] = "Landlord"
    }

    // hashing password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(userDetails.password, salt)

    userDetails.password = hashedPassword

    // uploading data to the database
    const result = await prisma.$transaction(async (prisma) => {
      // uploading emergency contact
      const emergency_contact_response = await prisma.auxPerson.create({
        data: emergency_contact
      })

      let prev_landlord_response = null
      // uploading landlord information if it exists
      if (prev_landlord) {
        prev_landlord_response = await prisma.auxPerson.create({
          data: prev_landlord
        })
      }

      // uploading user with the landlord and emergency contact added
      const person_response = await prisma.person.create({
        data: {
          ...userDetails,
          emergency_contact: { connect: { id: emergency_contact_response.id } },
          ...(prev_landlord_response && { prev_landlord: { connect: { id: prev_landlord_response.id } } })
        }
      })

      return person_response
    })

    // creating a jwt token

    return NextResponse.json({
      "response": result.id
    })

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
