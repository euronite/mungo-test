
const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('frog')
      .setDescription('Get a picture of a frog'),
  async execute(interaction) {
    const frogEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a frog image:');
    frog = [
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/Marsh_frog_(Pelophylax_ridibundus).jpg',
      'https://upload.wikimedia.org/wikipedia/commons/c/c6/Golden-eyed_tree_frog_(Agalychnis_annae).jpg',
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Variegated_golden_frog_(Mantella_baroni)_Ranomafana.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b4/Litoria_infrafrenata_-_Julatten.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Variegated_golden_frog_(Mantella_baroni)_2.jpg',
    ];
    frogEmbed.setImage(frog[Math.floor(Math.random()*frog.length)]);
    await interaction.reply({embeds: [frogEmbed]});
  },
};
