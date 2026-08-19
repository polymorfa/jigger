__d("WAWebDaysPeriodCovered.react", [
	"WAWebClock",
	"WAWebCommonNewsletterStrings",
	"WAWebFlex.react",
	"WAWebText.react",
	"WDSIconIcCalendarMonth.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { container: {
		width: "xh8yej3",
		$$css: !0
	} }, c = 18;
	function d(e) {
		var t = o("react-compiler-runtime").c(13), n = e.days, a = e.end, i = e.start, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(r("WDSIconIcCalendarMonth.react"), {
			height: c,
			width: c
		}), t[0] = l) : l = t[0];
		var d;
		t[1] !== n ? (d = o("WAWebCommonNewsletterStrings").getDaysCoveredText(n), t[1] = n, t[2] = d) : d = t[2];
		var p;
		t[3] !== d ? (p = s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			shrink: 0,
			marginStart: 8,
			children: s.jsx(o("WAWebText.react").WAWebTextMuted, { children: d })
		}), t[3] = d, t[4] = p) : p = t[4];
		var _;
		t[5] !== a || t[6] !== i ? (_ = m(i, a), t[5] = a, t[6] = i, t[7] = _) : _ = t[7];
		var f;
		t[8] !== _ ? (f = s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 0,
			shrink: 0,
			children: s.jsx(o("WAWebText.react").WAWebTextMuted, {
				color: "primary",
				children: _
			})
		}), t[8] = _, t[9] = f) : f = t[9];
		var g;
		return t[10] !== p || t[11] !== f ? (g = s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: u.container,
			children: [
				l,
				p,
				f
			]
		}), t[10] = p, t[11] = f, t[12] = g) : g = t[12], g;
	}
	function m(e, t) {
		return o("WAWebClock").Clock.periodCoveredDateStr(e, t);
	}
	l.default = d;
}), 98);
