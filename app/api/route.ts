import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: false,
    users: ["Meet", "Rahul", "Amit"],
  });
}
