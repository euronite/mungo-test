
const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('bakugou')
      .setDescription('Get a picture of a bakugou'),
  async execute(interaction) {
    const bakugouEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s a Bakugou image:');
    bakugou = [
      'https://media1.tenor.com/images/328bcf479b6563a2240300c7ca8f8fed/tenor.gif',
      'https://media1.tenor.com/images/d7214976aeda545f3351a74d0f74d5f5/tenor.gif',
      'https://media1.tenor.com/images/8e20fe69b3acbafb1bf70a198be0ff2c/tenor.gif',
      'https://media1.tenor.com/images/7f661a1d83d961927198b2563972e5e1/tenor.gif',
      'https://media1.tenor.com/images/b3f4aae98d9712cb4053193d5daecf73/tenor.gif',
      'https://media1.tenor.com/images/cd3a0a33f1057529adbd1c81a8d7d4ac/tenor.gif',
      'https://media1.tenor.com/images/d9fcaf06498c3592b33996f837302a55/tenor.gif',
      'https://media1.tenor.com/images/f306ddca13c80c3761823a831732bf5c/tenor.gif',
      'https://media1.tenor.com/images/19f57e9e430d2c26df7631cf0968cab7/tenor.gif',
      'https://media1.tenor.com/images/83e437b1c0c221352f0c8a645f566ba4/tenor.gif',
      'https://media1.tenor.com/images/f834f1accef85fce5415f9fd7bb08d7a/tenor.gif',
      'https://media1.tenor.com/images/a43c75f61ff77fc44bbbc68026fe601e/tenor.gif',
      'https://media1.tenor.com/images/89f3bae7c18271f2b3421849bcb839c4/tenor.gif',
      'https://media1.tenor.com/images/c9f48f441c8b426a76c39106cb196ef6/tenor.gif',
      'https://media1.tenor.com/images/e5749d5df529d0291b050aca818e3692/tenor.gif',
      'https://media1.tenor.com/images/bab867bfd320700625c24b089b361bd5/tenor.gif',
      'https://media1.tenor.com/images/0c5e5099edc9b7010a805ac7001a52ce/tenor.gif',
      'https://media1.tenor.com/images/1bd586b13acfaac8441c3c3df6ceba90/tenor.gif',
      'https://media1.tenor.com/images/986fdf36fa94106455fefee409d08e96/tenor.gif',
      'https://media1.tenor.com/images/50a94b57767a5fda8541d84821600fbe/tenor.gif',
    ];
    bakugouEmbed.setImage(bakugou[Math.floor(Math.random()*bakugou.length)]);
    await interaction.reply({embeds: [bakugouEmbed]});
  },
};
