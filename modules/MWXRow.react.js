__d("MWXRow.react", [
	"CometRow.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s = [
		"paddingHorizontal",
		"paddingTop",
		"paddingVertical",
		"spacing",
		"spacingHorizontal",
		"spacingVertical"
	], u, c = u || (u = o("react"));
	function d(e) {
		return e === 10 ? 12 : e;
	}
	function m(e) {
		switch (e) {
			case 10: return 12;
			case 20: return 16;
			default: return e;
		}
	}
	function p(e) {
		return e === 10 ? 12 : e;
	}
	function _(t) {
		var n = o("react-compiler-runtime").c(32), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l, u, _, f, g, h, y;
		if (n[3] !== a) {
			var C = a;
			u = C.paddingHorizontal, _ = C.paddingTop, f = C.paddingVertical, g = C.spacing, h = C.spacingHorizontal, y = C.spacingVertical, l = babelHelpers.objectWithoutPropertiesLoose(C, s), n[3] = a, n[4] = l, n[5] = u, n[6] = _, n[7] = f, n[8] = g, n[9] = h, n[10] = y;
		} else l = n[4], u = n[5], _ = n[6], f = n[7], g = n[8], h = n[9], y = n[10];
		var b;
		n[11] !== u ? (b = d(u), n[11] = u, n[12] = b) : b = n[12];
		var v;
		n[13] !== _ ? (v = m(_), n[13] = _, n[14] = v) : v = n[14];
		var S;
		n[15] !== f ? (S = m(f), n[15] = f, n[16] = S) : S = n[16];
		var R;
		n[17] !== g ? (R = p(g), n[17] = g, n[18] = R) : R = n[18];
		var L;
		n[19] !== h ? (L = p(h), n[19] = h, n[20] = L) : L = n[20];
		var E;
		n[21] !== y ? (E = p(y), n[21] = y, n[22] = E) : E = n[22];
		var k;
		return n[23] !== l || n[24] !== i || n[25] !== b || n[26] !== v || n[27] !== S || n[28] !== R || n[29] !== L || n[30] !== E ? (k = c.jsx(r("CometRow.react"), babelHelpers.extends({
			paddingHorizontal: b,
			paddingTop: v,
			paddingVertical: S,
			ref: i,
			spacing: R,
			spacingHorizontal: L,
			spacingVertical: E
		}, l)), n[23] = l, n[24] = i, n[25] = b, n[26] = v, n[27] = S, n[28] = R, n[29] = L, n[30] = E, n[31] = k) : k = n[31], k;
	}
	l.default = _;
}), 98);
