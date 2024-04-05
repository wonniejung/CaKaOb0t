const scriptName = "!help";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
}
function response(room, msg, sender, isGroupChat, replier) {
    if (msg == "!help") {
        var helpMessage = "CaKaOb0t v1.9.1!\n" +
                          "현재 가능한 명령어:" +'\u200b'.repeat(500)+"\n\n\n"+
                          "!help --> 봇의 가능한 명령어를 확인합니다.\n\n" +
                          "!ping --> 봇의 상태를 확인합니다.\n\n"+
                          "!따라하기 [문자열] --> [문자열]을 출력합니다.\n\n"+
"!날씨 [지역명] --> [지역명]의 현제 날씨정보를 출력합니다.\n\n"+
"!가르치기 [Key]:[value] --> [key]를 입력시 [value]를 출력합니다.\n\n"+
"!가르치기로그 --> 채팅방의 !가르치기 [key]와 [value], 가르친 사람을 확인합니다.\n\n"+
"!chatlog --> 채팅방의 채팅내역을 확인합니다. 삭제된 메세지도 볼 수 있어요!\n\n";
        replier.reply(helpMessage);
    }
}
//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}

function onNotificationPosted(sbn, sm) {
      var packageName = sbn.getPackageName();
      if (!packageName.startsWith("com.kakao.tal")) return;
      var actions = sbn.getNotification().actions;
      if (actions == null) return;
      var userId = sbn.getUser().hashCode();
      for (var n = 0; n < actions.length; n++) {
          var action = actions[n];
          if (action.getRemoteInputs() == null) continue;
          var bundle = sbn.getNotification().extras; 
  
          var msg = bundle.get("android.text").toString();
          var sender = bundle.getString("android.title");
          var room = bundle.getString("android.subText");
          if (room == null) room = bundle.getString("android.summaryText");
          var isGroupChat = room != null;
          if (room == null) room = sender;
          var replier = new com.xfl.msgbot.script.api.legacy.SessionCacheReplier(packageName, action, room, false, "");
          var icon = bundle.getParcelableArray("android.messages")[0].get("sender_person").getIcon().getBitmap();
          var image = bundle.getBundle("android.wearable.EXTENSIONS");
          if (image != null) image = image.getParcelable("background");
          var imageDB = new com.xfl.msgbot.script.api.legacy.ImageDB(icon, image);
          com.xfl.msgbot.application.service.NotificationListener.Companion.setSession(packageName, room, action);
          if (this.hasOwnProperty("responseFix")) {
              responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName, userId != 0);
          }
      }
  }
  