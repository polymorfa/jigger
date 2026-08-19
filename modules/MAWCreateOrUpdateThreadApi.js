__d("MAWCreateOrUpdateThreadApi", [
	"MAWIndexedDb",
	"MAWJids",
	"MAWThreadManagementTxns",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READWRITE,
		participants: o("MAWTransactionMode").READWRITE,
		threads: o("MAWTransactionMode").READWRITE
	}, "createOrUpdateThread", function(e) {
		return (function(t) {
			var n = t.contactFbid, r = t.description, a = t.s2sInstanceKey, i = t.threadKey;
			return o("MAWThreadManagementTxns").getOrSetupOneToOneThread(e, {
				description: r,
				offlineThreadingId: i,
				skipVerifyThread: !0,
				userJid: o("MAWJids").toUserJid(n)
			}, a).then(function(e) {
				var t = e.created, n = e.thread;
				return {
					clientThreadKey: n.optimisticThreadKey,
					created: t,
					folder: n.folder,
					jid: n.jid
				};
			});
		});
	});
	l.createOrUpdateThread = e;
}), 98);
