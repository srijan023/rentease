import prisma from "@/db"
export async function validateVerificationToken(token: string, verificationType: string) {
  try {
    let check;
    if (verificationType == "VERIFICATION") {
      check = {
        verificationToken: token
      }
    } else if (verificationType == "RESET") {
      check = {
        forgotPasswordToken: token
      }
    } else {
      return {
        success: false,
        error: "Invalid verification type",
        status: 406
      }
    }
    const user = await prisma.person.findFirst({
      where: check
    })

    if (!user) {
      return {
        success: false,
        error: "Invalid request",
        status: 401
      }
    }

    let expiryDate: Date | null;
    verificationType == "VERIFICATION" ? expiryDate = user.verificationExpiry
      : expiryDate = user.forgotPasswordTokenExpiry;

    if (!expiryDate) {
      return {
        success: false,
        error: "Data not found on database",
        status: 404
      }
    }

    if (expiryDate < new Date()) {
      return {
        success: false,
        error: "The token has expired",
        status: 403
      }
    }

    return {
      success: true,
      message: "Successfully verified token",
      user: user,
      status: 202
    }

  } catch (err: any) {
    return {
      success: false,
      error: err.message,
      status: 500
    }
  }
}
