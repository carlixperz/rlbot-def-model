const Discord = require("discord.js");
const marsnpm = require("marsnpm");

const { Command } = require('../../commands.js')
module.exports = class PixelCommand extends Command {
  constructor(){
    super({
      name: 'pixel',
      aliases: '',
      priority: 3,
      permLvl: 3
    })
  }
  async execute(msg){
    let author = msg.author;
    var user = msg.mentions.members.first();
if(!user){
  let img1 = await marsnpm.pixel(author.displayAvatarURL());
  const embed1 = new Discord.MessageEmbed()
  .setDescription(`Tu avatar editado, **${author.username}**`)
  .setImage(img1)
  .setColor("RANDOM")
  
  msg.channel.send(embed1)
    }
      if(user){
        let img2 = await marsnpm.pixel(user.user.displayAvatarURL());
        const embed2 = new Discord.MessageEmbed()
        .setDescription(`Avatar editado de **${user.user.username}**`)
        .setImage(img2)
        .setColor("RANDOM")
        
        msg.channel.send(embed2)
      }
  }
}