const Discord = require("discord.js");
const star = require('star-labs');

const { Command } = require('../../commands.js')
module.exports = class HugCommand extends Command {
  constructor(){
    super({
      name: 'hug',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  execute(msg){
    let gif = star.hug();
    var autor = msg.author;
    var user = msg.mentions.members.first();
    if (!user) {
      const forbotembed = new Discord.MessageEmbed()
      .setDescription(`Awww... gracias por el abrazo, **${autor.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(forbotembed)
    };
        if(autor.id === user.user.id) {
          const embedcoincidence = new Discord.MessageEmbed()
          .setDescription(`**${autor.username}** imagina que está abrazando a alguien...`)
          .setImage(gif)
          .setColor("RANDOM")
          .setFooter(`¿De verdad ibas a abrazarte a ti mismo, ${user.user.username}?`);
          msg.channel.send(embedcoincidence)
        } else {
      const goodembed = new Discord.MessageEmbed()
      .setDescription(`**${autor.username}** ha abrazado a **${user.user.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(goodembed)     
    }
  }
}
