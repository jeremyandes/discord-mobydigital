import { Client, GatewayIntentBits, Interaction, CacheType, TextChannel } from 'discord.js';
import dotenv from 'dotenv';
import { InteractionController } from './app/interactions/interaction.controller';
import { CHANNELS } from './helpers/channels';
import { getActualTime } from './utils/actual-time';
dotenv.config();

const client: Client<boolean> = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once('ready', async () => {
    console.log('Ready!');
    const channelLogs = client.channels.cache.get(CHANNELS.logs) as TextChannel;
    channelLogs.send({ content: `Sesión iniciada: ${getActualTime()}` });
});

client.on('interactionCreate', async (interaction: Interaction<CacheType>) => {
    InteractionController(client, interaction);
})



client.login(process.env.TOKEN);