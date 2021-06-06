const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class RandomuserCommand extends Command {
  constructor(){
    super({
      name: 'randomuser',
      aliases: 'ruser',
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
const embed = new Discord.MessageEmbed() 
    .setDescription('He elegido a **' + msg.guild.members.cache.random().displayName +'**')
    .setColor("RANDOM");
msg.channel.send(embed);
  }
}