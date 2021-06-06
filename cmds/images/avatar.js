const Discord = require("discord.js");

const { Command } = require("../../commands.js");
module.exports = class AvatarCommand extends Command {
  constructor(){
    super({
      name: 'avatar',
      aliases: 'profilepicture',
      priority: 3,
      permLvl: 0,
    })
  }
  execute(msg){
    let user = msg.mentions.members.first();
    if(!user){
          let autor = msg.author;
        const authorembed = new Discord.MessageEmbed()
    .setDescription("**Tu avatar, <@" + autor + ">**")
    .setColor("RANDOM")
    .setImage(autor.displayAvatarURL({dynamic : true}, {size : 8192}));
      
      msg.channel.send(authorembed)
    };

    const mentionembed = new Discord.MessageEmbed()
    .setDescription("**Avatar de <@" + user + ">**")
    .setColor("RANDOM")
    .setImage(user.user.displayAvatarURL({dynamic : true}, {size : 8192}));
  
    
    msg.channel.send(mentionembed)
    
  }
}