import fs from "fs";
import path from "path";
import Link from "next/link";
import Hero from "@/components/Hero";
import { TeamData } from "@/types"; // Adjust path if needed
import InstagramFeed from "@/components/InstagramFeed";
import Image from "next/image";

// Helper function to keep the component clean
async function getTeamData(filename: string): Promise<TeamData | null> {
  try {
    const filePath = path.join(process.cwd(), "data", filename);
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error(`Failed to load ${filename}`, error);
    return null;
  }
}

export default async function Home1() {
  // 1. Fetch both datasets in parallel
  const [emenData, bmenData] = await Promise.all([
    getTeamData("Tufts-Emen.json"),
    getTeamData("Tufts-Bmen.json"),
  ]);

  return (
    <main className="min-h-screen bg-white">
      {/* Minimal Hero */}
      <div className="max-w-5xl mx-auto pt-32 pb-16 px-4 text-center">
        <h4 className="text-tufts-blue-bright font-medium tracking-[0.3em] uppercase text-sm mb-6">
          Tufts University
        </h4>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8">
          One brotherhood.
          <br />
          Three distinct paths.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
          Tufts Men's Ultimate is built on a legacy of intense competition,
          relentless development, and a shared love for the game.
        </p>
        <div className="w-full h-[60vh] relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/emen-hero.webp"
            alt="Tufts Ultimate"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Program Section */}
      <section className="max-w-4xl mx-auto px-4 py-24">
        <div className="space-y-24">
          {/* E-Men Row */}
          <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="md:w-1/3">
              <h3 className="text-4xl font-bold text-gray-900">E-Men</h3>
              <p className="text-sm font-medium text-tufts-blue-bright uppercase tracking-widest mt-2">
                A-Team
              </p>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 mb-4">
                Our flagship squad competes nationally against the top D-I
                programs in the country, fighting year in and year out for a bid
                to Nationals.
              </p>
              <Link
                href="/roster/emen"
                className="text-gray-900 font-semibold hover:text-tufts-blue-bright border-b border-gray-900 hover:border-tufts-blue-bright pb-1 transition-all"
              >
                View Roster
              </Link>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          {/* B-Men Row */}
          <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="md:w-1/3">
              <h3 className="text-4xl font-bold text-gray-900">B-Men</h3>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mt-2">
                B-Team
              </p>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 mb-4">
                A force in the regional circuit. This squad serves as both a
                fiercely competitive team and the proving ground for the
                program's future core.
              </p>
              <Link
                href="/roster/bmen"
                className="text-gray-900 font-semibold hover:text-tufts-blue-bright border-b border-gray-900 hover:border-tufts-blue-bright pb-1 transition-all"
              >
                View Roster
              </Link>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          {/* C-Men Row */}
          <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="md:w-1/3">
              <h3 className="text-4xl font-bold text-gray-900">C-Men</h3>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mt-2">
                Dev Squad
              </p>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 mb-4">
                Where it begins. Dedicated to teaching the fundamentals of
                ultimate, getting competitive reps, and discovering the joy of
                the sport.
              </p>
              <Link
                href="/join"
                className="text-gray-900 font-semibold hover:text-tufts-blue-bright border-b border-gray-900 hover:border-tufts-blue-bright pb-1 transition-all"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
