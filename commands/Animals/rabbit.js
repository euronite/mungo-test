const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('rabbit')
      .setDescription('Get a picture of a rabbit'),
  async execute(interaction) {
    const rabbitEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a rabbit image:');
    rabbit = [
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Rabbit_resting.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/31/Enderby_Island_Rabbit_Closeup.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/f2/Rabbits_001.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Mudchute_farm_rabbit.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b1/Domestic_white_rabbit_sitting_in_a_meadow.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/3b/Rabbit_in_montana.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/37/Oryctolagus_cuniculus_Tasmania_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Rabbit_8.jpg',
    ];
    rabbitEmbed.setImage(rabbit[Math.floor(Math.random()*rabbit.length)]);
    await interaction.reply({embeds: [rabbitEmbed]});
  },
};
