__d("MAWRemoveGroupInvitesApi", [
	"MAWDbGroupInviteTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({ groupInvites: o("MAWTransactionMode").READWRITE }, "removeGroupInvites", function(t) {
		return (function(n, r) {
			return o("MAWDbGroupInviteTxns").deleteGroupInvitesByThreadAndInvitedParticipant(t, n, r).then(function(t) {
				o("WALogger").DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"removeGroupInvites deleted ",
					" record(s) from ",
					" for ",
					""
				])), t, n, r), o("MAWIndexedDb").afterTransaction({
					tag: "DeleteGroupInvite",
					value: { threadJid: n }
				});
			}).then(function() {
				o("MAWIndexedDb").afterTransaction({
					tag: "GroupInviteLoaded",
					value: {
						actorId: r,
						threadJid: n
					}
				});
			});
		});
	});
	l.removeGroupInvites = s;
}), 98);
