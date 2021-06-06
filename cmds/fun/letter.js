const Discord = require("discord.js");
const config = require("../../config.js");
let prefix = config.prefix;

const { Command } = require('../../commands.js')
module.exports = class LetterCommand extends Command {
  constructor(){
    super({
      name: 'letter',
      aliases: 'sendletter',
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    if(args.length < 2) {
      const embed = new Discord.MessageEmbed()
      .setTitle("**¿Necesitas ayuda?**")
      .setDescription("Comando `rl!letter`")
      .setColor("#BDBDBD")
      .addField("**Descripción**", "¡Envíale una carta a alguien con este comando!")
      .addField("**Uso**", "`rl!letter <usuario> <mensaje>`")
      .addField("**Ejemplo**", "rl!letter <@607571230303977493> ¡Hola, desarrollador!")
      .addField("**Nota**", "Sólo funciona mencionando a usuarios del servidor. No funciona por MD.");
      msg.channel.send(embed)
    } else {
        var user = msg.mentions.members.first();
        var author = msg.author;
        var mensaje = args.slice(2).join(" ");
        if(!user) {
          return msg.reply("No has mencionado a nadie, así que no he enviado la carta")
        }
        if(user.user.id === author.id) {
          return msg.reply("No puedo enviarte una carta a ti.")
        }
        if(user.user.id !== author.id) {
          if(msg.deletable) msg.delete();
          let times = [60000, 120000, 180000, 240000, 300000];
          let timer = times[Math.floor(Math.random() * times.length)];
          setTimeout(() => {
            user.user.createDM(true);
          const letterSend = new Discord.MessageEmbed()
          .setTitle("📩 **¡Has recibido una carta!** 📩")
          .setDescription(`_${author.username}_ ha utilizado el correo postal para enviarte un mensaje...`)
          .setColor("#BDBDBD")
          .addField("**La carta dice...**", mensaje);
          user.user.send(letterSend)
          .catch(err => msg.reply("No puedo enviarle la carta, tal vez no quiere recibir cartas..."));
          }, timer);
        }
    }
  }
}