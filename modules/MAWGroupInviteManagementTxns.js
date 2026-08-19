__d("MAWGroupInviteManagementTxns", [
	"MAWDbGroupInviteTxns",
	"MAWDbParticipantTxns",
	"MAWDexieTable",
	"MAWUserJidWrapper"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = !1;
		return o("MAWDbParticipantTxns").getInvitedParticipantsInThread(e, t).then(function(r) {
			if (r.length === 0) {
				n = !0;
				var a = o("MAWUserJidWrapper").getMyUserJid();
				return o("MAWDbGroupInviteTxns").deleteGroupInvitesByThreadAndInvitedParticipant(e, t, a).then(function() {
					return n;
				});
			} else {
				var i = [];
				return r.forEach(function(n) {
					i.push(o("MAWDbGroupInviteTxns").deleteGroupInvitesByThreadAndInvitedParticipant(e, t, n.userJid));
				}), o("MAWDexieTable").dexieAll(i).then(function() {
					return n;
				});
			}
		});
	}
	l.deleteGroupInvitesByThread = e;
}), 98);
