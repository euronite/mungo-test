const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('fish')
      .setDescription('Get a picture of a fish'),
  async execute(interaction) {
    const fishEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a fish image:');
    fish = [
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Astronotus_ocellatus.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Amphiprion_ocellaris_(Clown_anemonefish)_by_Nick_Hobgood.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Clowns_et_oeufs_%C3%A0_Mayotte.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e0/Dory_(4167649726).jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Amphilophus_citrinellus_2015_G5.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/48/CSIRO_ScienceImage_2946_Tropical_Fish.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a6/Chaetodon_xanthocephalus_nuit.jpg',
      'https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_2879_Tropical_Reef_Fish.jpg',
    ];
    fishEmbed.setImage(fish[Math.floor(Math.random()*fish.length)]);
    await interaction.reply({embeds: [fishEmbed]});
  },
};
