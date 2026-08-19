__d("useWAWebBizBroadcastProNuxState", [
	"WAWebBizBroadcastProOnboardingStatus",
	"WAWebBizBroadcastTos",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebRefreshBusinessEligibility",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useEffect, d = s.useState;
	function m() {
		var e;
		return {
			coreAccepted: o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted(),
			proDismissed: (e = o("WAWebBizBroadcastProOnboardingStatus")).isBizBroadcastProNuxOnboardingDismissed(),
			proEligible: e.isBizBroadcastProEligibleToOnboard(),
			proOnboarded: e.isBizBroadcastProOnboarded(),
			proResolved: e.isBizBroadcastProNuxOnboardingStatusResolved()
		};
	}
	function p() {
		var e = o("react-compiler-runtime").c(2), t = d(m), n = t[0], r = t[1], a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function() {
			return r(m());
		}, e[0] = a) : a = e[0];
		var i = a;
		o("useWAWebListener").useListener(o("WAWebBizBroadcastProOnboardingStatus").bizBroadcastProNuxStateEmitter, "change", i), o("useWAWebListener").useListener(o("WAWebBizBroadcastTos").bizBroadcastTosEmitter, "change", i);
		var l;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (l = [], e[1] = l) : l = e[1], c(_, l), n;
	}
	function _() {
		o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() && o("WAWebRefreshBusinessEligibility").refreshBusinessEligibilityIfNeeded();
	}
	l.useBizBroadcastProNuxState = p;
}), 98);
