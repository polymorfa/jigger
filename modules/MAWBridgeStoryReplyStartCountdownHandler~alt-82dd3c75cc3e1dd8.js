__d("MAWBridgeStoryReplyStartCountdownHandler", [
	"I64",
	"MAWBridgeXMAShareTombstonedHandler",
	"MAWDbXMA",
	"MAWMessageExpirationStorage",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		return n.msgs.reduce(function(n, r) {
			return n.then(function() {
				return o("MAWMessageExpirationStorage").setMessageForExpiration({
					bridgeMsgStartCountdown: r,
					expirationEvent: o("MAWMessageExpirationStorage").expirationStoryReplyEvent
				}), (e || (e = o("I64"))).of_int32(r.millisecondsUntilCountdownTs), o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, r.threadJid, "MAWBridgeMsgsStartCountdownHandler", function(e, t) {
					return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.attachments).getKeyRange(t, r.msgId)).then(async function(t) {
						await Promise.all(t.map(function(t) {
							var n = o("MAWDbXMA").convertNumberToXMAId(Number.parseInt(t.attachmentFbid, 10)), a = {
								msgId: r.msgId,
								threadJid: r.threadJid,
								xmaId: n
							};
							return o("MAWBridgeXMAShareTombstonedHandler").call(e, a);
						}));
					});
				});
			});
		}, Promise.resolve());
	}
	l.call = s;
}), 98);
