__d("MAWSendChatStateFromComposerApi", [
	"FBLogger",
	"MAWMessageComposingHooks",
	"Promise",
	"WASendChatStateProtocol"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function(a) {
		var t = a.chatJid, i = a.state;
		return o("WASendChatStateProtocol").sendChatStateProtocol(t, i).catch(function(e) {
			return r("FBLogger")(e).mustfix("Caught while sending chat state from composer.");
		}), o("MAWMessageComposingHooks").callMessageComposingHooks(t, i), (e || (e = n("Promise"))).resolve();
	};
	l.sendChatStateFromComposer = s;
}), 98);
