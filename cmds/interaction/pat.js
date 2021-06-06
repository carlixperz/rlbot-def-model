const Discord = require("discord.js");
const star = require('star-labs');

const { Command } = require('../../commands.js')
module.exports = class PatCommand extends Command {
  constructor(){
    super({
      name: 'pat',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
    let gif = await star.pat();
    var autor = msg.author;
    var user = msg.mentions.members.first();
if (!user) {
      const forbotembed = new Discord.MessageEmbed()
      .setDescription(`Acaríciame más, **${autor.username}** >w<`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(forbotembed)
    };
        if(autor.id === user.user.id) {
          const embedcoincidence = new Discord.MessageEmbed()
          .setDescription(`**${autor.username}** imagina que está acariciando a alguien...`)
          .setImage(gif)
          .setColor("RANDOM")
          msg.channel.send(embedcoincidence)
        } else {
      const goodembed = new Discord.MessageEmbed()
      .setDescription(`**${autor.username}** ha acariciado a **${user.user.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(goodembed)     
    }
  }
}
