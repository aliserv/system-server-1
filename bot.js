const Discord = require('discord.js');
const devs = [' 509392266763173891 '];
var prefix = "";
const adminprefix = ""
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 

,ti={}  
,spee={};

 

const superagent = require("superagent")
client.on('message' , async (message) => {
 if (message.content.startsWith(prefix + 'yn')) {

let color = '0xffffff'

      const { body } = await superagent
    .get('https://yesno.wtf/api/');
    if(body.answer === 'yes') color = '0x01DF01';
    if(body.answer === 'no') color = '0xFF0000';
    const embed = new Discord.RichEmbed()
    .setColor(color)
    .setImage(`${body.image}`)
    message.channel.send(`**The magic API says:** **${body.answer}**`, {embed});

}
});



client.on('ready', function(){
  client.user.setStatus("dnd");
    var ms = 40000 ;	
    var setGame = ['Vida server'];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});

 لبوت الى سيرفرك**`)
      guild.owner.send(embed)
});






//MHSTR END NOW THIS IS END
client.login(process.env.BOT_TOKEN);
