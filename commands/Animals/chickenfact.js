
const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const fetch = (...args) => import('node-fetch').then((
    {default: fetch}) => fetch(...args),
);
module.exports = {
  data: new SlashCommandBuilder()
      .setName('chickenfact')
      .setDescription('Get information about chickens'),
  async execute(interaction) {
    try {
      result = await fetch(`https://chickenfacts.io/api/v1/facts/${Math.floor(Math.random() * 50) + 1}.json`).then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
    if (result === undefined) {
      return interaction.reply('Error occurred, try again later or report to developer.');
    }
    const chickenEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a chicken fact:')
        .setDescription(result.fact);
    await interaction.reply({embeds: [chickenEmbed]});
  },
};
