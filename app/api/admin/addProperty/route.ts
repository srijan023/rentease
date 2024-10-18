import { insertPropertyInfo } from "@/services/insertToDB";
import { validatePropertyData } from "@/validations/propertyValidation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const reqData = await request.json();

  try {
    const isValidData = validatePropertyData(reqData);

    if (!isValidData.success) {
      return NextResponse.json({
        error: `Data format is not valid, ${isValidData.error}`
      }, { status: 400 })
    }

    const databaseResponse = await insertPropertyInfo(reqData);

    if (!databaseResponse.success) {
      throw {
        message: `Database rejected the insertion, ${databaseResponse.error}`
      }
    }

    return NextResponse.json({
      message: "Successfully inserted property info to the database",
    }, { status: 201 })

  } catch (err: any) {
    return NextResponse.json({
      error: err.message
    }, { status: 500 })
  }
}
