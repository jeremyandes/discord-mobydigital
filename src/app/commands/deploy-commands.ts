import { REST, Routes } from 'discord.js';
import { config } from '../../config';
import { Commands } from './commands'
import dotenv from 'dotenv';
dotenv.config();

const { token, clientId, guildId } = config;

const rest = new REST({ version: '10' }).setToken(token!);

rest.put(Routes.applicationGuildCommands(clientId!, guildId!), { body: Commands })
    .then(() => console.log(`Se registraron los comandos`))
    .catch(console.error);