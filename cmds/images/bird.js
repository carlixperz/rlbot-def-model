const Discord = require("discord.js");
const randomAnimal = require("random-animal.js")

const { Command } = require('../../commands.js')
module.exports = class BirdCommand extends Command {
  constructor(){
    super({
      name: 'bird',
      aliases: '',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
    randomAnimal.randomBird().then((bird) => {
    const embed = new Discord.MessageEmbed()
      .setImage(bird)
      .setColor("RANDOM")
      .setDescription("**Toma un pajarito** 🐦");
    msg.channel.send(embed);
    })
  }
}