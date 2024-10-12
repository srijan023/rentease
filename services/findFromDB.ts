import prisma from "@/db"

export async function findExisitingUser(email: string) {
  const res = await prisma.person.findFirst({
    where: {
      email
    }
  })

  if (!res) {
    return {
      "success": false
    }
  }

  return {
    "success": true,
    "user": res
  }
}
