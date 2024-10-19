import { getAllMaintenance } from "@/services/maintenaceRequests";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const maintenanceData = await getAllMaintenance();
    if (!maintenanceData.success) {
      throw {
        message: maintenanceData.error
      }
    }

    return NextResponse.json({
      success: true,
      data: maintenanceData.data
    }, { status: 200 })

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 })
  }
}
