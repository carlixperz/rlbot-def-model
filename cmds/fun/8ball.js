const Discord = require("discord.js");
const config = require("../../config.js");
let prefix = config.prefix;


const { Command } = require('../../commands.js')
module.exports = class PoolballCommand extends Command {
  constructor(){
    super({
      name: '8ball',
      aliases: 'blackpoolball',
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      let as = args.slice(1).join(' ');
    if(!as){
      return msg.reply('no sé qué quieres que te diga...')
    } else {
            let answers = ["Sí", "No", "Mejor pregúntame otra cosa...", "No creo que pueda ser posible", "Estoy seguro de que sí", "Estoy seguro de que no", "Es probable", "No es muy probable", "Te puedo asegurar que eso es falso", "¡Vaya! Me falla la conexión. Gracias, Movistar...", "Imposible", "Obvio", "Te pido encarecidamente que me dejes descansar..."];
      let rans = answers[Math.floor(Math.random() * answers.length)];
      
      const embed = new Discord.MessageEmbed()
      .setDescription('**Valoración sobre 10**')
      .setColor("RANDOM")
      .addField('**Objeto a valorar:**', as)
      .addField('**Valoración:**', rans);
      msg.channel.send(embed)
    }
  }
}


