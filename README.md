# hypixel-guild-bot

A small Mineflayer bot that connects to Hypixel, listens to guild chat, and responds to basic commands.

## Requirements

- [Bun](https://bun.com) (for install/run scripts)
- A Microsoft account that owns Minecraft (used for auth)
- A Hypixel API key

## Setup

1. Install dependencies:

```bash
bun install
```

2. Create a `.env` file in the project root:

```env
EMAIL=you@example.com
VERSION=1.8.9
HYPIXEL_API_KEY=your_hypixel_api_key
```

- `EMAIL`: Microsoft account email used to log in.
- `VERSION`: Minecraft client version string supported by Hypixel (example: `1.8.9`).
- `HYPIXEL_API_KEY`: Your Hypixel API key.

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
