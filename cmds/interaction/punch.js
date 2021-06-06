const Discord = require("discord.js");
const ainasepics = require("ainasepics");

const { Command } = require('../../commands.js')
module.exports = class PunchCommand extends Command {
  constructor(){
    super({
      name: 'punch',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
    let gif = ainasepics.punch();
    var autor = msg.author;
    var user = msg.mentions.members.first();
if (!user) {
      const forbotembed = new Discord.MessageEmbed()
      .setDescription(`¡Ay! N-no me pegues, **${autor.username}**...`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(forbotembed)
    };
        if(autor.id === user.user.id) {
          const embedcoincidence = new Discord.MessageEmbed()
          .setDescription(`**${autor.username}** imagina que está peleándose con alguien...`)
          .setImage(gif)
          .setColor("RANDOM")
          msg.channel.send(embedcoincidence)
        } else {
      const goodembed = new Discord.MessageEmbed()
      .setDescription(`**${autor.username}** pelea contra **${user.user.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(goodembed)     
    }
  }
}
