"use client";

import HomeCard from "@/components/quiz/HomeCard";
import { useGlobalContext } from "@/context/globalContext";
import { ICategory } from "@/types/types";
import Link from "next/link";

export const dynamic = "force-dynamic";

const stats = [
  { value: "13", label: "Quiz Categories" },
  { value: "132+", label: "Questions" },
  { value: "100%", label: "Free to Play" },
];

export default function Home() {
  const { categories, loading } = useGlobalContext();

  return (
    <div className="space-y-12">

      {/* ── Hero ── */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-indigo-100 bg-gradient-to-br from-indigo-50 via-purple-50 to-white px-10 py-12">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-indigo-100 opacity-30 translate-x-24 -translate-y-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-purple-100 opacity-30 -translate-x-16 translate-y-16 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              OptimumP2P Testnet Live
            </span>

            <h1 className="text-5xl font-black text-gray-900 leading-tight">
              Optimum<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
                Quiz Hub
              </span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Test your knowledge of RLNC, Flexnodes, validator economics,
              post-quantum security, and everything Optimum — the Universal
              Data Acceleration Network.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/learn"
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm
                  hover:bg-indigo-700 transition-colors shadow-[0_.3rem_0_0_rgba(99,102,241,0.4)]">
                Learn How It Works →
              </Link>
              <a href="https://www.youtube.com/@getoptimum" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white border-2 border-gray-200 text-gray-700 font-bold text-sm
                  hover:border-red-400 hover:text-red-500 transition-colors flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-red-500"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Hero logo — silver blob */}
          <div className="shrink-0 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Optimum"
              className="w-44 h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="border-2 rounded-2xl p-4 text-center bg-white shadow-[0_.2rem_0_0_rgba(0,0,0,0.06)]">
            <p className="text-3xl font-black text-indigo-600">{s.value}</p>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Category grid ── */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-gray-800">Quiz Categories</h2>
            <p className="text-gray-400 text-sm mt-0.5">Pick a topic and start testing your knowledge</p>
          </div>
          <span className="text-xs font-bold text-indigo-500 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
            {loading ? "..." : `${categories.length} categories`}
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-56 rounded-2xl bg-gray-100 animate-pulse border-2" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {categories.map((category: ICategory) => (
              <HomeCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>

      {/* ── Learn CTA ── */}
      <div className="rounded-2xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-black text-gray-800 mb-1">New to Optimum?</h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            Read our step-by-step explainer on how RLNC works, what OptimumP2P does,
            and why latency is literally money on Ethereum.
          </p>
        </div>
        <Link href="/learn"
          className="shrink-0 px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold
            hover:bg-indigo-700 transition-colors shadow-[0_.3rem_0_0_rgba(99,102,241,0.4)]">
          Go to Learn →
        </Link>
      </div>

    </div>
  );
}
