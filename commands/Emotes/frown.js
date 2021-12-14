const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('frown')
      .setDescription('frown at someone!')
      .addUserOption((option) => option.setName('target').setDescription('The user to frown to').setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('target');
    const frownEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle(interaction.user.username + ' has frowned at ' + user.username);
    frown = [
      'https://c.tenor.com/HXZTwHbIFCMAAAAC/sagiri-mad.gif',
      'https://c.tenor.com/RPZpK1RHbv0AAAAC/anime-sad.gif',
      'https://c.tenor.com/a6sI-HN_cl4AAAAC/pout-sao.gif',
      'https://c.tenor.com/vRZoLNCnXxkAAAAC/one-piece-luffy.gif',
    ];
    frownEmbed.setImage(frown[Math.floor(Math.random()*frown.length)]);
    await interaction.reply({embeds: [frownEmbed]});
  },
};

