__d("WAWebBizBroadcastGenAIEntryPoint.react", [
	"fbt",
	"WAWebBizBroadcastGenAIEligibilityModel",
	"WAWebBizBroadcastGenAIGating",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebNux",
	"WAWebTooltip.react",
	"WDSButton.react",
	"WDSIconWdsIcAi.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef;
	function _(e) {
		var t = o("react-compiler-runtime").c(21), n = e.isComposerFocused, a = e.onPress, i = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_GENAI_TOOLTIP), l = i[0], c = i[1], d = p(null), _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = o("WAWebBizBroadcastGenAIGating").isGenAITextEnabled() && o("WAWebBizBroadcastGenAIEligibilityModel").isGenAIEligible(), t[0] = _) : _ = t[0];
		var f = _, g;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[1] = g) : g = t[1];
		var h = g, y = o("WAWebTooltip.react").useTooltip({
			alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
			element: h,
			includeArrow: !0,
			onClick: function() {
				R();
			},
			position: o("WAWebTooltip.react").PopoverPosition.Top,
			target: d,
			testid: "biz-broadcast-genai-tooltip"
		}), C = y.hideTooltip, b = y.showTooltip, v = y.tooltip, S = y.tooltipIsVisible, R = C, L = f && l && n, E, k;
		t[2] !== L || t[3] !== b || t[4] !== S || t[5] !== c ? (E = function() {
			L && !S && d.current != null && (b(), c(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAITooltipImpression());
		}, k = [
			L,
			S,
			b,
			c
		], t[2] = L, t[3] = b, t[4] = S, t[5] = c, t[6] = E, t[7] = k) : (E = t[6], k = t[7]), m(E, k);
		var I;
		t[8] !== R || t[9] !== a ? (I = function() {
			R(), a();
		}, t[8] = R, t[9] = a, t[10] = I) : I = t[10];
		var T = I;
		if (!f) return null;
		var D;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x3nfvp2" }, t[11] = D) : D = t[11];
		var x;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[12] = x) : x = t[12];
		var $;
		t[13] !== T ? ($ = u.jsx(r("WDSButton.react"), {
			variant: "borderless",
			size: "small",
			Icon: r("WDSIconWdsIcAi.react"),
			onPress: T,
			"aria-label": x
		}), t[13] = T, t[14] = $) : $ = t[14];
		var P;
		t[15] !== $ || t[16] !== S ? (P = u.jsx(r("WDSTooltip.react"), {
			label: h,
			position: "below",
			disabled: S,
			children: $
		}), t[15] = $, t[16] = S, t[17] = P) : P = t[17];
		var N;
		return t[18] !== P || t[19] !== v ? (N = u.jsxs("span", babelHelpers.extends({ ref: d }, D, { children: [P, v] })), t[18] = P, t[19] = v, t[20] = N) : N = t[20], N;
	}
	l.default = _;
}), 226);
