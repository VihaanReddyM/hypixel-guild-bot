import dotenv from "dotenv";

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  EMAIL: requireEnv("EMAIL"),
  VERSION: requireEnv("VERSION"),
  HYPIXEL_API_KEY: requireEnv("HYPIXEL_API_KEY")
} as const;
