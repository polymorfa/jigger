__d("MAWGetMsgQuoteTxn", [
	"LSMEBTaskCreationSource",
	"MAWBridgeEventTransmitter",
	"MAWBridgeMsg",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWMsgType",
	"MAWQuotedMsgUtils",
	"WAJids",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		return t == null || t === o("WAJids").AUTHOR_SYSTEM ? null : o("WAJids").authorAsUserJid(t);
	};
	function s(t, n, a, i) {
		var l = n.quote, s = (l == null ? void 0 : l.content) || {}, u = s.author, c = s.externalId;
		if (u == null) return o("MAWDexieTable").dexieResolve(null);
		var d = o("WAJids").isAuthorMe(u) ? o("WAJids").AUTHOR_ME : e(u);
		if (l == null || d == null || c == null) return o("MAWDexieTable").dexieResolve(null);
		var m = {
			author: d,
			chat: a,
			externalId: c
		};
		if (l.content.type === "NoteReply") return o("MAWDexieTable").dexieResolve({
			quote: o("MAWQuotedMsgUtils").dbQuotedMsgWithoutExpiredContent(l),
			quoteExternalId: l.content.externalId
		});
		var p = i != null && i === "ebrestore" ? r("LSMEBTaskCreationSource").EB_POINT_QUERY_RESTORE_PROTOBUF : r("LSMEBTaskCreationSource").EB_POINT_QUERY_IN_ACT;
		return o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(t, m).then(function(e) {
			if (o("MAWBridgeEventTransmitter").issuePointQueryOutsideTxn(m.externalId, p, m.chat), e == null || !o("MAWMsgType").isQuotedMsgType(e.type)) return {
				quote: l,
				quoteExternalId: l.content.externalId
			};
			o("MAWIndexedDb").afterTransaction({
				tag: "NewMsg",
				value: o("MAWBridgeMsg").createBridgeMsg(e, null, !0)
			});
			var t = e.author, n = e.externalId, r = e.mediaId, a = e.msgContent, i = e.msgId, s = e.plaintextHash, u = e.specialTextSize, c = e.ts, d = e.type, _ = e.xmaMessageType, f = {
				author: t,
				externalId: n,
				mediaId: r,
				msgContent: a,
				msgId: i,
				plaintextHash: s,
				specialTextSize: u,
				ts: c,
				type: d,
				xmaMessageType: _
			};
			return e.messageExpirationTs != null && e.messageExpirationTs < o("WATimeUtils").unixTime() && (f = babelHelpers.extends({}, f, {
				mediaId: void 0,
				msgContent: void 0,
				type: o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL
			})), {
				quote: babelHelpers.extends({}, l, { content: f }),
				quoteExternalId: e.externalId
			};
		});
	}
	function u(e, t, n) {
		return s(e, t, n).then(function(e) {
			return babelHelpers.extends({}, t, {
				quote: e == null ? void 0 : e.quote,
				quoteExpirationTs: e == null ? void 0 : e.quote.content.expirationTs,
				quoteExternalId: e == null ? void 0 : e.quoteExternalId
			});
		});
	}
	function c(e, t) {
		return e.messages.where("quoteExternalId").anyOf(t).toArray();
	}
	l.getMsgQuoteInfo = s, l.enhanceMsgWithQuoteInfo = u, l.maybeBatchGetMsgsByQuoteExternalId = c;
}), 98);
