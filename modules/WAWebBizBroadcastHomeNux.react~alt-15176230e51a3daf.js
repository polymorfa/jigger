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
	"useWAWebBizBroadcastProNuxState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef;
	function p(e) {
		var t = e.entryPoint, n = e.onClose, a = e.onProTryNow, i = o("useWAWebBizBroadcastProNuxState").useBizBroadcastProNuxState(), l = i.coreAccepted, u = i.proDismissed, p = i.proEligible, _ = i.proOnboarded, f = i.proResolved, g = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() && p && !u && !l, h = m(null);
		d(function() {
			!f || h.current === p || (h.current = p, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.eligibilityCheckResult(p ? "eligible" : "not_eligible", t, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_NUX));
		}, [
			f,
			p,
			t
		]);
		var y = m(!1);
		d(function() {
			!g || y.current || (y.current = !0, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxViewed(t, void 0, o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO));
		}, [g, t]);
		var C = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptClicked(t, o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO), a();
		}, [t, a]), b = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxDismissClicked(t, o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO), o("WAWebBizBroadcastProOnboardingStatus").dismissBizBroadcastProNuxOnboarding();
		}, [t]);
		return o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() && !f || _ && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() ? null : g ? s.jsx(r("WAWebBizBroadcastBBProOnboardingModal.react"), {
			entryPoint: t,
			onTryNow: C,
			onContinueWithout: b
		}) : l ? null : s.jsx(r("WAWebBizBroadcastTosModal.react"), {
			entryPoint: t,
			onAccept: r("WAWebNoop"),
			onDismiss: n
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
