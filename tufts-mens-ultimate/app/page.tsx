import fs from "fs";
import path from "path";
import Link from "next/link";
import Hero from "@/components/Hero";
import { TeamData } from "@/types"; // Adjust path if needed
import InstagramFeed from "@/components/InstagramFeed";

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

export default async function HomePage() {
  // 1. Fetch both datasets in parallel
  const [emenData, bmenData] = await Promise.all([
    getTeamData("Tufts-Emen.json"),
    getTeamData("Tufts-Bmen.json"),
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />

      {/* SECTION 1: The Program Overview (A, B, C Teams) */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-tufts-brown uppercase tracking-wide">
            The Squads
          </h2>
          <p className="text-gray-600 mt-2">
            Three teams. One program. Competing at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* A-Team Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col border-t-4 border-t-tufts-blue-bright">
            <h3 className="text-2xl font-black text-tufts-brown mb-1 uppercase">
              E-Men
            </h3>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              A-Team
            </span>
            <p className="text-gray-600 mb-6 flex-grow">
              The flagship squad. Competing nationally against the top D-I
              programs in the country.
            </p>
            {emenData && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-center border border-gray-100">
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Season Record
                </span>
                <span className="text-2xl font-black text-tufts-brown">
                  {emenData.stats_summary.wins} -{" "}
                  {emenData.stats_summary.losses}
                </span>
              </div>
            )}
            <Link
              href="/roster/emen"
              className="text-tufts-blue font-bold hover:underline flex items-center gap-1"
            >
              View A-Team Roster <span>→</span>
            </Link>
          </div>

          {/* B-Team Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col border-t-4 border-t-tufts-blue">
            <h3 className="text-2xl font-black text-tufts-brown mb-1 uppercase">
              B-Men
            </h3>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              B-Team
            </span>
            <p className="text-gray-600 mb-6 flex-grow">
              Developing talent, fierce regional competition, and building the
              future core of the program.
            </p>
            {bmenData && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-center border border-gray-100">
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Season Record
                </span>
                <span className="text-2xl font-black text-tufts-brown">
                  {bmenData.stats_summary.wins} -{" "}
                  {bmenData.stats_summary.losses}
                </span>
              </div>
            )}
            <Link
              href="/roster/bmen"
              className="text-tufts-blue font-bold hover:underline flex items-center gap-1"
            >
              View B-Team Roster <span>→</span>
            </Link>
          </div>

          {/* C-Team Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col border-t-4 border-t-gray-400">
            <h3 className="text-2xl font-black text-tufts-brown mb-1 uppercase">
              C-Men
            </h3>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Development Squad
            </span>
            <p className="text-gray-600 mb-6 flex-grow">
              Where it begins. Dedicated to teaching fundamentals, competitive
              reps, and the joy of the game.
            </p>
            <Link
              href="/join"
              className="mt-auto text-gray-600 font-bold hover:text-tufts-blue transition-colors flex items-center gap-1"
            >
              Join the Program <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Instagram Embed */}
      <section className="bg-white border-y border-gray-200 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-tufts-brown uppercase tracking-wide mb-8">
            Follow The Season
          </h2>

          {/* 2. Drop the Client Component right here */}
          <InstagramFeed />

          <a
            href="https://instagram.com/tufts_emen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-tufts-blue font-bold hover:underline text-lg"
          >
            @tufts_emen on Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
