const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('naegi')
      .setDescription('Get a picture of Naegi'),
  async execute(interaction) {
    const naegiEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a Naegi image:');
    naegi = [
      'https://media.tenor.com/images/c2f58173136d306684a5a90dc2123039/tenor.gif',
      'https://media1.tenor.com/images/7cf269348eec81ee79de7282809531bf/tenor.gif',
      'https://media.tenor.com/images/8b8ba043ab1c07fa9a8c291080d573a5/tenor.gif',
    ];
    naegiEmbed.setImage(naegi[Math.floor(Math.random()*naegi.length)]);
    await interaction.reply({embeds: [naegiEmbed]});
  },
};
