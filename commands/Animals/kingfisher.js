const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('kingfisher')
      .setDescription('Get a picture of a kingfisher'),
  async execute(interaction) {
    const kingfisherEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a kingfisher image:');
    kingfisher = [
      'https://upload.wikimedia.org/wikipedia/commons/c/cc/Common_Kingfisher_Alcedo_atthis.jpg',
      'https://commons.wikimedia.org/wiki/File:Eisvogel_kingfisher.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Common_Kingfisher-Alcedo_atthis.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/49/Javan_Kingfisher_Asman_GunungKelir.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/f2/Kingfisher_With_aCatch.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Kingfisher_2_Rabindra_Sarobar.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b3/Kingfisher_eating_a_tadpole.jpg',
    ];
    kingfisherEmbed.setImage(kingfisher[Math.floor(Math.random()*kingfisher.length)]);
    await interaction.reply({embeds: [kingfisherEmbed]});
  },
};
