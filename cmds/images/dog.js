const Discord = require("discord.js");
const randomAnimal = require("random-animal.js")

const { Command } = require('../../commands.js')
module.exports = class DogCommand extends Command {
  constructor(){
    super({
      name: 'dog',
      aliases: '',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
    randomAnimal.randomDog().then((dog) => {
    const embed = new Discord.MessageEmbed()
      .setImage(dog)
      .setColor("RANDOM")
      .setDescription("**Toma un perrito** 🐶");
    msg.channel.send(embed);
    })
  }
}