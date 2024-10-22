import prisma from "@/db"

export async function insertMessage(message: string, receiver: number) {
  try {
    await prisma.message.create({
      data: {
        content: message,
        receiver: { connect: { id: receiver } }
      }
    })

    return {
      success: true,
    }
  } catch (err: any) {
    return {
      success: false,
      error: err.message
    }
  }
}

export async function insertNotification(message: string) {
  try {
    await prisma.notification.create({
      data: {
        content: message
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

export async function getAllMessage(id: number) {
  try {
    const data = prisma.person.findMany({
      where: {
        id
      },
      select: {
        messages_received: true
      }
    })

    return {
      success: true,
      data: data
    }

  } catch (err: any) {
    return {
      success: false,
      error: err.message
    }
  }
}

export async function getAllNotifications() {
  try {
    const data = prisma.notification.findMany()
    return {
      success: true,
      data: data
    }
  } catch (err: any) {
    return {
      success: false,
      error: err.message,
    }
  }
}
