const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const avatar = require('./avatar');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Display info about yourself.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s information to show')),
	async execute(interaction) {
		let user = interaction.options.getUser('target');
		const avatarEmbed = new MessageEmbed()
		.setColor('0099ff')
		if (user){
			pass
		} else {
			user = interaction.user
		}
		avatarEmbed.setTitle(`Here is ${user.username}'s avatar:`)
		avatarEmbed.addFields(
			{name:"Username", value:interaction.user.username}, 
			{name:"User ID", value:`\`${interaction.user.id}\``},
			{name:"User Tag", value:`\`${interaction.user.tag}\``},
			{name:"Is Bot?", value:interaction.user.bot.toString()},
			{name:"Official Discord System User", value:interaction.user.system.toString()},
			{name:"Account Creation", value:interaction.user.createdAt.toString()}
			)
		avatarEmbed.addField("Roles:", interaction.member.roles.cache.map(roles => `${roles}`).join(', '), true)
		avatarEmbed.setThumbnail(user.displayAvatarURL({dynamic:true}))
		await interaction.reply({embeds: [avatarEmbed]})
	},
};