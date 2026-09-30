import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { plan, amount } = await req.json();
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
      // 演示模拟环境
      return NextResponse.json({
        ok: true,
        mode: "mock",
        message: `Stripe secret key not configured. Mocking checkout for ${plan} ($${amount})`,
        url: null
      });
    }

    // 生产环境直接调用 Stripe Checkout API
    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${stripeKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "success_url": `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
        "cancel_url": `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/pricing`,
        "payment_method_types[0]": "card",
        "mode": "payment",
        "line_items[0][price_data][currency]": "usd",
        "line_items[0][price_data][product_data][name]": `${plan.toUpperCase()} Generation Pack`,
        "line_items[0][price_data][unit_amount]": `${Math.round(amount * 100)}`,
        "line_items[0][quantity]": "1",
      }),
    });

    const session = await response.json();
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
