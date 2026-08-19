__d("WAWebDeveloperToolsDBViewerChart.react", [
	"WAWebDeveloperToolsDBViewerBaseTable.react",
	"WAWebDeveloperToolsDBViewerTable.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = { chartWrapper: {
		overflowX: "x14aock7",
		overflowY: "x1rife3k",
		$$css: !0
	} };
	function d(t) {
		var n = o("react-compiler-runtime").c(12), a = t.data, i = t.errorMsg;
		if (!a) {
			var l;
			return n[0] !== i ? (l = u.jsx(o("WAWebDeveloperToolsDBViewerTable.react").Message, { msg: i }), n[0] = i, n[1] = l) : l = n[1], l;
		}
		var s = a.length, d = 100 / s, m;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (m = (e || (e = r("stylex"))).props(c.chartWrapper, o("WDSMargins.stylex").wdsMargins.marginHorAuto), n[2] = m) : m = n[2];
		var p = 200 * s, _;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx("title", { children: "Chart" }), n[3] = _) : _ = n[3];
		var f;
		if (n[4] !== d || n[5] !== a) {
			var g;
			n[7] !== d ? (g = function(t, n) {
				var e = t.count, r = t.value;
				return u.jsxs("g", { children: [
					u.jsx("rect", {
						x: n * d + "%",
						y: 300 - e,
						width: 190,
						height: e,
						fill: "teal"
					}),
					u.jsx("text", {
						overflow: "scroll",
						width: 190,
						className: "x1pg5gke xypthjr",
						x: n * d + d / 2 + "%",
						y: 320,
						textAnchor: "middle",
						children: u.jsx("tspan", { children: o("WAWebDeveloperToolsDBViewerBaseTable.react").trunc(r, 20) })
					}),
					u.jsx("text", {
						overflow: "scroll",
						width: 198,
						className: "x1pg5gke xypthjr",
						x: n * d + d / 2 + "%",
						y: 335,
						textAnchor: "middle",
						children: u.jsx("tspan", { children: o("WAWebDeveloperToolsDBViewerBaseTable.react").trunc(String(e), 20) })
					})
				] }, n);
			}, n[7] = d, n[8] = g) : g = n[8], f = a.map(g), n[4] = d, n[5] = a, n[6] = f;
		} else f = n[6];
		var h;
		return n[9] !== p || n[10] !== f ? (h = u.jsx("div", babelHelpers.extends({}, m, { children: u.jsxs("svg", {
			width: p,
			height: 350,
			children: [_, f]
		}) })), n[9] = p, n[10] = f, n[11] = h) : h = n[11], h;
	}
	l.default = d;
}), 98);
