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
  API_KEY: requireEnv("API_KEY"),
  WORKER_URL: requireEnv("WORKER_URL")
} as const;
