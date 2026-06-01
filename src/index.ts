import mineflayer, { type Bot } from "mineflayer";
import { env } from "./utils/env";

const bot = mineflayer.createBot({
  host: "mc.hypixel.net",
  username: env.EMAIL,
  auth: "microsoft",
  version: env.VERSION,
});

const commands: Record<string, (bot: Bot, argument?: string) => Promise<void>> = {
  stats: async (bot: Bot, argument?: string) => {
    const { handleStatsCommand } = await import("./commands/stats");
    await handleStatsCommand(bot, argument!);
  },
  bw: async (bot: Bot, argument?: string) => {
    const { handleBwCommand } = await import("./commands/bw");
    await handleBwCommand(bot, argument!);
  },
  bwkills: async (bot: Bot, argument?: string) => {
    const { handleBwKillsCommand } = await import("./commands/bwkills");
    await handleBwKillsCommand(bot, argument!);
  },
};

bot.once("login", () => {
  console.log("Connected to Hypixel");
});

bot.on("messagestr", async (message) => {
  if (
    message.includes("joined the lobby!") ||
    message.includes("joined the lobby! <<<")
  ) {
    return;
  }

  console.log("[MESSAGE]", JSON.stringify(message));
  
  if (!message.startsWith("Guild > ")) return;

  const guildMatch = message.match(/^Guild > .*?:\s+!(\w+)(?:\s+(\w+))?$/);
  if (!guildMatch) return;

  const command = guildMatch[1]!.toLowerCase();
  const argument = guildMatch[2];

  const handler = commands[command];
  if (!handler) {
    bot.chat("/gc Unknown command: !" + command);
    return;
  }

  try {
    await handler(bot, argument);
  } catch (err) {
    console.error("Command error:", command, err);
    bot.chat("/gc Error executing command");
  }
});

bot.on("error", console.error);
bot.on("end", () => console.log("Disconnected"));