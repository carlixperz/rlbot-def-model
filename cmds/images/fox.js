const Discord = require("discord.js");
const randomAnimal = require("random-animal.js")

const { Command } = require('../../commands.js')
module.exports = class FoxCommand extends Command {
  constructor(){
    super({
      name: 'fox',
      aliases: '',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
    randomAnimal.randomFox().then((fox) => {
    const embed = new Discord.MessageEmbed()
      .setImage(fox)
      .setColor("RANDOM")
      .setDescription("**Toma un zorro** 🦊");
    msg.channel.send(embed);
    })
  }
}