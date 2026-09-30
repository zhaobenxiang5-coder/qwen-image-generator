"use client";

import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  const handleCheckout = async (plan: string, amount: number) => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, amount }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Demo checkout triggered for plan: " + plan + " ($" + amount + ")");
      }
    } catch (e) {
      alert("Checkout error: " + e);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-zinc-400 text-sm md:text-base">
          Choose the plan that fits your creative workflow. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Starter Plan - 完全对标蒋云何的 $9.90 首单方案 */}
        <div className="rounded-2xl border-2 border-indigo-500 bg-zinc-900/80 p-8 flex flex-col justify-between relative shadow-2xl">
          <div className="absolute -top-3.5 right-6 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold rounded-full">
            MOST POPULAR
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Creator Pack</h3>
            <p className="text-xs text-zinc-400 mb-6">Perfect for individual creators and testing.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">$9.90</span>
              <span className="text-xs text-zinc-400">/ one-time</span>
            </div>
            <ul className="space-y-3 text-xs text-zinc-300 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" /> 1,000 Generation Credits
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" /> Fast GPU Priority Queue
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" /> Commercial Usage Allowed
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" /> Full Resolution Downloads
              </li>
            </ul>
          </div>
          <button
            onClick={() => handleCheckout("starter_pack", 9.90)}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg"
          >
            Get Started Now
          </button>
        </div>

        {/* Pro Plan */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Pro Unlimited</h3>
            <p className="text-xs text-zinc-400 mb-6">For power users and commercial agencies.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">$29.90</span>
              <span className="text-xs text-zinc-400">/ month</span>
            </div>
            <ul className="space-y-3 text-xs text-zinc-300 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" /> Unlimited Standard Generations
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" /> Top Priority Tier-1 GPU Speed
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" /> Private Output Storage
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" /> 24/7 Dedicated Support
              </li>
            </ul>
          </div>
          <button
            onClick={() => handleCheckout("pro_monthly", 29.90)}
            className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-sm transition-all"
          >
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );
}
