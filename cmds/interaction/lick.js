const Discord = require("discord.js");
const star = require('star-labs');

const { Command } = require('../../commands.js')
module.exports = class LickCommand extends Command {
  constructor(){
    super({
      name: 'lick',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  execute(msg){
    let gif = star.lick();
    var autor = msg.author;
    var user = msg.mentions.members.first();
if (!user) {
      const forbotembed = new Discord.MessageEmbed()
      .setDescription(`¿Q-qué haces, **${autor.username}-senpai**...?`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(forbotembed)
    };
        if(autor.id === user.user.id) {
          const embedcoincidence = new Discord.MessageEmbed()
          .setDescription(`**${autor.username}** imagina que está lamiendo a alguien...`)
          .setImage(gif)
          .setColor("RANDOM")
          .setFooter(`Eres muy raro, ${user.user.username}...`);
          msg.channel.send(embedcoincidence)
        } else {
      const goodembed = new Discord.MessageEmbed()
      .setDescription(`**${autor.username}** ha lamido a **${user.user.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(goodembed)     
    }
  }
}
