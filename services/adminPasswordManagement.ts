import prisma from "@/db"
export async function insertPasswordToDB(password: string, email: string) {
  try {
    const adminDetails = await prisma.admin.findFirst({
      where: {
        email: email
      }
    })

    const name = process.env.ADMIN_NAME
    if (!name) {
      return {
        success: false,
        error: "Name is not defined on environment"
      }
    }

    if (!adminDetails) {
      await prisma.admin.create({
        data: {
          email: email,
          password: password,
          name: name
        }
      })

      return {
        success: true,
        message: "Inserted admin data to database"
      }
    } else {
      await prisma.admin.update({
        where: {
          email: email,
        },
        data: {
          password: password
        }
      })

      return {
        success: true,
        message: "Password changed on database"
      }
    }
  } catch (err: any) {
    return {
      success: false,
      error: err.message
    }
  }
}

export async function changeAdminPassword(email: string, password: string) {
  try {
    await prisma.admin.update({
      where: {
        email
      },
      data: {
        password
      }
    })

    return {
      success: true
    }
  } catch (err: any) {
    return {
      success: false,
      error: err.message
    }
  }
}
