__d("WAWebBizAdCreationHawkExpandableRow.react", [
	"fbt",
	"WAWebBizAdCreationHawkRowStyles",
	"WAWebBizAdCreationHawkUtils",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(35), a = t.expandedJsonFields, i = t.fieldKeyPrefix, l = t.isLast, u = t.label, d = t.toggleJsonField, m = t.value, p = i + "_" + u, _;
		n[0] !== m ? (_ = o("WAWebBizAdCreationHawkUtils").isJsonValue(m), n[0] = m, n[1] = _) : _ = n[1];
		var f = _, g, h, y;
		n[2] !== a || n[3] !== p || n[4] !== f || n[5] !== m ? (g = o("WAWebBizAdCreationHawkUtils").formatValue(m), h = a[p] || !1, y = f && !h ? o("WAWebBizAdCreationHawkUtils").getTruncatedJson(g) : g, n[2] = a, n[3] = p, n[4] = f, n[5] = m, n[6] = g, n[7] = h, n[8] = y) : (g = n[6], h = n[7], y = n[8]);
		var C = y, b;
		n[9] !== l ? (b = (e || (e = r("stylex"))).props(l ? r("WAWebBizAdCreationHawkRowStyles").lastRow : r("WAWebBizAdCreationHawkRowStyles").row), n[9] = l, n[10] = b) : b = n[10];
		var v;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (v = (e || (e = r("stylex"))).props(r("WAWebBizAdCreationHawkRowStyles").label), n[11] = v) : v = n[11];
		var S;
		n[12] !== u ? (S = c.jsx("div", babelHelpers.extends({}, v, { children: u })), n[12] = u, n[13] = S) : S = n[13];
		var R;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x78zum5 xdt5ytf x1qvou4u x1s70e7g x1hx0egp" }, n[14] = R) : R = n[14];
		var L;
		n[15] !== f ? (L = (e || (e = r("stylex"))).props(f ? r("WAWebBizAdCreationHawkRowStyles").valueJson : r("WAWebBizAdCreationHawkRowStyles").value), n[15] = f, n[16] = L) : L = n[16];
		var E;
		n[17] !== C || n[18] !== L ? (E = c.jsx("div", babelHelpers.extends({}, L, { children: C })), n[17] = C, n[18] = L, n[19] = E) : E = n[19];
		var k;
		n[20] !== p || n[21] !== g || n[22] !== h || n[23] !== f || n[24] !== d ? (k = f && g.split("\n").length > 2 ? c.jsx("div", {
			className: "x1ph7ams x1ypdohk x1pg5gke x1bvjpef",
			onClick: function() {
				return d(p);
			},
			onKeyDown: function(t) {
				(t.key === "Enter" || t.key === " ") && (t.preventDefault(), d(p));
			},
			role: "button",
			tabIndex: 0,
			children: h ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}) : null, n[20] = p, n[21] = g, n[22] = h, n[23] = f, n[24] = d, n[25] = k) : k = n[25];
		var I;
		n[26] !== E || n[27] !== k ? (I = c.jsxs("div", babelHelpers.extends({}, R, { children: [E, k] })), n[26] = E, n[27] = k, n[28] = I) : I = n[28];
		var T;
		n[29] !== I || n[30] !== S ? (T = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			justify: "all",
			children: [S, I]
		}), n[29] = I, n[30] = S, n[31] = T) : T = n[31];
		var D;
		return n[32] !== T || n[33] !== b ? (D = c.jsx("div", babelHelpers.extends({}, b, { children: T })), n[32] = T, n[33] = b, n[34] = D) : D = n[34], D;
	}
	l.default = d;
}), 226);
