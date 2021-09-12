
const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const fs = require('fs');
module.exports = {
  data: new SlashCommandBuilder()
      .setName('foxfact')
      .setDescription('Gives a fox fact'),
  async execute(interaction) {
    const filename = 'data/foxfacts.txt';
    const embed = new MessageEmbed().setColor('RANDOM');
    const p = new Promise(function(resolve, reject) {
      let res = '';
      fs.readFile(filename, 'utf-8', function(err, data) {
        if (err) {
          throw err;
        }
        const lines = data.split('\n');
        res= lines[Math.floor(Math.random()*lines.length)];
        if (res !== undefined) {
          resolve(res);
        } else {
          reject(Error('failed to get facts'));
        }
      });
    });
    p.then(async function(res) {
      embed.setTitle('Fox Fact:');
      embed.setDescription(res);
      await interaction.reply({embeds: [embed]});
    }, async function(error) {
      await interaction.reply('Error occurred, speak to developer. Issue:', error);
    });
  },
};


