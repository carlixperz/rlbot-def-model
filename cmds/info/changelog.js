const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class ChangelogCommand extends Command {
 constructor(){
 super({
 name: 'changelog',
 aliases: 'updatechanges',
 priority: 1,
 permLvl: 0
 })
 }
execute(msg){
 const embed = new Discord.MessageEmbed()
 .setDescription('**RLBot v3.0 - Modular Update**')
 .setFooter('Changelog for v3.0')
 .setColor("#0088ff")
 .addFields(
 {
 name: "¡HAN VUELTO! - Comandos de interacción (I)",
 value: "Algunos comandos de interacción han vuelto para quedarse. Gracias a las npms de marsnpm y ainasepics, hemos conseguido añadir comandos de interacción funcionales.",
 inline: true
 },
{
 name: "Futuras novedades – Prefix personalizables",
 value: "Mediante el uso de bases de datos, podremos añadir prefijos que funcionen en un servidor en concreto y que se puedan personalizar.",
 inline: true
 },
{
 name: "Comandos NSFW: Temporalmente inhabilitados",
 value: "Los comandos NSFW han sido inhabilitados por su baja calidad de ejecución. Volverán a ser reactivados en futuras versiones",
 inline: true
 },
 );
msg.channel.send(embed);
 }
}