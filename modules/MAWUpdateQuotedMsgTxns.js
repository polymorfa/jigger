__d("MAWUpdateQuotedMsgTxns", [
	"MAWAuthor",
	"MAWBridgeMsg",
	"MAWDbXMATxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWLoadReplyMediaTxns",
	"MAWMsgType",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t, n, r, a, i, l, s) {
		var e = o("MAWAuthor").getAuthorUserJid(a);
		return t.messages.where("quoteExternalId").equals(r).toArray().then(function(r) {
			if (r.length !== 0) {
				var a = r;
				(s == null || !s) && (a = r.filter(function(t) {
					var r = t.quote, a = t.threadJid;
					return o("MAWAuthor").getAuthorUserJid(r == null ? void 0 : r.content.author) === e && a === n;
				}));
				var u = a.map(function(e) {
					var t, n = Object.assign({}, (t = e.quote) == null ? void 0 : t.content, i.content), r = babelHelpers.extends({}, e.quote, i, { content: n });
					return r.content.msgId == null && l != null && (r.content.msgId = l), babelHelpers.extends({}, e, { quote: r });
				});
				return t.messages.bulkPut(u).then(function() {
					return u;
				});
			}
		});
	}, s = function(n, r, a, i, l) {
		l === void 0 && (l = o("MAWMsgType").MSG_TYPE.UNAVAILABLE);
		var t = { content: {
			mediaId: void 0,
			msgContent: void 0,
			type: l
		} };
		return e(n, r, a, i, t).then(function(e) {
			e != null && e.forEach(function(e) {
				o("MAWIndexedDb").afterTransaction({
					tag: "MsgUpdated",
					value: o("MAWBridgeMsg").createBridgeMsg(e)
				});
			});
		});
	}, u = function(t, n, r) {
		r === void 0 && (r = o("MAWMsgType").MSG_TYPE.UNAVAILABLE);
		var e = n.author, a = n.chat, i = n.externalId, l = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(a)) : t.threads.get({ jid: a });
		return l.then(function(n) {
			var a = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n, "MAWUpdateQuotedMsgTxns.updateQuotedMsg");
			if (a != null) return s(t, a.jid, i, e, r);
		});
	}, c = function(n, r, a, i) {
		var t = a.author, l = a.externalId, s = a.mediaId, u = a.msgContent, c = a.msgId, d = a.plaintextHash, m = a.ts, p = a.type;
		if (o("WAJids").isAuthorSystem(t)) return o("MAWDexieTable").dexieResolve();
		var _ = {
			author: t,
			chat: r,
			externalId: l
		};
		if (!o("MAWMsgType").isQuotedMsgType(p)) return o("MAWDexieTable").dexieResolve();
		var f = o("MAWDexieTable").dexieResolve(null);
		return a.type === o("MAWMsgType").MSG_TYPE.XMA && (f = o("MAWDbXMATxns").maybeGetXMAPayloadFromProtocolMsgId(n, _).then(function(e) {
			return e.success === !1 ? o("MAWDexieTable").dexieResolve(null) : o("MAWDexieTable").dexieResolve(e.value);
		})), f.then(function(o) {
			var a, _, f, g, h, y = {
				author: t,
				externalId: l,
				mediaId: (a = o == null || (_ = o.defaultPreview) == null ? void 0 : _.mediaId) != null ? a : s,
				msgContent: u,
				plaintextHash: (f = o == null || (g = o.defaultPreview) == null ? void 0 : g.plaintextHash) != null ? f : d,
				ts: m,
				type: p,
				xmaMessageType: o == null || (h = o.xma) == null ? void 0 : h.targetType
			};
			return e(n, r, l, t, { content: y }, c, i);
		});
	};
	function d(e, t, n) {
		return o("MAWDexieTable").dexieAll([c(e, n, t), o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(e, t)]).then(function(n) {
			var r = n[0], a = n[1];
			return r != null ? o("MAWDexieTable").dexieResolve(m(t, a)).then(function() {
				o("MAWDexieTable").dexieAll(r.map(function(t) {
					return o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(e, t).then(function(e) {
						return m(t, e), t;
					});
				}));
			}) : o("MAWDexieTable").dexieResolve([]);
		});
	}
	function m(e, t) {
		o("MAWIndexedDb").afterTransaction({
			tag: "MsgUpdated",
			value: o("MAWBridgeMsg").createBridgeMsg(e, t)
		});
	}
	l.disassociateQuotedMsg = s, l.disassociateQuotedMessageByProtocolMsgId = u, l.associateQuotedMessage = c, l.associateAllReplies = d;
}), 98);
