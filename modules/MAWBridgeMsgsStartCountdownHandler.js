__d("MAWBridgeMsgsStartCountdownHandler", [
	"I64",
	"MAWMessageExpirationStorage",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWTimeUtils",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, r) {
		return r.msgs.reduce(function(r, a) {
			return r.then(function() {
				return o("MAWMessageExpirationStorage").setMessageForExpiration({
					bridgeMsgStartCountdown: a,
					expirationEvent: o("MAWMessageExpirationStorage").expirationDeletionEvent
				}), (s || (s = o("I64"))).of_int32(a.millisecondsUntilCountdownTs), o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, a.threadJid, "MAWBridgeMsgsStartCountdownHandler", function(t, r) {
					return o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.messages).getKeyRange(r, o("MAWTimeUtils").toTimestamp(a.ts), a.msgId)).then((function() {
						var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
							if (r == null) return (e || (e = n("Promise"))).resolve();
							var i = babelHelpers.extends({}, r, { ephemeralExpirationTs: (s || (s = o("I64"))).of_float(a.countdownTs) });
							yield t.messages.put(i);
						});
						return function(e) {
							return r.apply(this, arguments);
						};
					})());
				});
			});
		}, (e || (e = n("Promise"))).resolve());
	}
	l.call = u;
}), 98);
