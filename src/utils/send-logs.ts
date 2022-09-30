import { Client, Interaction, TextChannel } from "discord.js";
import { CHANNELS } from "../helpers/channels";

export const sendLogs = async (client: Client, interaction: Interaction, value: string) => {
    const channelLogs = client.channels.cache.get(CHANNELS.logs) as TextChannel;
    const userId = interaction.user.id;
    const channel = interaction.channelId;
    channelLogs.send({ content: `<@${userId}> usó el comando ${value} en el canal <#${channel}>` });
}