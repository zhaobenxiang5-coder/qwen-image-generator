"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowLeft, ShieldCheck, Zap, Lock, CreditCard } from "lucide-react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckoutClick = (plan: string, amount: number) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handlePay = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address to receive your generation license key.");
      return;
    }
    setIsProcessing(true);
    // 这里可以直接集成 LemonSqueezy 纯静态外链或 Stripe Payment Link
    setTimeout(() => {
      setIsProcessing(false);
      alert(`🎉 [Checkout Demo Successful!]\nOrder initialized for ${selectedPlan} ($9.90).\nA confirmation link will be delivered to: ${email}`);
      setShowModal(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs md:text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Generator
        </Link>
      </div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs mb-4">
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
          <span>Launch Special: 50% Off First Pack</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Upgrade to Qwen 2.1 Fast Lane
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
          Skip queues, unlock commercial rights, and render photorealistic ultra-detailed images in under 4 seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Starter Pack - 对标蒋云何 $9.90 套餐 */}
        <div className="rounded-2xl border-2 border-indigo-500 bg-zinc-900/90 p-6 md:p-8 flex flex-col justify-between relative shadow-2xl backdrop-blur-sm">
          <div className="absolute -top-3.5 right-6 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[11px] font-bold rounded-full">
            MOST POPULAR
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Creator Pack</h3>
            <p className="text-xs text-zinc-400 mb-6">Designed for solo creators & prototyping.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">$9.90</span>
              <span className="text-xs text-zinc-400">/ one-time</span>
            </div>
            <ul className="space-y-3 text-xs text-zinc-300 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 1,000 Generation Credits (1 credit/image)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Instant Cloud Priority GPU Queue
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Full Commercial Rights Included
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Up to 2048x2048 Ultra-HD Upscaling
              </li>
            </ul>
          </div>
          <button
            onClick={() => handleCheckoutClick("Creator Pack ($9.90)", 9.90)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 transform active:scale-95"
          >
            <CreditCard className="w-4 h-4" /> Get Started ($9.90)
          </button>
        </div>

        {/* Pro Monthly */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Pro Unlimited</h3>
            <p className="text-xs text-zinc-400 mb-6">For commercial studios & power designers.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">$29.90</span>
              <span className="text-xs text-zinc-400">/ month</span>
            </div>
            <ul className="space-y-3 text-xs text-zinc-300 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Unlimited Standard Speed Generations
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Dedicated Enterprise GPU Cluster
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Concurrent Parallel Requests (5x)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> VIP 24/7 Priority Discord Support
              </li>
            </ul>
          </div>
          <button
            onClick={() => handleCheckoutClick("Pro Monthly ($29.90)", 29.90)}
            className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <CreditCard className="w-4 h-4" /> Subscribe ($29.90/mo)
          </button>
        </div>
      </div>

      {/* 结算支付模态框 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <h3 className="text-lg font-bold text-white mb-2">Secure Global Checkout</h3>
            <p className="text-xs text-zinc-400 mb-4">
              Enter your email to receive your account generation key and invoice.
            </p>
            <div className="space-y-3 mb-6">
              <div>
                <label className="text-xs text-zinc-400 block mb-1">Your Delivery Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 flex justify-between items-center text-xs">
                <span className="text-zinc-400">Total Due Today:</span>
                <span className="font-bold text-white text-sm">$9.90 USD</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 text-xs font-semibold hover:bg-zinc-800"
              >
                Cancel
              </button>
              <button
                onClick={handlePay}
                disabled={isProcessing}
                className="flex-1 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg flex items-center justify-center gap-1.5"
              >
                {isProcessing ? "Processing..." : "Pay with Card / PayPal"}
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-1 text-[10px] text-zinc-500">
              <Lock className="w-3 h-3 text-emerald-500" />
              <span>256-Bit SSL Encrypted & Stripe Secured</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-16 text-center text-xs text-zinc-500 flex items-center justify-center gap-4">
        <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 7-Day Money Back Guarantee</span>
        <span>•</span>
        <span>Cancel Anytime</span>
        <span>•</span>
        <span>Global Card & Apple Pay Supported</span>
      </div>
    </div>
  );
}
