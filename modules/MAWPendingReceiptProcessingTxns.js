__d("MAWPendingReceiptProcessingTxns", [
	"MAWDbMsg",
	"MAWDbParticipantTxns",
	"MAWDbReceiptTxns",
	"MAWDexieTable",
	"MAWMarkThreadAsReadTxns",
	"WAJids",
	"WALogger",
	"WAMsg",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, r) {
		var a = o("WAMsg").craftWAMsgIdString({
			author: r.author,
			chat: n,
			externalId: r.externalId
		});
		return t.pendingReceipts.get(a).then(function(n) {
			if (n != null) if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"Processing pending receipts for ",
				" from ",
				""
			])), r.externalId, r.author), n.author === o("WAJids").AUTHOR_ME) {
				var i = o("MAWDexieTable").dexieResolve();
				return n.deliveryReceipts.length > 0 && (i = i.then(function() {
					return o("MAWDbReceiptTxns").writeReceiptsForDevices(r.msgId, "delivered", n.deliveryReceipts);
				})), n.readReceipts.length > 0 && (i = i.then(function() {
					return o("MAWDbReceiptTxns").writeReceiptsForDevices(r.msgId, "read", n.readReceipts);
				})), i.then(function(e) {
					var n = [];
					return e != null && e.type !== "missing" && e.receipt.statusTsPerUser.forEach(function(e, a) {
						var i, l = e.deliveredTs != null ? r.ts : o("WATimeUtils").castToUnixTime(0), s = e.readTs != null ? r.ts : o("WATimeUtils").castToUnixTime(0), u = (i = e.readTs) != null ? i : o("WATimeUtils").castToUnixTime(0);
						n.push(o("MAWDbParticipantTxns").updateParticipantTimestamps(t, [r.threadJid, a], l, s, u));
					}), o("MAWDexieTable").dexieAll(n).then(function() {
						t.pendingReceipts.delete(a);
					});
				});
			} else return o("MAWDexieTable").dexieAll([o("MAWMarkThreadAsReadTxns").markThreadAsReadUpToMsgSortOrderMs(t, r.threadJid, r.msgId, o("WATimeUtils").castToMillisTime(o("MAWDbMsg").getSortOrderWithFallback(r)))]).then(function() {
				return t.pendingReceipts.delete(a);
			});
		});
	}
	l.processPendingReceipts = s;
}), 98);
