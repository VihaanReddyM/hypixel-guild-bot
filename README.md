# hypixel-guild-bot

A Mineflayer bot that connects to Hypixel, listens to guild chat, and responds to basic commands.
It uses a Cloudflare Worker proxy so your Hypixel API key never ships with the bot.

## Worker repo

- **Hypixel API Worker repo:** `TODO: add GitHub URL here`

## Requirements

- [Bun](https://bun.com) (for install/run scripts)
- Node.js + npm (for the Worker repo and Wrangler)
- A Microsoft account that owns Minecraft (used for auth)
- A Cloudflare account (for Workers)
- A Hypixel API key (stored as a Worker secret)

## Cloudflare Worker setup (tutorial)

This project uses the `hypixel-api` Worker to proxy Hypixel requests with bearer auth.

### 1) Get the worker code

Clone or open the worker repo (link above).

### 2) Install dependencies

```bash
npm install
```

### 3) Create a guild API key (raw + hash)

Generate a raw key (this is what the bot will use):

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Hash it for storage in the Worker secret:

```bash
node -e "console.log(require('crypto').createHash('sha256').update('YOUR_KEY').digest('hex'))"
```

Create the JSON payload for `GUILD_API_KEYS`:

```json
{
  "keys": [
    {
      "id": "guild-a",
      "sha256": "HASH_HERE"
    }
  ]
}
```

### 4) Configure Worker secrets

Per Cloudflare’s docs, use secrets for sensitive values:

- `HYPIXEL_API_KEY` — your Hypixel API key
- `GUILD_API_KEYS` — JSON (string) containing the hashed guild keys

For **local dev**, create a `.dev.vars` file in the worker repo:

```env
HYPIXEL_API_KEY=your_hypixel_api_key
GUILD_API_KEYS={"keys":[{"id":"guild-a","sha256":"HASH_HERE"}]}
```

For **production**, set secrets with Wrangler:

```bash
npx wrangler secret put HYPIXEL_API_KEY
npx wrangler secret put GUILD_API_KEYS
```

### 5) Run or deploy the worker

```bash
npm run dev
```

Deploy:

```bash
npm run deploy
```

After deploy, copy your Worker URL (for example, `https://your-worker.workers.dev`).

## Bot setup

1. Install dependencies:

```bash
bun install
```

2. Create a `.env` file in the bot project root:

```env
EMAIL=you@example.com
VERSION=1.8.9
WORKER_URL=https://your-worker.workers.dev
API_KEY=YOUR_RAW_GUILD_API_KEY
```

- `EMAIL`: Microsoft account email used to log in.
- `VERSION`: Minecraft client version supported by Hypixel (example: `1.8.9`).
- `WORKER_URL`: Base URL for the Cloudflare Worker (no path).
- `API_KEY`: The **raw** guild API key generated in step 3 (not the hash).

## Run

```bash
bun run dev
```

Or:

```bash
bun run start
```

## Usage

In guild chat, use commands prefixed with `!`:

- `!stats <username>` — replies with BedWars stars, wins, and WLR.
- `!bw <username>` — placeholder (not implemented yet).
- `!bwkills <username>` — placeholder (not implemented yet).

The bot only responds to `Guild >` chat messages.

## Notes

This project was created with `bun init` (Bun v1.3.13).
