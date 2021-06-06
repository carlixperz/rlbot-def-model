const Discord = require("discord.js");
const config = require("../../config.js");
let prefix = config.prefix;


const { Command } = require('../../commands.js')
module.exports = class RateCommand extends Command {
  constructor(){
    super({
      name: 'rate',
      aliases: '',
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      let as = args.slice(1).join(' ');
    if(!as){
      return msg.reply('necesito que especifiques lo que tengo que valorar...')
    } else {
      let numbers = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ];
    let randomnumber = numbers[Math.floor(Math.random() * numbers.length)];
      const embed = new Discord.MessageEmbed()
      .setDescription('**Valoración sobre 10**')
      .setColor("RANDOM")
      .addField('**Objeto a valorar:**', as)
      .addField('**Valoración:**', randomnumber);
      msg.channel.send(embed)
    }
  }
}