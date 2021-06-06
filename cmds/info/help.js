const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class HelpCommand extends Command {
  constructor(){
    super({
      name: 'help',
      aliases: 'h',
      priority: 1,
      permLvl: 0
    })
  }
  execute(msg){
    const indice1 = new Discord.MessageEmbed()
    .setTitle('🛡 | Ayuda')
    .setColor("WHITE")
    .setDescription('**RLbot v3.0 by CarlixDev - Lista de comandos**')
    .addField('🔧**-Sobre el bot**', " Muestra algunos de los comandos sobre el bot.")
    .addField('🤝**-Interacción**', " Muestra los comandos de interacción disponibles.")
    .addField('📷**-Imágenes**', " Muestra comandos que enseñan imágenes aleatorias.")
    .addField('📱**-Entretenimiento**', " Muestra algunos comandos para entretenerse y perder el tiempo. ")
    .addField('👀**-Ocultos**', " Muestra algunos comandos un poco escondidos.")
    .addField('**Servidor de Soporte: **', `[RLBot Support](https://discord.gg/dwQsP2ssQR)`)
      
    
    const help_bot = new Discord.MessageEmbed()
    .setTitle('🔧 | Ayuda')
    .setDescription('Comandos del bot')
    .setColor("#afafaf")
    .addField("**rl!help**", "Lista de comandos")
    .addField("**rl!invite**", "Invita al bot a tu servidor")
    .addField("**rl!donate**", "Dona dinero al desarrollador para que no se muera de hambre")
    .addField("**rl!changelog**", "Muestra la lista de cambios del bot en la última versión.")
    .addField("**rl!buglist**", "Muestra la lista de bugs reportados.")
    .setFooter(`Usa 🌎 para volver al índice`)
    
 const help_inter = new Discord.MessageEmbed()
    .setTitle('🤝 | Ayuda')
    .setDescription('Comandos de interacción')
    .setColor("#ffce00")
    .addField("**rl!blush**", "Sonrójate, ya sabemos lo que significa...")
    .addField("**rl!confused**", "Siéntete confundido/a.")
    .addField("**rl!cry**", "Llora, no está mal hacerlo...")
    .addField("**rl!dance**", "Baila (o inténtalo)")
    .addField("**rl!feed**", "Sacia el hambre de alguien.")
    .addField("**rl!happy**", "¡Siente la maravillosa sensación de felicidad!")
    .addField("**rl!hi**", "Saluda a alguien, no seas descortés.")
    .addField("**rl!hug**", "Abraza a alguien... ¡n-no tan fuerte!")
    .addField("**rl!kill**", "Mata a alguien. Te aconsejo no hacerlo.")
    .addField("**rl!kiss**", "Besa a alguien... Pero no os enrolléis demasiado.")
    .addField("**rl!lick**", "Lame a alguien, pero no te pases de la raya...")
    .addField("**rl!pat**", "Acaricia a alguien  (o a mí)")
    .addField("**rl!punch**", "Pégale un puñetazo a quien quieras, pero asegúrate de tener motivos.")
    .addField("**rl!slap**", "¡Déjale la cara roja a alguien de una bofetada!")
    .addField("**rl!sleep**", "Es hora de dormir, buenas noches.")
    .setFooter(`Usa 🌎 para volver al índice`)
 
 const help_image = new Discord.MessageEmbed()
    .setTitle('📷 | Ayuda')
    .setDescription('Comandos de generación de Imágenes')
     .setColor("#292929")
     .addField("**rl!avatar**", "Muestra tu avatar o el de alguien...")
     .addField("**rl!cat**", "Muestra una imagen de un gato")
     .addField("**rl!dog**", "Muestra una imagen de un perro")
     .addField("**rl!fox**", "Muestra una imagen de un zorro")
     .addField("**rl!panda**", "Muestra una imagen de un oso panda")
     .addField("**rl!bird**", "Muestra una imagen de un pájaro")
     .addField("**rl!koala**", "Muestra una imagen de un koala")
    .setFooter(`Usa 🌎 para volver al índice`)
    
    const help_fun = new Discord.MessageEmbed()
    .setTitle('📱 | Ayuda')
    .setDescription('Comandos de entretenimiento')
    .setColor("#0088ff")
    .addField("**rl!chat**", "Para charlar un poco")
    .addField("**rl!rate**", "Para valorar cosas del 0 a 10")
    .addField("**rl!dicksize**", "Para medir tamaños de rabo")
    .addField("**rl!howgay**", "Para saber cómo de gay es alguien")
    .addField("**rl!8ball**", "Pregunta y yo respondo")
    .addField("**rl!randomuser**", "Para elegir un usuario al azar")
    .addField("**rl!love**", "Mide la compatibilidad amorosa entre un usuario y tú mismo")
    .addField("**rl!rps**", "Juega al clásico piedra, papel, tijeras contra mí >:3")
    .addField("**rl!letter**", "Envíale una carta a un usuario del servidor. `Comando en revisión`")
    .setFooter(`Usa 🌎 para volver al índice`)
    
const help_hide = new Discord.MessageEmbed()
    .setTitle('👀 | Ayuda')
    .setDescription('Comandos semiocultos')
    .setColor("BLACK")
    .addField("**Comandos secretos**", " Los comandos secretos serán activados en próximas versiones.") 
    .setFooter(`Usa 🌎 para volver al índice`)


   
      msg.channel.send(indice1).then(m => {
        m.react('🌎')
        m.react('🔧')
        m.react('📷')
        m.react('🤝')
        m.react('📱')
        m.react('👀')
        m.awaitReactions((reaction, user) => {
            const userReactions = m.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
            if(msg.author.id !== user.id) return; 
    
            if(reaction.emoji.name === '🔧') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(help_bot);
            }
            if(reaction.emoji.name === '🤝') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(help_inter);
            }
             if(reaction.emoji.name === '📷') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(help_image);
            }
            if(reaction.emoji.name === '🌎') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id); 
                }
            } catch(error) { console.error(error) }
                m.edit(indice1); 
            }
if(reaction.emoji.name === '📱') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id); 
                }
            } catch(error) { console.error(error) }
                m.edit(help_fun); 
            }
if(reaction.emoji.name === '👀') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id); 
                }
            } catch(error) { console.error(error) }
                m.edit(help_hide); 
            }
        })
    })
    
  }
}