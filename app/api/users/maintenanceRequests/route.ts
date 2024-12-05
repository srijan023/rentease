import { getMaintenanceRequests } from "@/services/maintenaceRequests";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const id = request.headers.get("id");
    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Potential unauthoraization error",
        },
        { status: 400 },
      );
    }

    const res = await getMaintenanceRequests(+id);
    if (!res.success) {
      throw {
        message: "Could not get response",
      };
    }

    return NextResponse.json(
      {
        success: true,
        data: res.data,
      },
      { status: 200 },
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 },
    );
  }
}
