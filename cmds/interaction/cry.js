const Discord = require("discord.js");
const star = require('star-labs');

const { Command } = require('../../commands.js')
module.exports = class CryCommand extends Command {
  constructor(){
    super({
      name: 'cry',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
    let gif = star.cry();
    var autor = msg.author.username;
      const embed2 = new Discord.MessageEmbed()
      .setDescription(`**${autor}** está llorando...`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(embed2)
     }
    }