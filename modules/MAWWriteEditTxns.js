__d("MAWWriteEditTxns", [
	"FBLogger",
	"MAWAckLevel",
	"MAWBridgeMsg",
	"MAWBulkEditMsgsTxns",
	"MAWDbEditMsgHistoryTxns",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWLoadReplyMediaTxns",
	"MAWUnsafeCoerce",
	"MAWUserJidWrapper",
	"MAWWriteMsgTxns",
	"WAJids",
	"WAMsgType",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = t.args, a = t.externalId, i = n.editMsgContent, l = n.originalProtocolMsgId, u = l.chat, c = l.externalId, d = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(u)) : e.threads.get({ jid: u });
		return o("MAWDexieTable").dexieAll([d, o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(e, l)]).then(function(n) {
			var l = n[0], d = n[1], m = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(l, "MAWWriteEditTxns.writeEdit");
			if (m == null) return o("WAResultOrError").makeError("missing_thread");
			if (d == null) return o("WAResultOrError").makeError("missing_msg");
			if (d.type !== o("WAMsgType").MSG_TYPE.TEXT) throw r("FBLogger")("messenger_web").mustfixThrow("Only text or cipher text can be edited. Original msg type: %s", d.type);
			return o("MAWDexieTable").dexieAll([e.messages.where("quoteExternalId").equals(c).toArray(), e.editMsgHistory.where("originalMsgExternalId").equals(c).toArray()]).then(function(n) {
				var l = n[0], m = n[1], p = m.find(function(e) {
					return e.author === o("WAJids").AUTHOR_ME && e.threadJid === u && e.editExternalId === a;
				});
				if ((p == null ? void 0 : p.sendStatus) != null && p.sendStatus > o("MAWAckLevel").ACK.clock) return o("WAResultOrError").makeError("already_sent");
				var _ = [];
				_.push(s(t, u, c));
				var f = m.find(function(e) {
					return e.author === o("WAJids").AUTHOR_ME && e.threadJid === u && e.editExternalId === c;
				});
				return f == null && (d.editCount == null || d.editCount === 0) && _.push(s(d, u, c)), o("MAWDbEditMsgHistoryTxns").bulkAddEditMsgHistory(e, _).then(function() {
					var t, n = babelHelpers.extends({}, d, {
						ack: o("MAWAckLevel").ACK.clock,
						editCount: ((t = d.editCount) != null ? t : 0) + 1,
						msgContent: i
					}), s = [], m = o("MAWUserJidWrapper").getMyUserJid();
					return l.filter(function(e) {
						var t, n;
						return (((t = e.quote) == null ? void 0 : t.content.author) === o("WAJids").AUTHOR_ME || ((n = e.quote) == null ? void 0 : n.content.author) === m) && e.threadJid === u;
					}).forEach(function(e) {
						if (e != null) {
							var t = e.quote, o = e.quoteExternalId;
							if (t == null) r("FBLogger")("messenger_web").warn("[edit message] Failed to get the quoted content for a msg that has been quoted.", o);
							else {
								var a = babelHelpers.extends({}, e, { quote: babelHelpers.extends({}, t, { content: babelHelpers.extends({}, t.content, { msgContent: babelHelpers.extends({}, n.msgContent) }) }) });
								s.push(a);
							}
						}
					}), e.messages.bulkPut([n].concat(s)).then(function() {
						return o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(e, d);
					}).then(function(e) {
						o("MAWIndexedDb").afterTransaction({
							tag: "MsgUpdated",
							value: o("MAWBridgeMsg").createBridgeMsg(n, e)
						});
					}).then(function() {
						return s.forEach(function(e) {
							o("MAWIndexedDb").afterTransaction({
								tag: "MsgUpdated",
								value: o("MAWBridgeMsg").createBridgeMsg(e)
							});
						}), o("WAResultOrError").makeResult({
							originalMsgExternalId: c,
							originalMsgId: d.msgId,
							protocolMsgId: {
								author: o("WAJids").AUTHOR_ME,
								chat: u,
								externalId: a
							}
						});
					});
				});
			});
		});
	}
	function s(e, t, n) {
		var r, a, i;
		return {
			author: o("WAJids").AUTHOR_ME,
			editExternalId: e.externalId,
			editTs: (r = e.serverTs) != null ? r : e.ts,
			msgContent: (a = (i = e.args) == null ? void 0 : i.editMsgContent) != null ? a : o("MAWUnsafeCoerce").unsafeCoerce(e.msgContent),
			originalMsgExternalId: n,
			sendStatus: o("MAWAckLevel").ACK.clock,
			specialTextSize: e.specialTextSize,
			threadJid: t
		};
	}
	function u(e, t, n, r, a, i) {
		if (t.type !== o("WAMsgType").MSG_TYPE.TEXT || !r || r.length === 0) return o("MAWWriteMsgTxns").writeNewIncomingMsg(e, t, n, a, i);
		var l = r.sort(function(e, t) {
			return t.editTs - e.editTs;
		})[0].msgContent, s = r.length;
		return o("MAWWriteMsgTxns").writeNewIncomingMsg(e, babelHelpers.extends({}, t, {
			editCount: s,
			msgContent: l
		}), n, a, i).then(function(n) {
			return (n.type === o("WAMsgType").MSG_TYPE.TEXT ? o("MAWDbEditMsgHistoryTxns").bulkAddEditMsgHistory(e, [o("MAWBulkEditMsgsTxns").getMessageHistory(babelHelpers.extends({}, n, { msgContent: t.msgContent }), n.threadJid)]) : o("MAWDexieTable").dexieResolve()).then(function() {
				return n;
			});
		});
	}
	l.writeEdit = e, l.writeNewIncomingMsgAndEditHistory = u;
}), 98);
