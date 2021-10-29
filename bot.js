const Discord = require("discord.js");

require('dotenv').config();
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents});
const config = require('./config.json');
const handlers = require("./node_modules/discord.js/src/client/websocket/handlers");

client.on("ready", () =>{
    console.log(`Bot iniciado!`);
    client.user.setStatus("raspando cabelos");
});

client.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    client.user.setStatus({})

    //grandes comandos com nomes brasileiros
    if(comando === "adryan" || comando === "nicoli" || comando === "camila"){
        await message.channel.send("CARECA!");
    }
    
    //messi careca 
    if(comando === "careca"){
        await message.channel.send({ files : ["https://pbs.twimg.com/profile_images/1289324739794735104/mQoHcZfq_400x400.jpg"]});
    }

    //frase para os carecas de plantão
    if(comando === "frase"){
        await message.channel.send({ files : ["https://cdn.pensador.com/img/frase/we/sl/wesley_d_amico_as_vezes_esqueco_que_sou_careca_e_me_vej_l5eyreq.jpg"]});
    }

    //perguntas tops com um sistema excepcional de switch
    if(comando === "sabedoria"){
        const random = Math.floor(Math.random() * 3);
        switch(random){
            case 0:
                await message.channel.send("sim :)");
                break;

            case 1:
                await message.channel.send("talvez :|");
                break;

            case 2:
                await message.channel.send("não kkkkkkkkkkkkkk :D");
                break;
        }
    }
});

client.login(process.env.TOKEN);