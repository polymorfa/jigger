__d("MAWLoadGroupInvitesTxns", [
	"MAWBridgeTypesCreators",
	"MAWDbGroupInviteTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWUserJidWrapper",
	"WAJids",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = [], a = o("MAWUserJidWrapper").getMyUserJid();
		return t.forEach(function(t) {
			return o("WAJids").switchOnMsgrChatJidType(t.jid, {
				group: function() {
					n.push(o("MAWDbGroupInviteTxns").getGroupInvitesByThreadAndInvitedParticipant(e, t.jid, a));
				},
				user: r("emptyFunction")
			});
		}), o("MAWDexieTable").dexieAll(n).then(function(e) {
			e.forEach(function(e, t) {
				e.forEach(function(e, t) {
					o("MAWIndexedDb").afterTransaction({
						tag: "GroupInviteUpdate",
						value: o("MAWBridgeTypesCreators").createBridgeGroupInvite(e)
					});
				});
			});
		});
	}
	l.loadGroupInvites = e;
}), 98);
