import type { Bot } from "mineflayer";
import { getPlayer } from "../services/hypixel";
import { getUUID } from "../services/mojang";

export async function handleFkdrCommand(bot: Bot, argument: string) {
  const uuid = await getUUID(argument);
  const player = await getPlayer(uuid);

  const bedwars = player.stats.Bedwars;

  if (bedwars == undefined) {
    bot.chat(`${argument} does not have bedwars stats`);
    return;
  }

  const final_kills = bedwars.final_kills_bedwars;
  const final_death = bedwars.final_deaths_bedwars;

  const FKDR = (final_kills / final_death).toFixed(2);

  bot.chat(`/gc ${player.displayname}'s FKDR: ${FKDR}`);
}