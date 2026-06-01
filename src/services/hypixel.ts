import axios from "axios";

const API_KEY = process.env.HYPIXEL_API_KEY!;

export async function getPlayer(uuid: string) {
  const response = await axios.get("https://api.hypixel.net/v2/player", {
    params: {
      key: API_KEY,
      uuid,
    },
  });

  return response.data.player;
}
