__d("MAWBridgeNoteReplyStartCountdownHandler", ["MAWMessageExpirationStorage", "Promise"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, r) {
		return r.msgs.reduce(function(e, t) {
			return e.then(function() {
				o("MAWMessageExpirationStorage").setMessageForExpiration({
					bridgeMsgStartCountdown: t,
					expirationEvent: o("MAWMessageExpirationStorage").expirationNoteReplyEvent
				});
			});
		}, (e || (e = n("Promise"))).resolve());
	}
	l.call = s;
}), 98);
