
const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('woodpecker')
      .setDescription('Get a picture of a woodpecker'),
  async execute(interaction) {
    const woodpeckerEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a woodpecker image:');
    woodpecker = [
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/Greater_Spotted_Woodpecker_(41554059345).jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Great_Spotted_Woodpecker_Image_2.jpg/577px-Great_Spotted_Woodpecker_Image_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/10/2019-08-07_Great_Spotted_Woodpecker%2C_juvenile%2C_Town_Moor%2C_Newcastle%2C_Northumberland_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Mali_detli%C4%87_%28Dryobates_minor%29%3B_Lesser_Spotted_Woodpecker.jpg/800px-Mali_detli%C4%87_%28Dryobates_minor%29%3B_Lesser_Spotted_Woodpecker.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Lesser_Spotted_Woodpecker_Lodz(Poland)(js)02.jpg/640px-Lesser_Spotted_Woodpecker_Lodz(Poland)(js)02.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/PicoidesMinorBack.jpg/640px-PicoidesMinorBack.jpg',
    ];
    woodpeckerEmbed.setImage(woodpecker[Math.floor(Math.random()*woodpecker.length)]);
    await interaction.reply({embeds: [woodpeckerEmbed]});
  },
};
