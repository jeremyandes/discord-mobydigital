import { ButtonBuilder, ButtonStyle } from 'discord.js';

export const createButton = (id: string, label: string, color: ButtonStyle) => {
    return new ButtonBuilder()
        .setCustomId(id)
        .setLabel(label)
        .setStyle(color);
}