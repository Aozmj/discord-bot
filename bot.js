const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = "PUT_CHANNEL_ID";

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);

  setInterval(() => {
    const channel = client.channels.cache.get(1408421177268895774);
    if(channel){
      channel.send("📢 رسالة تلقائية");
    }
  }, 3600000);
});

client.login(MTQ4MDY0MDcxMDQ3Nzg3MzIwMg.Gsan0E.A-wu5m5fpr_2dlzQ3oMI_tzBf1y1vEWd3bVHBI);
