__d("MAWLeaveGroupsApi", [
	"MAWDbGroupInfoTxns",
	"MAWDbParticipantTxns",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAGlobals",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		participants: o("MAWTransactionMode").READWRITE,
		threads: o("MAWTransactionMode").READWRITE
	}, "leaveGroups", function(e) {
		return (function() {
			for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
			return s.apply(void 0, [e].concat(n));
		});
	});
	function s(e, t) {
		var n = t.groupJids, a = o("MAWDbGroupInfoTxns").getGroupInfos(n).filter(Boolean), i = a.map(function(e) {
			return e.groupJid;
		}), l = o("WAGlobals").getMyUserJid();
		return o("MAWDexieTable").dexieAll([o("MAWDbParticipantTxns").bulkDeleteParticipantAcrossThreads(e, n, l), o("MAWDbThreadTxns").archiveThreads(e, i, !0)]).then(r("emptyFunction"));
	}
	l.leaveGroups = e;
}), 98);
