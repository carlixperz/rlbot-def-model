const Discord = require("discord.js");
const randomAnimal = require("random-animal.js")

const { Command } = require('../../commands.js')
module.exports = class PandaCommand extends Command {
  constructor(){
    super({
      name: 'panda',
      aliases: '',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
    randomAnimal.randomPanda().then((panda) => {
    const embed = new Discord.MessageEmbed()
      .setImage(panda)
      .setColor("RANDOM")
      .setDescription("**Toma un oso panda** 🐼");
    msg.channel.send(embed);
    })
  }
}