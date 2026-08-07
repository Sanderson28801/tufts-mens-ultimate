import fs from "fs";
import path from "path";
import { TeamData } from "../../types"; // Adjust path if needed
import SeasonRecord from "@/components/SeasonRecord";
import TournamentBlock from "@/components/TournamentBlock";

export default async function SchedulePage() {
  const filePath = path.join(process.cwd(), "data", "Tufts-Emen.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const teamData: TeamData = JSON.parse(jsonData);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            A-Team Schedule
          </h1>
          <p className="mt-2 text-lg text-gray-600">Season Results</p>
        </header>

        {/* Component 1: The Stats Card */}
        <SeasonRecord stats={teamData.stats_summary} />

        {/* Component 2: The List of Tournaments */}
        <section className="space-y-2">
          {teamData.schedule.map((day, index) => (
            <TournamentBlock key={index} day={day} />
          ))}
        </section>
      </div>
    </main>
  );
}
