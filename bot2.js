const scriptName = "bot2";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg == '!ping') {
        replier.reply("!pong "+room);
    } else if (msg.startsWith("!clone")) {
    	replier.reply(msg.slice("!clone".length))
    }
}
