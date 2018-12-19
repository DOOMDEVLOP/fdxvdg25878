const Discord = require ("discord.js");
const bot = new Discord.Client();
var prefix = ("*")
const YTDL = require("ytdl-core");
const {get} = require ("snekfetch");
bot.login(process.env.TOKEN);


bot.on("ready", function() {
    console.log("Connecté");
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "roll":
            var roll = Math.floor(Math.random() * args[1]) +1;
            if (!roll) return message.reply("Entre un numéro")
            message.channel.send("Je choisis le numéro " + roll + " !");
            break;
        case "8ball":
        let arfs = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Merci de poser une question :8ball:")};

            var replys = [
                "Oui",
                "Non",
                "Je sais pas",
                "Peut être"
            ];
            
            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball")
            .addField("Question", tte)
            .addField("Réponse", reponse)
        message.channel.sendEmbed(bembed)    
        case "pussy":
        try{
            get('https://www.sex.com/gifs/pussy').then(res=> {
                const embed = new Discord.RichEmbed()
                .setDescription(`:pussy: pussy pic ${message.author.username}`)
                .setImage(res.body.file)
                .setColor("0xF000FF")
                return message.channel.send({embed});
            });
        } catch(err) {
            return message.channel.send(error.stack);
        }
            break;
    }})
