const Discord = require ("discord.js");
const bot = new Discord.Client();
var prefix = ("x")
bot.login(process.env.TOKEN);
const client = bot


bot.on("ready", function() {
    console.log("Connecté");
    bot.user.setGame("WATCHING PORN !")
});


bot.on("message", function(message) {
if (message.content === prefix + "help"){
        message.channel.send('CHECK YOUR PRIVATE MESSAGES');
        message.author.createDM().then(channel => {
            channel.send(`
Hello, :)
use __xpay__   to check how you can pay :)
use __xshop__  to check which store exist :)         
Ask SALM#6257 (GOD RANK ON DISCORD SERVER) anything if you need help or if you want infos ;)
`); 
    });
    
    }else 
    
    if (message.content === prefix + "pay"){
        var embed = new Discord.RichEmbed()
            .addField("PayPal","You can pay buy PayPal using this link : [PayPal](https://www.paypal.com/)",true)
            .addField("CryptoVoucher","You can pay buy CryptoVoucher using this link : [CryptoVoucher](https://www.cryptovoucher.io/)",true)
            .setColor('c000ff')
    message.channel.sendEmbed(embed);
        
}else 
    
    if (message.content === prefix + "shop"){
        message.channel.send(`
        __***SHOP : ***__

__**PORN ACCOUNT : **__
__BRAZZERS__ 					 BTC -► 15$
__BANGBROS__ 					 BTC -► 20$
__DIGITAL PLAYGROUND__ 			 BTC -► 20$
__EVIL ANGEL__ 			    	 BTC -► 20$
__FAKEHUB__ 					 BTC -► 10$
__MOFOS__		 		         BTC -► 10$
__PASSION HD__ 			    	 BTC -► 10$
__PLAYBOY PLUS__ 		  		 BTC -► 20$
__PORNHUB PREMIUM__ 	 		 BTC -► 10$
__PUNISH TUBE__ 		 		 BTC -► 10$
__REALITY KINGS__ 		 		 BTC -► 10$
__SUICIDE GIRLS__ 				 BTC -► 10$
__TEEN MEGA WORLD__ 		 	 BTC -► 10$
__TWISTYS__ 			 		 BTC -► 10$
__WICKED__ 				 	     BTC -► 10$

__**NON-PORN ACCOUNT**__
__DEEZER__ 				    	    BTC -► 10$
__SPOTIFY__ 				 	    BTC -► 10$
__BOMMERANG__ 			 	        BTC -► 15$
__NORD VPN__ 				        BTC -► 15$
__NBA__ 				 		    BTC -► 15$
__NFL__ 				 		    BTC -► 15$
__MC AFEE__  			 	        BTC -► 20$
__HIDE MY ASS__ 		 		    BTC -► 20$
__WWE__ 				 		    BTC -► 10$
__UFC__ 				 		    BTC -► 15$
__NETFLIX__ 			 	        BTC -► 8$
__MALWAREBYTES__ 		            BTC -► 20$
__RMC SPORT__ 			 		    BTC -► 30$
__BEIN SPORTS__ 					BTC -► 30$
__MYCANAL__ 				 	    BTC -► 30$
__CANALSAT + MYCANAL + CANAL+__  	BTC -► 50$

FOR ALL ORDERS BY PAYPAL YOU NEED TO ADD 5$ TO THE BITCOIN (BTC) PRICE !
        `)

    message.channel.sendEmbed(embed);
}})
