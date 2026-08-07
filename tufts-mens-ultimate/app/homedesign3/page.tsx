import fs from "fs";
import path from "path";
import Link from "next/link";
import Hero from "@/components/Hero";
import { TeamData } from "@/types"; // Adjust path if needed
import InstagramFeed from "@/components/InstagramFeed";
import Image from "next/image";


export default async function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(250px,_auto)]">
        {/* Bento Hero (Spans full width, 2 rows tall) */}
        <div className="relative md:col-span-4 row-span-2 rounded-3xl overflow-hidden bg-tufts-brown text-white p-12 flex flex-col justify-end min-h-[60vh]">
          <Image
            src="/emen-hero.webp"
            alt="Tufts Emen Ultimate"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="relative z-10 w-full md:w-2/3">
            <h1 className="text-6xl md:text-8xl font-black mb-4">
              THE BROTHERHOOD
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-8">
              Tufts Men's Ultimate. Built on grass, turf, and plastic.
            </p>
            <Link
              href="/join"
              className="bg-white text-tufts-brown px-8 py-4 rounded-full font-bold inline-block hover:bg-gray-200 transition"
            >
              Prospective Players
            </Link>
          </div>
        </div>

        {/* E-Men Card (Spans 2 columns) */}
        <div className="md:col-span-2 bg-tufts-blue-bright text-white rounded-3xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <div>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              A-Team
            </span>
            <h3 className="text-5xl font-black mt-4 mb-2">E-MEN</h3>
            <p className="text-white/90 text-lg">
              The flagship squad. Competing nationally against the top D-I
              programs in the country.
            </p>
          </div>
          <Link
            href="/roster/emen"
            className="mt-8 bg-white text-tufts-blue-bright w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-100"
          >
            →
          </Link>
        </div>

        {/* B-Men Card (1 column) */}
        <div className="md:col-span-1 bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <div>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              B-Team
            </span>
            <h3 className="text-3xl font-black text-gray-900 mt-4 mb-2">
              B-MEN
            </h3>
            <p className="text-gray-600">
              Fierce regional competition & future core.
            </p>
          </div>
          <Link
            href="/roster/bmen"
            className="mt-8 text-tufts-blue font-bold flex items-center gap-2"
          >
            Roster →
          </Link>
        </div>

        {/* C-Men Card (1 column) */}
        <div className="md:col-span-1 bg-tufts-brown text-white rounded-3xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <div>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Dev Squad
            </span>
            <h3 className="text-3xl font-black mt-4 mb-2">C-MEN</h3>
            <p className="text-white/80">
              Teaching fundamentals and the joy of the game.
            </p>
          </div>
          <Link
            href="/join"
            className="mt-8 text-white font-bold flex items-center gap-2"
          >
            Join →
          </Link>
        </div>
      </div>
    </main>
  );
}