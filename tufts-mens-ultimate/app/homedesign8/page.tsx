import fs from "fs";
import path from "path";
import Link from "next/link";
import Hero from "@/components/Hero";
import { TeamData } from "@/types"; // Adjust path if needed
import InstagramFeed from "@/components/InstagramFeed";
import Image from "next/image";

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C]">
      {/* Editorial Hero */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 border-b border-gray-300">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="font-sans text-sm font-bold tracking-[0.2em] text-[#3172AE] uppercase mb-6">
            Tufts University
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-gray-900 leading-tight mb-8">
            Excellence on the field.
            <br />
            Integrity in the game.
          </h1>
          <p className="font-serif text-xl md:text-2xl text-gray-600 italic">
            "Three teams operating under one unified philosophy of athletic
            development and competitive spirit since 1972."
          </p>
        </div>

        <div className="w-full h-[500px] relative">
          <Image
            src="/emen-hero.webp"
            alt="Tufts Ultimate History"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

      {/* Magazine Columns */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          <div className="md:pr-8 pt-8 md:pt-0">
            <h2 className="font-sans text-xs font-bold tracking-widest text-[#3172AE] uppercase mb-4">
              Tier I • A-Team
            </h2>
            <h3 className="font-serif text-4xl text-gray-900 mb-4">
              The E-Men
            </h3>
            <p className="font-serif text-lg text-gray-600 leading-relaxed mb-6">
              Our premier squad represents Tufts University on the national
              stage, consistently battling against the most formidable
              Division-I programs in the country for a place at Nationals.
            </p>
            <Link
              href="/roster/emen"
              className="font-sans text-sm font-bold border-b border-[#3172AE] text-[#3172AE] pb-1 hover:text-blue-900 transition-colors"
            >
              Examine the Roster
            </Link>
          </div>

          <div className="md:px-8 pt-8 md:pt-0">
            <h2 className="font-sans text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
              Tier II • B-Team
            </h2>
            <h3 className="font-serif text-4xl text-gray-900 mb-4">
              The B-Men
            </h3>
            <p className="font-serif text-lg text-gray-600 leading-relaxed mb-6">
              A fiercely competitive force within the regional circuit. The
              B-Men serve as both a rigorous athletic pursuit and the essential
              proving ground for the program's future core.
            </p>
            <Link
              href="/roster/bmen"
              className="font-sans text-sm font-bold border-b border-gray-400 text-gray-600 pb-1 hover:text-gray-900 transition-colors"
            >
              Examine the Roster
            </Link>
          </div>

          <div className="md:pl-8 pt-8 md:pt-0">
            <h2 className="font-sans text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
              Tier III • Dev Squad
            </h2>
            <h3 className="font-serif text-4xl text-gray-900 mb-4">
              The C-Men
            </h3>
            <p className="font-serif text-lg text-gray-600 leading-relaxed mb-6">
              The foundation of our culture. Dedicated entirely to teaching the
              fundamentals, securing competitive repetitions, and fostering a
              lifelong passion for the sport.
            </p>
            <Link
              href="/join"
              className="font-sans text-sm font-bold border-b border-gray-400 text-gray-600 pb-1 hover:text-gray-900 transition-colors"
            >
              Inquire About Joining
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
