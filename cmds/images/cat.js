const Discord = require("discord.js");
const randomAnimal = require("random-animal.js")

const { Command } = require('../../commands.js')
module.exports = class CatCommand extends Command {
  constructor(){
    super({
      name: 'cat',
      aliases: 'kitten',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
    randomAnimal.randomCat().then((cat) => {
    const embed = new Discord.MessageEmbed()
      .setImage(cat)
      .setColor("RANDOM")
      .setDescription("**Toma un gatito** 🐱");
    msg.channel.send(embed);
    })
  }
}