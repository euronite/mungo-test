const {SlashCommandBuilder} = require('@discordjs/builders');
const db = require('quick.db');
const {MessageEmbed} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
      .setName('snipe')
      .setDescription('Snipe them messages.'),
  async execute(interaction) {
    const msg = db.get(`snipemsg_${interaction.channel.id}`);
    const senderid = db.get(`snipe_sender_${interaction.channel.id}`);
    if (!msg) {
      return interaction.reply(`There is nothing to snipe!`);
    }
    db.delete(`snipermsg_${interaction.channel.id}`);
    db.delete(`snipe_sender_${interaction.channel.id}`);
    const embed = new MessageEmbed()
        .setTitle(interaction.client.users.cache.get(senderid).username,
            interaction.client.users.cache.get(senderid).displayAvatarURL({format: 'png', dynamic: true}))
        .setDescription(msg)
        .setColor('RANDOM')
        .setTimestamp();
    await interaction.reply({embeds: [embed]});
  },
};
