__d("MAWBridgeReceivedChatStateHandler", [
	"I64",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"Promise",
	"ServerTime",
	"WAChatState",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, a) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, a.threadJid, "MAWBridgeReceivedChatStateHandler", function(t, i) {
			var l = (s || (s = o("I64"))).of_string(a.senderId), u = s.of_float(3e3 + o("ServerTime").getMillis());
			return a.state === o("WAChatState").TYPING ? t.typing_indicator.upsert([i, l], {
				expirationTimestampMs: u,
				senderId: l,
				threadKey: i
			}).then(r("emptyFunction")) : a.state === o("WAChatState").IDLE ? t.typing_indicator.delete(i, l).then(r("emptyFunction")) : (e || (e = n("Promise"))).resolve();
		});
	}
	l.call = u;
}), 98);
