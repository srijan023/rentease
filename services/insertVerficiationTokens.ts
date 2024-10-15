import prisma from "@/db"

export async function insertVerficiationToken(token: string, userId: number, tokenType: string) {
  let change
  if (tokenType == "VERIFICATION") {
    change = {
      verificationToken: token,
      verificationExpiry: new Date(Date.now() + 60 * 60 * 24 * 1000)

    }
  } else if (tokenType == "RESET") {
    change = {
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: new Date(Date.now() + 60 * 15 * 1000)
    }
  } else {
    return {
      success: false,
      error: "Invalid token type"
    }
  }
  try {
    await prisma.person.update({
      where: {
        id: userId
      },
      data: change
    })

    return {
      success: true,
      message: "Inserted tokens into the database"
    }
  } catch (err: any) {
    return {
      success: false,
      error: `Could not insert token into the database, ${err.message} `
    }
  }
}
