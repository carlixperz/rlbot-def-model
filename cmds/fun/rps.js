const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class RPSCommand extends Command {
  constructor(){
    super({
      name: 'rps',
      aliases: 'ppt',
      priority: 1,
      permLvl: 0
    })
  }
  execute(msg){
    
    
    const index = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, o tijeras?**`)
    .setDescription(`¡Usa las reacciones para jugar, ${msg.author.username}!`)
    .addField("🏔", "Par elegir **piedra**")
    .addField("📃", "Par elegir **papel**")
    .addField("✂️", "Par elegir **tijeras**")
    
    
    
    const rock1 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, o tijeras?**`)
    .setColor("GREEN")
    .setDescription(`🏔 ¡Has ganado! ✂️`)
    .addField("Has elegido:", "Piedra")
    .addField("He elegido:", "Tijeras")
    .setFooter("Piedra aplasta tijeras")

        const rock2 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, o tijeras?**`)
    .setColor("WHITE")
    .setDescription(`🏔 ¡Empate! 🏔`)
    .addField("Has elegido:", "Piedra")
    .addField("He elegido:", "Piedra")
    .setFooter("Piedra y piedra")
        
            const rock3 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, o tijeras?**`)
    .setColor("RED")
    .setDescription(`🏔 ¡Has perdido! 📃`)
    .addField("Has elegido:", "Piedra")
    .addField("He elegido:", "Papel")
    .setFooter("Papel cubre piedra")

            const paper1 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, o tijeras?**`)
    .setColor("GREEN")       
    .setDescription(`📃 ¡Has ganado! 🏔`)
    .addField("Has elegido:", "Papel")
    .addField("He elegido:", "Piedra")
    .setFooter("Papel cubre piedra")

        const paper2 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, o tijeras?**`)
    .setColor("WHITE")
    .setDescription(`📃 ¡Empate! 📃`)
    .addField("Has elegido:", "Papel")
    .addField("He elegido:", "Papel")
    .setFooter("Papel y papel")
        
            const paper3 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, o tijeras?**`)
    .setColor("RED")
    .setDescription(`📃 ¡Has perdido! ✂️`)
    .addField("Has elegido:", "Papel")
    .addField("He elegido:", "Tijera")
    .setFooter("Tijeras cortan papel")
            
            const scissors1 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, o tijeras?**`)
    .setColor("GREEN")
    .setDescription(`✂️ ¡Has ganado! 📃`)
    .addField("Has elegido:", "Tijeras")
    .addField("He elegido:", "Papel")
    .setFooter("Tijeras cortan papel")

        const scissors2 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, o tijeras?**`)
    .setColor("WHITE")
    .setDescription(`✂️ ¡Empate! ✂️`)
    .addField("Has elegido:", "Tijeras")
    .addField("He elegido:", "Tijeras")
    .setFooter("Tijeras y tijeras")
        
            const scissors3 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, o tijeras?**`)
    .setColor("RED")
    .setDescription(`✂️ ¡Has perdido! 🏔`)
    .addField("Has elegido:", "Tijeras")
    .addField("He elegido:", "Piedra")
    .setFooter("Piedra aplasta tijeras")
     
     
            
    msg.channel.send(index).then(m => {
        m.react('🏔')
        m.react('📃')
        m.react('✂️')
        m.awaitReactions((reaction, user) => {
            const userReactions = m.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
            if(msg.author.id !== user.id) return; 
    
            if(reaction.emoji.name === '🏔') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
              let options = [rock1, rock2, rock3];
                    let ans = options[Math.floor(Math.random() * options.length)];
                m.edit(ans);
            }
          if(reaction.emoji.name === '📃') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                let options2 = [paper1, paper2, paper3];
                    let ans2 = options2[Math.floor(Math.random() * options2.length)];
                m.edit(ans2);
            }
            if(reaction.emoji.name === '✂️') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id); 
                }
            } catch(error) { console.error(error) }
                let options3 = [scissors1, scissors2, scissors3];
                    let ans3 = options3[Math.floor(Math.random() * options3.length)];
                m.edit(ans3);
            }
        })
    })
    }
  }

//parezco inglés bruh