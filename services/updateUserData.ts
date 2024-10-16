import prisma from "@/db"
export async function updatePassword(password: string, id: number) {
  try {

    const response = await prisma.person.update({
      where: {
        id: id
      },
      data: {
        password: password
      }
    })
    return response
  } catch (err: any) {
    return {
      success: false,
      message: err.message
    }
  }
}
