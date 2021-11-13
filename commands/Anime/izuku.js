const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('izuku')
      .setDescription('Get a picture of Izuku'),
  async execute(interaction) {
    const izukuEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s an Izuku image:');
    izuku = [
      'https://media.tenor.com/images/063d9fcd9e09ebf202c65e11d40a80f2/tenor.gif',
      'https://media1.tenor.com/images/7153c9490a0a983b91bf1563e7a8f502/tenor.gif',
      'https://media1.tenor.com/images/5b9cb943bdb9cb6e69e326ad21e90933/tenor.gif',
    ];
    izukuEmbed.setImage(izuku[Math.floor(Math.random()*izuku.length)]);
    await interaction.reply({embeds: [izukuEmbed]});
  },
};
