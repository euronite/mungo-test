const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const fetch = (...args) => import('node-fetch').then((
    {default: fetch}) => fetch(...args),
);
module.exports = {
  data: new SlashCommandBuilder()
      .setName('bird')
      .setDescription('Get images of birds'),
  async execute(interaction) {
    try {
      result = await fetch('https://some-random-api.ml/img/birb').then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
    if (result === undefined) {
      return interaction.reply('Error occurred, try again later or report to developer.');
    }
    const birdEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a bird image:')
        .setImage(result.link);
    await interaction.reply({embeds: [birdEmbed]});
  },
};
