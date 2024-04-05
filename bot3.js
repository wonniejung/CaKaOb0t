const scriptName = "bot3";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg == '!ping') {
        replier.reply("!pong "+room);
    }

}