__d("WAWebDebugScheduledMessages", [
	"WALogger",
	"WATimeUtils",
	"WAWebChatCollection",
	"WAWebSendScheduledMsgAction",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t, n, r) {
		var a = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(t));
		if (a == null) {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["bulkScheduleTestMessages: chat ", " not found"])), t);
			return;
		}
		for (var i = 0; i < n; i++) {
			var l = o("WATimeUtils").futureUnixTime(r + i);
			await o("WAWebSendScheduledMsgAction").sendScheduledTextMsgToChat(a, "Debug-" + (i + 1), l);
		}
	}
	s.doc = "Schedule N test messages (Debug-1, Debug-2, ...) into a chat; first fires after initialDelayS seconds, each subsequent one 1s later. Args: chatId, count, initialDelayS";
	var u = { bulkScheduleTestMessages: s };
	l.default = u;
}), 98);
