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

export async function getNotification(notId: number) {
  try {
    const res = await prisma.notification.findFirst({
      where: {
        id: notId
      }
    })

    return {
      success: true,
      data: res
    }

  } catch (err: any) {
    return {
      success: false,
      error: err.message
    }
  }
}

export async function deleteNotification(notId: number) {
  try {
    await prisma.notification.delete({
      where: {
        id: notId
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


export async function hideNotificationAdmin(notId: number) {
  try {
    await prisma.notification.update({
      where: {
        id: notId
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

// BUG: This would not work as there are multiple user that share notification
// Check out mark notification read function for better implementation
export async function hideNotificationUser(notId: number) {
  try {
    await prisma.notification.update({
      where: {
        id: notId
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

export async function markNotificationRead(notId: number, userId: number) {
  try {
    const result = await prisma.$transaction(async (prisma) => {
      const response = await prisma.notification.findFirst({
        where: { id: notId }
      });

      if (!response) {
        throw {
          message: "Database error"
        }
      }

      await prisma.notification.update({
        where: {
          id: notId
        },
        data: {
          readBy: [...response.readBy, userId]
        }
      })

      return {
        success: true,
        error: null
      }
    })
    return result;
  } catch (err: any) {
    return {
      success: false,
      error: err.message
    }
  }

}
