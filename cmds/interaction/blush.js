const Discord = require("discord.js");
const star = require('star-labs');

const { Command } = require('../../commands.js')
module.exports = class BlushCommand extends Command {
  constructor(){
    super({
      name: 'blush',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
    let gif = star.blush();
    var autor = msg.author.username;
      const embed2 = new Discord.MessageEmbed()
      .setDescription(`**${autor}** se está sonrojando...`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(embed2)
     }
    }