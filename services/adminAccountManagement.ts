import prisma from "@/db"
export async function findExistingAdmin(email: string) {
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        email
      }
    })

    if (!admin) {
      return {
        success: false,
        error: "No admin found with provided detail"
      }
    }

    console.log(admin)
    return {
      success: true,
      data: admin
    }
  } catch (err: any) {
    return {
      success: false,
      error: err.message
    }
  }
}
