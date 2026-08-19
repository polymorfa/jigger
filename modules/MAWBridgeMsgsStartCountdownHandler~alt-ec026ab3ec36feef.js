__d("MAWBridgeMsgsStartCountdownHandler", [
	"I64",
	"MAWMessageExpirationStorage",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWTimeUtils",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		return n.msgs.reduce(function(n, r) {
			return n.then(function() {
				return o("MAWMessageExpirationStorage").setMessageForExpiration({
					bridgeMsgStartCountdown: r,
					expirationEvent: o("MAWMessageExpirationStorage").expirationDeletionEvent
				}), (e || (e = o("I64"))).of_int32(r.millisecondsUntilCountdownTs), o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, r.threadJid, "MAWBridgeMsgsStartCountdownHandler", function(t, n) {
					return o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.messages).getKeyRange(n, o("MAWTimeUtils").toTimestamp(r.ts), r.msgId)).then(async function(n) {
						if (n == null) return Promise.resolve();
						var a = babelHelpers.extends({}, n, { ephemeralExpirationTs: (e || (e = o("I64"))).of_float(r.countdownTs) });
						await t.messages.put(a);
					});
				});
			});
		}, Promise.resolve());
	}
	l.call = s;
}), 98);
