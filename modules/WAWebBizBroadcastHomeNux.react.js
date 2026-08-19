__d("WAWebBizBroadcastHomeNux.react", [
	"WAWebBizBroadcastBBProOnboardingModal.react",
	"WAWebBizBroadcastProOnboardingStatus",
	"WAWebBizBroadcastTosModal.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebNoop",
	"WAWebWamEnumBbTierType",
	"WAWebWamEnumSurfaceType",
	"react",
	"react-compiler-runtime",
	"useWAWebBizBroadcastProNuxState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef;
	function p(e) {
		var t = o("react-compiler-runtime").c(26), n = e.entryPoint, a = e.onClose, i = e.onProTryNow, l = o("useWAWebBizBroadcastProNuxState").useBizBroadcastProNuxState(), u = l.coreAccepted, c = l.proDismissed, p = l.proEligible, _ = l.proOnboarded, f = l.proResolved, g;
		t[0] !== u || t[1] !== c || t[2] !== p ? (g = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() && p && !c && !u, t[0] = u, t[1] = c, t[2] = p, t[3] = g) : g = t[3];
		var h = g, y = m(null), C, b;
		t[4] !== n || t[5] !== p || t[6] !== f ? (C = function() {
			!f || y.current === p || (y.current = p, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.eligibilityCheckResult(p ? "eligible" : "not_eligible", n, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_NUX));
		}, b = [
			f,
			p,
			n
		], t[4] = n, t[5] = p, t[6] = f, t[7] = C, t[8] = b) : (C = t[7], b = t[8]), d(C, b);
		var v = m(!1), S, R;
		t[9] !== n || t[10] !== h ? (S = function() {
			!h || v.current || (v.current = !0, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxViewed(n, void 0, o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO));
		}, R = [h, n], t[9] = n, t[10] = h, t[11] = S, t[12] = R) : (S = t[11], R = t[12]), d(S, R);
		var L;
		t[13] !== n || t[14] !== i ? (L = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptClicked(n, o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO), i();
		}, t[13] = n, t[14] = i, t[15] = L) : L = t[15];
		var E = L, k;
		t[16] !== n ? (k = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxDismissClicked(n, o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO), o("WAWebBizBroadcastProOnboardingStatus").dismissBizBroadcastProNuxOnboarding();
		}, t[16] = n, t[17] = k) : k = t[17];
		var I = k;
		if (o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() && !f || _ && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled()) return null;
		if (!h) {
			var T;
			return t[18] !== u || t[19] !== n || t[20] !== a ? (T = u ? null : s.jsx(r("WAWebBizBroadcastTosModal.react"), {
				entryPoint: n,
				onAccept: r("WAWebNoop"),
				onDismiss: a
			}), t[18] = u, t[19] = n, t[20] = a, t[21] = T) : T = t[21], T;
		}
		var D;
		return t[22] !== n || t[23] !== I || t[24] !== E ? (D = s.jsx(r("WAWebBizBroadcastBBProOnboardingModal.react"), {
			entryPoint: n,
			onTryNow: E,
			onContinueWithout: I
		}), t[22] = n, t[23] = I, t[24] = E, t[25] = D) : D = t[25], D;
	}
	l.default = p;
}), 98);
