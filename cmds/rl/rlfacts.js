const Discord = require("discord.js");
const config = require("../../config.js");
let prefix = config.prefix;


const { Command } = require('../../commands.js')
module.exports = class RlfactsCommand extends Command {
  constructor(){
    super({
      name: 'rlfact',
      aliases: 'randomlifefact',
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
      let answers = ["No funciona xd"]
     let rans = answers[Math.floor(Math.random() * answers.length)];
      msg.channel.send(rans)
  }
}