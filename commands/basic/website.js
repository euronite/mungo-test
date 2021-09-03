
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('website')
		.setDescription('Get Mungo website.'),
	async execute(interaction) {
		await interaction.reply("https://mungo-bot.duckdns.org");
	},
};
