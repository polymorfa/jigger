__d("WAWebValueWithDeltaOverPeriod.react", [
	"WAWebCommonNewsletterStrings",
	"WAWebDeltaText.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.days, n = e.delta, a = e.showDelta, i = a === void 0 ? !0 : a, l = e.value;
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			rowGap: 4,
			testid: "value-with-delta",
			children: [s.jsx(o("WAWebFlex.react").FlexRow, { children: s.jsx(o("WAWebText.react").WAWebTextLarge, {
				testid: "value",
				children: r("WAWebL10N").n(l)
			}) }), i && s.jsxs(o("WAWebFlex.react").FlexRow, {
				columnGap: 4,
				children: [s.jsx(r("WAWebDeltaText.react"), {
					delta: n,
					size: "small",
					testid: "delta"
				}), s.jsx(o("WAWebText.react").WAWebTextMuted, {
					color: "secondary",
					children: o("WAWebCommonNewsletterStrings").getOverLastDaysText(t)
				})]
			})]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
