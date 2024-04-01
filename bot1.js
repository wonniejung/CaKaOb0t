const scriptName = "bot1";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg == '!ping') {
        replier.reply("!pong "+room);
    }
}