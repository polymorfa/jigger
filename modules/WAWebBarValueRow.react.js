__d("WAWebBarValueRow.react", [
	"WAWebBar.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebText.react",
	"react",
	"react-compiler-runtime",
	"useVisibility"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["animate"], s = ["barXstyle", "testid"], u = ["barPercentage", "ref"], c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useState, f = {
		container: {
			width: "xh8yej3",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		barContainer: {
			backgroundColor: "x3x0x6p",
			$$css: !0
		},
		bar: {
			backgroundColor: "xfn3atn",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(6), r, a;
		n[0] !== t ? (a = t.animate, r = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = r, n[2] = a) : (r = n[1], a = n[2]);
		var i = a === void 0 ? !1 : a, l;
		return n[3] !== i || n[4] !== r ? (l = i ? d.jsx(h, babelHelpers.extends({}, r)) : d.jsx(y, babelHelpers.extends({ barPercentage: r.percentage }, r)), n[3] = i, n[4] = r, n[5] = l) : l = n[5], l;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(16), n, a, i;
		t[0] !== e ? (n = e.barXstyle, i = e.testid, a = babelHelpers.objectWithoutPropertiesLoose(e, s), t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]);
		var l = _(0), u = l[0], c = l[1], m;
		t[4] !== a.percentage ? (m = function() {
			c(a.percentage);
		}, t[4] = a.percentage, t[5] = m) : m = t[5];
		var p = m, f;
		t[6] !== p ? (f = { onVisible: p }, t[6] = p, t[7] = f) : f = t[7];
		var g = r("useVisibility")(f), h = g[0], C;
		return t[8] !== n || t[9] !== u || t[10] !== a.label || t[11] !== a.percentage || t[12] !== a.value || t[13] !== i || t[14] !== h ? (C = d.jsx(y, {
			ref: h,
			barXstyle: n,
			testid: i,
			label: a.label,
			value: a.value,
			percentage: a.percentage,
			barPercentage: u
		}), t[8] = n, t[9] = u, t[10] = a.label, t[11] = a.percentage, t[12] = a.value, t[13] = i, t[14] = h, t[15] = C) : C = t[15], C;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(28), n, a, i;
		t[0] !== e ? (n = e.barPercentage, i = e.ref, a = babelHelpers.objectWithoutPropertiesLoose(e, u), t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]);
		var l = a, s = l.barXstyle, c = l.label, m = l.percentage, p = l.testid, _ = l.value, g;
		t[4] !== c ? (g = d.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			shrink: 0,
			children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
				testid: "label",
				children: c
			})
		}), t[4] = c, t[5] = g) : g = t[5];
		var h;
		t[6] !== _ ? (h = r("WAWebL10N").d(_), t[6] = _, t[7] = h) : h = t[7];
		var y;
		t[8] !== h ? (y = d.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 0,
			shrink: 0,
			children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
				testid: "value",
				children: h
			})
		}), t[8] = h, t[9] = y) : y = t[9];
		var C;
		t[10] !== m ? (C = r("WAWebL10N").n(m, void 0, {
			style: "percent",
			maximumSignificantDigits: 3,
			trailingZeroDisplay: "stripIfInteger"
		}), t[10] = m, t[11] = C) : C = t[11];
		var b;
		t[12] !== C ? (b = d.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 0,
			shrink: 0,
			children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
				color: "primary",
				testid: "percentage",
				children: C
			})
		}), t[12] = C, t[13] = b) : b = t[13];
		var v;
		t[14] !== g || t[15] !== y || t[16] !== b ? (v = d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 12,
			xstyle: f.container,
			children: [
				g,
				y,
				b
			]
		}), t[14] = g, t[15] = y, t[16] = b, t[17] = v) : v = t[17];
		var S;
		t[18] !== s ? (S = [f.bar, s], t[18] = s, t[19] = S) : S = t[19];
		var R;
		t[20] !== n || t[21] !== i || t[22] !== S ? (R = d.jsx(r("WAWebBar.react"), {
			ref: i,
			percentage: n,
			barXStyle: S,
			containerXStyle: f.barContainer
		}), t[20] = n, t[21] = i, t[22] = S, t[23] = R) : R = t[23];
		var L;
		return t[24] !== v || t[25] !== R || t[26] !== p ? (L = d.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 8,
			xstyle: f.container,
			testid: p,
			children: [v, R]
		}), t[24] = v, t[25] = R, t[26] = p, t[27] = L) : L = t[27], L;
	}
	l.default = g;
}), 98);
