__d("MAWBrowserApi", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e() {
		var e, t = (e = self.navigator) == null ? void 0 : e.deviceMemory;
		return t == null ? t : t * 1e3;
	}
	function l() {
		var e;
		return (e = self.navigator) == null ? void 0 : e.hardwareConcurrency;
	}
	function s() {
		var e = globalThis.navigator;
		if (e != null) {
			var t = e.cpu;
			if (t != null) {
				var n = t.performance;
				return typeof n == "string" ? n : void 0;
			}
		}
	}
	i.getMemClass = e, i.getNumCpu = l, i.readCpuPerformanceClass = s;
}), 66);
