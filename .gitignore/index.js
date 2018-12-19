const Discord = require ("discord.js");
const bot = new Discord.Client();
var prefix = ("x-")
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
        case "passy":
        }})
bot.on("message", function(message) {
    if (message.content.startsWith(prefix + "pussy")) {

        var pussy = [
                   
            "https://images.sex.com/images/pinporn/2018/12/01/620/20291987.gif",
            "https://images.sex.com/images/pinporn/2018/11/22/620/20250896.gif",
            "https://images.sex.com/images/pinporn/2018/12/04/300/20304129.gif",
"https://images.sex.com/images/pinporn/2018/11/24/300/20260578.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20334072.gif",
"https://images.sex.com/images/pinporn/2018/11/21/300/20248818.gif",
"https://images.sex.com/images/pinporn/2018/12/06/300/20316266.gif",
"https://images.sex.com/images/pinporn/2018/12/11/300/20343498.gif",
"https://images.sex.com/images/pinporn/2018/12/12/300/20347914.gif",
"https://images.sex.com/images/pinporn/2018/12/10/300/20334887.gif",
"https://images.sex.com/images/pinporn/2018/11/21/300/20247017.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20307934.gif",
"https://images.sex.com/images/pinporn/2018/11/29/300/20282087.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20304129.gif",
"https://images.sex.com/images/pinporn/2018/12/07/300/20322084.gif",
"https://images.sex.com/images/pinporn/2018/12/03/300/20300034.gif",
"https://images.sex.com/images/pinporn/2018/11/28/300/20276690.gif",
"https://images.sex.com/images/pinporn/2018/11/27/300/20273400.gif",
"https://images.sex.com/images/pinporn/2018/11/23/300/20255366.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20252406.gif",
"https://images.sex.com/images/pinporn/2018/12/16/300/20372561.gif",
"https://images.sex.com/images/pinporn/2018/12/07/300/20324132.gif",
"https://images.sex.com/images/pinporn/2018/11/05/300/20175704.gif",
"https://images.sex.com/images/pinporn/2018/11/30/300/20286209.gif",
"https://images.sex.com/images/pinporn/2018/12/12/300/20348366.gif",
"https://images.sex.com/images/pinporn/2018/11/25/300/20265074.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20250896.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20250762.gif",
"https://images.sex.com/images/pinporn/2018/11/26/300/20270197.gif",
"https://images.sex.com/images/pinporn/2018/11/21/300/20247550.gif",
"https://images.sex.com/images/pinporn/2018/11/24/300/20261180.gif",
"https://images.sex.com/images/pinporn/2018/11/24/300/20258109.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20332749.gif",
"https://images.sex.com/images/pinporn/2018/10/31/300/20155508.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20311506.gif",
"https://images.sex.com/images/pinporn/2018/11/26/300/20271119.gif",
"https://images.sex.com/images/pinporn/2018/12/11/300/20341596.gif",
"https://images.sex.com/images/pinporn/2018/11/25/300/20265511.gif",
"https://images.sex.com/images/pinporn/2018/11/23/300/20256675.gif",
"https://images.sex.com/images/pinporn/2018/11/23/300/20255619.gif",
"https://images.sex.com/images/pinporn/2018/12/16/300/20371520.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20334520.gif",
"https://images.sex.com/images/pinporn/2018/12/02/300/20296611.gif",
"https://images.sex.com/images/pinporn/2017/12/29/300/18861911.gif",
"https://images.sex.com/images/pinporn/2018/12/11/300/20341446.gif",
"https://images.sex.com/images/pinporn/2018/11/29/300/20280182.gif",
"https://images.sex.com/images/pinporn/2018/11/29/300/20280329.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20307106.gif",
"https://images.sex.com/images/pinporn/2018/12/11/300/20343937.gif",
"https://images.sex.com/images/pinporn/2018/11/20/300/20241363.gif",
"https://images.sex.com/images/pinporn/2018/12/10/300/20337903.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20249384.gif",
"https://images.sex.com/images/pinporn/2018/11/20/300/20241363.gif",
"https://images.sex.com/images/pinporn/2018/12/01/300/20289578.gif",
"https://images.sex.com/images/pinporn/2018/11/28/300/20276025.gif",
"https://images.sex.com/images/pinporn/2018/11/27/300/20273305.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20252126.gif",
"https://images.sex.com/images/pinporn/2018/12/10/300/20339331.gif",
"https://images.sex.com/images/pinporn/2018/11/28/300/20279680.gif",
"https://images.sex.com/images/pinporn/2018/12/02/300/20294269.gif",
"https://images.sex.com/images/pinporn/2018/12/16/300/20369082.gif",
"https://images.sex.com/images/pinporn/2018/11/20/300/20241940.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20331561.gif",
"https://images.sex.com/images/pinporn/2018/12/10/300/20339621.gif",
"https://images.sex.com/images/pinporn/2018/11/25/300/20267216.gif",
"https://images.sex.com/images/pinporn/2018/12/18/300/20377965.gif",
"https://images.sex.com/images/pinporn/2018/12/13/300/20353230.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20306020.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20305098.gif",
"https://images.sex.com/images/pinporn/2018/11/24/300/20259902.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20331492.gif",
"https://images.sex.com/images/pinporn/2018/12/08/300/20327198.gif",
"https://images.sex.com/images/pinporn/2018/12/08/300/20327453.gif",
"https://images.sex.com/images/pinporn/2018/12/12/300/20348210.gif",
"https://images.sex.com/images/pinporn/2018/11/26/300/20267600.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20330733.gif",
"https://images.sex.com/images/pinporn/2018/11/27/300/20272953.gif",
"https://images.sex.com/images/pinporn/2018/11/21/300/20245637.gif",
"https://images.sex.com/images/pinporn/2018/11/30/300/20286071.gif",
"https://images.sex.com/images/pinporn/2018/12/02/300/20293725.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20333415.gif",
"https://images.sex.com/images/pinporn/2018/11/26/300/20269124.gif",
"https://images.sex.com/images/pinporn/2018/12/06/300/20314655.gif",
"https://images.sex.com/images/pinporn/2018/11/27/300/20274901.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20308340.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20304736.gif",
"https://images.sex.com/images/pinporn/2018/11/30/300/20285567.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20302938.gif",
"https://images.sex.com/images/pinporn/2018/12/06/300/20313489.gif",
"https://images.sex.com/images/pinporn/2018/12/17/300/20374212.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20305398.gif",
"https://images.sex.com/images/pinporn/2018/12/08/300/20326601.gif",
"https://images.sex.com/images/pinporn/2018/11/28/300/20276228.gif",
"https://images.sex.com/images/pinporn/2018/12/06/300/20314222.gif",
"https://images.sex.com/images/pinporn/2018/12/16/300/20372560.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20307687.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20252718.gif",
"https://images.sex.com/images/pinporn/2018/12/07/300/20322513.gif",
"https://images.sex.com/images/pinporn/2018/11/28/300/20276678.gif",
"https://images.sex.com/images/pinporn/2018/12/06/300/20318229.gif",
"https://images.sex.com/images/pinporn/2018/12/02/300/20295589.gif ",
"https://images.sex.com/images/pinporn/2018/12/10/300/20340170.gif",
  "https://images.sex.com/images/pinporn/2018/11/30/300/20286475.jpg",
"https://images.sex.com/images/pinporn/2018/11/26/300/20269746.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/22/300/20252041.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/21/300/20245248.jpg ",
"https://images.sex.com/images/pinporn/2018/11/21/300/20247233.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/21/300/20245128.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/26/300/20269159.jpg ",
 "https://images.sex.com/images/pinporn/2018/12/07/300/20320751.jpg ",
" https://images.sex.com/images/pinporn/2018/11/30/300/20286827.jpg ",
"https://images.sex.com/images/pinporn/2018/11/24/300/20258831.jpg ",
"https://images.sex.com/images/pinporn/2018/11/21/300/20249045.jpg ",
 "https://images.sex.com/images/pinporn/2016/06/02/300/15833516.jpg ",
 "https://images.sex.com/images/pinporn/2018/12/12/300/20350212.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/27/300/20274852.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/21/300/20245137.jpg ",
"https://images.sex.com/images/pinporn/2018/11/30/300/20286478.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/30/300/20286882.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/30/300/20287206.jpg ",
            "https://images.sex.com/images/pinporn/2018/11/26/300/20267780.jpg ",
"https://images.sex.com/images/pinporn/2018/11/30/300/20287214.jpg ",
"https://images.sex.com/images/pinporn/2018/11/21/300/20244992.jpg ",
"https://images.sex.com/images/pinporn/2018/11/26/300/20271484.jpg ",
"https://images.sex.com/images/pinporn/2018/11/22/300/20251473.jpg ",
"https://images.sex.com/images/pinporn/2018/11/30/300/20287255.jpg ",
"https://images.sex.com/images/pinporn/2018/11/30/300/20286880.jpg ",
"https://images.sex.com/images/pinporn/2018/11/30/300/20288366.jpg ",
"https://images.sex.com/images/pinporn/2018/12/08/300/20328168.jpg ",
"https://images.sex.com/images/pinporn/2018/11/21/300/20245143.jpg ",
"https://images.sex.com/images/pinporn/2018/11/30/300/20286892.jpg ",
 "https://images.sex.com/images/pinporn/2018/12/06/300/20313958.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/23/300/20255774.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/24/300/20260593.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/30/300/20286741.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/25/300/20265037.jpg ",
 "https://images.sex.com/images/pinporn/2018/12/04/300/20302758.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/30/300/20287268.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/24/300/20261208.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/30/300/20287146.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/21/300/20245045.jpg ",
 "https://images.sex.com/images/pinporn/2018/12/01/300/20289135.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/30/300/20287260.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/19/300/20239699.jpg ",
"https://images.sex.com/images/pinporn/2018/11/24/300/20261741.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/20/300/20242910.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/21/300/20245264.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/22/300/20252027.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/26/300/20267683.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/21/300/20245042.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/20/300/20241322.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/29/300/20281441.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/20/300/20241498.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/21/300/20245368.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/30/300/20287272.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/21/300/20245004.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/27/300/20272772.png ",
" https://images.sex.com/images/pinporn/2018/11/21/300/20245258.jpg ",
 "https://images.sex.com/images/pinporn/2018/12/09/300/20332670.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/21/300/20244998.jpg ",
 "https://images.sex.com/images/pinporn/2018/12/10/300/20336362.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/30/300/20286860.jpg ",
"https://images.sex.com/images/pinporn/2018/11/19/300/20239794.jpg ",
 "https://images.sex.com/images/pinporn/2018/11/30/300/20286815.jpg "



    
        ];
    
        var gif = pussy[Math.floor(Math.random() * pussy.length)];
    
        var pussy_embed = new Discord.RichEmbed()
        .setColor('c000ff')
        .setTitle('<:ass:524262717595582464>')
        .setImage(gif)
        .setFooter('Send from INFINITY')
        message.channel.send(pussy_embed);
    }
})
