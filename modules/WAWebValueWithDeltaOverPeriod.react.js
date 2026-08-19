__d("WAWebValueWithDeltaOverPeriod.react", [
	"WAWebCommonNewsletterStrings",
	"WAWebDeltaText.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(11), n = e.days, a = e.delta, i = e.showDelta, l = e.value, u = i === void 0 ? !0 : i, c;
		t[0] !== l ? (c = r("WAWebL10N").n(l), t[0] = l, t[1] = c) : c = t[1];
		var d;
		t[2] !== c ? (d = s.jsx(o("WAWebFlex.react").FlexRow, { children: s.jsx(o("WAWebText.react").WAWebTextLarge, {
			testid: "value",
			children: c
		}) }), t[2] = c, t[3] = d) : d = t[3];
		var m;
		t[4] !== n || t[5] !== a || t[6] !== u ? (m = u && s.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 4,
			children: [s.jsx(r("WAWebDeltaText.react"), {
				delta: a,
				size: "small",
				testid: "delta"
			}), s.jsx(o("WAWebText.react").WAWebTextMuted, {
				color: "secondary",
				children: o("WAWebCommonNewsletterStrings").getOverLastDaysText(n)
			})]
		}), t[4] = n, t[5] = a, t[6] = u, t[7] = m) : m = t[7];
		var p;
		return t[8] !== d || t[9] !== m ? (p = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			rowGap: 4,
			testid: "value-with-delta",
			children: [d, m]
		}), t[8] = d, t[9] = m, t[10] = p) : p = t[10], p;
	}
	l.default = u;
}), 98);
