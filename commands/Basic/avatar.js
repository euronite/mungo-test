const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		const avatarEmbed = new MessageEmbed()
		.setColor('0099ff')
		if (user){
			avatarEmbed.setTitle(`Here is ${user.username}'s avatar:`)
			avatarEmbed.setImage(user.displayAvatarURL({dynamic:true}))
		} else {
			avatarEmbed.setTitle(`Here is ${interaction.user.username}'s avatar:`)
			avatarEmbed.setImage(interaction.user.displayAvatarURL({dynamic:true}))
		}
		await interaction.reply({embeds: [avatarEmbed]})
	},
};