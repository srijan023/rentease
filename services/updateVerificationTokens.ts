import prisma from "@/db"

export async function insertVerficiationToken(token: string, tokenType: string, userId?: number, userEmail?: string) {
  let change
  let where
  if (tokenType == "VERIFICATION") {
    change = {
      verificationToken: token,
      verificationExpiry: new Date(Date.now() + 60 * 60 * 24 * 1000)
    }
    where = {
      id: userId
    }
  } else if (tokenType == "RESET") {
    change = {
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: new Date(Date.now() + 60 * 15 * 1000)
    }
    where = {
      email: userEmail
    }
  } else {
    return {
      success: false,
      error: "Invalid token type"
    }
  }
  try {
    await prisma.person.update({
      where: where,
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

export async function setVerified(id: number) {
  const response = await prisma.person.update({
    where: {
      id: id
    },
    data: {
      isVerified: true,
      verificationToken: "",
      verificationExpiry: null
    }
  })

  if (!response) {
    return {
      success: false,
      error: "Error while inserting into the database",
      status: 500
    }
  }

  return {
    success: true,
    message: "Update the user to verified",
    status: 200
  }
}
