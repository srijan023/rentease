import prisma from "@/db"
import { auxPersonType, typeAuxPerson, typePerson } from "@/validations/propsTypes"
import { findElseInsertAuxUser } from "./findElseInsert"

export async function insertRelationalDetailsSignup(
  emergency_contact: typeAuxPerson,
  prev_landlord: typeAuxPerson,
  userDetails: typePerson) {

  // emergency contact is a must
  emergency_contact["person_type"] = auxPersonType.Emergency_Contact

  // previous landlord is optional
  if (prev_landlord) {
    prev_landlord["person_type"] = auxPersonType.Landlord
  }

  // uploading data to the database
  const result = await prisma.$transaction(async (prisma) => {
    // uploading emergency contact
    const emergency_contact_response = await findElseInsertAuxUser(emergency_contact)

    let prev_landlord_response = null

    // uploading landlord information if it exists
    if (prev_landlord) {
      prev_landlord_response = await findElseInsertAuxUser(prev_landlord)
    }

    // uploading user with the landlord and emergency contact added
    const person_response = await prisma.person.create({
      data: {
        ...userDetails,
        emergency_contact: emergency_contact ? { connect: { id: emergency_contact_response } } : undefined,
        prev_landlord: prev_landlord_response ? { connect: { id: prev_landlord_response } } : undefined,
      }
    })

    return person_response
  })

  return result
}


