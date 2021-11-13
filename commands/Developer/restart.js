const {SlashCommandBuilder} = require('@discordjs/builders');
const checkDeveloper = require('../../utils/check_developer');
module.exports = {
  data: new SlashCommandBuilder()
      .setName('restart')
      .setDescription('Restart the bot!'),
  async execute(interaction) {
    if (!checkDeveloper.checkIfDeveloper(String(interaction.user.id))) {
      return interaction.reply('Error: config.json does not include a developer. Please add before trying again.');
    }
    await interaction.channel.send('Restarting bot...').then(()=> {
      process.on('exit', ()=> {
        require('child_process').spawn(process.argv.shift(), process.argv, {
          cwd: process.cwd(),
          detached: true,
          stdio: 'inherit',
        });
      });
      process.exit();
    });
  },
};
