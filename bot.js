const adminprefix = "#";
const devs = ['509392266763173891'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'set')) {
  client.user.setGame(argresult, "https://www.twitch.tv/prflasg18");
    message.channel.sendMessage(`**تم تغيير تويتش الحساب إلى  ${argresult}**`)
}
});

client.login("BOT_TOKEN")
