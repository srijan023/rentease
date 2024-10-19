import { assignPropertyToTenant } from "@/services/propertyManagement";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  try {
    const { userId, propertyId } = await request.json()

    if (!userId || !propertyId) {
      return NextResponse.json({
        success: false,
        error: "User Id and Property Id needs to be provided"
      }, { status: 400 })
    }

    const response = await assignPropertyToTenant(parseInt(userId), parseInt(propertyId));
    if (!response.success) {
      throw {
        message: response.error
      }
    }

    return NextResponse.json({
      success: true,
      message: response.message
    }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 })
  }
}
