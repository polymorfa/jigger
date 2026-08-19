__d("MWXTextPairing.react", [
	"FDSTextPairing.react",
	"FDSTextWebUtils",
	"react",
	"react-compiler-runtime",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"bodyColor",
		"bodyRef",
		"headlineColor",
		"headlineRef",
		"metaColor",
		"metaRef"
	], s, u = s || (s = o("react")), c = { tetraTextWrapper: {
		boxSizing: "x9f619",
		minHeight: "x2lwn1j",
		minWidth: "xeuugli",
		position: "x1n2onr6",
		zIndex: "x1ja2u2z",
		$$css: !0
	} };
	function d(e) {
		return function(t) {
			e != null && (typeof e == "function" ? e(t) : e.current = t);
		};
	}
	function m(t) {
		var n = o("react-compiler-runtime").c(29), a, i, l, s, m, p, _;
		n[0] !== t ? (i = t.bodyColor, l = t.bodyRef, s = t.headlineColor, m = t.headlineRef, p = t.metaColor, _ = t.metaRef, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = m, n[6] = p, n[7] = _) : (a = n[1], i = n[2], l = n[3], s = n[4], m = n[5], p = n[6], _ = n[7]);
		var f;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (f = [c.tetraTextWrapper], n[8] = f) : f = n[8];
		var g;
		n[9] !== i ? (g = o("FDSTextWebUtils").getFDSBodyColor(i), n[9] = i, n[10] = g) : g = n[10];
		var h;
		n[11] !== l ? (h = d(l), n[11] = l, n[12] = h) : h = n[12];
		var y;
		n[13] !== s ? (y = o("FDSTextWebUtils").getFDSHeadlineColor(s), n[13] = s, n[14] = y) : y = n[14];
		var C;
		n[15] !== m ? (C = d(m), n[15] = m, n[16] = C) : C = n[16];
		var b;
		n[17] !== p ? (b = o("FDSTextWebUtils").getFDSMetaColor(p), n[17] = p, n[18] = b) : b = n[18];
		var v;
		n[19] !== _ ? (v = d(_), n[19] = _, n[20] = v) : v = n[20];
		var S;
		return n[21] !== a || n[22] !== g || n[23] !== h || n[24] !== y || n[25] !== C || n[26] !== b || n[27] !== v ? (S = u.jsx(o("react-strict-dom").html.div, {
			style: f,
			children: u.jsx(r("FDSTextPairing.react"), babelHelpers.extends({
				bodyColor: g,
				bodyRef: h,
				headlineColor: y,
				headlineRef: C,
				metaColor: b,
				metaRef: v
			}, a))
		}), n[21] = a, n[22] = g, n[23] = h, n[24] = y, n[25] = C, n[26] = b, n[27] = v, n[28] = S) : S = n[28], S;
	}
	l.default = m;
}), 98);
