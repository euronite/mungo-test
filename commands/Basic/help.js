const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get commands help page.'),
	async execute(interaction) {
		await interaction.reply("https://mungo-bot.duckdns.org/index.php/bot-commands/");
	},
};
