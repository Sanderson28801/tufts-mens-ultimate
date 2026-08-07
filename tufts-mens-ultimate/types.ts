export interface Game {
  tournament: string;
  date: string;
  opponent: string;
  our_score: number;
  opponent_score: number;
  result: "W" | "L";
}

export interface TournamentDay {
  tournament: string;
  games: Game[];
}

export interface StatsSummary {
  total_games: number;
  wins: number;
  losses: number;
}

export interface TeamData {
  players: string[];
  coaches: string[];
  schedule: TournamentDay[];
  stats_summary: StatsSummary;
}
