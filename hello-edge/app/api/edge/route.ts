import { NextResponse } from "next/server";

export const runtime = 'edge'

export async function GET() {
  // purposefully delay the response by 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(
    { name: "Hello from Edge Runtime" },
    { status: 200 }
  );
}
