const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('kirito')
      .setDescription('Get a picture of a kirito'),
  async execute(interaction) {
    const kiritoEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a Kirito image:');
    kirito = [
      'https://media1.tenor.com/images/fb8c4b1affaf53ae84fce8887ceec7c8/tenor.gif',
      'https://media1.tenor.com/images/635ff7de4d9228e140153bff49b6dd4d/tenor.gif',
      'https://media1.tenor.com/images/06ed14e31d7b648740ed1bf879d92c87/tenor.gif',
      'https://media1.tenor.com/images/e96aff38f016ed6dddc467041eaf680f/tenor.gif',
      'https://media1.tenor.com/images/499b0109664cc5f34cef2aa9ef76e666/tenor.gif',
    ];
    kiritoEmbed.setImage(kirito[Math.floor(Math.random()*kirito.length)]);
    await interaction.reply({embeds: [kiritoEmbed]});
  },
};
