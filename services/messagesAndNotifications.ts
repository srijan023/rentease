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
    const data = await prisma.person.findMany({
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
    const data = await prisma.notification.findMany()
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

export async function getMessage(messageId: number) {
  try {
    const data = await prisma.message.findFirst({
      where: {
        id: messageId
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

export async function deleteMessage(messageId: number) {
  try {
    await prisma.message.delete({
      where: {
        id: messageId
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

export async function markRead(messageId: number) {
  try {
    await prisma.message.update({
      where: {
        id: messageId
      },
      data: {
        read: true
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

export async function hideMessageUser(messageId: number) {
  try {
    await prisma.message.update({
      where: {
        id: messageId
      },
      data: {
        deleteFromUser: true
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

export async function hideMessageAdmin(messageId: number) {
  try {
    await prisma.message.update({
      where: {
        id: messageId
      },
      data: {
        deleteFromAdmin: true
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

export async function updateMessageContent(messageId: number, content: string) {
  try {
    await prisma.message.update({
      where: {
        id: messageId
      },
      data: {
        content: content,
        edited: true
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
