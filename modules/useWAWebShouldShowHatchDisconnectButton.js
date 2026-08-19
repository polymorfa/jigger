__d("useWAWebShouldShowHatchDisconnectButton", ["WAWebHatchLinkedStatusManager", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useSyncExternalStore;
	function u() {
		return s(c, d);
	}
	function c(e) {
		return r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(e);
	}
	function d() {
		return r("WAWebHatchLinkedStatusManager").isLinked() && !r("WAWebHatchLinkedStatusManager").isOptimisticallyUnlinked();
	}
	l.default = u;
}), 98);
