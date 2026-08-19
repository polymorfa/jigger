__d("MAWBridgeEditMsgHistoryAddedHandler", [
	"FBLogger",
	"I64",
	"LSMessageSendStatus",
	"MAWChatJid",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages.index("optimistic")).getKeyRange(t));
			return n == null ? void 0 : n.messageId;
		}), c.apply(this, arguments);
	}
	function d(e, t, n) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a = yield u(e, t.originalMsgExternalId);
			if (a == null) {
				r("FBLogger")("messenger_web_e2ee").warn("original message for edit msg history is not present in lsdb");
				return;
			}
			var i = {
				messageContent: t.msgContent.content,
				originalMessagePk: a,
				sendStatus: t.sendStatus != null ? (s || (s = o("I64"))).of_int32(t.sendStatus) : (s || (s = o("I64"))).of_int32(r("LSMessageSendStatus").SERVER_RECEIVED),
				serverAdjustedEditTsMs: (s || (s = o("I64"))).of_int32(t.editTs),
				threadKey: n
			};
			return e.edit_message_history.put(i);
		}), m.apply(this, arguments);
	}
	function p(e, t, n, a, i) {
		var l = {
			messageContent: t.msgContent.content,
			originalMessagePk: i,
			pk: a,
			sendStatus: t.sendStatus != null ? (s || (s = o("I64"))).of_int32(t.sendStatus) : (s || (s = o("I64"))).of_int32(r("LSMessageSendStatus").SERVER_RECEIVED),
			serverAdjustedEditTsMs: (s || (s = o("I64"))).of_int32(t.editTs),
			threadKey: n
		};
		return e.edit_message_history.put(l);
	}
	function _(e, t, n) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield o("MAWChatJid").toThreadKeyMaybe(e.tables, n.threadJid);
			if (r != null) {
				var a = n.editMsgHistoryId, i = n.originalMsgId, l = i == null || a == null ? d(t, n, r) : p(t, n, r, a, i);
				return l;
			}
		}), f.apply(this, arguments);
	}
	function g(t, o, a) {
		return (e || (e = n("Promise"))).all(a.map(function(e) {
			return _(t, o, e);
		})).then(r("emptyFunction"));
	}
	l.call = g;
}), 98);
