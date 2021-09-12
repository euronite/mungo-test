
const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const cooldowns = new Map();
const humanizeDuration = require('humanize-duration');
module.exports = {
  data: new SlashCommandBuilder()
      .setName('suggestion')
      .setDescription('Make a suggestion or bug report to the developer.')
      .addStringOption((option) => option.setName('suggestion')
          .setDescription('message you want to send.')
          .setRequired(true)),
  async execute(interaction) {
    // send alert if cooldown still active
    const cooldown = cooldowns.get(interaction.user.id);
    if (cooldown) {
      const remaining = humanizeDuration(cooldown - Date.now());
      return interaction.reply(`You have to wait ${remaining} before you can make another suggestion again`)
          .catch(console.error);
    }
    // get mungo details
    const mungoSuggestionsChannel = interaction.client.channels.cache.get('676732655412183040');
    const option = interaction.options.getString('suggestion');
    const embed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle(`${interaction.user.username} suggested`)
        .setDescription(option);
    const suggestionMsg = await mungoSuggestionsChannel.send({embeds: [embed]}, {fetchReply: true});
    suggestionMsg.react('👍');
    suggestionMsg.react('👎');
    cooldowns.set(interaction.user.id, Date.now() + 120000);
    setTimeout(() => cooldowns.delete(interaction.user.id), 120000);
    await interaction.reply('Your suggestion has been made!');
  },
};
