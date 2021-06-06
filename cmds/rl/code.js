const Discord = require("discord.js");
const config = require("../../config.js");
let prefix = config.prefix;


const { Command } = require('../../commands.js')
module.exports = class CodeCommand extends Command {
  constructor(){
    super({
      name: 'code',
      aliases: '',
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
      msg.channel.send("Recuerda: Código RANDOMLAIF mal escrito en la tienda del Fortnite, del Rocket League, de la Epic Store, etc.")
  }
}