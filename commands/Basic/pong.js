
const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('pong')
      .setDescription('For those annoying ppl.'),
  async execute(interaction) {
    options = [
      'Is that from your socks?',
      'ping!!',
      'Can\'t spell?',
      'Is that Beer?',
      'Not interested in buying what you\'re selling',
      'Do you *enjoy* getting it wrong?',
      'That was a good video game',
    ];
    await interaction.reply(options[Math.floor(Math.random()*options.length)]);
  },
};
