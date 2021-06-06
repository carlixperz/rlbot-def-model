const Discord = require("discord.js");
const star = require('star-labs');

const { Command } = require('../../commands.js')
module.exports = class KissCommand extends Command {
  constructor(){
    super({
      name: 'kiss',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
    let gif = star.kiss();
    var autor = msg.author;
    var user = msg.mentions.members.first();
    if (!user) {
      const forbotembed = new Discord.MessageEmbed()
      .setDescription(`Te amo, **${autor.username}**...`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(forbotembed)
    };
        if(autor.id === user.user.id) {
          const embedcoincidence = new Discord.MessageEmbed()
          .setDescription(`**${autor.username}** imagina que está besando a alguien...`)
          .setImage(gif)
          .setColor("RANDOM")
          .setFooter(`¿De verdad ibas a besarte a ti mismo, ${user.user.username}?`);
          msg.channel.send(embedcoincidence)
        } else {
      const goodembed = new Discord.MessageEmbed()
      .setDescription(`**${autor.username}** ha besado a **${user.user.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(goodembed)     
    }
  }
}
