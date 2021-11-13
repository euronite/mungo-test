const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const fetch = (...args) => import('node-fetch').then((
    {default: fetch}) => fetch(...args),
);
const talkedRecently = new Set();

module.exports = {
  data: new SlashCommandBuilder()
      .setName('anime')
      .setDescription('Searched for anime shows. Need to specify full name as there are loads of shows')
      .addStringOption((option) => option.setName('name').setDescription('Name of the anime being searched')
          .setRequired(true)),
  async execute(interaction) {
    if (talkedRecently.has(interaction.user.id)) {
      return interaction.reply('Wait 10 seconds before getting typing this again.');
    }
    talkedRecently.add(interaction.user.id);
    setTimeout(() => {
      talkedRecently.delete(interaction.user.id);
    }, 10000);
    const animename = interaction.options.getString('name');
    let url = 'https://api.jikan.moe/v3/search/anime?q=';
    url = url + animename;
    try {
      result = await fetch(url, {
        headers: {'Accept': 'application/json'},
      }).then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
    if (result.status === 'error') {
      return interaction.reply('Unable to find this anime! Please try another.');
    }
    if (result === undefined) {
      return interaction.reply('Error occurred, try again later or report to developer.');
    }
    const embed = new MessageEmbed()
        .setColor('0099ff')
        .setFooter('Source: MyAnimeList')
        .setTitle('Results for ' + animename);

    try {
      result = result.results[0];
    } catch {
      return interaction.reply('Error occurred, check that the character name is correct.');
    }
    embed.setThumbnail(url=result.image_url);
    embed.addFields(
        {name: 'Title', value: result.title, inline: false},
        {name: 'First Released', value: result['start_date'].substring(0, 10), inline: false},
        {name: 'Rated', value: result.rated, inline: false},
        {name: 'Description', value: result.synopsis, inline: false},
    );
    if (result.hasOwnProperty('score')) {
      embed.addField('Score', String(result.score), false);
    }
    if (result.hasOwnProperty('end_date')) {
      embed.addField('End Date', result['end_date'].substring(0, 10), false);
    }
    embed.addField('URL', result.url, false);
    await interaction.reply({embeds: [embed]});
  },
};
