__d("MAWMiActThreadReadyValidator", [
	"FBLogger",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDbUI",
	"MAWMiActGetThreadLifecycleState__DO_NOT_USE",
	"MAWMiActThreadLifecycleState__DO_NOT_USE",
	"MAWTransactionMode",
	"ODS",
	"Random",
	"gkx",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("justknobx")._("3385"), c = new Set([
		(s = o("MAWMiActThreadLifecycleState__DO_NOT_USE")).MiActThreadStatesEnum.THREAD_KEY_ONLY,
		s.MiActThreadStatesEnum.AUTHORITATIVE_THREAD_MISSING_MAPPING_ROW,
		s.MiActThreadStatesEnum.OPTIMISTIC_THREAD_NO_ACT,
		s.MiActThreadStatesEnum.AUTHORITATIVE_THREAD_ONLY,
		s.MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD,
		s.MiActThreadStatesEnum.SERVER_PARTIAL_MI_THREAD
	]), d = new Set([
		s.MiActThreadStatesEnum.MI_AND_ACT_THREAD_COMPLETE,
		s.MiActThreadStatesEnum.OPTIMISTIC_THREAD_WITH_ACT,
		s.MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD_WITH_ACT
	]);
	async function m(t) {
		var n = t.chatJid, a = t.description, i = t.initialMappingStateType, l = t.tables, s = t.threadKey;
		if (r("gkx")("6896")) {
			var m = d.has(i), _ = c.has(i);
			if (!(!_ && !m)) {
				var f = (await o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByThreadKey(l, s, "validateActThreadReadyResult_" + a)).type;
				_ && (d.has(f) ? (e || (e = o("ODS"))).bumpEntityKey(3185, "thread_mapping_validator", "enqueued_thread_state_changed_to_immediately_ready") : ((e || (e = o("ODS"))).bumpEntityKey(3185, "thread_mapping_validator", f === i ? "enqueued_thread_state_did_not_change" : "enqueued_thread_state_changed_but_to_non_immediately_ready"), r("FBLogger")("maw_thread_mapping").warn("validateActThreadReadyResult for %s: Successfully resolved enqueued promise for state %s but the new state is %s", a, i, f)));
				var g = r("Random").coinflip(u);
				g && await p(i, f, n, a);
			}
		}
	}
	async function p(t, n, a, i) {
		var l = await Promise.race([_(a), new Promise(function(e) {
			return window.setTimeout(function() {
				e(null);
			}, 5e3);
		})]);
		if (l == null) {
			(e || (e = o("ODS"))).bumpEntityKey(3185, "thread_mapping_validator", "thread_check_timed_out");
			return;
		}
		if (l) {
			(e || (e = o("ODS"))).bumpEntityKey(3185, "thread_mapping_validator", "thread_exists_in_maw_db");
			return;
		}
		throw (e || (e = o("ODS"))).bumpEntityKey(3185, "thread_mapping_validator", "thread_missing_in_maw_db"), r("FBLogger")("maw_thread_mapping").mustfix("validateActThreadReadyResult for %s: thread is missing in MAW DB, initial state %s, new state: %s", i, t, n);
	}
	var _ = o("MAWIndexedDbUI").makeMsgrTransactor({ threads: o("MAWTransactionMode").READONLY }, "checkIfThreadExists", function(e) {
		return function(t) {
			var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t)) : e.threads.get({ jid: t });
			return n.then(function(e) {
				var t = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(e, "MAWMiActThreadReadyValidator.checkIfThreadExists");
				return t != null;
			});
		};
	});
	l.validateActThreadReady = m;
}), 98);
