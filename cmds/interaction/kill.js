const Discord = require("discord.js");
const marsnpm = require("marsnpm");

const { Command } = require('../../commands.js')
module.exports = class KillCommand extends Command {
  constructor(){
    super({
      name: 'kill',
      aliases: 'slain',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
    let gif = await marsnpm.kill();
    var autor = msg.author;
    var user = msg.mentions.members.first();
    if (!user) return msg.reply(`ten piedad...`)
        if(autor.id === user.user.id) {
          const embedcoincidence = new Discord.MessageEmbed()
          .setDescription(`**${autor.username}** imagina que está matando a alguien...`)
          .setImage(gif)
          .setColor("RANDOM")
          .setFooter(`¿De verdad ibas a suicidarte, ${user.user.username}?`);
          msg.channel.send(embedcoincidence)
        } else {
      const goodembed = new Discord.MessageEmbed()
      .setDescription(`**${autor.username}** ha matado a **${user.user.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(goodembed)     
    }
  }
}
