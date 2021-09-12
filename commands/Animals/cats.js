
const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const fetch = (...args) => import('node-fetch').then((
    {default: fetch}) => fetch(...args),
);
module.exports = {
  data: new SlashCommandBuilder()
      .setName('cats')
      .setDescription('Get images of cats'),
  async execute(interaction) {
    try {
      result = await fetch('http://aws.random.cat/meow').then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
    if (result === undefined) {
      return interaction.reply('Error occurred, try again later or report to developer.');
    }
    const catEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a cat image:')
        .setImage(result.file);
    await interaction.reply({embeds: [catEmbed]});
  },
};
