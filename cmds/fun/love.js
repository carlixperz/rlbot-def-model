const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class LoveCommand extends Command {
  constructor(){
    super({
      name: 'love',
      aliases: '',
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
     let emisor = msg.author;
    let mention = msg.mentions.users.first();
    if (!mention)
      return msg.reply(
        "Si quierías hacer el comando contigo mismo, siempre será un 100%...");
  let no = ["0"];
  let low = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      ];
    let rlow = low[Math.floor(Math.random() * low.length)];
  let mediumlow = ["21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      ];
      let rml = mediumlow[Math.floor(Math.random() * mediumlow.length)];
    let medium = ["41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "60",
     ];
     let rmedium = medium[Math.floor(Math.random() * medium.length)];
  let mediumhigh = [ "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "68",
      "69",
      "70",
      "71",
      "72",
      "73",
      "74",
      "75",
      "76",
      "77",
      "78",
      "79",
      "80",
      ];
      let rmh = mediumhigh[Math.floor(Math.random() * mediumhigh.length)];
  let high = ["81",
      "82",
      "83",
      "84",
      "85",
      "86",
      "87",
      "88",
      "89",
      "90",
      "91",
      "92",
      "93",
      "94",
      "95",
      "96",
      "97",
      "98",
      "99",
      "100",
      ];
  let rhigh = high[Math.floor(Math.random() * high.length)];

  
  const embed0 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("**Porcentaje de compatibilidad amorosa: " + no + "%**")
  .addField("**Usuario 1:**", emisor)
  .addField("**Usuario 2:**", mention)
  .addField("**Consejo:**", "No deberíais ser ni amigos, lo siento...");

    const embed1 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("**Porcentaje de compatibilidad amorosa: " + rlow + "%**")
  .addField("**Usuario 1:**", emisor)
  .addField("**Usuario 2:**", mention)
  .addField("**Consejo:**", "Tal vez lo mejor sea quedarse como amigos y nada más...");

    const embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("**Porcentaje de compatibilidad amorosa: " + rml + "%**")
  .addField("**Usuario 1:**", emisor)
  .addField("**Usuario 2:**", mention)
  .addField("**Consejo:**", "Es posible que os acabéis juntando en un futuro, pero no lo tengo claro. ¿Tal vez mejores amigos?");

    const embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("**Porcentaje de compatibilidad amorosa: " + rmedium + "%**")
  .addField("**Usuario 1:**", emisor)
  .addField("**Usuario 2:**", mention)
  .addField("**Consejo:**", "Tenéis algo, deberíais intentarlo al menos una vez.");

    const embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("**Porcentaje de compatibilidad amorosa: " + rmh + "%**")
  .addField("**Usuario 1:**", emisor)
  .addField("**Usuario 2:**", mention)
  .addField("**Consejo:**", "Os veo juntos, y si tenéis ganas acabaréis unidos.");

    const embed5 = new Discord.MessageEmbed()
  .setColor("#ff46a4")
  .setDescription("**Porcentaje de compatibilidad amorosa: " + rhigh + "%**")
  .addField("**Usuario 1:**", emisor)
  .addField("**Usuario 2:**", mention)
  .addField("**Consejo:**", "Definitivamente tenéis que intentarlo, os veo futuro a ambos.")


  let embeds = [embed0, embed1, embed2, embed3, embed4, embed5];
  let rembed = embeds[Math.floor(Math.random() * embeds.length)];

  msg.channel.send(rembed);
  
  }
}