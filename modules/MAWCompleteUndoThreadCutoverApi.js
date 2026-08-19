__d("MAWCompleteUndoThreadCutoverApi", [
	"MAWAdminWriteCutoverThreadMsgTxn",
	"MAWDbThreadTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (s = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: s.READWRITE,
		groupInfo: s.READONLY,
		media: s.READONLY,
		messages: s.READWRITE,
		threads: s.READWRITE
	}, "completeUndoThreadCutover", function(t) {
		return (function(n) {
			var r = n.threadJid;
			return o("MAWDbThreadTxns").getThread(t, r).then(function(n) {
				if (!n.success) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["UpdateAdminMessageAfterUndoCutover failed to get the thread"])));
					return;
				}
				var r = n.value;
				if (r.isMigratedLocally === !0) return o("MAWDbThreadTxns").markCutoverThreadAsNotMigratedLocally(t, r).then(function(e) {
					return o("MAWAdminWriteCutoverThreadMsgTxn").revertCutoverThreadAdminMsg(t, e).then(function() {
						return o("MAWAdminWriteCutoverThreadMsgTxn").writeRollbackCutoverAdminMsg(t, e);
					});
				});
			});
		});
	});
	l.completeUndoThreadCutover = u;
}), 98);
