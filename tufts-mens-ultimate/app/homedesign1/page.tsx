import fs from "fs";
import path from "path";
import Link from "next/link";
import Hero from "@/components/Hero";
import { TeamData } from "@/types"; // Adjust path if needed
import InstagramFeed from "@/components/InstagramFeed";
import Image from "next/image";

export default async function HomePage() {
  // ... data fetching ...

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      {/* Playbook Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 border-b border-slate-200">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Tufts Men's Ultimate
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              A legacy of integrity, strategic growth, and elite competition. We
              are three teams operating as one unified program.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="/join"
                className="bg-[#3172AE] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-blue-800 transition-colors"
              >
                Prospective Players
              </Link>
              <Link
                href="/schedule"
                className="bg-slate-100 text-slate-700 px-6 py-3 rounded text-sm font-semibold hover:bg-slate-200 transition-colors"
              >
                View Schedule
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[400px] rounded-lg overflow-hidden bg-slate-100">
            <Image
              src="/emen-hero.webp"
              alt="Tufts Ultimate Huddle"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Structured Program Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Program Structure
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* E-Men Column */}
          <div className="border border-slate-200 rounded-lg p-6 hover:border-[#3172AE] transition-colors">
            <div className="border-b-2 border-[#3172AE] pb-4 mb-4 flex justify-between items-end">
              <h3 className="text-2xl font-bold text-slate-900">E-Men</h3>
              <span className="text-xs font-semibold text-[#3172AE] uppercase tracking-wider">
                A-Team
              </span>
            </div>
            <ul className="space-y-4 text-sm text-slate-600 mb-8">
              <li className="flex gap-2">
                <span className="font-semibold text-slate-900 w-24 shrink-0">
                  Focus:
                </span>
                <span>Elite D-I National competition.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-slate-900 w-24 shrink-0">
                  Commitment:
                </span>
                <span>High. 3-4 practices/week + travel tournaments.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-slate-900 w-24 shrink-0">
                  Roster:
                </span>
                <span>Selected via fall tryouts.</span>
              </li>
            </ul>
            <Link
              href="/roster/emen"
              className="text-[#3172AE] text-sm font-bold hover:underline"
            >
              View E-Men Roster &rarr;
            </Link>
          </div>

          {/* B-Men Column */}
          <div className="border border-slate-200 rounded-lg p-6 hover:border-slate-400 transition-colors">
            <div className="border-b-2 border-slate-300 pb-4 mb-4 flex justify-between items-end">
              <h3 className="text-2xl font-bold text-slate-900">B-Men</h3>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                B-Team
              </span>
            </div>
            <ul className="space-y-4 text-sm text-slate-600 mb-8">
              <li className="flex gap-2">
                <span className="font-semibold text-slate-900 w-24 shrink-0">
                  Focus:
                </span>
                <span>Fierce regional competition & core development.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-slate-900 w-24 shrink-0">
                  Commitment:
                </span>
                <span>Medium-High. Regular practices & regional travel.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-slate-900 w-24 shrink-0">
                  Roster:
                </span>
                <span>Competitive selection.</span>
              </li>
            </ul>
            <Link
              href="/roster/bmen"
              className="text-slate-700 text-sm font-bold hover:underline"
            >
              View B-Men Roster &rarr;
            </Link>
          </div>

          {/* C-Men Column */}
          <div className="border border-slate-200 rounded-lg p-6 hover:border-slate-400 transition-colors bg-slate-50">
            <div className="border-b-2 border-slate-300 pb-4 mb-4 flex justify-between items-end">
              <h3 className="text-2xl font-bold text-slate-900">C-Men</h3>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Dev Squad
              </span>
            </div>
            <ul className="space-y-4 text-sm text-slate-600 mb-8">
              <li className="flex gap-2">
                <span className="font-semibold text-slate-900 w-24 shrink-0">
                  Focus:
                </span>
                <span>
                  Fundamentals, competitive reps, and the joy of the game.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-slate-900 w-24 shrink-0">
                  Commitment:
                </span>
                <span>Flexible. Focused on learning.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-slate-900 w-24 shrink-0">
                  Roster:
                </span>
                <span>Open to all skill levels.</span>
              </li>
            </ul>
            <Link
              href="/join"
              className="text-slate-700 text-sm font-bold hover:underline"
            >
              Get Involved &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
