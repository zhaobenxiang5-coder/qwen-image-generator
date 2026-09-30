"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Zap, CheckCircle2, Shield, Flame, Globe } from "lucide-react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  // STAGE 控制: 1 = Landing Page 测点击, 2 = 引导登录, 3 = 引导付费/调用真实模型
  const stage = process.env.NEXT_PUBLIC_MVP_STAGE || "1";

  const handleAction = async () => {
    if (!prompt.trim()) {
      setStatus("Please enter a description or prompt first.");
      return;
    }

    // 埋点打点
    try {
      await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "click_generate", prompt, stage }),
      });
    } catch (e) {
      // ignore
    }

    if (stage === "1") {
      setStatus("🎉 High server demand! Free demo slots opening in 5 minutes. Leave your email or bookmark this page!");
    } else if (stage === "2") {
      setStatus("👉 Please sign in with Google to get 20 free generation credits.");
    } else {
      window.location.href = "/pricing";
    }
  };

  return (
    <main className="w-full flex flex-col items-center px-4 py-12 md:py-20 max-w-5xl mx-auto">
      {/* 顶部标签 */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs md:text-sm mb-6 animate-pulse">
        <Flame className="w-4 h-4 text-orange-400" />
        <span>Trending: #1 Fastest AI Online Generation Tool</span>
      </div>

      {/* 主标题 (SEO / GEO 关键 H1) */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-white mb-6">
        Free Online <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">AI Asset Generator</span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-10">
        Turn any idea into production-ready AI outputs in seconds. No complex local setup, no expensive GPU required.
      </p>

      {/* 核心交互区 (MVP 试用框) */}
      <div className="w-full max-w-2xl bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-xl mb-12">
        <div className="flex flex-col gap-3">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Enter your prompt or target keyword:
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. Ultra-realistic cinematic 8k portrait with volumetric lighting..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-gray-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[90px] resize-none"
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-yellow-400" /> 10 Free credits included
            </span>
            <button
              onClick={handleAction}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm px-6 py-2.5 rounded-xl shadow-lg transition-all transform active:scale-95"
            >
              <span>Generate Now</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>

        {status && (
          <div className="mt-4 p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-xs md:text-sm text-indigo-300 text-center">
            {status}
          </div>
        )}
      </div>

      {/* 信任与特性对比 (转化提升) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-16">
        <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col items-center text-center">
          <Zap className="w-8 h-8 text-indigo-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Blazing Fast</h3>
          <p className="text-xs text-gray-400">Cloud acceleration delivers results in under 5 seconds.</p>
        </div>
        <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col items-center text-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Highest Fidelity</h3>
          <p className="text-xs text-gray-400">Powered by the latest 2026 state-of-the-art vision models.</p>
        </div>
        <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col items-center text-center">
          <Shield className="w-8 h-8 text-purple-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Commercial License</h3>
          <p className="text-xs text-gray-400">Full intellectual property ownership for all outputs.</p>
        </div>
      </div>

      {/* FAQ 问答模块 (GEO 和 SEO 权重关键区) */}
      <div className="w-full max-w-3xl border-t border-zinc-800/80 pt-12">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <h4 className="text-sm font-semibold text-zinc-200 mb-1">How does the free online generator work?</h4>
            <p className="text-xs text-zinc-400">Simply enter your text prompt above and click Generate. Our API queues your task to high-throughput GPU clusters and streams the output directly back to your browser.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <h4 className="text-sm font-semibold text-zinc-200 mb-1">Can I use the generated content commercially?</h4>
            <p className="text-xs text-zinc-400">Yes! You maintain 100% commercial usage rights for all content produced on our platform.</p>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-xs text-zinc-600">
        © 2026 AI Fast Tool Inc. All rights reserved. Built for creators worldwide.
      </footer>
    </main>
  );
}
