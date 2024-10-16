import { setVerified } from "@/services/updateVerificationTokens";
import { validateVerificationToken } from "@/utils/validateEmailTokens";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { token: string[] } }) {
  try {
    const response = await validateVerificationToken(params.token[0], "VERIFICATION")

    if (!response.success) {
      return NextResponse.json({
        error: response.error
      }, { status: response.status })
    }

    if (!response.user?.id) {
      throw {
        message: "Unexpected Error on user validation"
      };
    }

    const id = response.user.id

    const databaseResponse = await setVerified(id);

    if (!databaseResponse.success) {
      return NextResponse.json({
        error: databaseResponse.error
      }, { status: databaseResponse.status })
    }

    return NextResponse.redirect('http://localhost:3000/', { status: 302 });

  } catch (err: any) {
    return NextResponse.json({
      error: err.message
    }, { status: 500 })
  }
}
