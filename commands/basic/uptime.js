const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uptime')
		.setDescription('Get uptime for Mungo'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('0099ff')
			.setTitle('Uptime');
		await interaction.reply({ embeds: [embed] });
	},
};

