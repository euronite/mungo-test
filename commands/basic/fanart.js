const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fanart')
		.setDescription('Get fanart for Mungo'),
	async execute(interaction) {
		const embed = new MessageEmbed()
		.setColor('0099ff')
        .setImage("https://media.discordapp.net/attachments/678992031095193611/686671999199739942/20200309_202805.jpg")
        await interaction.reply({embeds: [embed]})
	},
};

