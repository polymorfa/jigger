__d("MAWBridgeResnapshotInvalidateHandler", [
	"MAWJids",
	"MAWThreadLoadingState",
	"MAWThreadRangeResetSignal",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = o("ReQL").fromTableAscending(e.messages).getKeyRange(t);
		return o("ReQL").toArrayAsync(n).then(async function(t) {
			await Promise.all(t.map(function(t) {
				return e.messages.delete(t.threadKey, t.timestampMs, t.messageId);
			}));
		});
	}
	async function s(t, n, r) {
		var a = r.chatJids, i = [];
		await Promise.all(a.map(async function(t) {
			var r = await o("MAWThreadLoadingState").getThreadKeyIfMiThreadNotMissing(n, t);
			r != null && (i.push({
				intJid: o("MAWJids").convertChatJidToIntJid(t),
				threadKey: r
			}), await e(n, r));
		})), u(t, i);
	}
	function u(e, t) {
		if (t.length !== 0) var n = e.subscribeToCommit(function() {
			n();
			for (var e of t) {
				var r = e.intJid, a = e.threadKey;
				o("MAWThreadRangeResetSignal").emitThreadRangeReset(r, a);
			}
		});
	}
	l.call = s;
}), 98);
