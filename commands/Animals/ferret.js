const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('ferret')
      .setDescription('Get a picture of a ferret'),
  async execute(interaction) {
    const ferretEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a ferret image:');
    ferret = [
      'https://cdn.pixabay.com/photo/2018/10/04/07/18/ferret-3723085_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/01/17/12/52/animals-1144845_960_720.jpg',
      'https://cdn.pixabay.com/photo/2017/01/11/18/20/ferret-1972523_960_720.jpg',
      'https://cdn.pixabay.com/photo/2019/06/09/23/26/ferret-4263192_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/11/19/21/28/ferret-1841292_960_720.jpg',
      'https://cdn.pixabay.com/photo/2019/10/08/09/23/ferret-4534480_960_720.jpg',

    ];
    ferretEmbed.setImage(ferret[Math.floor(Math.random()*ferret.length)]);
    await interaction.reply({embeds: [ferretEmbed]});
  },
};
