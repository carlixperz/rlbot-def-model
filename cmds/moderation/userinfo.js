const Discord = require("discord.js");


const { Command } = require('../../commands.js')
module.exports = class UserinfoCommand extends Command {
  constructor(){
    super({
      name: 'userinfo',
      aliases: '',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
          let user = msg.mentions.members.first();
if(!user) {
  return msg.reply("No puedo hacerlo, no he sido programado para ello.")
}
if(user) {
const embed = new Discord.MessageEmbed()
            .setDescription("**Informacion del usuario: " + user.user.username + "**") 
            .setColor("#a956cb")
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addField("Tag: ", `#${user.user.discriminator}`, true)
            .addField("ID: ", `${user.user.id}`, true)
            .addField("Avatar link: ", `[Pincha Aquí](${user.user.displayAvatarURL()})`, true)
            .addField("Fecha de creación de la cuenta: ", user.user.createdAt.toLocaleDateString("es-ES"), true)
            .addField("Fecha de entrada al servidor: ", user.joinedAt.toLocaleDateString("es-ES"), true)
            .addField("Roles: ", user.roles.cache.map(role => role.toString()).join(" - "), true);

         msg.channel.send(embed);
    }      
  }
}