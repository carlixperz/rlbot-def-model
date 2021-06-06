const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class BuglistCommand extends Command {
 constructor(){
 super({
 name: 'buglist',
 aliases: 'reportedbugs',
 priority: 1,
 permLvl: 0
 })
 }
execute(msg){
 const embed = new Discord.MessageEmbed()
 .setDescription('**RLBotv3.0 - Modular Update**')
 .setFooter('Buglist for v3.0')
 .setColor("RED")
 .addFields(
 {
 name: "Bug INT-1",
 value: "En algunos comandos de interacción, cuando te mencionas a tí mismo, apareces como autor y receptor de la acción de forma simultánea. STATUS: _RESUELTO_",
 inline: true
 },
{
 name: "Bug INT-2",
 value: "A veces no aparecen los gifs de los comandos de interacción. STATUS: _RESUELTO_",
 inline: true
 },
{
 name: "Bug FUN-1",
 value: "En el comando rl!rate, si no pones nada para valorar, valora la nada. STATUS: _RESUELTO_",
 inline: true
 },
   {
 name: "Para reportar bugs:",
 value: `[Servidor de soporte](https://discord.gg/dwQsP2ssQR)`,
 inline: true
 },
 );
msg.channel.send(embed);
 }
}
