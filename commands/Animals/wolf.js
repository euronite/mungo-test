const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('wolf')
      .setDescription('Get a picture of a wolf'),
  async execute(interaction) {
    const wolfEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a wolf image:');
    wolves = [
      'https://www.publicdomainpictures.net/pictures/160000/velka/wolf-walking-in-winter.jpg',
      'https://www.publicdomainpictures.net/pictures/70000/velka/wolf.jpg',
      'https://www.publicdomainpictures.net/pictures/310000/velka/wolf-1573785316pzL.jpg',
    ];
    wolfEmbed.setImage(wolves[Math.floor(Math.random()*wolves.length)]);
    await interaction.reply({embeds: [wolfEmbed]});
  },
};
