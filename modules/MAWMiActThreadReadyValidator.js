__d("MAWMiActThreadReadyValidator", [
	"FBLogger",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDbUI",
	"MAWMiActGetThreadLifecycleState__DO_NOT_USE",
	"MAWMiActThreadLifecycleState__DO_NOT_USE",
	"MAWTransactionMode",
	"ODS",
	"Promise",
	"Random",
	"asyncToGeneratorRuntime",
	"gkx",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = r("justknobx")._("3385"), d = new Set([
		(u = o("MAWMiActThreadLifecycleState__DO_NOT_USE")).MiActThreadStatesEnum.THREAD_KEY_ONLY,
		u.MiActThreadStatesEnum.AUTHORITATIVE_THREAD_MISSING_MAPPING_ROW,
		u.MiActThreadStatesEnum.OPTIMISTIC_THREAD_NO_ACT,
		u.MiActThreadStatesEnum.AUTHORITATIVE_THREAD_ONLY,
		u.MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD,
		u.MiActThreadStatesEnum.SERVER_PARTIAL_MI_THREAD
	]), m = new Set([
		u.MiActThreadStatesEnum.MI_AND_ACT_THREAD_COMPLETE,
		u.MiActThreadStatesEnum.OPTIMISTIC_THREAD_WITH_ACT,
		u.MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD_WITH_ACT
	]);
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.chatJid, n = e.description, a = e.initialMappingStateType, i = e.tables, l = e.threadKey;
			if (r("gkx")("6896")) {
				var u = m.has(a), p = d.has(a);
				if (!(!p && !u)) {
					var _ = (yield o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByThreadKey(i, l, "validateActThreadReadyResult_" + n)).type;
					p && (m.has(_) ? (s || (s = o("ODS"))).bumpEntityKey(3185, "thread_mapping_validator", "enqueued_thread_state_changed_to_immediately_ready") : ((s || (s = o("ODS"))).bumpEntityKey(3185, "thread_mapping_validator", _ === a ? "enqueued_thread_state_did_not_change" : "enqueued_thread_state_changed_but_to_non_immediately_ready"), r("FBLogger")("maw_thread_mapping").warn("validateActThreadReadyResult for %s: Successfully resolved enqueued promise for state %s but the new state is %s", n, a, _)));
					var g = r("Random").coinflip(c);
					g && (yield f(a, _, t, n));
				}
			}
		}), _.apply(this, arguments);
	}
	function f(e, t, n, r) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l) {
			var u = yield (e || (e = n("Promise"))).race([h(i), new e(function(e) {
				return window.setTimeout(function() {
					e(null);
				}, 5e3);
			})]);
			if (u == null) {
				(s || (s = o("ODS"))).bumpEntityKey(3185, "thread_mapping_validator", "thread_check_timed_out");
				return;
			}
			if (u) {
				(s || (s = o("ODS"))).bumpEntityKey(3185, "thread_mapping_validator", "thread_exists_in_maw_db");
				return;
			}
			throw (s || (s = o("ODS"))).bumpEntityKey(3185, "thread_mapping_validator", "thread_missing_in_maw_db"), r("FBLogger")("maw_thread_mapping").mustfix("validateActThreadReadyResult for %s: thread is missing in MAW DB, initial state %s, new state: %s", l, t, a);
		}), g.apply(this, arguments);
	}
	var h = o("MAWIndexedDbUI").makeMsgrTransactor({ threads: o("MAWTransactionMode").READONLY }, "checkIfThreadExists", function(e) {
		return function(t) {
			var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t)) : e.threads.get({ jid: t });
			return n.then(function(e) {
				var t = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(e, "MAWMiActThreadReadyValidator.checkIfThreadExists");
				return t != null;
			});
		};
	});
	l.validateActThreadReady = p;
}), 98);
