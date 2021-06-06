const Discord = require("discord.js");
const star = require('star-labs');

const { Command } = require('../../commands.js')
module.exports = class FeedCommand extends Command {
  constructor(){
    super({
      name: 'feed',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
    let gif = await star.feed();
    var autor = msg.author;
    var user = msg.mentions.members.first();
    if (!user) {
      const forbotembed = new Discord.MessageEmbed()
      .setDescription(`Awww... gracias por la comida, **${autor.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(forbotembed)
    };
        if(autor.id === user.user.id) {
          const embedcoincidence = new Discord.MessageEmbed()
          .setDescription(`**${autor.username}** imagina que está alimentando a alguien...`)
          .setImage(gif)
          .setColor("RANDOM")
          msg.channel.send(embedcoincidence)
        } else {
      const goodembed = new Discord.MessageEmbed()
      .setDescription(`**${autor.username}** le ha dado de comer a **${user.user.username}**`)
      .setImage(gif)
      .setColor("RANDOM");
      msg.channel.send(goodembed)     
    }
  }
}
