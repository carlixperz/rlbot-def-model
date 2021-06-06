const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class DevCommand extends Command {
  constructor(){
    super({
      name: 'dev',
      aliases: 'developer',
      priority: 3,
      permLvl: 1
    })
  }
  async execute(msg){
    const embed = new Discord.MessageEmbed()
    .setTitle("Datos del desarrollador")
    .setColor("#0088ff")
    .setImage("https://images-ext-2.discordapp.net/external/tUPjELjFiE60weDyGD8H3P2Sdn28L9n-U_2bq53Maug/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/607571230303977493/2cdddec48efabc6b46b136a1b08b9d1b.png?width=670&height=670")
     .addFields(
                {
                    name: "Nombre: ",
                    value: `CarlixDev`,
                    inline: true
                },
                {
                    name: "Tag: ",
                    value: `#9025`,
                },
                {
                    name: 'ID: ',
                    value: `607571230303977493`,
                    inline: true
                },
                
            );
  msg.channel.send(embed)
  }
}