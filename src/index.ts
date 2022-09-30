import { Client, GatewayIntentBits, Interaction, CacheType } from 'discord.js';
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

client.on('interactionCreate', async (interaction: Interaction<CacheType>) => {
    if (!interaction.isChatInputCommand()) { return; }

    const { commandName } = interaction;

    switch (commandName) {
        case 'ping':
            await interaction.reply('Pongeado');
            break;
        case 'hola':
            await interaction.reply('Te saludo');
            break;
        case 'chau':
            await interaction.reply({
                content: `Te saludon't`,
                ephemeral: true,
            });
            break;
        case 'default':
            await interaction.reply('No entendí naranja');
    }
})

client.login(process.env.TOKEN);