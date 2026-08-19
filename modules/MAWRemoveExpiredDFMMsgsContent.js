__d("MAWRemoveExpiredDFMMsgsContent", [
	"MAWDbEditMsgHistoryTxns",
	"MAWDeleteExpiredMsgsApi",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWJidUtils",
	"MAWMsgType",
	"MAWTransactionMode",
	"MAWXMAUtils",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READWRITE,
		editMsgHistory: e.READWRITE,
		media: e.READWRITE,
		mediaBackup: e.READWRITE,
		unrenderedMessages: e.READWRITE,
		xma: e.READWRITE
	}, "removeExpiredDFMMsgsContent", function(e) {
		return function() {
			var t = o("WATimeUtils").unixTime();
			return e.unrenderedMessages.where("messageDeleteForMeTs").belowOrEqual(t).toArray().then(function(t) {
				var n = t.map(function(e) {
					if (e.mediaId != null) return [e.mediaId, e.msgId];
				}).filter(Boolean), r = t.map(function(e) {
					if (e.type === o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME) return babelHelpers.extends({}, e, {
						mediaId: void 0,
						msgContent: void 0,
						quote: void 0,
						serverTs: void 0,
						xmaMessageType: void 0
					});
				}).filter(Boolean), a = t.map(function(e) {
					var t, n = (t = e.quote) == null ? void 0 : t.content;
					if (e.type === o("MAWMsgType").MSG_TYPE.XMA && e.externalId != null) {
						var r = o("MAWJidUtils").maybeToProtocolMsgId(e.author, e.threadJid, e.externalId);
						if (r != null) return [r, e.msgId];
					} else if (n != null && o("MAWXMAUtils").isXMAStoryReply(n.xmaMessageType)) {
						var a = o("MAWJidUtils").maybeToProtocolMsgId(n.author, e.threadJid, n.externalId);
						if (a != null) return [a, e.msgId];
					}
				}).filter(Boolean), i = t.map(function(e) {
					return [e.externalId, e.threadJid];
				});
				return o("MAWDexieTable").dexieAll([
					o("MAWDeleteExpiredMsgsApi").deleteOrUpdateXMAForExpiredMsgs(e, a),
					o("MAWDeleteExpiredMsgsApi").deleteOrUpdateMediaAndChunkForExpiredMsgs(e, n),
					o("MAWDbEditMsgHistoryTxns").deleteExpiredEditMsgHistory(e, i),
					e.unrenderedMessages.bulkPut(r)
				]).then(function() {
					return o("MAWDexieTable").dexieResolve(t.length);
				});
			});
		};
	});
	l.removeExpiredDFMMsgsContent = s;
}), 98);
