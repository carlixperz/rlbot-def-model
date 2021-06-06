const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class HoroscopeCommand extends Command {
  constructor(){
    super({
      name: 'horoscope',
      aliases: '',
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
let pc = [
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
      "21",
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
      "41",
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
      "61",
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
      "81",
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
      "100"
    ];
    let amor = pc[Math.floor(Math.random() * pc.length)];
    let salud = pc[Math.floor(Math.random() * pc.length)];
    let trabajo = pc[Math.floor(Math.random() * pc.length)];
    let dinero = pc[Math.floor(Math.random() * pc.length)];
    let fortuna = pc[Math.floor(Math.random() * pc.length)];
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage("https://abcnutrisalud.files.wordpress.com/2017/03/horoscopo.gif")
.setDescription("**Horóscopo**")
.addField("**Amor:**", (amor + "%"))
.addField("**Salud:**", (salud + "%"))
.addField("**Trabajo:**", (trabajo + "%"))
.addField("**Dinero:**", (dinero + "%"))
.addField("**Fortuna:**", (fortuna + "%"))
.setFooter("Este comando sólo muestra porcentajes aleatorios");
return msg.reply(embed);
  }
}