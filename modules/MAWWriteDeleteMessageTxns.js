__d("MAWWriteDeleteMessageTxns", [
	"MAWAckLevel",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDbPendingStanza",
	"MAWDbReactionsTxns",
	"MAWDbThreadTxns",
	"MAWDbXMATxns",
	"MAWDeleteForMeMsgContentCleaner",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWMsgType",
	"MAWPendingStanzaCleaner",
	"MAWThreadSnippetBuildTxns",
	"MAWUpdateQuotedMsgTxns",
	"MAWXMAUtils",
	"MpsMediaManagerV2Deferred",
	"WAResultOrError",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 6 * o("WATimeUtils").HOUR_SECONDS, s = 30 * o("WATimeUtils").DAY_SECONDS;
	function u(e, t) {
		var n = t.protocolMsgId, r = n.author, a = n.chat, i = n.externalId;
		return o("MAWDexieTable").dexieAll([o("MAWDbThreadTxns").getThread(e, a), e.unrenderedMessages.get({ externalId: i })]).then(function(t) {
			var a = t[0], l = t[1];
			return a.success ? l != null && l.threadJid === a.value.jid && l.author === r ? o("WAResultOrError").makeError("duplicate_delete_for_me") : o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(e, n).then(function(t) {
				if (t == null) {
					var l = {
						ack: o("MAWAckLevel").ACK.received,
						author: r,
						externalId: i,
						threadJid: a.value.jid,
						type: o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME
					}, u = o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + s), d = {
						deleteTs: u,
						externalIdWithType: i + "_" + o("MAWDbPendingStanza").PENDING_DELETE_FOR_ME,
						pendingContent: {
							content: l,
							type: o("MAWDbPendingStanza").PENDING_TYPE.DELETE_FOR_ME
						}
					};
					return e.pendingStanzas.add(d).then(function() {
						return o("MAWPendingStanzaCleaner").addNewPendingStanzaCleanerTimestamp(u), o("WAResultOrError").makeResult();
					});
				}
				return o("MAWDexieTable").dexieResolve(c(e, t, r, n.chat, a.value)).then(function() {
					return o("WAResultOrError").makeResult();
				});
			}) : o("WAResultOrError").makeError("missing_thread");
		});
	}
	function c(t, n, a, i, l) {
		var s, u, c = o("MAWDexieTable").dexieResolve();
		o("MAWXMAUtils").isXMAStoryReply((s = n.quote) == null ? void 0 : s.content.xmaMessageType) && (c = d(t, n));
		var p = {
			ack: n.ack,
			author: a,
			externalId: n.externalId,
			mediaId: n.mediaId,
			messageDeleteForMeTs: o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + e),
			msgContent: (u = o("MAWDbMsg").getMsgContent(n)) == null ? void 0 : u.content,
			msgId: n.msgId,
			quote: n.quote,
			reportingMeta: n.reportingMeta,
			serverTs: void 0,
			threadJid: i,
			ts: n.ts,
			type: o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME,
			xmaMessageType: n.xmaMessageType
		}, _ = o("MAWDexieTable").dexieAll([
			m(t, n.author, n.externalId, n.threadJid),
			o("MAWDbMsgTxns").deleteDbMsg(t, n.rowId),
			c
		]).then(function() {
			if (o("MAWDbMsg").isMediaMsg(n)) {
				var e = n.mediaId, a = n.plaintextHash;
				e != null && (a != null ? (o("MpsMediaManagerV2Deferred").dequeueDownload(a), o("MAWIndexedDb").afterTransaction({
					tag: "MediaExpired",
					value: {
						mediaId: e,
						msgId: n.msgId,
						plaintextHash: a,
						threadJid: n.threadJid
					}
				})) : o("MAWIndexedDb").afterTransaction({
					tag: "MediaExpired",
					value: {
						mediaId: e,
						msgId: n.msgId,
						threadJid: n.threadJid
					}
				}));
			}
			return o("MAWDexieTable").dexieAll([o("MAWThreadSnippetBuildTxns").refreshThreadSnippet(t, l)]).then(r("emptyFunction"));
		});
		return _.then(function() {
			return o("MAWDexieTable").dexieAll([
				t.unrenderedMessages.add(p),
				o("MAWDbReactionsTxns").deleteReactionsByUniqueMsgIdentifiers(t, [{
					author: a,
					chatJid: n.threadJid,
					externalId: n.externalId
				}]),
				o("MAWUpdateQuotedMsgTxns").disassociateQuotedMsg(t, n.threadJid, n.externalId, n.author, o("MAWMsgType").MSG_TYPE.REVOKED)
			]).then(function() {
				return o("MAWDbMsgTxns").maybeUpdateThreadMsgsForDeleteForMe(t, l.jid, n.msgId, n.sortOrderMs).then(function() {
					return o("MAWDeleteForMeMsgContentCleaner").addNewDeleteForMeMsgContentCleanerTimestamp(p.messageDeleteForMeTs), o("WAResultOrError").makeResult();
				});
			});
		});
	}
	function d(e, t) {
		return o("MAWDbXMATxns").maybeGetXMAFromAssociatedMsgId(e, t.msgId).then(function(t) {
			return o("MAWDbMsgTxns").maybeGetMsg(e, t == null ? void 0 : t.msgId).then(function(t) {
				if (t != null) return o("MAWDbMsgTxns").deleteDbMsg(e, t.rowId);
			});
		});
	}
	function m(e, t, n, r) {
		return e.messages.where("quoteExternalId").equals(n).filter(function(e) {
			var n;
			return e.type === o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE && ((n = e.quote) == null ? void 0 : n.content.author) === t && e.threadJid === r;
		}).toArray().then(function(t) {
			if (t.length === 0) return o("MAWDexieTable").dexieResolve([]);
			var n = t.map(function(e) {
				return e.rowId;
			});
			return o("MAWDbMsgTxns").bulkDeleteDbMsg(e, n).then(function() {
				return t;
			});
		});
	}
	l.REVOKE_CONTENT_EXPIRATION_IN_SEC = e, l.handleDeleteForMe = u, l.deleteXMAStoryReplyMsg = d, l.deleteBumpMsgs = m;
}), 98);
