__d("MAWThreadFetchAndEmitTxns", [
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWLoadGroupInvitesTxns",
	"MAWLoadOneToOneMessageRequestCapabilitiesTxn",
	"MAWLoadThreadsTxns",
	"MAWThreadManagementTxns",
	"WAJids",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r, a) {
		return a === void 0 && (a = "fetchAndEmitThread"), o("WAJids").switchOnMsgrChatJidType(t, {
			group: function(r) {
				return o("MAWThreadManagementTxns").getGroupThread(e, r, n).then(function(e) {
					return e == null ? null : {
						created: e.created,
						thread: e.thread
					};
				});
			},
			user: function(i) {
				return o("MAWThreadManagementTxns").getOrSetupOneToOneThread(e, {
					createTs: r == null ? void 0 : o("WATimeUtils").castUnixTimeToMillisTime(r),
					description: a,
					folder: n != null ? n : void 0,
					userJid: i
				});
			}
		}).then(function(t) {
			return t == null || t.thread == null ? null : o("MAWLoadThreadsTxns").loadContentsForThreads(e, [t.thread], 1, null, a).then(function() {
				return t;
			});
		});
	}
	function s(e, t) {
		if (t.size === 0) return o("MAWDexieTable").dexieResolve();
		var n = Array.from(t), a = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll(n)) : e.threads.where("jid").anyOf(n).toArray();
		return a.then(function(t) {
			var n = t.filter(Boolean);
			return o("MAWDexieTable").dexieAll([
				o("MAWLoadThreadsTxns").loadGroups(e, n),
				o("MAWLoadOneToOneMessageRequestCapabilitiesTxn").loadOneToOneMessageRequestCapabilities(n.map(function(e) {
					return e.jid;
				})),
				o("MAWLoadGroupInvitesTxns").loadGroupInvites(e, n)
			]);
		}).then(r("emptyFunction"));
	}
	l.fetchAndEmitThread = e, l.emitThreadContents = s;
}), 98);
