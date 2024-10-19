import { findUserDetailsFromId } from "@/services/findUserFromDB";

export async function validateUserOwnership(id: number, propertyId: number) {
  try {
    const userInfo = await findUserDetailsFromId(id);

    if (!userInfo.success) {
      return userInfo
    }

    if (!userInfo.data) {
      throw {
        message: "Unexpected error"
      }
    }

    if (!userInfo.data.is_active_tenant) {
      return {
        status: 400,
        error: "The user is not an active tenant",
        success: false
      }
    }

    const properties = userInfo.data.property_rented.map(property => property.id)

    if (!properties.includes(propertyId)) {
      return {
        success: false,
        status: 404,
        message: "The property is not owned by the user"
      }
    }

    return {
      success: true,
      status: 200,
      message: "User is an active tenant"
    }

  } catch (err: any) {
    return {
      success: false,
      error: err.message,
      status: 500
    }
  }

}
