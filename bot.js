const Discord = require("discord.js");

const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents});
const config = require('./config.json');

client

client.on("ready", () =>{
    console.log(`Bot iniciado!`);
});

client.on("guildCreate", guild => {
    client.user.setActivity(`Estou em ${client.guilds.size}`);
});

client.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if(comando === "adryan" || comando === "nicoli" || comando === "camila"){
        await message.channel.send("CARECA!");
    }
    
    if(comando === "careca"){
        await message.channel.send({ files : ["https://pbs.twimg.com/profile_images/1289324739794735104/mQoHcZfq_400x400.jpg"]});
    }
});

client.login(config.token);