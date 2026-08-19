__d("WAWebBizSummaryLineItem.react", [
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = o("react-compiler-runtime").c(20), n = e.colorName, a = e.isBolded, i = e.label, l = e.labelAccessory, c = e.showAccessoryOnHover, d = e.testid, m = e.value, p = e.valueAccessory, _ = n === void 0 ? "contentDefault" : n, f = a === void 0 ? !1 : a, g = c === void 0 ? !0 : c, h = l != null && g, y = u(null), C = o("useWAWebHover").useWAWebHover(y), b = f ? "Body2Emphasized" : "Body2", v;
		t[0] !== _ || t[1] !== i || t[2] !== b ? (v = s.jsx(r("WDSText.react"), {
			type: b,
			colorName: _,
			children: i
		}), t[0] = _, t[1] = i, t[2] = b, t[3] = v) : v = t[3];
		var S;
		t[4] !== C || t[5] !== h || t[6] !== l ? (S = l != null && s.jsx("span", babelHelpers.extends({}, {
			0: { className: "x3nfvp2 xx6bhzk x19991ni" },
			1: { className: "x3nfvp2 xx6bhzk x19991ni xg01cxk" }
		}[!!(h && !C) << 0], { children: l })), t[4] = C, t[5] = h, t[6] = l, t[7] = S) : S = t[7];
		var R;
		t[8] !== v || t[9] !== S ? (R = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 4,
			children: [v, S]
		}), t[8] = v, t[9] = S, t[10] = R) : R = t[10];
		var L;
		t[11] !== _ || t[12] !== f || t[13] !== m || t[14] !== p ? (L = m != null && s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 4,
			children: [s.jsx(r("WDSText.react"), {
				type: f ? "Body2Emphasized" : "Body2",
				colorName: _,
				children: m
			}), p]
		}), t[11] = _, t[12] = f, t[13] = m, t[14] = p, t[15] = L) : L = t[15];
		var E;
		return t[16] !== R || t[17] !== L || t[18] !== d ? (E = s.jsx("div", {
			ref: y,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				testid: d,
				children: [R, L]
			})
		}), t[16] = R, t[17] = L, t[18] = d, t[19] = E) : E = t[19], E;
	}
	l.default = c;
}), 98);
