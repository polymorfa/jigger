__d("MAWGetGroupSuperAdminApi", [
	"MAWDbParticipantTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ participants: o("MAWTransactionMode").READONLY }, "getGroupSuperAdmin", function(e) {
		return function(t) {
			var n = o("MAWDbParticipantTxns").getParticipantsInThread(e, t);
			return n.then(function(e) {
				var t = e.filter(function(e) {
					return e.type === "superadmin";
				});
				if (t.length !== 0 && t[0]) {
					var n = t[0];
					return o("WAJids").extractUserId(n.userJid);
				} else return null;
			});
		};
	});
	l.getGroupSuperAdmin = e;
}), 98);
