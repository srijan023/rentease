import { typeAuxPerson } from "@/validations/propsTypes";
import prisma from "@/db"

export async function findElseInsertAuxUser(contact: typeAuxPerson) {
  const findRes = await prisma.auxPerson.findFirst({
    where: {
      email: contact.email
    }
  })

  if (findRes) {
    return findRes.id
  }

  const insertRes = await prisma.auxPerson.create({
    data: contact
  })

  return insertRes.id
}
