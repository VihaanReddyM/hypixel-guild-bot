import axios from "axios";
import type { HypixelApi, Player } from "../models/player";
import { env } from "../utils/env";

export async function getPlayer(
  identifier: string,
): Promise<Player> {
  const { data } = await axios.get<HypixelApi>(
    `${env.WORKER_URL}/player/${identifier}`,
    {
      headers: {
        Authorization: `Bearer ${env.API_KEY}`,
      },
    },
  );

  if (!data.success) {
    throw new Error(
      data.cause ?? "Worker request failed",
    );
  }

  if (!data.player) {
    throw new Error("Player not found");
  }

  return data.player;
}