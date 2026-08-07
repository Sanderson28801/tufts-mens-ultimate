import { StatsSummary } from "../types";

export default function SeasonRecord({ stats }: { stats: StatsSummary }) {
  const winPercent =
    stats.total_games > 0
      ? Math.round((stats.wins / stats.total_games) * 100)
      : 0;

  return (
    <div className="grid grid-cols-3 gap-4 mb-10">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center justify-center">
        <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
          Wins
        </span>
        <span className="text-4xl font-black text-sky-600">{stats.wins}</span>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center justify-center">
        <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
          Losses
        </span>
        <span className="text-4xl font-black text-stone-700">
          {stats.losses}
        </span>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center justify-center">
        <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
          Win %
        </span>
        <span className="text-4xl font-black text-gray-900">{winPercent}%</span>
      </div>
    </div>
  );
}
