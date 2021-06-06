const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class ChatCommand extends Command {
  constructor(){
    super({
      name: 'chat',
      aliases: 'talk',
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
let frase = [
      "Hola, soy **RLBOT**, encantado de conocerte :3",
      "¿Alguien me presta un euro?",
      "Recordad poner siempre el código RANDOMLAIF",
      "Hoy he ido al hospital, he dado positivo por coronavirus...",
      "¿Jugamos al teto?",
      "¿Has visto el último vídeo de **RANDOMLIFE**? Le doy un 7,5",
      "Vendo mascarillas",
      "Creo que me gustas... :flushed:",
      "¿Quién me ha llamado? Estaba en el baño, ocupado, como siempre... ya sabes :smirk:",
      "No me encuentro muy bien, tengo fiebre...",
      "¿Alguien ha visto los preservativos que puse encima de la mesa?",
      "Me he enamorado de Matías, no se lo digáis",
      "Gran boda la de Fran y Sama, casi me vengo en la iglesia",
      "Sí",
      "No",
      "Mi padre me ha dicho que soy adoptado",
      "Bailemos",
      "¿Qué dirías si esta noche te seduzco en mi coche?",
      "Una vez estuve en Paraguay",
      "¿Alguien me pasa fotos de esa tal Mia Khalifa? Es para un trabajo de biología, ya sabes... :smirk:",
      "Haz la tarea y luego habla conmigo",
      "Bésame...",
      "Este comando es más antiguo que la mayoría de usuarios de este chat, al menos en la teoría..."
    ];
    let fraserandom = frase[Math.floor(Math.random() * frase.length)];
    msg.channel.send(fraserandom);
  }
}