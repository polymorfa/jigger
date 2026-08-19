__d("useWAWebBizBroadcastEligibility", [
	"WAWebBizBroadcastEligibilityCache",
	"WAWebRefreshBusinessEligibility",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d() {
		var e, t;
		return o("WAWebBizBroadcastEligibilityCache").isEligibilityCachingEnabled() && (e = (t = o("WAWebBizBroadcastEligibilityCache").readCache()) == null ? void 0 : t.result.marketingMessages) != null ? e : null;
	}
	function m() {
		if (!o("WAWebBizBroadcastEligibilityCache").isEligibilityCachingEnabled()) return !1;
		var e = o("WAWebBizBroadcastEligibilityCache").readCache();
		return e != null && o("WAWebBizBroadcastEligibilityCache").isCacheFresh(e);
	}
	function p() {
		var e = o("react-compiler-runtime").c(2), t = c(d), n = t[0], r = t[1], a, i;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function() {
			if (!m()) {
				var e = !1;
				return o("WAWebRefreshBusinessEligibility").refreshBusinessEligibilityIfNeeded().then(function(t) {
					var n;
					e || r((n = t == null ? void 0 : t.marketingMessages) != null ? n : { status: "FAIL" });
				}), (function() {
					e = !0;
				});
			}
		}, i = [], e[0] = a, e[1] = i) : (a = e[0], i = e[1]), u(a, i), n;
	}
	l.useMarketingMessagesEligibility = p;
}), 98);
