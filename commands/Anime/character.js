const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const fetch = (...args) => import('node-fetch').then((
    {default: fetch}) => fetch(...args),
);
const talkedRecently = new Set();

module.exports = {
  data: new SlashCommandBuilder()
      .setName('character')
      .setDescription('Searched for anime character. Need to specify full name as there are loads of characters')
      .addStringOption((option) => option.setName('name').setDescription('Name of the character being searched')
          .setRequired(true)),
  async execute(interaction) {
    if (talkedRecently.has(interaction.user.id)) {
      return interaction.reply('Wait 10 seconds before getting typing this again.');
    }


    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(interaction.user.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
      talkedRecently.delete(interaction.user.id);
    }, 10000);

    const charactername = interaction.options.getString('name');
    let url = 'https://api.jikan.moe/v3/search/character?q=';
    url = url + charactername;
    try {
      result = await fetch(url, {
        headers: {'Accept': 'application/json'},
      }).then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
    if (result.status === 'error') {
      return interaction.reply('Unable to find this character! Please try another.');
    }
    if (result === undefined) {
      return interaction.reply('Error occurred, try again later or report to developer.');
    }
    const embed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Results for ' + charactername)
        .setImage(result.message);

    try {
      result = result.results[0];
    } catch {
      return interaction.reply('Error occurred, check that the character name is correct.');
    }
    embed.setThumbnail(url=result.image_url);
    let alternative = '';
    (result.alternative_names).forEach((element) => {
      alternative = element + '\n';
    });
    if (alternative !== '') {
      embed.addField('Alternative Names', alternative, false);
    }
    embed.addField('URL', result.url);
    await interaction.reply({embeds: [embed]});
  },
};
