import { NextResponse } from "next/server";

export async function GET({ params }: { params: { token: string } }) {
  console.log(params.token[0])
  try {
  } catch (err: any) {
    NextResponse.json({
      error: err.message
    }, { status: 500 })
  }
}
