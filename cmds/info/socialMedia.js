   const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class socialMediaCommand extends Command {
  constructor(){
    super({
      name: 'socialmedia',
      aliases: 'social',
      priority: 1,
      permLvl: 0
    })
  }
  execute(msg){
    function randomColor(str) {
      let color = str[Math.floor(Math.random() * str.length)];
      return color
    }
      let colors = ["BLUE", "AQUA", "GREEN", "RED", "PURPLE"];
const index = new Discord.MessageEmbed()
    .setTitle('**Redes sociales de CarlixDev**')
    .setColor(randomColor(colors))
    .addField("**Youtube**", `[CarlixInDaHouse](https://www.youtube.com/channel/UCgDWP-ztym44tQo5ld0bAEw)`)
    .addField("**Twitter**", `[@Carl1xP](https://twitter.com/Carl1xP)`)
    .addField("**Spotify**", `[CarlixPerz](https://open.spotify.com/artist/5tD0TWNzKl94KNcvPfwoTb?si=OPNLs7FFREuT47CGdehv5g)`);
  
msg.channel.send(index)
  }
}