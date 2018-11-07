const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('Welcome to Vida Server:fallen_leaf: :revolving_hearts: ');
  }
});

client.login('NTA5NjIzMDUzMDI2ODUyODY1.DsQfiw.83YegCa73QZjvzcXPXPqQILMco8');
