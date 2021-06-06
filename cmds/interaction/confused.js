const Discord = require("discord.js");
const star = require('star-labs');

const { Command } = require('../../commands.js')
module.exports = class ConfusedCommand extends Command {
  constructor(){
    super({
      name: 'confused',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
    let gif = star.confused();
    var autor = msg.author.username;
      const embed2 = new Discord.MessageEmbed()
      .setDescription(`**${autor}** está confundido...`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(embed2)
     }
    }