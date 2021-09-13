const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('shark')
      .setDescription('Get a picture of a shark'),
  async execute(interaction) {
    const sharkEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a shark image:');
    shark = [
      'https://upload.wikimedia.org/wikipedia/commons/7/7f/Ocean%C3%A1rio_de_Lisboa_2018_(29).jpg',
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Cetorhinus_maximus_by_greg_skomal.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/1/1f/Guadalupe_Island_Great_White_Shark_Face_On.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/9d/Bullshark_Bahamas.jpg',
    ];
    sharkEmbed.setImage(shark[Math.floor(Math.random()*shark.length)]);
    await interaction.reply({embeds: [sharkEmbed]});
  },
};
