import { NextResponse } from "next/server";

export async function GET() {
  // purposefully delay the response by 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(
    { name: "Hello from Node Runtime" },
    { status: 200 }
  );
}
