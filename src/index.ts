import { Client, GatewayIntentBits, Message } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client: Client<boolean> = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', async (message: Message<boolean>) => {
    console.log(message);
})

client.login(process.env.DISCORD_TOKEN);