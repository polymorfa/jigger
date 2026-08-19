__d("MAWWaitForACTThreadReadyForMLv2", [
	"MAWMiActGetThreadLifecycleState__DO_NOT_USE",
	"MAWMiActOnActThreadReady",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var a = yield o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByThreadKey(e, t, n);
			r == null || r.addQPLAnnotations({ string: { initial_mi_act_thread_state: a.type } });
			var i = yield o("MAWMiActOnActThreadReady").waitForACTThreadReady(e, t, n);
			return i;
		}), s.apply(this, arguments);
	}
	l.waitForACTThreadReadyForMLv2 = e;
}), 98);
