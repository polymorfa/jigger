__d("MAWWriteMsgSideEffectTxns", [
	"MAWDbMsg",
	"MAWDbParticipantTxns",
	"MAWDexieTable"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = o("MAWDbMsg").getCanonicalTsFromMsg(t), r = t.author;
		return r !== "@me" && r !== "@system" ? o("MAWDbParticipantTxns").updateParticipantTimestamps(e, [t.threadJid, r], n, n, n) : o("MAWDexieTable").dexieResolve();
	}
	l.updateParticipantTimestampsForMsg = e;
}), 98);
