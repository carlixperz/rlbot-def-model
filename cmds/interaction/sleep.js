const Discord = require("discord.js");
const star = require('star-labs');

const { Command } = require('../../commands.js')
module.exports = class SleepCommand extends Command {
  constructor(){
    super({
      name: 'sleep',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  execute(msg){
    let gif = star.sleep();
    var autor = msg.author.username;
      const embed = new Discord.MessageEmbed()
      .setDescription(`**${autor}** está durmiendo...`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(embed)
    
  }
}