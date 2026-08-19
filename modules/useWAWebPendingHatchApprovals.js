__d("useWAWebPendingHatchApprovals", ["WAWebHatchApprovalManager", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useSyncExternalStore;
	function u() {
		return s(c, d);
	}
	function c(e) {
		return r("WAWebHatchApprovalManager").subscribe(e);
	}
	function d() {
		return r("WAWebHatchApprovalManager").getPendingApprovals();
	}
	l.default = u;
}), 98);
