__d("MAWBulkEditMsgsTxns", [
	"FBLogger",
	"MAWAckLevel",
	"MAWBridgeMsg",
	"MAWDbEditMsgHistoryTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWJidUtils",
	"MAWLoadReplyMediaTxns",
	"MAWUnsafeCoerce",
	"MAWUserJidWrapper",
	"WAJids",
	"WAMsgMap",
	"WAMsgType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = new Set(), r = [];
		return t.forEach(function(e) {
			var t = e.chatJid, o = e.msg;
			n.add(t), r.push(o.originalMsgExternalId);
		}), o("MAWDexieTable").dexieAll([
			e.messages.where("externalId").anyOf(r).toArray(),
			e.messages.where("quoteExternalId").anyOf(r).toArray(),
			e.editMsgHistory.where("originalMsgExternalId").anyOf(r).toArray()
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return {
				editMsgHistory: r,
				originalMsgs: t,
				quoteMessages: n
			};
		});
	}
	function s(e, t, n) {
		var a = n.editMsgHistory, i = n.originalMsgs, l = n.quoteMessages, s = i.reduce(function(e, t) {
			var n = o("MAWJidUtils").toProtocolMsgId(t);
			return n == null ? e : e.set(n, t);
		}, new (o("WAMsgMap")).MsgMap()), u = a.reduce(function(e, t) {
			var n = o("MAWJidUtils").toProtocolMsgId(t);
			return n == null ? e : e.set(n, t);
		}, new (o("WAMsgMap")).MsgMap()), d = c(t, {
			messageHistoriesToEdit: u,
			messagesToEdit: s
		}), m = d[0], p = d[1], _ = d[2];
		return o("MAWDbEditMsgHistoryTxns").bulkAddEditMsgHistory(e, m).then(function() {
			var t = new (o("WAMsgMap")).MsgMap();
			p.entries().forEach(function(e) {
				var n, a, i = e[0], l = e[1], u = s.get(i);
				if (u == null) {
					r("FBLogger")("messenger_web").warn("Cannot find the original msg for the edit action.");
					return;
				}
				if (u.type !== o("WAMsgType").MSG_TYPE.TEXT && u.type !== o("WAMsgType").MSG_TYPE.CIPHERTEXT) throw r("FBLogger")("messenger_web").mustfixThrow("Only text or cipher text can be edited. Original msg type: %s", u.type);
				var c = babelHelpers.extends({}, u, {
					editCount: ((n = u.editCount) != null ? n : 0) + ((a = _.get(i)) != null ? a : 0),
					msgContent: l.editMsgContent,
					type: o("WAMsgType").MSG_TYPE.TEXT
				});
				t.set(i, c);
			});
			var n = l.map(function(e) {
				var n = e.quote, a = e.quoteExternalId, i = e.threadJid;
				if (n == null) {
					r("FBLogger")("messenger_web").warn("[edit message] Failed to get the quoted content for a msg that has been quoted.", e.externalId);
					return;
				}
				var l = n.content.author, s = o("MAWJidUtils").maybeToProtocolMsgId(l === "@me" ? o("MAWUserJidWrapper").getMyUserJid() : l, i, a);
				if (s != null) {
					var u = t.get(s);
					if (u != null) return babelHelpers.extends({}, e, { quote: babelHelpers.extends({}, n, { content: babelHelpers.extends({}, n.content, { msgContent: babelHelpers.extends({}, u.msgContent) }) }) });
				}
			}).filter(Boolean);
			return e.messages.bulkPut(t.values().concat(n)).then(function() {
				t.values().forEach(function(t) {
					return o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(e, t).then(function(e) {
						o("MAWIndexedDb").afterTransaction({
							tag: "MsgUpdated",
							value: o("MAWBridgeMsg").createBridgeMsg(t, e)
						});
					});
				});
			}).then(function() {
				n.forEach(function(e) {
					o("MAWIndexedDb").afterTransaction({
						tag: "MsgUpdated",
						value: o("MAWBridgeMsg").createBridgeMsg(e)
					});
				});
			});
		});
	}
	function u(e, t) {
		var n, a, i, l;
		switch (e.type) {
			case o("WAMsgType").MSG_TYPE.TEXT:
			case o("WAMsgType").MSG_TYPE.EDIT_ACTION: return {
				author: e.author,
				editExternalId: e.externalId,
				editTs: (n = e.serverTs) != null ? n : e.ts,
				msgContent: (a = e.editMsgContent) != null ? a : o("MAWUnsafeCoerce").unsafeCoerce(e.msgContent),
				originalMsgExternalId: (i = e.originalMsgExternalId) != null ? i : e.externalId,
				sendStatus: o("MAWAckLevel").ACK.sent,
				specialTextSize: e.specialTextSize,
				threadJid: t
			};
			case o("WAMsgType").MSG_TYPE.CIPHERTEXT: return {
				author: e.author,
				editExternalId: e.externalId,
				editTs: (l = e.serverTs) != null ? l : e.ts,
				msgContent: { content: "" },
				originalMsgExternalId: e.externalId,
				sendStatus: o("MAWAckLevel").ACK.sent,
				specialTextSize: e.specialTextSize,
				threadJid: t
			};
			default: throw e.type, r("FBLogger")("messenger_web").mustfixThrow("MAWBulkEditMsgsTxns::getMessageHistory: Unexpected msg type");
		}
	}
	function c(e, t) {
		var n = t.messageHistoriesToEdit, a = t.messagesToEdit, i = [], l = new (o("WAMsgMap")).MsgMap(), s = new (o("WAMsgMap")).MsgMap();
		return e.forEach(function(e) {
			var t = e.chatJid, c = e.msg, d = o("MAWJidUtils").maybeToProtocolMsgId(c.author, t, c.originalMsgExternalId);
			if (d == null) throw r("FBLogger")("messenger_web").mustfixThrow("[protocolMsgId] Cannot get the protocol id for the edit action. isAuthorSystem = %s; chatJid = %s; externalId = %s", o("WAJids").isAuthorSystem(c.author), !!t, !!c.originalMsgExternalId);
			var m = o("MAWJidUtils").maybeToProtocolMsgId(c.author, t, c.externalId);
			if (m == null) throw r("FBLogger")("messenger_web").mustfixThrow("[editMsgProtocolMsgId] Cannot get the protocol id for the edit action. isAuthorSystem = %s; chatJid = %s; externalId = %s", o("WAJids").isAuthorSystem(c.author), !!t, !!c.externalId);
			if (n.get(m) == null) {
				var p;
				i.push(u(c, t));
				var _ = (p = s.get(d)) != null ? p : 0, f = a.get(d);
				if (s.set(d, _ + 1), n.get(d) == null && _ === 0 && f != null) {
					if (f.type !== o("WAMsgType").MSG_TYPE.TEXT && f.type !== o("WAMsgType").MSG_TYPE.CIPHERTEXT) throw r("FBLogger")("messenger_web").mustfixThrow("Only text or cipher text can be edited. Original msg type: %s", f.type);
					i.push(u(f, t));
				}
			}
			var g = l.get(d), h = g == null ? void 0 : g.serverTs, y = c == null ? void 0 : c.serverTs;
			(h == null || y == null || h < y) && l.set(d, c);
		}), [
			i,
			l,
			s
		];
	}
	l.prepareDataForMessageEdit = e, l.bulkEditMsgs = s, l.getMessageHistory = u;
}), 98);
