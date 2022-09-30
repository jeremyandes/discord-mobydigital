import { Client, GatewayIntentBits, Interaction, CacheType, Channel, TextChannel } from 'discord.js';
import dotenv from 'dotenv';
import { CHANNELS } from './helpers/channels';
import { getActualTime } from './utils/actual-time';
import { sendLogs } from './utils/send-logs';
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
    const channelLogs = await client.channels.cache.get(CHANNELS.logs) as TextChannel;
    channelLogs.send({ content: `Sesión iniciada: ${getActualTime()}` });
});

client.on('interactionCreate', async (interaction: Interaction<CacheType>) => {
    if (!interaction.isChatInputCommand()) { return; }

    const { commandName } = interaction;

    switch (commandName) {
        case 'ping':
            await interaction.reply('Pongeado');
            sendLogs(client, interaction, 'ping');
            break;
        case 'hola':
            await interaction.reply('Te saludo');
            sendLogs(client, interaction, 'hola');
            break;
        case 'chau':
            await interaction.reply({
                content: `Te saludon't`,
                ephemeral: true,
            });
            sendLogs(client, interaction, 'chau');
            break;
        case 'default':
            await interaction.reply('No entendí naranja');
    }
})



client.login(process.env.TOKEN);