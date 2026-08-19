__d("MAWLoadRecentParticipantsApi", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ threads: o("MAWTransactionMode").READONLY }, "loadRecentParticipants", function(e) {
		return function(t, n) {
			return e.threads.orderBy("threadOrder").filter(function(e) {
				return o("WAJids").interpretAsGroupJid(e.jid) == null;
			}).reverse().limit(t).toArray().then(function(e) {
				var t = [];
				return e.forEach(function(e) {
					var r = o("WAJids").interpretAsUserJid(e.jid);
					r != null && r !== n && t.push(r);
				}), new Set(t);
			});
		};
	});
	l.loadRecentParticipants = e;
}), 98);
