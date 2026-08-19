__d("MAWBridgeStoryReplyStartCountdownHandler", [
	"I64",
	"MAWBridgeXMAShareTombstonedHandler",
	"MAWDbXMA",
	"MAWMessageExpirationStorage",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
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
					expirationEvent: o("MAWMessageExpirationStorage").expirationStoryReplyEvent
				}), (s || (s = o("I64"))).of_int32(a.millisecondsUntilCountdownTs), o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, a.threadJid, "MAWBridgeMsgsStartCountdownHandler", function(t, r) {
					return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.attachments).getKeyRange(r, a.msgId)).then((function() {
						var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
							yield (e || (e = n("Promise"))).all(r.map(function(e) {
								var n = o("MAWDbXMA").convertNumberToXMAId(Number.parseInt(e.attachmentFbid, 10)), r = {
									msgId: a.msgId,
									threadJid: a.threadJid,
									xmaId: n
								};
								return o("MAWBridgeXMAShareTombstonedHandler").call(t, r);
							}));
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
