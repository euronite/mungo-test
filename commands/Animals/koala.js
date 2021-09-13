const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const fetch = (...args) => import('node-fetch').then((
    {default: fetch}) => fetch(...args),
);
module.exports = {
  data: new SlashCommandBuilder()
      .setName('koala')
      .setDescription('Get images of koala'),
  async execute(interaction) {
    try {
      result = await fetch('https://some-random-api.ml/img/koala').then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
    if (result === undefined) {
      return interaction.reply('Error occurred, try again later or report to developer.');
    }
    const embed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a koala image:')
        .setImage(result.link);
    await interaction.reply({embeds: [embed]});
  },
};
