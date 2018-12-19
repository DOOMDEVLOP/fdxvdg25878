const Discord = require ("discord.js");
const bot = new Discord.Client();
var prefix = ("*")
const YTDL = require("ytdl-core");
bot.login(process.env.TOKEN);


bot.on("ready", function() {
    console.log("Connecté");
});

if (message.content.startsWith(prefix + "dog")) {

    var chien = [
        "https://media.giphy.com/media/3LiHyLUJ3uRFu/giphy.gif",
        "https://media.giphy.com/media/yoJC2COHSxjIqadyZW/giphy.gif"
    ];

    var gif = chien[Math.floor(Math.random() * chien.length)];

    var dog_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(':ass:')
    .setImage(gif)
    .setFooter('Send from INFINITY')
    message.channel.send(pussy_embed);
   }
