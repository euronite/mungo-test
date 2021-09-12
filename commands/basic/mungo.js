const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('mungo')
      .setDescription('Gets Mungo avatar'),
  async execute(interaction) {
    const embed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Mungo Avatar');
    embed.setImage('https://img.icons8.com/color/48/000000/scottish-thistle.png');
    await interaction.reply({embeds: [embed]});
  },
};
