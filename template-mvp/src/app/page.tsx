"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Zap, CheckCircle2, Shield, Flame, Wand2, Image as ImageIcon, BarChart3 } from "lucide-react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Photorealistic");
  const [status, setStatus] = useState<string | null>(null);
  const [stats, setStats] = useState<{ totalVisits: number; generateClicks: number }>({ totalVisits: 0, generateClicks: 0 });

  const stage = process.env.NEXT_PUBLIC_MVP_STAGE || "1";

  // 读取本地访问与点击指标
  useEffect(() => {
    try {
      const v = parseInt(localStorage.getItem("mvp_visits") || "0", 10) + 1;
      localStorage.setItem("mvp_visits", v.toString());
      const c = parseInt(localStorage.getItem("mvp_clicks") || "0", 10);
      setStats({ totalVisits: v, generateClicks: c });
    } catch (e) {}
  }, []);

  const handleAction = async () => {
    if (!prompt.trim()) {
      setStatus("Please enter an image description or prompt first.");
      return;
    }

    // 本地及服务端统计
    try {
      const newClicks = stats.generateClicks + 1;
      localStorage.setItem("mvp_clicks", newClicks.toString());
      setStats((prev) => ({ ...prev, generateClicks: newClicks }));

      await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "click_generate", prompt, style, stage }),
      });
    } catch (e) {}

    if (stage === "1") {
      setStatus("🎉 High server demand! Free Qwen 2.1 GPU slots are queueing. Bookmark this page or check back in 10 minutes!");
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
        <span>Latest Release: Qwen Image 2.1 Architecture Live</span>
      </div>

      {/* 主标题 (SEO / GEO 关键 H1) */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-white mb-6">
        Free Online <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">Qwen Image 2.1 Generator</span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-10">
        Experience photorealistic text-to-image and inpainting with Qwen Image 2.1. Zero local hardware setup required.
      </p>

      {/* 核心交互区 (MVP 试用框) */}
      <div className="w-full max-w-2xl bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-xl mb-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Prompt:
            </label>
            <div className="flex gap-2 text-xs">
              {["Photorealistic", "Anime", "Cyberpunk", "Cinematic"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`px-2 py-0.5 rounded-md transition-colors ${
                    style === s ? "bg-indigo-600 text-white" : "bg-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. A futuristic cybernetic tiger prowling in neon rain, hyper-detailed, 8k resolution, volumetric light..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-gray-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[90px] resize-none"
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-yellow-400" /> 10 Free Qwen 2.1 GPU credits included
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

        {/* 极简实时指标监控窗 */}
        <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
          <span className="flex items-center gap-1">
            <BarChart3 className="w-3 h-3 text-indigo-400" /> Live Interaction Tracker
          </span>
          <div className="flex gap-4">
            <span>Visits: <strong className="text-zinc-300">{stats.totalVisits}</strong></span>
            <span>Generations: <strong className="text-indigo-400">{stats.generateClicks}</strong></span>
          </div>
        </div>
      </div>

      {/* 特性对比 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-16">
        <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col items-center text-center">
          <Zap className="w-8 h-8 text-indigo-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">6-Step Lightning Speed</h3>
          <p className="text-xs text-gray-400">Optimized turbo sampling delivers full 1024x1024 images in under 4 seconds.</p>
        </div>
        <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col items-center text-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Superior Text & Anatomy</h3>
          <p className="text-xs text-gray-400">Flawless rendering of embedded typography, natural hands, and detailed eyes.</p>
        </div>
        <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col items-center text-center">
          <Shield className="w-8 h-8 text-purple-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Full Commercial License</h3>
          <p className="text-xs text-gray-400">Own all outputs 100% royalty-free for commercial client projects and games.</p>
        </div>
      </div>

      {/* FAQ 问答模块 */}
      <div className="w-full max-w-3xl border-t border-zinc-800/80 pt-12">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Frequently Asked Questions about Qwen Image 2.1</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <h4 className="text-sm font-semibold text-zinc-200 mb-1">What makes Qwen Image 2.1 different from other models?</h4>
            <p className="text-xs text-zinc-400">Qwen Image 2.1 integrates advanced multi-modal vision-language pretraining, excelling at rendering readable text inside images and complex spatial compositions with extreme prompt fidelity.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <h4 className="text-sm font-semibold text-zinc-200 mb-1">How can I generate images online without an RTX 4090?</h4>
            <p className="text-xs text-zinc-400">You don't need expensive local GPU clusters. Our cloud inference layer distributes jobs to high-speed enterprise servers and returns results directly in your browser.</p>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-xs text-zinc-600">
        © 2026 Qwen Image 2.1 Studio. All rights reserved. Built for global creators and designers.
      </footer>
    </main>
  );
}
