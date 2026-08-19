__d("MAWDbPendingReceiptTxns", ["WAJids", "WAMsg"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = t.map(function(e) {
			var t = e.author, n = e.externalId, r = e.thread;
			return o("WAMsg").craftWAMsgIdString({
				author: t,
				chat: r,
				externalId: n
			});
		});
		return e.pendingReceipts.where("id").anyOf(n).toArray().then(function(n) {
			var r = new Map();
			n.forEach(function(e) {
				r.set(e.id, e);
			});
			var a = t.map(function(e) {
				var t = e.author, n = e.externalId, a = e.thread, i = o("WAMsg").craftWAMsgIdString({
					author: t,
					chat: a,
					externalId: n
				}), l = r.get(i), s = l != null ? l : {
					author: t,
					deliveryReceipts: [],
					externalId: n,
					id: i,
					readReceipts: [],
					thread: a
				};
				return t === o("WAJids").AUTHOR_ME ? (e.deliveryReceipts.forEach(function(e) {
					s.deliveryReceipts.push(e);
				}), e.readReceipts.forEach(function(e) {
					s.readReceipts.push(e);
				})) : (s.deliveryReceipts = [], e.readReceipts.forEach(function(e) {
					s.readReceipts.push(e);
				})), s;
			});
			return e.pendingReceipts.bulkPut(a).then(function() {
				return a;
			});
		});
	}
	function s(e, t) {
		return e.pendingReceipts.bulkGet(t);
	}
	l.bulkAddPendingReceipts = e, l.getPendingReceipts = s;
}), 98);
