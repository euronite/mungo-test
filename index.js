const fs = require('fs');
const {Client, Collection, Intents} = require('discord.js');
const {token} = require('./config.json');
const db = require('quick.db');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.commands = new Collection();
const cmdDirs = fs.readdirSync('./commands');
/* Loop through subdirectories in commands directory */
for (const dir of cmdDirs) {
  /* Read every subdirectory and filter for JS files */
  const commandFiles = fs.readdirSync(`./commands/${dir}`)
      .filter((f) => f.endsWith('.js'));

  /* Loop through every file */
  for (const file of commandFiles) {
    /* Set command file */
    const command = require(`./commands/${dir}/${file}`);
    client.commands.set(command.data.name, command);
  };
};
client.once('ready', () => {
  console.log('Ready!');
});


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    return interaction.reply({content: 'There was an error while executing this command!', ephemeral: true});
  }
});

client.on('messageDelete', async (message) => {
  if (!message.guild) return; // ignore DMs
  db.set(`snipemsg_${message.channel.id}`, message.content);
  db.set(`snipe_sender_${message.channel.id}`, message.author.id);
});
client.login(token);
