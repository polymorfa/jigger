__d("MAWHandleMetaSyncAction", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWWriteDeleteMessageTxns",
	"MAWWriteMetaSyncsTxns",
	"Promise",
	"WAAssertUnreachable",
	"WADeleteReceiptsApi",
	"WALogger",
	"asyncToGeneratorRuntime",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			for (var t of e.actions) t.chatAction ? yield m(t.chatAction) : t.messageAction && (yield f(t.messageAction));
		}), d.apply(this, arguments);
	}
	function m(t) {
		switch (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Received action: ", ""])), t), t.type) {
			case "chat_archive": return p(t);
			case "chat_delete": return g(t).then(function(e) {
				var t = e.deletedMessages;
				return o("WADeleteReceiptsApi").deleteReceipts(t);
			});
			default: return t.type, _(t);
		}
	}
	function p(e) {
		return (u || (u = n("Promise"))).resolve();
	}
	function _(e) {
		return (u || (u = n("Promise"))).resolve();
	}
	function f(e) {
		switch (e.type) {
			case "delete_for_me": return h(e).then(r("emptyFunction"));
			default: return r("WAAssertUnreachable")(e.type);
		}
	}
	var g = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (s = o("MAWTransactionMode")).READWRITE,
		deletedMessages: s.READWRITE,
		editMsgHistory: s.READWRITE,
		ftsPurgeThreadBacklog: s.READWRITE,
		groupInfo: s.READWRITE,
		groupInvites: s.READWRITE,
		media: s.READWRITE,
		messages: s.READWRITE,
		participants: s.READWRITE,
		pendingStanzas: s.READWRITE,
		reactions: s.READWRITE,
		threads: s.READWRITE,
		unrenderedMessages: s.READWRITE,
		xma: s.READWRITE
	}, "handleChatDeleteTxn", function(e) {
		return function(t) {
			return o("MAWWriteMetaSyncsTxns").handleChatDelete(e, t);
		};
	}), h = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: s.READWRITE,
		editMsgHistory: s.READWRITE,
		ftsPurgeBacklog: s.READWRITE,
		groupInfo: s.READWRITE,
		groupInvites: s.READWRITE,
		media: s.READWRITE,
		messages: s.READWRITE,
		pendingStanzas: s.READWRITE,
		reactions: s.READWRITE,
		threads: s.READWRITE,
		unrenderedMessages: s.READWRITE,
		xma: s.READWRITE
	}, "handleDeleteForMeTxn", function(e) {
		return function(t) {
			return o("MAWWriteDeleteMessageTxns").handleDeleteForMe(e, t);
		};
	});
	l.handleMetaSyncActions = c;
}), 98);
