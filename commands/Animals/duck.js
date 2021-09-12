const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('duck')
      .setDescription('Get a picture of a duck'),
  async execute(interaction) {
    const duckEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a duck image:');
    duck = [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/%2825.0082743%2C_56.3191195%29_kalba.jpg/800px-%2825.0082743%2C_56.3191195%29_kalba.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Almost_fledged_mallards_%2848685754882%29.jpg/1920px-Almost_fledged_mallards_%2848685754882%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baby_Ducks_%2826014792454%29.jpg/1920px-Baby_Ducks_%2826014792454%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Baby_ducks_%2827132019360%29.jpg/1024px-Baby_ducks_%2827132019360%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Doc%2C_it_hurts_when_I_do_this_with_my_neck_-_Flickr_-_qnr.jpg/1280px-Doc%2C_it_hurts_when_I_do_this_with_my_neck_-_Flickr_-_qnr.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Duck_on_the_coast.jpg/1280px-Duck_on_the_coast.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Duck_on_the_pond.jpg/1280px-Duck_on_the_pond.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ducklings_in_grass.jpg/1280px-Ducklings_in_grass.jpg',
    ];
    duckEmbed.setImage(duck[Math.floor(Math.random()*duck.length)]);
    await interaction.reply({embeds: [duckEmbed]});
  },
};
