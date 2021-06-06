const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class InviteCommand extends Command {
  constructor(){
    super({
      name: 'invite',
      aliases: '',
      priority: 1,
      permLvl: 0
    })
  }
  execute(msg){
const embed = new Discord.MessageEmbed()
    .setDescription('**¿Quieres apoyarnos?**')
    .addField('**Gracias por tu decisión**', 'Soy un bot pequeño en desarrollo. Gracias a gente como tú, puedo crecer y llegar a más usuarios.')
    .addField('**Invitación:**', 'https://discordapp.com/oauth2/authorize?client_id=637421092264476675&scope=bot&permissions=8');
    msg.channel.send(embed)
  }
}