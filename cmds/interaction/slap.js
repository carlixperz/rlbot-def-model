const Discord = require("discord.js");
const marsnpm = require("marsnpm");

const { Command } = require('../../commands.js')
module.exports = class SlapCommand extends Command {
  constructor(){
    super({
      name: 'slap',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
    let gif = await marsnpm.slap();
    var autor = msg.author;
    var user = msg.mentions.members.first();
if (!user) {
      const forbotembed = new Discord.MessageEmbed()
      .setDescription(`No más, **${autor.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(forbotembed)
    };
        if(autor.id === user.user.id) {
          const embedcoincidence = new Discord.MessageEmbed()
          .setDescription(`**${autor.username}** imagina que está abofeteando a alguien...`)
          .setImage(gif)
          .setColor("RANDOM")
          msg.channel.send(embedcoincidence)
        } else {
      const goodembed = new Discord.MessageEmbed()
      .setDescription(`**${autor.username}** ha abofeteado a **${user.user.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(goodembed)     
    }
  }
}
