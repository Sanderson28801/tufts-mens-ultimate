import fs from "fs";
import path from "path";
import Link from "next/link";
import Hero from "@/components/Hero";
import { TeamData } from "@/types"; // Adjust path if needed
import InstagramFeed from "@/components/InstagramFeed";
import Image from "next/image";

export default async function HomePage() {
  // ... keep your getTeamData logic here ...

  return (
    <main className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Banner Hero */}
      <div className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/emen-hero.webp"
            alt="Tufts Ultimate in Action"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col items-start">
          <span className="bg-emerald-800/80 backdrop-blur-sm text-emerald-100 px-3 py-1 rounded text-xs font-mono uppercase tracking-widest mb-4">
            Program Field Guide /// 2026 Season
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 max-w-3xl">
            Your Journey in Tufts Ultimate Starts Here.
          </h1>
          <p className="text-lg sm:text-xl text-stone-300 max-w-2xl mb-8 leading-relaxed">
            A structured pathway from foundational skill-building to Division-I
            national competition.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/join"
              className="bg-[#3172AE] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold text-sm transition-colors"
            >
              Join the Program
            </Link>
            <Link
              href="/support"
              className="bg-stone-800/80 hover:bg-stone-800 text-stone-200 border border-stone-700 px-6 py-3 rounded-md font-semibold text-sm transition-colors"
            >
              Support Us
            </Link>
          </div>
        </div>
      </div>

      {/* Program Breakdown Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs font-mono text-[#3172AE] uppercase tracking-wider">
              Field Notes
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mt-1">
              Three Teams, One Standard
            </h2>
          </div>
          <p className="text-stone-600 text-sm max-w-md mt-2 md:mt-0">
            Each team within our program offers a distinct level of commitment,
            competition, and tactical development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* E-Men Card */}
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="p-6 border-b border-stone-100 bg-stone-50/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono uppercase font-bold text-[#3172AE] bg-blue-50 px-2 py-0.5 rounded">
                  Tier 01
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  D-I College
                </span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900">E-Men</h3>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                The flagship squad competing at national tournaments against the
                top Division-I teams in USA Ultimate.
              </p>
              <div className="bg-stone-50 p-4 rounded-lg mb-6 border border-stone-100">
                <div className="text-xs font-mono text-stone-500 uppercase">
                  Season Objective
                </div>
                <div className="text-sm font-semibold text-stone-800 mt-1">
                  USA Ultimate Nationals Qualification
                </div>
              </div>
              <Link
                href="/roster/emen"
                className="text-sm font-bold text-[#3172AE] hover:underline flex items-center justify-between"
              >
                <span>View Full Roster</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* B-Men Card */}
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="p-6 border-b border-stone-100 bg-stone-50/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono uppercase font-bold text-stone-600 bg-stone-200/60 px-2 py-0.5 rounded">
                  Tier 02
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  Regional
                </span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900">B-Men</h3>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Fierce regional competition and the primary tactical proving
                ground for developing high-level talent.
              </p>
              <div className="bg-stone-50 p-4 rounded-lg mb-6 border border-stone-100">
                <div className="text-xs font-mono text-stone-500 uppercase">
                  Season Objective
                </div>
                <div className="text-sm font-semibold text-stone-800 mt-1">
                  Regional Championship Bracket
                </div>
              </div>
              <Link
                href="/roster/bmen"
                className="text-sm font-bold text-stone-700 hover:underline flex items-center justify-between"
              >
                <span>View Full Roster</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* C-Men Card */}
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="p-6 border-b border-stone-100 bg-stone-50/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Tier 03
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  Development
                </span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900">C-Men</h3>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Dedicated to teaching core mechanics, game sense, team culture,
                and providing extensive field reps.
              </p>
              <div className="bg-stone-50 p-4 rounded-lg mb-6 border border-stone-100">
                <div className="text-xs font-mono text-stone-500 uppercase">
                  Season Objective
                </div>
                <div className="text-sm font-semibold text-stone-800 mt-1">
                  Player Mastery & Growth
                </div>
              </div>
              <Link
                href="/join"
                className="text-sm font-bold text-stone-700 hover:underline flex items-center justify-between"
              >
                <span>Get Involved</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
