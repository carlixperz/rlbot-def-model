const Discord = require("discord.js");
const ainasepics = require("ainasepics");

const { Command } = require('../../commands.js')
module.exports = class HiCommand extends Command {
  constructor(){
    super({
      name: 'hi',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
    let gif = ainasepics.hi();
    var autor = msg.author;
    var user = msg.mentions.users.first();
if (!user) {
      const forbotembed = new Discord.MessageEmbed()
      .setDescription(`Hola, **${autor.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(forbotembed)
    };
        if(autor.id === user.user.id) {
          const embedcoincidence = new Discord.MessageEmbed()
          .setDescription(`**${autor.username}** imagina que está saludando a alguien...`)
          .setImage(gif)
          .setColor("RANDOM")
          msg.channel.send(embedcoincidence)
        } else {
      const goodembed = new Discord.MessageEmbed()
      .setDescription(`**${autor.username}** ha saludado a **${user.user.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(goodembed)     
    }
  }
}
