import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("[MVP Analytics Track]:", new Date().toISOString(), data);
    // 可以在此对接 PostHog, Umami, Plausible 或写入轻量数据库
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
