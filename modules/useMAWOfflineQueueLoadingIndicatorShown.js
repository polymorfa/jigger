__d("useMAWOfflineQueueLoadingIndicatorShown", ["useCometRouterState"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		e === void 0 && (e = !1);
		var t = r("useCometRouterState")(), n = t == null ? void 0 : t.main.route.tabKey;
		return n === "messenger" || !e;
	}
	l.default = e;
}), 98);
