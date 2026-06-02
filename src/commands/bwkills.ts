import type { Bot } from "mineflayer";
import { getUUID } from "../services/mojang";
import { getPlayer } from "../services/hypixel";

export async function handleBwKillsCommand(bot: Bot, argument: string) {
  const uuid = await getUUID(argument);
  const player = await getPlayer(uuid);

  const bedwars = player.stats.Bedwars;

  if (bedwars == undefined) {
    bot.chat(`${argument} does not have bedwars stats`);
    return;
  }

  const kills = bedwars.kills_bedwars;
  const deaths = bedwars.deaths_bedwars;
  const final_kills = bedwars.final_kills_bedwars;
  const final_death = bedwars.final_deaths_bedwars;

  const FKDR = (final_kills / final_death).toFixed(2);
  const KDR = (kills / deaths).toFixed(2);

  bot.chat(`/gc --------[ ${player.displayname} ]--------`);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  bot.chat(`/gc Kills: ${kills} | KDR: ${KDR}                                                  Finals: ${final_kills} | FKDR: ${FKDR}`);
}
