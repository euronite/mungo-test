const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('link')
      .setDescription('Get a picture of Link'),
  async execute(interaction) {
    const linkEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a Link image:');
    link = [
      'https://media1.tenor.com/images/809ddba6cb808e2b922057d99e443f86/tenor.gif',
      'https://media1.tenor.com/images/9e81ca58a97e39b7e7868d5f312f7f46/tenor.gif',
      'https://media1.tenor.com/images/248c145ed1fddca4abaa9fc31a2a3dc2/tenor.gif',
      'https://media1.tenor.com/images/de22bf21bf8a9b82df5e1cfdf0313752/tenor.gif',
      'https://media1.tenor.com/images/53e6be9a4586ab2af73b8ed4ec1916e6/tenor.gif',
      'https://media1.tenor.com/images/f0a63ba9f1ad5b84fe4d7a04b232e436/tenor.gif',
      'https://media1.tenor.com/images/64cb742b9f3a6e8e372bb71a7f30eff1/tenor.gif',
      'https://media1.tenor.com/images/a73847684a014f501e9fd01fa8fae720/tenor.gif',
      'https://media1.tenor.com/images/c82293fc1db3e894e5168faff964d3a2/tenor.gif',
    ];
    linkEmbed.setImage(link[Math.floor(Math.random()*link.length)]);
    await interaction.reply({embeds: [linkEmbed]});
  },
};
