import fs from "fs";
import path from "path";
import Link from "next/link";
import Hero from "@/components/Hero";
import { TeamData } from "@/types"; // Adjust path if needed
import InstagramFeed from "@/components/InstagramFeed";
import Image from "next/image";
export default async function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Split Hero */}
      <div className="flex flex-col md:flex-row min-h-[70vh]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-gray-50">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#3172AE] mb-6 leading-tight">
              Tufts Men's Ultimate.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Three teams. One brotherhood. Competing with pride, passion, and
              precision across the USA Ultimate college division since 1972.
            </p>
            <div className="flex gap-4">
              <Link
                href="/join"
                className="bg-[#3172AE] text-white px-6 py-3 font-semibold shadow-md hover:bg-blue-800 transition"
              >
                Prospective Players
              </Link>
              <Link
                href="/support"
                className="bg-white text-[#3172AE] border border-[#3172AE] px-6 py-3 font-semibold hover:bg-blue-50 transition"
              >
                Support Us
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-full">
          <Image
            src="/emen-hero.webp"
            alt="Tufts Emen Ultimate"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Program Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Teams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "E-Men",
              tier: "A-Team",
              desc: "The flagship squad. Competing nationally against top D-I programs.",
            },
            {
              name: "B-Men",
              tier: "B-Team",
              desc: "Regional competition and the proving ground for the future core.",
            },
            {
              name: "C-Men",
              tier: "Dev Squad",
              desc: "Dedicated to teaching fundamentals, competitive reps, and joy.",
            },
          ].map((team, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border-t-4 border-[#3172AE] shadow-lg flex flex-col"
            >
              <span className="text-[#3172AE] font-bold text-sm tracking-widest uppercase mb-2">
                {team.tier}
              </span>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                {team.name}
              </h3>
              <p className="text-gray-600 mb-8 flex-grow">{team.desc}</p>
              <Link
                href={`/roster/${team.name.toLowerCase().replace("-", "")}`}
                className="text-[#3172AE] font-bold hover:underline inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
