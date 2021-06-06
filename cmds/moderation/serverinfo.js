const Discord = require("discord.js");


const { Command } = require('../../commands.js')
module.exports = class ServerinfoCommand extends Command {
  constructor(){
    super({
      name: 'serverinfo',
      aliases: '',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
     var server = msg.guild;
if(!server) {
  return msg.channel.send("Esto no es un servidor")
}

const embed = new Discord.MessageEmbed()
.setDescription("**Información del servidor**")
.setThumbnail(server.iconURL())
.setAuthor(server.name, server.iconURL())
.addField('**ID**', server.id, true)
.addField('**Fecha de creación:**',`${server.joinedAt}`, true)
.addField("**Región:**", msg.guild.region, true)
.addField("**Propietario/a:**",`${server.owner.user}`, true)
.addField('**Miembros**', server.memberCount, true)
.addField("**Bots:**",`${msg.guild.members.cache.filter(m => m.user.bot).size}`, true)
.addField('**Boosts:**',msg.guild.premiumSubscriptionCount.toString(), true)
.addField('**Nivel de verificación:**',`${server.verificationLevel}`, true)
.addField('**Roles:**', server.roles.cache.size, true)
.setColor("#a956cb")
msg.channel.send(embed);
  }
}