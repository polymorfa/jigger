__d("MAWDbReceiptTxns", [
	"MAWDexieTable",
	"WAJids",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n) {
		return u([{
			deliveryReceipts: t === "delivered" ? n : [],
			msgId: e,
			readReceipts: t === "read" ? n : [],
			senderReceipts: t === "sender" ? n : []
		}]).then(function(e) {
			return e[0] || { type: "missing" };
		});
	}
	function u(t) {
		var n = t.map(function(e) {
			return e.msgId;
		}), r = new Map();
		t.forEach(function(e) {
			r.set(e.msgId, e);
		});
		var a = n.map(function(t) {
			var n = r.get(t);
			if (n == null) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unexpectedly fetched null data from a msgIdToReceiptData map"]))), null;
			var a = new Set(), i = new Map(), l = n.deliveryReceipts, s = n.readReceipts, u = n.senderReceipts;
			return [
				{
					receiptType: "delivered",
					receivers: l
				},
				{
					receiptType: "read",
					receivers: s
				},
				{
					receiptType: "sender",
					receivers: u
				}
			].forEach(function(e) {
				var t = e.receiptType, n = e.receivers;
				n.forEach(function(e) {
					var n = e.device, r = e.ts, l = o("WAJids").extractUserJid(n), s = !1;
					if (t !== "sender") {
						var u = i.get(l), m = c(u, t, r);
						i.set(l, m), s = d(u, m);
					}
					s && a.add(l);
				});
			}), {
				affectedUserJids: a,
				receipt: {
					msgId: t,
					statusTsPerUser: i
				}
			};
		}).filter(Boolean);
		return o("MAWDexieTable").dexieResolve(a.map(function(e) {
			return {
				affectedUserJids: e.affectedUserJids,
				receipt: e.receipt
			};
		}));
	}
	function c(e, t, n) {
		var r, o = (r = e == null ? void 0 : e.deliveredTs) != null ? r : n, a = e == null ? void 0 : e.readTs;
		return t === "read" && a == null && (a = n), {
			deliveredTs: o,
			readTs: a
		};
	}
	function d(e, t) {
		return ((t == null ? void 0 : t.deliveredTs) || 0) > ((e == null ? void 0 : e.deliveredTs) || 0) || ((t == null ? void 0 : t.readTs) || 0) > ((e == null ? void 0 : e.readTs) || 0);
	}
	function m(e) {
		if (!(e == null || e.size === 0)) return e;
	}
	function p(e, t) {
		return e.receipts.bulkDelete(t);
	}
	l.writeReceiptsForDevices = s, l.bulkWriteReceiptsForDevices = u, l.bulkDeleteAllReceiptsForMessages = p;
}), 98);
