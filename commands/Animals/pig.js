const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('pig')
      .setDescription('Get a picture of a pig'),
  async execute(interaction) {
    const pigsEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a pigs image:');

    pigs = [
      'https://www.publicdomainpictures.net/pictures/170000/nahled/smiling-pig-1463074462eDC.jpg',
      'https://www.publicdomainpictures.net/pictures/220000/nahled/pigs-14968609001to.jpg',
      'http://www.clker.com/cliparts/a/e/4/6/12629469371028032248pig44-hi.png',
      'https://www.publicdomainpictures.net/pictures/140000/nahled/pig-looking-1447090608s55.jpg',
    ];
    pigsEmbed.setImage(pigs[Math.floor(Math.random()*pigs.length)]);
    await interaction.reply({embeds: [pigsEmbed]});
  },
};
