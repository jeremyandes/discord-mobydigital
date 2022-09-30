import { SlashCommandBuilder } from 'discord.js';

export const Commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pongeadooooo'),
    new SlashCommandBuilder()
        .setName('hola')
        .setDescription('Te saludo'),
    new SlashCommandBuilder()
        .setName('chau')
        .setDescription('Me despido'),
].map(command => command.toJSON());