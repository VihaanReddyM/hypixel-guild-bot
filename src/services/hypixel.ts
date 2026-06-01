import axios from "axios";
import type { HypixelApi, Player } from "../models/player";

const API_KEY = process.env.HYPIXEL_API_KEY!;

export async function getPlayer(uuid: string): Promise<Player> {
  const { data } = await axios.get<HypixelApi>(
    "https://api.hypixel.net/v2/player",
    {
      params: {
        key: API_KEY,
        uuid,
      },
    }
  );

  if (!data.success) {
    throw new Error(data.cause ?? "Hypixel API request failed");
  }

  if (!data.player) {
    throw new Error("Player not found");
  }

  return data.player;
}