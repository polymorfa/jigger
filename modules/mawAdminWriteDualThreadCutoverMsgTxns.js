__d("mawAdminWriteDualThreadCutoverMsgTxns", [
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWExternalId",
	"MAWInMemoryThreadStore",
	"MAWLocalizationUtils",
	"MAWWriteMsgTxns",
	"WALogger",
	"WATimeUtils",
	"WmiMetadataThreadsWriter"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, r, a, i) {
		return o("MAWDbThreadTxns").getThread(t, n).then(function(n) {
			if (!n.success) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["dualThreadCutover failed to get the thread"]))), { needsMarkThreadAsMigrated: !1 };
			var l = n.value;
			if (l.didInsertDualThreadCutoverAdminMsg === !0) return { needsMarkThreadAsMigrated: !1 };
			var s = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg({
				adminMsgContent: i != null ? [i] : [],
				adminType: a,
				version: 1
			}, l.jid, o("MAWExternalId").generateExternalId(), o("WATimeUtils").castMillisTimeToUnixTime(r)), u = babelHelpers.extends({}, l, { didInsertDualThreadCutoverAdminMsg: !0 });
			o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && (o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(u, { didInsertDualThreadCutoverAdminMsg: !0 }, "mawAdminWriteDualThreadCutoverMsgTxns.writeDualThreadCutoverAdminMsg"), o("WmiMetadataThreadsWriter").storeThreadPartialOnDisk(u));
			var c = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : t.threads.put(u);
			return c.then(function() {
				return o("MAWWriteMsgTxns").writeMsg(t, s, u).then(function() {
					return { needsMarkThreadAsMigrated: !0 };
				});
			});
		});
	}
	l.default = s;
}), 98);
