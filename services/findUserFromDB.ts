import prisma from "@/db";

export async function findExistingUser(email: string) {
  const res = await prisma.person.findFirst({
    where: {
      email,
    },
  });

  if (!res) {
    return {
      success: false,
    };
  }

  return {
    success: true,
    user: res,
  };
}

export async function findUserDetailsFromId(id: number) {
  const res = await prisma.person.findFirst({
    where: { id },
    select: {
      name: true,
      email: true,
      backup_email: true,
      contact: true,
      dob: true,
      ssn: true,
      no_ssn_reason: true,
      is_US_citizen: true,
      drivers_license: true,
      state_id: true,
      passport: true,
      visa: true,
      is_International_student: true,
      i_20: true,
      emergency_contact: {
        select: {
          name: true,
          email: true,
          contact: true,
          state: true,
          region: true,
          sub_division: true,
        },
      },
      prev_landlord: {
        select: {
          name: true,
          email: true,
          contact: true,
          state: true,
          region: true,
          sub_division: true,
        },
      },
      no_residence_detail: true,
      is_active_tenant: true,
      property_rented: {
        select: {
          id: true
        }
      }
    },
  });

  if (!res) {
    return {
      success: false,
      error: "No user with that id exists",
      status: 404
    };
  }

  return {
    success: true,
    data: res,
  };
}

export async function getAllUsers() {
  try {
    const data = await prisma.person.findMany({
      select: {
        id: true,
        name: true,
        contact: true,
        email: true,
        is_active_tenant: true,
        property_rented: {
          select: {
            name: true
          }
        }
      }
    })

    return {
      success: true,
      data
    }

  } catch (err: any) {
    return {
      success: false,
      error: err.message,
      status: 500
    }
  }
}
