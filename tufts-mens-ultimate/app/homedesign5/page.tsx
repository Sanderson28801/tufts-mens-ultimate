import fs from "fs";
import path from "path";
import Link from "next/link";
import Hero from "@/components/Hero";
import { TeamData } from "@/types"; // Adjust path if needed
import InstagramFeed from "@/components/InstagramFeed";
import Image from "next/image";

export default async function HomePage() {
  // ... keep your data fetching here ...

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* Hero */}
      <div className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/emen-hero.webp"
          alt="Tufts Emen Ultimate"
          fill
          priority
          className="object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 flex flex-col items-center mt-20">
          <span className="text-tufts-blue-bright font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            Tufts University
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
            Men's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-tufts-blue-bright">
              Ultimate
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-10">
            Competing at the highest levels of the USA Ultimate college
            division.
          </p>
          <div className="flex gap-4">
            <Link
              href="/join"
              className="bg-tufts-blue-bright text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform"
            >
              Join the Squad
            </Link>
          </div>
        </div>
      </div>

      {/* Program Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 relative z-20 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* A-Team */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-4xl font-black uppercase text-white">
                E-Men
              </h3>
              <span className="text-xs font-bold text-tufts-blue-bright border border-tufts-blue-bright px-2 py-1 rounded">
                A-TEAM
              </span>
            </div>
            <p className="text-slate-400 mb-8">
              The flagship squad. Competing nationally against the top D-I
              programs.
            </p>
            <Link
              href="/roster/emen"
              className="text-tufts-blue-bright hover:text-white font-bold flex items-center gap-2 group"
            >
              View Roster{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* B-Team */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-4xl font-black uppercase text-white">
                B-Men
              </h3>
              <span className="text-xs font-bold text-slate-400 border border-slate-600 px-2 py-1 rounded">
                B-TEAM
              </span>
            </div>
            <p className="text-slate-400 mb-8">
              Fierce regional competition and the proving ground for the future
              core.
            </p>
            <Link
              href="/roster/bmen"
              className="text-white hover:text-tufts-blue-bright font-bold flex items-center gap-2 group"
            >
              View Roster{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* C-Team */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-4xl font-black uppercase text-white">
                C-Men
              </h3>
              <span className="text-xs font-bold text-slate-400 border border-slate-600 px-2 py-1 rounded">
                DEV SQUAD
              </span>
            </div>
            <p className="text-slate-400 mb-8">
              Dedicated to teaching fundamentals, competitive reps, and the joy
              of the game.
            </p>
            <Link
              href="/join"
              className="text-white hover:text-tufts-blue-bright font-bold flex items-center gap-2 group"
            >
              Join Program{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
