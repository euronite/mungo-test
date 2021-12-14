const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
      .setName('uptime')
      .setDescription('Get uptime for Mungo'),
  async execute(interaction) {
    let totalSeconds = (interaction.client.uptime / 1000);
    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    const embed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Uptime')
        .setDescription(uptime);
    embed.setThumbnail('https://img.icons8.com/color/48/000000/scottish-thistle.png');
    await interaction.reply({embeds: [embed]});
  },
};

