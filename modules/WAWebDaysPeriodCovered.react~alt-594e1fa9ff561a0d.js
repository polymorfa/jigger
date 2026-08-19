__d("WAWebDaysPeriodCovered.react", [
	"WAWebClock",
	"WAWebCommonNewsletterStrings",
	"WAWebFlex.react",
	"WAWebText.react",
	"WDSIconIcCalendarMonth.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { container: {
		width: "xh8yej3",
		$$css: !0
	} }, c = 18;
	function d(e) {
		var t = e.days, n = e.end, a = e.start;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: u.container,
			children: [
				s.jsx(r("WDSIconIcCalendarMonth.react"), {
					height: c,
					width: c
				}),
				s.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					shrink: 0,
					marginStart: 8,
					children: s.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebCommonNewsletterStrings").getDaysCoveredText(t) })
				}),
				s.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 0,
					shrink: 0,
					children: s.jsx(o("WAWebText.react").WAWebTextMuted, {
						color: "primary",
						children: m(a, n)
					})
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e, t) {
		return o("WAWebClock").Clock.periodCoveredDateStr(e, t);
	}
	l.default = d;
}), 98);
