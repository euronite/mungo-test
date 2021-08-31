const { REST } = require('@discordjs/rest');
require('dotenv').config({ path: '.env' })
const { Routes } = require('discord-api-types/v9');
const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID

const TOKEN = process.env.CLIENT_TOKEN
const commands = [];

const rest = new REST({ version: '9' }).setToken(TOKEN);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();
