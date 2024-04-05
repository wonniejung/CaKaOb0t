const scriptName = "2";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg == '!') {
        replier.reply("!hello "+room);
    }
}