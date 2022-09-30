import { Client, Interaction, TextChannel } from "discord.js";
import { CHANNELS } from "../helpers/channels";

export const sendLogs = async (client: Client, interaction: Interaction, value: string) => {
    const channelLogs: TextChannel = client.channels.cache.get(CHANNELS.logs) as TextChannel;
    const userId: string = interaction.user.id;
    const channel: string | null = interaction.channelId;
    channelLogs.send({ content: `<@${userId}> usó el comando \`${value}\` en el canal <#${channel}>` });
}