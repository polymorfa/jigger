__d("MAWWaitForACTThreadReadyForMLv2", ["MAWMiActGetThreadLifecycleState__DO_NOT_USE", "MAWMiActOnActThreadReady"], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, n, r) {
		var a = await o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByThreadKey(e, t, n);
		r == null || r.addQPLAnnotations({ string: { initial_mi_act_thread_state: a.type } });
		var i = await o("MAWMiActOnActThreadReady").waitForACTThreadReady(e, t, n);
		return i;
	}
	l.waitForACTThreadReadyForMLv2 = e;
}), 98);
