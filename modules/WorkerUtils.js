__d("WorkerUtils", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e() {
		try {
			return "WorkerGlobalScope" in t && t instanceof t.WorkerGlobalScope;
		} catch (e) {
			return !1;
		}
	}
	function l() {
		try {
			return "SharedWorkerGlobalScope" in t && t instanceof t.SharedWorkerGlobalScope;
		} catch (e) {
			return !1;
		}
	}
	i.isWorkerContext = e, i.isSharedWorkerContext = l;
}), 66);
