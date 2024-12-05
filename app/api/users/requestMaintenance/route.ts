import { validateUserOwnership } from "@/helpers/validatingUsers";
import { insertMaintenanceRequest } from "@/services/maintenaceRequests";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const id = request.headers.get("id");
    const { property_id, ...requestInfo } = reqBody;

    if (!id || !property_id) {
      return NextResponse.json(
        {
          success: false,
          error: "Id needs to be provided for user and property",
        },
        { status: 400 },
      );
    }

    const userValidation = await validateUserOwnership(
      parseInt(id),
      parseInt(property_id),
    );
    if (!userValidation.success) {
      return NextResponse.json(
        {
          error: userValidation.error,
          success: false,
        },
        { status: userValidation.status },
      );
    }

    const databaseResponse = await insertMaintenanceRequest(
      requestInfo,
      parseInt(property_id),
      parseInt(id),
    );
    if (!databaseResponse.success) {
      return NextResponse.json(
        {
          error: databaseResponse.error,
          success: false,
        },
        { status: databaseResponse.status },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: databaseResponse.message,
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
