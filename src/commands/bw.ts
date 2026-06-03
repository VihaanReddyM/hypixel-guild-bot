import type { Bot } from "mineflayer";
import { getPlayer } from "../services/hypixel";
import { getUUID } from "../services/mojang";

export async function handleBwCommand(bot: Bot, username: string) {
  const uuid = await getUUID(username);

  const player = await getPlayer(uuid);

  const stars = player?.achievements?.bedwars_level ?? 0;

  const bw = player?.stats?.Bedwars;

  const wins =  bw?.wins_bedwars ?? 0;
  const losses = bw?.losses_bedwars ?? 0;

  const wlr = (wins / losses).toFixed(2);

  bot.chat(`/gc ${username} | ⭐${stars} | Wins:${wins} | WLR:${wlr}`);
}
