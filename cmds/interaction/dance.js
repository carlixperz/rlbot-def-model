const Discord = require("discord.js");
const star = require('star-labs');

const { Command } = require('../../commands.js')
module.exports = class DanceCommand extends Command {
  constructor(){
    super({
      name: 'dance',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  execute(msg){
    let gif = star.dance();
    var autor = msg.author;
    var user = msg.mentions.members.first();
    if (!user) {
      const forbotembed = new Discord.MessageEmbed()
      .setDescription(`¿Me concedes este baile, **${autor.username}**?`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(forbotembed)
    };
        if(autor.id === user.user.id) {
          const embedcoincidence = new Discord.MessageEmbed()
          .setDescription(`**${autor.username}** está bailando, ¡mira qué ritmo lleva!`)
          .setImage(gif)
          .setColor("RANDOM")
          msg.channel.send(embedcoincidence)
        } else {
      const goodembed = new Discord.MessageEmbed()
      .setDescription(`**${autor.username}** baila con **${user.user.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(goodembed)     
    }
  }
}
