import fs from "fs";
import path from "path";
import Link from "next/link";
import Hero from "@/components/Hero";
import { TeamData } from "@/types"; // Adjust path if needed
import InstagramFeed from "@/components/InstagramFeed";
import Image from "next/image";

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans text-gray-800">
      {/* Warm Hero */}
      <div className="relative min-h-[70vh] flex flex-col justify-center items-center text-center p-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="/emen-hero.webp"
            alt="Tufts Ultimate Community"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 to-[#FAFAFA]"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
            More than a game.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-medium">
            Welcome to Tufts Men's Ultimate. A community built on respect,
            intense competition, and the Spirit of the Game.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/join"
              className="bg-[#3172AE] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </div>

      {/* Flowing Program Cards */}
      <section className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#3172AE] font-black text-2xl">
              E
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">E-Men</h3>
            <p className="text-gray-500 mb-8 flex-grow">
              Our A-Team. Representing Tufts on the national stage against the
              highest tier of D-I collegiate competition.
            </p>
            <Link
              href="/roster/emen"
              className="text-[#3172AE] font-bold py-2 px-6 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
            >
              Meet the Team
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-700 font-black text-2xl">
              B
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">B-Men</h3>
            <p className="text-gray-500 mb-8 flex-grow">
              The proving ground. Fierce regional competitors and the
              foundational core of our program's future.
            </p>
            <Link
              href="/roster/bmen"
              className="text-gray-700 font-bold py-2 px-6 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
            >
              Meet the Team
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-700 font-black text-2xl">
              C
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">C-Men</h3>
            <p className="text-gray-500 mb-8 flex-grow">
              Development squad. Where fundamentals are forged and a lifelong
              love for ultimate frisbee begins.
            </p>
            <Link
              href="/join"
              className="text-green-700 font-bold py-2 px-6 bg-green-50 rounded-full hover:bg-green-100 transition-colors"
            >
              Start Playing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
