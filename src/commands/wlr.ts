import type { Bot } from "mineflayer";
import { getPlayer } from "../services/hypixel";
import { getUUID } from "../services/mojang";

export async function handleWlrCommand(bot: Bot, argument: string) {
  const uuid = await getUUID(argument);
  const player = await getPlayer(uuid);

  const bedwars = player.stats.Bedwars;

  if (bedwars == undefined) {
    bot.chat(`${argument} does not have bedwars stats`);
    return;
  }

  const wins =  bedwars.wins_bedwars ?? 0;
  const losses = bedwars.losses_bedwars ?? 0;

  const wlr = (wins / losses).toFixed(2);

  bot.chat(`/gc ${player.displayname}'s WLR: ${wlr}`);
}