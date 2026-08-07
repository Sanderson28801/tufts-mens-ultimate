import { Game } from "../types";

export default function GameRow({ game }: { game: Game }) {
  const isWin = game.result === "W";

  return (
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
      {/* Left Side: Date and Opponent */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
          {game.date}
        </span>
        <span className="text-lg font-bold text-gray-900">{game.opponent}</span>
      </div>

      {/* Right Side: Score and Badge */}
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold text-gray-700 tracking-tight">
          {game.our_score} <span className="text-gray-400 mx-1">-</span>{" "}
          {game.opponent_score}
        </div>

        {/* W/L Badge using Tufts-ish colors */}
        <div
          className={`flex items-center justify-center w-8 h-8 rounded font-bold text-white shadow-sm
            ${isWin ? "bg-sky-500" : "bg-stone-700"}`}
        >
          {game.result}
        </div>
      </div>
    </div>
  );
}
