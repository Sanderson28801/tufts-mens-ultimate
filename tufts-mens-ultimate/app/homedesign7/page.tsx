import fs from "fs";
import path from "path";
import Link from "next/link";
import Hero from "@/components/Hero";
import { TeamData } from "@/types"; // Adjust path if needed
import InstagramFeed from "@/components/InstagramFeed";
import Image from "next/image";

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 font-sans">
      {/* Confident Blue Block Hero */}
      <div className="bg-[#0f2e4a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <p className="text-blue-300 font-semibold tracking-widest uppercase mb-4 text-sm">
              Tufts University Athletics
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Men's <br /> Ultimate Program.
            </h1>
            <p className="text-xl text-blue-100 max-w-lg mb-10 border-l-4 border-[#3172AE] pl-4">
              Three tiers of competition. One standard of excellence. Competing
              at the highest levels of the USA Ultimate college division.
            </p>
            <Link
              href="/join"
              className="bg-white text-[#0f2e4a] px-8 py-4 font-bold rounded hover:bg-gray-100 transition-colors inline-block"
            >
              Prospective Athletes
            </Link>
          </div>
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] w-full shadow-2xl rounded-sm overflow-hidden">
            <Image
              src="/emen-hero.webp"
              alt="Action Shot"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Direct Program Cards (Pulling up into the blue slightly) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 shadow-lg border-t-8 border-[#3172AE]">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">E-Men</h3>
            <p className="text-sm font-bold text-[#3172AE] uppercase tracking-wide mb-4">
              Division I Nationals
            </p>
            <p className="text-gray-600 mb-8 h-20">
              The flagship squad. Representing Tufts against the elite programs
              across the country.
            </p>
            <Link
              href="/roster/emen"
              className="inline-flex items-center text-[#0f2e4a] font-bold group"
            >
              View Roster{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          <div className="bg-white p-8 shadow-lg border-t-8 border-gray-400">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">B-Men</h3>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
              Regional Circuit
            </p>
            <p className="text-gray-600 mb-8 h-20">
              Fierce regional competition and the proving ground for the
              program's future core.
            </p>
            <Link
              href="/roster/bmen"
              className="inline-flex items-center text-gray-600 font-bold group"
            >
              View Roster{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          <div className="bg-white p-8 shadow-lg border-t-8 border-gray-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">C-Men</h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">
              Development Squad
            </p>
            <p className="text-gray-600 mb-8 h-20">
              Dedicated to teaching fundamentals, competitive reps, and the joy
              of the game.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center text-gray-600 font-bold group"
            >
              Join Program{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
