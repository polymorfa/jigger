__d("useWAWebHatchPayloadDebug", ["WAWebHatchPayloadDebugStore", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useSyncExternalStore;
	function u() {
		return s(c, d);
	}
	function c(e) {
		return r("WAWebHatchPayloadDebugStore").subscribe(e);
	}
	function d() {
		return r("WAWebHatchPayloadDebugStore").getRecords();
	}
	l.default = u;
}), 98);
