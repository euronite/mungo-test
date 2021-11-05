const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const fetch = (...args) => import('node-fetch').then((
    {default: fetch}) => fetch(...args),
);
module.exports = {
  data: new SlashCommandBuilder()
      .setName('dog')
      .setDescription('Get images of dogs')
      .addStringOption((option) => option.setName('dogname').setDescription('The dog name information to show')),
  async execute(interaction) {
    const dogname = interaction.options.getString('dogname');
    let url = 'https://dog.ceo/api/breed';
    if (!dogname) {
      url = url + 's/image/random';
    } else {
      url = url + '/' + dogname + '/images/random';
    }
    try {
      result = await fetch(url).then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
    if (result.status === 'error') {
      return interaction.reply('Unable to find this breed of dog! Please try another.');
    }
    if (result === undefined) {
      return interaction.reply('Error occurred, try again later or report to developer.');
    }
    const embed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s the requested image:')
        .setImage(result.message);
    await interaction.reply({embeds: [embed]});
  },
};
