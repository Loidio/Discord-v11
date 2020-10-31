const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
    let pingembed = new Discord.RichEmbed()
        .setColor(`#9c00ff`)
        .setDescription(``)
        .setTimestamp()
    const message = msg
    const m = await msg.channel.send(pingembed);
    let embed = new Discord.RichEmbed()
         .setColor('RANDOM')
        .addField(`Mesaj Gecikme Süresi `, `${m.createdTimestamp - msg.createdTimestamp}ms`, true)
        .addField(`Bot Gecikme Süresi`, `${Math.round(client.ping)}ms `, true)
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        .setFooter(client.user.avatarURL)
        
        message.delete()
    m.edit({ embed });
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permLevel: 0
};

module.exports.help = {
  name: 'ping',
  description: '',
  usage: 'ping'
};