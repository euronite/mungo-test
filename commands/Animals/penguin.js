const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('penguin')
      .setDescription('Get a picture of a penguin'),
  async execute(interaction) {
    const penguinEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a penguin image:');
    penguin = [
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/King_penguin_Aptenodytes_patagonicus-4932.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/7a/Penguin_pair_0515.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/37/Penguins_at_Boulders_Beach_2018_05.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/Falkland_Islands_Penguins_49.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/3b/African_penguins_at_Boulders_Beach_01.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/11/Wikimania_2018,_Cape_Town_(_1050603).jpg',
    ];
    penguinEmbed.setImage(penguin[Math.floor(Math.random()*penguin.length)]);
    await interaction.reply({embeds: [penguinEmbed]});
  },
};
