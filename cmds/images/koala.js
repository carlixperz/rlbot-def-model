const Discord = require("discord.js");
const randomAnimal = require("random-animal.js")

const { Command } = require('../../commands.js')
module.exports = class KoalaCommand extends Command {
  constructor(){
    super({
      name: 'koala',
      aliases: '',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
    randomAnimal.randomKoala().then((koala) => {
    const embed = new Discord.MessageEmbed()
      .setImage(koala)
      .setColor("RANDOM")
      .setDescription("**Toma un koala** 🐨");
    msg.channel.send(embed);
    })
  }
}