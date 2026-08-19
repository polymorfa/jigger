__d("WAWebBizAdCreationHawkTableRow.react", [
	"WAWebBizAdCreationHawkRowStyles",
	"WAWebBizAdCreationHawkUtils",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(18), a = t.isLast, i = t.label, l = t.value, s;
		n[0] !== a ? (s = (e || (e = r("stylex"))).props(a ? r("WAWebBizAdCreationHawkRowStyles").lastRow : r("WAWebBizAdCreationHawkRowStyles").row), n[0] = a, n[1] = s) : s = n[1];
		var c;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (e || (e = r("stylex"))).props(r("WAWebBizAdCreationHawkRowStyles").label), n[2] = c) : c = n[2];
		var d;
		n[3] !== i ? (d = u.jsx("div", babelHelpers.extends({}, c, { children: i })), n[3] = i, n[4] = d) : d = n[4];
		var m;
		n[5] !== l ? (m = (e || (e = r("stylex"))).props(o("WAWebBizAdCreationHawkUtils").isJsonValue(l) ? r("WAWebBizAdCreationHawkRowStyles").valueJson : r("WAWebBizAdCreationHawkRowStyles").value), n[5] = l, n[6] = m) : m = n[6];
		var p;
		n[7] !== l ? (p = o("WAWebBizAdCreationHawkUtils").formatValue(l), n[7] = l, n[8] = p) : p = n[8];
		var _;
		n[9] !== m || n[10] !== p ? (_ = u.jsx("div", babelHelpers.extends({}, m, { children: p })), n[9] = m, n[10] = p, n[11] = _) : _ = n[11];
		var f;
		n[12] !== d || n[13] !== _ ? (f = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			justify: "all",
			children: [d, _]
		}), n[12] = d, n[13] = _, n[14] = f) : f = n[14];
		var g;
		return n[15] !== s || n[16] !== f ? (g = u.jsx("div", babelHelpers.extends({}, s, { children: f })), n[15] = s, n[16] = f, n[17] = g) : g = n[17], g;
	}
	l.default = c;
}), 98);
