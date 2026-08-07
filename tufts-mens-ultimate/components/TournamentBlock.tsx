import { TournamentDay } from "../types";
import GameRow from "./GameRow";

export default function TournamentBlock({ day }: { day: TournamentDay }) {
  return (
    <details className="mb-4 bg-white rounded-lg shadow-sm border border-gray-200 group overflow-hidden">
      <summary className="bg-white px-5 py-4 cursor-pointer list-none flex justify-between items-center hover:bg-gray-50 transition-colors">
        <h2 className="text-lg font-extrabold text-tufts-brown">
          {day.tournament}
        </h2>

        {/* Visual indicator that it can be opened */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-tufts-blue uppercase tracking-wider">
            {day.games.length} Games
          </span>
          <span className="text-sm font-medium text-gray-400 group-open:rotate-180 transition-transform">
            ▼
          </span>
        </div>
      </summary>

      <div className="flex flex-col border-t border-gray-100">
        {day.games.map((game, index) => (
          <GameRow key={index} game={game} />
        ))}
      </div>
    </details>
  );
}
