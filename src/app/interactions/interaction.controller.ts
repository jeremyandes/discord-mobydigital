import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Client, Interaction } from "discord.js";
import { createButton } from "../../utils/create-button";
import { sendLogs } from "../../utils/send-logs";

export const InteractionController = async (
    client: Client,
    interaction: Interaction
) => {
    if (interaction.isChatInputCommand()) {
        const { commandName } = interaction;
        switch (commandName) {
            case 'buttons-test':
                const row = new ActionRowBuilder<ButtonBuilder>()
                    .addComponents(
                        createButton('test-1', 'Test 1', ButtonStyle.Primary),
                        createButton('test-2', 'Test 2', ButtonStyle.Secondary),
                        createButton('test-3', 'Test 3', ButtonStyle.Danger),
                    )
                await interaction.reply({
                    content: 'Disponibilizo botones',
                    components: [row]
                })
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
    } else if (interaction.isButton()) {
        const row = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                createButton('ya-fue', 'Ya fue, nos vimo', ButtonStyle.Success),
            )
        interaction.reply({
            content: 'Te dejo otro botoncito? O ya fue?',
            components: [row],
            ephemeral: true,
        })
    }

}