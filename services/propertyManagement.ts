import prisma from "@/db"
export async function assignPropertyToTenant(tenant_id: number, property_id: number) {
  try {

    await prisma.$transaction(async (prisma) => {
      await prisma.property.update({
        where: {
          id: property_id
        },
        data: {
          leased_by: { connect: { id: tenant_id } }
        }
      })

      await prisma.person.update({
        where: {
          id: tenant_id
        },
        data: {
          is_active_tenant: true
        }

      })
    })

    return {
      success: true,
      message: "Assigned property to the user",
      status: 200
    }
  } catch (err: any) {
    return {
      success: false,
      error: err.message,
      status: 500
    }
  }

}
