const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class DonateCommand extends Command {
  constructor(){
    super({
      name: 'donate',
      aliases: 'givemoneytothedevelopertocurehispoverty',
      priority: 1,
      permLvl: 0
    })
  }
  execute(msg){

    const embed = new Discord.MessageEmbed()
    .setDescription('**¿Quieres apoyarnos?**')
    .setColor("#f96854")
    .setThumbnail("https://cdn.icon-icons.com/icons2/2429/PNG/512/patreon_logo_icon_147253.png")
    .addField('**Gracias por tu decisión**', 'Soy un bot pequeño en desarrollo. Gracias a gente como tú, puedo crecer y llegar a más usuarios.')
    .addField('**Patreon**', `[Mi página de Patreon](https://www.patreon.com/carlixdev)`);
    msg.channel.send(embed)
  }
}