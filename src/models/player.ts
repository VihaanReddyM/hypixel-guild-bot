export type NewPackageRank = "VIP" | "VIP_PLUS" | "MVP" | "MVP_PLUS" | "NONE";

export type RankPlusColor =
  | "RED"
  | "GOLD"
  | "GREEN"
  | "YELLOW"
  | "LIGHT_PURPLE"
  | "WHITE"
  | "BLUE"
  | "DARK_GREEN"
  | "DARK_RED"
  | "DARK_AQUA"
  | "DARK_PURPLE"
  | "GRAY"
  | "DARK_GRAY"
  | "BLACK"
  | "AQUA";

export interface BedwarsStats {
  wins_bedwars: number;
  losses_bedwars: number;
  final_kills_bedwars: number;
  final_deaths_bedwars: number;
  kills_bedwars: number;
  deaths_bedwars: number;
  winstreak: number;
  beds_broken_bedwars: number;
  beds_lost_bedwars: number;
  Experience: number;
  active_star?: string;
  active_prestige_scheme?: string;
}

export interface SocialMedia {
  links: {
    DISCORD?: string;
    TWITTER?: string;
    YOUTUBE?: string;
    INSTAGRAM?: string;
    TWITCH?: string;

    [key: string]: string | undefined;
  };

  prompt: boolean;
}

export interface Achievements {
  bedwars_level: number;
  [key: string]: number;
}

export interface Player {
  uuid: string;
  displayname: string;
  firstLogin: number;
  lastLogin?: number;
  lastLogout?: number;
  stats: {
    Bedwars?: BedwarsStats;
    [key: string]: unknown;
  };
  achievements: Achievements;
  networkExp: number;
  socialMedia?: SocialMedia;
  mostRecentGameType?: string;

  newPackageRank?: NewPackageRank;
  rankPlusColor?: RankPlusColor;
}

export interface HypixelApi {
  success: boolean;
  cause?: string;
  player: Player | null;
}