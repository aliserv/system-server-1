const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
    if (message.content === 'استغفر الله العظيم الله اكبر الله اكبر') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 500; x++) {
            message.channel.send(استغفر الله العظيم الله اكبر الله اكبر)
              .then(m => {
                count++;
              })

            }
          }
    });

client.login("BOT_TOKEN")
