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
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef;
	function _(e) {
		var t = e.isComposerFocused, n = e.onPress, a = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_GENAI_TOOLTIP), i = a[0], l = a[1], c = p(null), _ = o("WAWebBizBroadcastGenAIGating").isGenAITextEnabled() && o("WAWebBizBroadcastGenAIEligibilityModel").isGenAIEligible(), f = s._(
			/*BTDS*/
			""
		), g = o("WAWebTooltip.react").useTooltip({
			alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
			element: f,
			includeArrow: !0,
			onClick: function() {
				h();
			},
			position: o("WAWebTooltip.react").PopoverPosition.Top,
			target: c,
			testid: "biz-broadcast-genai-tooltip"
		}), h = g.hideTooltip, y = g.showTooltip, C = g.tooltip, b = g.tooltipIsVisible, v = _ && i && t;
		m(function() {
			v && !b && c.current != null && (y(), l(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAITooltipImpression());
		}, [
			v,
			b,
			y,
			l
		]);
		var S = d(function() {
			h(), n();
		}, [h, n]);
		return _ ? u.jsxs("span", {
			ref: c,
			className: "x3nfvp2",
			children: [u.jsx(r("WDSTooltip.react"), {
				label: f,
				position: "below",
				disabled: b,
				children: u.jsx(r("WDSButton.react"), {
					variant: "borderless",
					size: "small",
					Icon: r("WDSIconWdsIcAi.react"),
					onPress: S,
					"aria-label": s._(
						/*BTDS*/
						""
					)
				})
			}), C]
		}) : null;
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
