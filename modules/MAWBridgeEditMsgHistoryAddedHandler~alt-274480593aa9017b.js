__d("MAWBridgeEditMsgHistoryAddedHandler", [
	"FBLogger",
	"I64",
	"LSMessageSendStatus",
	"MAWChatJid",
	"ReQL",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(e, t) {
		var n = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages.index("optimistic")).getKeyRange(t));
		return n == null ? void 0 : n.messageId;
	}
	async function u(t, n, a) {
		var i = await s(t, n.originalMsgExternalId);
		if (i == null) {
			r("FBLogger")("messenger_web_e2ee").warn("original message for edit msg history is not present in lsdb");
			return;
		}
		var l = {
			messageContent: n.msgContent.content,
			originalMessagePk: i,
			sendStatus: n.sendStatus != null ? (e || (e = o("I64"))).of_int32(n.sendStatus) : (e || (e = o("I64"))).of_int32(r("LSMessageSendStatus").SERVER_RECEIVED),
			serverAdjustedEditTsMs: (e || (e = o("I64"))).of_int32(n.editTs),
			threadKey: a
		};
		return t.edit_message_history.put(l);
	}
	function c(t, n, a, i, l) {
		var s = {
			messageContent: n.msgContent.content,
			originalMessagePk: l,
			pk: i,
			sendStatus: n.sendStatus != null ? (e || (e = o("I64"))).of_int32(n.sendStatus) : (e || (e = o("I64"))).of_int32(r("LSMessageSendStatus").SERVER_RECEIVED),
			serverAdjustedEditTsMs: (e || (e = o("I64"))).of_int32(n.editTs),
			threadKey: a
		};
		return t.edit_message_history.put(s);
	}
	async function d(e, t, n) {
		var r = await o("MAWChatJid").toThreadKeyMaybe(e.tables, n.threadJid);
		if (r != null) {
			var a = n.editMsgHistoryId, i = n.originalMsgId, l = i == null || a == null ? u(t, n, r) : c(t, n, r, a, i);
			return l;
		}
	}
	function m(e, t, n) {
		return Promise.all(n.map(function(n) {
			return d(e, t, n);
		})).then(r("emptyFunction"));
	}
	l.call = m;
}), 98);
