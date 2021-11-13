const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('alucard')
      .setDescription('Get a picture of Alucard'),
  async execute(interaction) {
    const alucardEmbed = new MessageEmbed()
        .setColor('0099ff')
        .setTitle('Here\'s an Alucard image:');
    alucard = [
      'https://media.tenor.com/images/79eb0c9d2b8ce451fc63a3e54596e645/tenor.gif',
      'https://media.tenor.com/images/853dbb2a9d8a7fa8fcd23ef534fd698b/tenor.gif',
      'https://media.tenor.com/images/a965e7b408d082d139a224e56e0398bf/tenor.gif',
      'https://media.tenor.com/images/90cecdc466ed1482978af8ab9cfc7a08/tenor.gif',
      'https://media.tenor.com/images/b76434259b3e58eddb18350ff6c7faad/tenor.gif',
      'https://media.tenor.com/images/ed652f0157825b99887d282d50910524/tenor.gif',
      'https://media.tenor.com/images/9530ccb02aa03966e7ce90b333bf2207/tenor.gif',
      'https://media.tenor.com/images/8ec6bc1cd08e62d894dd7cb8ef83a218/tenor.gif',
      'https://media.tenor.com/images/60f909203ba81fdbaa3d3b1941cbdb68/tenor.gif',
      'https://media.tenor.com/images/8819cf28a16d7ce7fd890be40034f53d/tenor.gif',
      'https://media.tenor.com/images/4cd991972070205a2259681662f03522/tenor.gif',
      'https://media.tenor.com/images/5a6383bd2d5482c4836c2aa55f40036f/tenor.gif',
      'https://media.tenor.com/images/47e67da81f6c4fc0433322229f3b7f81/tenor.gif',
      'https://media.tenor.com/images/e26c29d6b27449284e0cde3460a124cd/tenor.gif',
      'https://media.tenor.com/images/b82b489cfb37909e1b6a8c1e2c2eada3/tenor.gif',
      'https://media.tenor.com/images/763185b74955ec9795472cff8089b6d3/tenor.gif',
      'https://media.tenor.com/images/e4344c006e1a31312dad94981ed6a5fe/tenor.gif',
      'https://media.tenor.com/images/c468c4de8820ba4f426ce58c7bb176db/tenor.gif',
      'https://media.tenor.com/images/f88e5dfc22f37fab9dd36ab6f33d2955/tenor.gif',
      'https://media.tenor.com/images/784349ff0af8bd02451cc6a64057471e/tenor.gif',
      'https://media.tenor.com/images/74baa4ad54c371734af60f6cdb7208bb/tenor.gif',
      'https://media.tenor.com/images/a6aed76888fe7062008ce0595fdce3d7/tenor.gif',
      'https://media.tenor.com/images/7f35e027f592e8eafcc4606380f00ab0/tenor.gif',
      'https://media.tenor.com/images/86647878c9fbf91dabc0d34d4cc53f58/tenor.gif',
      'https://media.tenor.com/images/93091c0478a31b4d0fac1f8d4e8d3c01/tenor.gif',
      'https://media.tenor.com/images/8ec6bc1cd08e62d894dd7cb8ef83a218/tenor.gif',
      'https://media.tenor.com/images/120cc2074d3f56bff296e423d6412717/tenor.gif',
      'https://media.tenor.com/images/bb7d3e1b93ed3f3375175749cb006ddc/tenor.gif',
      'https://media.tenor.com/images/f2d9f02977e84603560bd30137a1d021/tenor.gif',
      'https://media.tenor.com/images/a265cfae65b24725ef82b208fdb36415/tenor.gif',
      'https://media.tenor.com/images/c911bf1df82e3b519705f5e801a64bc9/tenor.gif',
      'https://media.tenor.com/images/72a491d7e4c3482ea9edb7651503c7cf/tenor.gif',
      'https://media.tenor.com/images/38599a53bcf5a0fc05341385fc5c5aab/tenor.gif',
      'https://media.tenor.com/images/9aef110fd29ab2c05816e9b09ad212cd/tenor.gif',
      'https://media.tenor.com/images/e79b0288b3ec73bd2f6cedcaf94ebe91/tenor.gif',
      'https://media.tenor.com/images/02c432300eb3cead1a2419a6a8e81fe1/tenor.gif',
    ];
    alucardEmbed.setImage(alucard[Math.floor(Math.random()*alucard.length)]);
    await interaction.reply({embeds: [alucardEmbed]});
  },
};
