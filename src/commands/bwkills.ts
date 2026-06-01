import type { Bot } from "mineflayer";
import { getUUID } from "../services/mojang";
import { getPlayer } from "../services/hypixel";

export async function handleBwKillsCommand (bot: Bot, argument: string) {
  const uuid = await getUUID(argument);
  const player = await getPlayer(uuid);
}