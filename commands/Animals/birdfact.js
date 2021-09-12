
const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const fetch = (...args) => import('node-fetch').then((
    {default: fetch}) => fetch(...args),
);
module.exports = {
  data: new SlashCommandBuilder()
      .setName('birdfact')
      .setDescription('Get information about birds'),
  async execute(interaction) {
    try {
      result = await fetch('https://some-random-api.ml/facts/bird').then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
    if (result === undefined) {
      return interaction.reply('Error occurred, try again later or report to developer.');
    }
    const birdEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a bird fact:')
        .setDescription(result.fact);
    await interaction.reply({embeds: [birdEmbed]});
  },
};
