const config = require("../../config.js");
let prefix = config.prefix;


const { Command } = require('../../commands.js')
module.exports = class DicksizeCommand extends Command {
  constructor(){
    super({
      name: 'dicksize',
      aliases: 'penissize',
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
      let size = [
      "no existe o es microscópico",
      "mide 1cm",
      "mide 2cm",
      "mide 3cm",
      "mide 4cm",
      "mide 5cm",
      "mide 6cm",
      "mide 7cm",
      "mide 8cm",
      "mide 9cm",
      "mide 10cm",
      "mide 11cm",
      "mide 12cm",
      "mide 13cm",
      "mide 14cm",
      "mide 15cm",
      "mide 16cm",
      "mide 17cm",
      "mide 18cm",
      "mide 19cm",
      "mide 20cm",
      "mide 21cm",
      "mide 22cm",
      "mide 23cm",
      "mide 24cm",
      "mide 25cm",
      "mide 26cm",
      "mide 27cm",
      "mide 28cm",
      "mide 29cm",
      "mide 30cm",
      "es tan grande que no soy capaz de medirlo"
    ];
    let randomsize = size[Math.floor(Math.random() * size.length)];
    let mention = msg.mentions.users.first();
    if (!mention) return msg.reply("creo que tu rabo " + randomsize);
    msg.channel.send("El rabo de <@" + mention + "> " + randomsize);
  }
}