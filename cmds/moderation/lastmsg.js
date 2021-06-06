const Discord = require("discord.js");


const { Command } = require('../../commands.js')
module.exports = class LastmsgCommand extends Command {
  constructor(){
    super({
      name: 'lastmsg',
      aliases: 'lastmessage',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
    if(msg.deletable) msg.delete();
    let author = msg.author;
    let user = msg.mentions.members.first();
    
    if(!user) {
      const embed = new Discord.MessageEmbed()
      .setTitle(`**Tu último mensaje**`)
      .setDescription(author.lastMessage);
      
      msg.channel.send(embed)
    };
    if(user) {
      const embed2 = new Discord.MessageEmbed()
      .setTitle(`**Último mensaje de: ${user.user.username}**`)
      .setDescription(user.lastMessage);
      
      msg.channel.send(embed2)
    }
  }
}
