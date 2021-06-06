const Discord = require("discord.js");
const db = require("../../database/database.js")

const { Command } = require('../../commands.js')
module.exports = class setPrefixCommand extends Command {
 constructor() {
  super({
   name: 'setprefix',
   aliases: ['spe'],
   priority: 5,
   permLvl: 3
  })
 }
 async execute(msg, args) {
  if(!args[0]) return msg.channel.send(`Si no pones un prefijo personalizado, seguiré con el de siempre...`)

  let exists = await db.admin.existsPrefix(msg.guild.id)
  if(exists) {
   await db.admin.updatePrefix(msg.guild.id, args[0])

  } else {
   await db.admin.addPrefix(msg.guild.id, args[0])

  }
  msg.channel.send(`Nuevo prefijo **${args[0]}**, para **${msg.guild.name}**`)
 }
}
