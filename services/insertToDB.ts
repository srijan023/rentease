import prisma from "@/db"
import { auxPersonType, typeAuxPerson, typePerson, typeProperty } from "@/validations/propsTypes"
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

export async function insertPropertyInfo(reqData: typeProperty) {
  const { assets: assetsData, ...propertyInfo } = reqData;

  try {

    if (!Array.isArray(assetsData)) {
      return {
        success: false,
        error: "Invalid format for assets data, its should be an array"
      }
    }

    const result = await prisma.property.create({
      data: {
        ...propertyInfo,
        assets: {
          create: assetsData.map((asset: any) => ({
            name: asset.name,
            link: asset.link
          })),
        }
      }
    })

    if (result.id) {
      return {
        success: true,
        message: "Data inserted into the database"
      }
    } else {
      return {
        success: false
      }
    }
  } catch (err: any) {
    return {
      success: false,
      error: err.message
    }
  }
}


