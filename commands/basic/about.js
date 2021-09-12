
const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const fetch = (...args) => import('node-fetch').then((
    {default: fetch}) => fetch(...args),
);
// const git = require("git-last-commit")
module.exports = {
  data: new SlashCommandBuilder()
      .setName('about')
      .setDescription('Display info about Mungo.'),
  async execute(interaction) {
    const {ipinfo} = require('../../config.json');
    let result = undefined;
    try {
      result = await fetch(`https://ipinfo.io/json?token=${ipinfo}`).then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
    if (result === undefined) {
      return interaction.reply('Error occurred, try again later or report to developer.');
    }
    const aboutInfo = new MessageEmbed()
        .setColor('0099ff')
        .setThumbnail(interaction.guild.iconURL());
    aboutInfo.setTitle(`Mungo Information`);
    aboutInfo.addFields(
        {name: 'Owner', value: `Euronite#8585`, inline: true},
        {name: 'Location', value: `${result.city}, ${result.region}, ${result.country}`, inline: true},
        {name: 'Hosted By', value: result.org},
        {name: 'Supported', value: 'By everyone in the development server and all those who submitted suggestions.'},
        {name: 'Server Count', value: `${interaction.client.guilds.cache.size}`},
    );
    // get last commit message
    // let msg = ""
    // git.getLastCommit(function(err, commit){
    // msg = commit.subject
    // })
    // console.log(msg)
    aboutInfo.setThumbnail('https://img.icons8.com/color/48/000000/scottish-thistle.png');
    await interaction.reply({embeds: [aboutInfo]});
  },
};


