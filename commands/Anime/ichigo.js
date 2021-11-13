
const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('ichigo')
      .setDescription('Get a picture of Ichigo'),
  async execute(interaction) {
    const ichigoEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s an Ichigo image:');
    ichigo = [
      'https://media.tenor.com/images/6b47cb6b5ce221d518b395fe47cd2d73/tenor.gif',
      'https://media.tenor.com/images/261ad16168339e25110d6b8acda62c09/tenor.gif',
      'https://media.tenor.com/images/450ece60921b246c075d2ba32d06845a/tenor.gif',
      'https://media.tenor.com/images/5e4c03a04d24de7289971bad3a88774a/tenor.gif',
    ];
    ichigoEmbed.setImage(ichigo[Math.floor(Math.random()*ichigo.length)]);
    await interaction.reply({embeds: [ichigoEmbed]});
  },
};
