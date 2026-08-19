__d("MAWBridgeResnapshotInvalidateHandler", [
	"MAWJids",
	"MAWThreadLoadingState",
	"MAWThreadRangeResetSignal",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, r) {
		var a = o("ReQL").fromTableAscending(t.messages).getKeyRange(r);
		return o("ReQL").toArrayAsync(a).then((function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
				yield (e || (e = n("Promise"))).all(r.map(function(e) {
					return t.messages.delete(e.threadKey, e.timestampMs, e.messageId);
				}));
			});
			return function(e) {
				return r.apply(this, arguments);
			};
		})());
	}
	function u(e, t, n) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
			var i = a.chatJids, l = [];
			yield (e || (e = n("Promise"))).all(i.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = yield o("MAWThreadLoadingState").getThreadKeyIfMiThreadNotMissing(r, e);
					t != null && (l.push({
						intJid: o("MAWJids").convertChatJidToIntJid(e),
						threadKey: t
					}), yield s(r, t));
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})())), d(t, l);
		}), c.apply(this, arguments);
	}
	function d(e, t) {
		if (t.length !== 0) var n = e.subscribeToCommit(function() {
			n();
			for (var e of t) {
				var r = e.intJid, a = e.threadKey;
				o("MAWThreadRangeResetSignal").emitThreadRangeReset(r, a);
			}
		});
	}
	l.call = u;
}), 98);
