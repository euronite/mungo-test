const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
	async execute(interaction) {
		const serverInfo = new MessageEmbed()
		.setColor('0099ff')
		.setThumbnail(interaction.guild.iconURL())
        serverInfo.setTitle(`${interaction.guild.name} Info`)
        serverInfo.addFields(
			{name:"Server Owner", value:`<@!${interaction.guild.ownerId}>`},
			{name:"Member Count", value:parseToMessageEmbed(interaction.guild.memberCount)},
			{name:"Server Description (if any)", value:parseToMessageEmbed(interaction.guild.description)},
            {name:"Server ID", value:`\`${interaction.guild.id}\``},
			{name:"Creation", value:interaction.guild.createdAt.toString()},
			{name:"Nitro", value:`Boosts: ${interaction.guild.premiumSubscriptionCount}\nTier Level: ${interaction.guild.premiumTier.replace("_", " ")}`},
			{name:"Other Information", value:`Multi Factor Authentication Level: ${interaction.guild.mfaLevel}\nVerification Level: ${interaction.guild.verificationLevel}\n Guild Verified?: ${interaction.guild.verified.toString().toUpperCase()}\nDefault Notifications: ${interaction.guild.defaultMessageNotifications.replace("_", " ")}`}
            )
        await interaction.reply({embeds: [serverInfo]})
	},
};

function parseToMessageEmbed(value){
	if (value === null){
		return "None" 
	} 
	return value.toString()
}