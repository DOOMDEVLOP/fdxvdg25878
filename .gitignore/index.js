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
"https://images.sex.com/images/pinporn/2018/12/10/300/20340170.gif",  "https://images.sex.com/images/pinporn/2018/11/30/300/20286475.jpg",
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
bot.on("message", function(message) {
    if (message.content.startsWith(prefix + "pawg")) {
 
        var pawg = [
      
        ];
    
        var gif = pawg[Math.floor(Math.random() * pawg.length)];
    
        var pawg_embed = new Discord.RichEmbed()
        .setColor('c000ff')
        .setTitle('<:ass:524262717595582464>')
        .setImage(gif)
        .setFooter('Send from INFINITY')
        message.channel.send(pawg_embed);
    }
})
bot.on("message", function(message) {
    if (message.content.startsWith(prefix + "boobs")) {

        var boobs = [
            "https://images.sex.com/images/pinporn/2018/11/21/300/20245241.jpg",
            "https://images.sex.com/images/pinporn/2018/11/26/300/20269554.jpg",
            "https://images.sex.com/images/pinporn/2018/12/06/300/20318396.jpg",
            "https://images.sex.com/images/pinporn/2018/12/03/300/20302438.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20287233.jpg",
            "https://images.sex.com/images/pinporn/2018/12/05/300/20308255.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20286759.jpg",
            "https://images.sex.com/images/pinporn/2018/12/12/300/20345762.jpg",
            "https://images.sex.com/images/pinporn/2018/11/23/300/20256377.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20245322.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20286776.jpg",
            "https://images.sex.com/images/pinporn/2018/12/01/300/20288859.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20286847.jpg",
            "https://images.sex.com/images/pinporn/2018/12/10/300/20336375.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20286847.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20244989.jpg",
            "https://images.sex.com/images/pinporn/2018/11/19/300/20239792.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20248964.jpg",
            "https://images.sex.com/images/pinporn/2018/11/27/300/20273819.jpg",
            "https://images.sex.com/images/pinporn/2018/12/01/300/20291612.jpg",
            "https://images.sex.com/images/pinporn/2018/11/25/300/20264967.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20287240.jpg",
            "https://images.sex.com/images/pinporn/2018/12/01/300/20291582.jpg",
            "https://images.sex.com/images/pinporn/2018/11/26/300/20271599.jpg",
            "https://images.sex.com/images/pinporn/2018/11/27/300/20275273.jpg",
            "https://images.sex.com/images/pinporn/2018/12/11/300/20343297.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20245128.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20245141.jpg",
            "https://images.sex.com/images/pinporn/2018/11/22/300/20251720.jpg",
            "https://images.sex.com/images/pinporn/2018/11/20/300/20242406.jpg",
            "https://images.sex.com/images/pinporn/2018/12/11/300/20340716.jpg",
            "https://images.sex.com/images/pinporn/2018/12/01/300/20289135.jpg",
            "https://images.sex.com/images/pinporn/2018/12/02/300/20297088.jpg",
            "https://images.sex.com/images/pinporn/2018/12/04/300/20304146.jpg",
            "https://images.sex.com/images/pinporn/2018/11/25/300/20265006.jpg",
            "https://images.sex.com/images/pinporn/2018/11/22/300/20251118.jpg",
            "https://images.sex.com/images/pinporn/2018/11/29/300/20280581.jpg",
            "https://images.sex.com/images/pinporn/2018/12/10/300/20337066.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20245007.jpg",
            "https://images.sex.com/images/pinporn/2018/12/03/300/20298311.jpg",
            "https://images.sex.com/images/pinporn/2018/12/10/300/20335708.jpg",
            "https://images.sex.com/images/pinporn/2018/11/26/300/20267683.jpg",
            "https://images.sex.com/images/pinporn/2018/11/26/300/20269818.jpg",
            "https://images.sex.com/images/pinporn/2018/11/24/300/20260593.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20246976.jpg",
            "https://images.sex.com/images/pinporn/2018/12/04/300/20304043.jpg",
            "https://images.sex.com/images/pinporn/2018/11/24/300/20261741.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20287173.jpg",
            "https://images.sex.com/images/pinporn/2018/11/26/300/20268169.jpg",
            "https://images.sex.com/images/pinporn/2018/11/25/300/20266699.jpg",
            "https://images.sex.com/images/pinporn/2018/11/23/300/20257880.jpg",
            "https://images.sex.com/images/pinporn/2018/12/08/300/20329165.jpg",
            "https://images.sex.com/images/pinporn/2018/12/09/300/20332670.jpg",
            "https://images.sex.com/images/pinporn/2018/12/12/300/20350212.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20288366.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20286796.jpg",
            "https://images.sex.com/images/pinporn/2018/11/26/300/20269159.jpg",
            "https://images.sex.com/images/pinporn/2018/11/29/300/20283248.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20245139.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20245756.jpg",
            "https://images.sex.com/images/pinporn/2018/11/23/300/20257315.jpg",
            "https://images.sex.com/images/pinporn/2018/12/07/300/20319282.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20287096.jpg",
            "https://images.sex.com/images/pinporn/2018/12/01/300/20289109.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20287185.jpg",
            "https://images.sex.com/images/pinporn/2018/11/22/300/20251509.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20286719.jpg",
            "https://images.sex.com/images/pinporn/2018/12/09/300/20333811.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20287247.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20287221.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20249045.jpg",
            "https://images.sex.com/images/pinporn/2018/11/22/300/20249374.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20246732.jpg",
            "https://images.sex.com/images/pinporn/2018/12/05/300/20311061.jpg",
            "https://images.sex.com/images/pinporn/2017/09/26/300/18418265.jpg",
            "https://images.sex.com/images/pinporn/2018/11/24/300/20258201.jpg",
            "https://images.sex.com/images/pinporn/2018/12/03/300/20298909.jpg",
            "https://images.sex.com/images/pinporn/2018/11/30/300/20286786.jpg",
            "https://images.sex.com/images/pinporn/2018/11/28/300/20275880.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20245097.jpg",
            "https://images.sex.com/images/pinporn/2018/11/21/300/20245251.jpg",
            "https://images.sex.com/images/pinporn/2018/12/11/300/20342579.jpg",
            "https://images.sex.com/images/pinporn/2018/11/20/300/20241843.jpg",
            "https://images.sex.com/images/pinporn/2018/11/29/300/20283339.jpg",
            "https://images.sex.com/images/pinporn/2018/11/20/300/20241843.jpg",
            "https://images.sex.com/images/pinporn/2018/12/04/300/20307390.jpg",
            "https://images.sex.com/images/pinporn/2018/12/06/300/20314899.jpg",
            "https://images.sex.com/images/pinporn/2018/11/28/300/20278323.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20333524.gif",
"https://images.sex.com/images/pinporn/2018/12/06/300/20316730.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20307934.gif",
"https://images.sex.com/images/pinporn/2018/12/11/300/20343498.gif",
"https://images.sex.com/images/pinporn/2018/12/07/300/20320496.gif",
"https://images.sex.com/images/pinporn/2018/11/26/300/20269383.gif",
"https://images.sex.com/images/pinporn/2018/12/11/300/20340873.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20332514.gif",
"https://images.sex.com/images/pinporn/2018/12/02/300/20296279.gif",
"https://images.sex.com/images/pinporn/2018/12/08/300/20329097.gif",
"https://images.sex.com/images/pinporn/2018/11/30/300/20287454.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20312513.gif",
"https://images.sex.com/images/pinporn/2018/11/24/300/20259645.gif",
"https://images.sex.com/images/pinporn/2018/12/03/300/20299505.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20331346.gif",
"https://images.sex.com/images/pinporn/2018/12/14/300/20357767.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20306602.gif",
"https://images.sex.com/images/pinporn/2018/12/07/300/20319965.gif",
"https://images.sex.com/images/pinporn/2018/11/21/300/20248552.gif",
"https://images.sex.com/images/pinporn/2018/11/29/300/20280145.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20251857.gif",
"https://images.sex.com/images/pinporn/2018/12/01/300/20292605.gif",
"https://images.sex.com/images/pinporn/2018/12/10/300/20335612.gif",
"https://images.sex.com/images/pinporn/2018/11/28/300/20277765.gif",
"https://images.sex.com/images/pinporn/2018/12/08/300/20328242.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20251947.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20309157.gif",
"https://images.sex.com/images/pinporn/2018/11/10/300/20199181.gif",
"https://images.sex.com/images/pinporn/2018/12/01/300/20291698.gif",
"https://images.sex.com/images/pinporn/2018/11/28/300/20276025.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20310721.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20311669.gif",
"https://images.sex.com/images/pinporn/2018/11/28/300/20278750.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20304887.gif",
"https://images.sex.com/images/pinporn/2018/12/01/300/20291987.gif",
"https://images.sex.com/images/pinporn/2018/12/02/300/20293960.gif",
"https://images.sex.com/images/pinporn/2018/11/25/300/20267139.gif",
"https://images.sex.com/images/pinporn/2018/04/16/300/19375788.gif",
"https://images.sex.com/images/pinporn/2018/11/29/300/20280329.gif",
"https://images.sex.com/images/pinporn/2018/12/10/300/20336586.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20311768.gif",
"https://images.sex.com/images/pinporn/2018/12/07/300/20324132.gif",
"https://images.sex.com/images/pinporn/2018/12/03/300/20298114.gif",
"https://images.sex.com/images/pinporn/2018/11/27/300/20272563.gif",
"https://images.sex.com/images/pinporn/2018/11/15/300/20220876.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20332252.gif",
"https://images.sex.com/images/pinporn/2018/11/27/300/20272142.gif",
"ttps://images.sex.com/images/pinporn/2018/12/01/300/20293139.gif",
"https://images.sex.com/images/pinporn/2018/12/09/300/20332252.gif",
"https://images.sex.com/images/pinporn/2018/11/21/300/20245637.gif",
"https://images.sex.com/images/pinporn/2018/11/19/300/20240836.gif",
"https://images.sex.com/images/pinporn/2018/11/29/300/20279837.gif",
"https://images.sex.com/images/pinporn/2018/12/07/300/20322478.gif",
"https://images.sex.com/images/pinporn/2018/11/19/300/20239830.gif",
"https://images.sex.com/images/pinporn/2018/11/25/300/20267382.gif",
"htttps://images.sex.com/images/pinporn/2018/12/11/300/20341817.gif",
"https://images.sex.com/images/pinporn/2018/12/14/300/20357967.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20311020.gif",
"https://images.sex.com/images/pinporn/2018/11/23/300/20255366.gif",
"https://images.sex.com/images/pinporn/2018/12/14/300/20357059.gif",
"https://images.sex.com/images/pinporn/2018/04/06/300/19337469.gif",
"https://images.sex.com/images/pinporn/2018/11/21/300/20246956.gif",
"https://images.sex.com/images/pinporn/2018/12/08/300/20328795.gif",
"https://images.sex.com/images/pinporn/2018/12/07/300/20324354.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20311549.gif",
"https://images.sex.com/images/pinporn/2018/12/13/300/20353230.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20311549.gif",
"https://images.sex.com/images/pinporn/2018/11/30/300/20288332.gif",
"https://images.sex.com/images/pinporn/2018/12/06/300/20315159.gif",
"https://images.sex.com/images/pinporn/2018/11/29/300/20283915.gif",
"https://images.sex.com/images/pinporn/2018/12/01/300/20289420.gif",
"https://images.sex.com/images/pinporn/2018/11/21/300/20247679.gif",
"https://images.sex.com/images/pinporn/2018/12/17/300/20372864.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20312900.gif",
"https://images.sex.com/images/pinporn/2018/12/10/300/20337261.gif",
"https://images.sex.com/images/pinporn/2018/11/30/300/20285841.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20307480.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20252720.gif",
"https://images.sex.com/images/pinporn/2018/11/30/300/20287529.gif",
"https://images.sex.com/images/pinporn/2018/11/26/300/20269805.gif",
"https://images.sex.com/images/pinporn/2018/11/26/300/20268731.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20252401.gif",
"https://images.sex.com/images/pinporn/2018/12/07/300/20324034.gif",
"https://images.sex.com/images/pinporn/2018/11/25/300/20263390.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20305772.gif",
"https://images.sex.com/images/pinporn/2018/12/06/300/20315864.gif"

              
        ];
    
        var gif = boobs[Math.floor(Math.random() * boobs.length)];
    
        var boobs_embed = new Discord.RichEmbed()
        .setColor('c000ff')
        .setTitle('<:boobs:525048391433060362>')
        .setImage(gif)
        .setFooter('Send from INFINITY')
        message.channel.send(boobs_embed);
    }
})
