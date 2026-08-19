__d("MAWWriteMetaSyncsTxns", [
	"MAWDbDeletedMessages",
	"MAWDbPendingStanza",
	"MAWDbPendingStanzaTxns",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWThreadManagementTxns",
	"WALogger",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 30 * o("WATimeUtils").DAY_SECONDS;
	function c(t, n) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Received chatDelete: ", ""])), n);
		var r = n.messageRange, a = r != null ? o("MAWDbPendingStanzaTxns").putPendingStanza(t, {
			content: { metaSyncMessageRange: r },
			type: o("MAWDbPendingStanza").PENDING_TYPE.DELETE_THREAD
		}, u, n.chatJid, o("MAWDbPendingStanza").PENDING_TYPE.DELETE_THREAD) : o("MAWDexieTable").dexieResolve();
		return o("MAWDexieTable").dexieAll([o("MAWDbThreadTxns").getThread(t, n.chatJid), a]).then(function(e) {
			var r = e[0];
			return r.success ? o("MAWThreadManagementTxns").metaSyncChatDeleteThread(t, r.value, n.messageRange, o("MAWDbDeletedMessages").DbDeletedMsgReasonEnum.cast(n.type)) : (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[MAWWriteMetaSyncsTxns] Thread delete stanza was processed before thread insertion ", ""])), n.chatJid), { deletedMessages: [] });
		});
	}
	l.handleChatDelete = c;
}), 98);
