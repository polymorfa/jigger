__d("MAWWriteXMAMessageTxns", [
	"FBLogger",
	"MAWBridgeMsg",
	"MAWDbXMATxns",
	"MAWDexieTable",
	"MAWExpiredXMACleaner",
	"MAWHandleXmaTransactionUtil",
	"MAWIndexedDb",
	"MAWMsgType",
	"MAWWriteMsgTxns",
	"MAWXMAManagementTxns",
	"MAWXMAUtils",
	"MWPBumpEntityKey",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new Set([
		o("MAWMsgType").MSG_TYPE.TEXT,
		o("MAWMsgType").MSG_TYPE.GIF,
		o("MAWMsgType").MSG_TYPE.STICKER
	]);
	function s(e, t, n, r) {
		var a = n.unstoredAssociatedMedia, i = n.unstoredAssociatedMsg, l = n.unstoredDbXMA;
		return o("MAWDbXMATxns").maybeGetAssociatedXMAMsg(e, i, r.jid).then(function(n) {
			var s = t;
			if (n != null && n.type === o("MAWMsgType").MSG_TYPE.CIPHERTEXT) {
				var u = n.serverTs, c = n.sortOrderMs, d = n.ts;
				s = babelHelpers.extends({}, t, {
					serverTs: u,
					sortOrderMs: c != null ? c - 1 : c,
					ts: d
				});
			}
			var m = [l.targetExpiringAtSec, l.targetType], p = m[0], _ = m[1];
			o("MAWXMAUtils").isXMAStoryReaction(_) && (i == null ? void 0 : i.msgContent) != null && (s = babelHelpers.extends({}, t, { msgContent: i.msgContent }));
			var f = o("MAWXMAUtils").isXMAExpired(l.isTombstoned, p);
			s.isExpiredXmaMsg = f;
			var g = !o("MAWXMAUtils").isXMAStoryReaction(_) && i != null ? o("MAWWriteMsgTxns").prepareMsgWriteData(e, i, r) : o("MAWDexieTable").dexieResolve(null);
			return o("MAWDexieTable").dexieAll([o("MAWWriteMsgTxns").prepareMsgWriteData(e, s, r), g]).then(function(e) {
				var t = e[0], n = e[1];
				return {
					associatedData: n,
					associatedMedia: a,
					associatedMsg: i,
					xmaData: t,
					xmaMsg: s
				};
			});
		});
	}
	function u(e, t, n, r, a) {
		var i = n.unstoredDbXMA, l = [i.targetExpiringAtSec, i.targetType], s = l[0], u = l[1];
		return t == null || t.type === o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME ? o("MAWDexieTable").dexieResolve({
			dbMedias: null,
			dbXMA: null
		}) : (t.isExpiredXmaMsg !== !0 && s != null && o("MAWExpiredXMACleaner").addNewExpiredXMACleanerTimestamp(s), o("MAWXMAUtils").isXMAStoryReaction(u) && o("MAWIndexedDb").afterTransaction({
			tag: "MsgUpdated",
			value: o("MAWBridgeMsg").createBridgeMsg(t)
		}), o("MAWXMAManagementTxns").handleUnstoredXMAContent(e, babelHelpers.extends({}, n, { unstoredDbXMA: i }), t, a, t.isExpiredXmaMsg === !0, r).then(function(n) {
			var r = n.dbMedias, a = n.dbXMA, i = n.firstPreview, l = o("MAWDexieTable").dexieResolve();
			return a != null && !o("MAWXMAUtils").isXMAStoryReply(a.targetType) && t.isExpiredXmaMsg !== !0 && (l = o("MAWHandleXmaTransactionUtil").checkMediaChunkAndHandleXmaAfterTransaction(e, a, i)), l.then(function() {
				return {
					dbMedias: r,
					dbXMA: a
				};
			});
		}));
	}
	function c(t, n, a, i, l, s, u, c) {
		var d, m, p, _, f, g;
		if (!e.has(l.type)) throw r("FBLogger")("messenger_web").mustfixThrow("flow check, this message type is not supported for XMA replies: " + l.type);
		var h = n.author;
		if (h === "@system") throw r("FBLogger")("messenger_web").mustfixThrow("wrong author of story reply");
		var y = o("WAJids").interpretAsUserJid(i);
		if (y == null) throw r("FBLogger")("messenger_web").mustfixThrow("this is a flow check, participant jid can not be null");
		var C = (d = c == null || (m = c[0]) == null ? void 0 : m.plaintextHash) != null ? d : l.plaintextHash;
		(s || a == null ? void 0 : a.defaultPreviewMediaId) != null && C == null && o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.reply_attachment_media_missing_plaintext_hash", "write_xma_message_txns_handle_xma_reply_msg");
		var b = {
			author: h === o("WAJids").AUTHOR_ME ? y : o("WAJids").AUTHOR_ME,
			expirationTs: a.targetExpiringAtSec,
			externalId: a.externalId,
			mediaId: s || a == null ? void 0 : a.defaultPreviewMediaId,
			plaintextHash: s ? void 0 : C,
			sourceId: (p = (_ = a.defaultCTA) == null ? void 0 : _.nativeUrl) != null ? p : (f = a.defaultCTA) == null ? void 0 : f.actionUrl,
			ts: n.ts,
			type: o("MAWMsgType").MSG_TYPE.XMA,
			xmaMessageType: a.targetType
		}, v = babelHelpers.extends({}, l, {
			mediaId: (g = u == null ? void 0 : u.mediaId) != null ? g : l.mediaId,
			quote: {
				content: b,
				remoteJid: i
			}
		});
		return t.messages.put(v).then(function() {
			o("MAWIndexedDb").afterTransaction({
				tag: "MsgUpdated",
				value: s ? o("MAWBridgeMsg").createBridgeMsg(v) : o("MAWBridgeMsg").createBridgeMsg(v, { replyPlaintextHash: C })
			});
		});
	}
	l.prepareXMAWriteData = s, l.handleIncomingXMA = u, l.handleXMAReplyMsg = c;
}), 98);
