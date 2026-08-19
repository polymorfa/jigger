__d("MAWRemoveExpiredUnsendMsgsContent", [
	"MAWDbEditMsgHistoryTxns",
	"MAWDeleteExpiredMsgsApi",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWJidUtils",
	"MAWMsgType",
	"MAWTransactionMode",
	"WAArmadilloXMA.pb",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READWRITE,
		editMsgHistory: e.READWRITE,
		media: e.READWRITE,
		mediaBackup: e.READWRITE,
		messages: e.READWRITE,
		xma: e.READWRITE
	}, "removeExpiredUnsendMsgsContent", function(e) {
		return function() {
			return u(e);
		};
	});
	function u(e) {
		var t = o("WATimeUtils").unixTime();
		return e.messages.where("unsendMsgContentDeleteTs").belowOrEqual(t).toArray().then(function(t) {
			var n = t.map(function(e) {
				if (e.mediaId != null) return [e.mediaId, e.msgId];
			}).filter(Boolean), r = t.map(function(e) {
				if (e.type === o("MAWMsgType").MSG_TYPE.REVOKED) {
					var t = {
						editCount: 0,
						mediaId: void 0,
						msgContent: void 0,
						quote: void 0,
						reportingMeta: void 0,
						xmaMessageType: void 0
					};
					for (var n of Object.keys(t)) if (e[n] !== t[n]) return babelHelpers.extends({}, e, t);
				}
			}).filter(Boolean), a = t.map(function(e) {
				if (e.type === o("MAWMsgType").MSG_TYPE.XMA && e.revokedExternalId != null) {
					var t = o("MAWJidUtils").maybeToProtocolMsgId(e.author, e.threadJid, e.revokedExternalId);
					if (t != null) return [t, e.msgId];
				} else if (e.quote != null && e.quote.content.xmaMessageType === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_REPLY) {
					var n = o("MAWJidUtils").maybeToProtocolMsgId(e.quote.content.author, e.threadJid, e.quote.content.externalId);
					if (n != null) return [n, e.msgId];
				}
			}).filter(Boolean), i = t.map(function(e) {
				return [e.externalId, e.threadJid];
			});
			return o("MAWDexieTable").dexieAll([
				o("MAWDeleteExpiredMsgsApi").deleteOrUpdateXMAForExpiredMsgs(e, a),
				o("MAWDeleteExpiredMsgsApi").deleteOrUpdateMediaAndChunkForExpiredMsgs(e, n),
				o("MAWDbEditMsgHistoryTxns").deleteExpiredEditMsgHistory(e, i),
				e.messages.bulkPut(r)
			]).then(function() {
				return o("MAWDexieTable").dexieResolve(t.length);
			});
		});
	}
	l.removeExpiredUnsendMsgsContent = s;
}), 98);
