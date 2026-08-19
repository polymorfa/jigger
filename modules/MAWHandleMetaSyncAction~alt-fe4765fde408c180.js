__d("MAWHandleMetaSyncAction", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWWriteDeleteMessageTxns",
	"MAWWriteMetaSyncsTxns",
	"WAAssertUnreachable",
	"WADeleteReceiptsApi",
	"WALogger",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	async function u(e) {
		for (var t of e.actions) t.chatAction ? await c(t.chatAction) : t.messageAction && await p(t.messageAction);
	}
	function c(t) {
		switch (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Received action: ", ""])), t), t.type) {
			case "chat_archive": return d(t);
			case "chat_delete": return _(t).then(function(e) {
				var t = e.deletedMessages;
				return o("WADeleteReceiptsApi").deleteReceipts(t);
			});
			default: return t.type, m(t);
		}
	}
	function d(e) {
		return Promise.resolve();
	}
	function m(e) {
		return Promise.resolve();
	}
	function p(e) {
		switch (e.type) {
			case "delete_for_me": return f(e).then(r("emptyFunction"));
			default: return r("WAAssertUnreachable")(e.type);
		}
	}
	var _ = o("MAWIndexedDb").makeMsgrTransactor({
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
	}), f = o("MAWIndexedDb").makeMsgrTransactor({
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
	l.handleMetaSyncActions = u;
}), 98);
