import prisma from "@/db";
export async function insertMaintenanceRequest(
  requestInfo: any,
  property_id: number,
  user_id: number,
) {
  try {
    const insertionResponse = await prisma.maintenance.create({
      data: {
        ...requestInfo,
        property: { connect: { id: property_id } },
        person: { connect: { id: user_id } },
      },
    });

    if (!insertionResponse.id) {
      return {
        success: false,
        error: "Error while inserting into the database",
        status: 500,
      };
    }
    return {
      success: true,
      message: "Data inserted to database successfully",
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message,
      status: 500,
    };
  }
}

export async function getAllMaintenance() {
  try {
    const response = await prisma.maintenance.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        type: true,
        urgency: true,
      },
    });
    return {
      success: true,
      data: response,
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message,
      status: 500,
    };
  }
}

export async function getMaintenanceRequests(id: number) {
  try {
    const response = await prisma.person.findMany({
      where: { id },
      select: {
        maintenance_requests: {
          select: {
            id: true,
            request_date: true,
            type: true,
            title: true,
            description: true,
            status: true,
            urgency: true,
          },
        },
      },
    });
    return {
      success: true,
      data: response,
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message,
      status: 500,
    };
  }
}
