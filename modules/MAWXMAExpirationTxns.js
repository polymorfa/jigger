__d("MAWXMAExpirationTxns", [
	"MAWAuthor",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWXMAUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("MAWDbMsgTxns").getMsgsByMsgIds(e, t).then(function(t) {
			var n = t.map(function(e) {
				var t = e.quote;
				if (t != null && o("MAWXMAUtils").isXMAStoryReply(t.content.xmaMessageType)) {
					var n = babelHelpers.extends({}, t.content, {
						mediaId: void 0,
						plaintextHash: void 0
					}), r = {
						content: n,
						remoteJid: t.remoteJid
					};
					return babelHelpers.extends({}, e, { quote: r });
				}
			}).filter(Boolean);
			return e.messages.bulkPut(n).then(function() {
				return n;
			});
		});
	}
	function s(e, t) {
		var n = t.map(function(t) {
			return u(e, t);
		});
		return o("MAWDexieTable").dexieAll(n).then(function(e) {
			return e.flat();
		});
	}
	function u(e, t) {
		var n = o("MAWAuthor").getAuthorUserJid(t.author);
		return e.messages.where("quoteExternalId").equals(t.externalId).toArray().then(function(e) {
			return e.length === 0 ? [] : e.filter(function(e) {
				var r = e.quote, a = e.threadJid;
				return o("MAWAuthor").getAuthorUserJid(r == null ? void 0 : r.content.author) === n && a === t.chat;
			});
		});
	}
	l.updateExpiredStoryReplyMsg = e, l.getXMAShareReplyMsgsToUpdate = s;
}), 98);
