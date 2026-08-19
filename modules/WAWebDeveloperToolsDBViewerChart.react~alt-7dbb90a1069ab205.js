__d("WAWebDeveloperToolsDBViewerChart.react", [
	"WAWebDeveloperToolsDBViewerBaseTable.react",
	"WAWebDeveloperToolsDBViewerTable.react",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = { chartWrapper: {
		overflowX: "x14aock7",
		overflowY: "x1rife3k",
		$$css: !0
	} };
	function d(t) {
		var n = t.data, a = t.errorMsg;
		if (!n) return u.jsx(o("WAWebDeveloperToolsDBViewerTable.react").Message, { msg: a });
		var i = 300, l = n.length, s = 100 / l, d = 200;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.chartWrapper, o("WDSMargins.stylex").wdsMargins.marginHorAuto), { children: u.jsxs("svg", {
			width: 200 * l,
			height: i + 50,
			children: [u.jsx("title", { children: "Chart" }), n.map(function(e, t) {
				var n = e.count, r = e.value;
				return u.jsxs("g", { children: [
					u.jsx("rect", {
						x: t * s + "%",
						y: i - n,
						width: d - 10,
						height: n,
						fill: "teal"
					}),
					u.jsx("text", {
						overflow: "scroll",
						width: d - 10,
						className: "x1pg5gke xypthjr",
						x: t * s + s / 2 + "%",
						y: i + 20,
						textAnchor: "middle",
						children: u.jsx("tspan", { children: o("WAWebDeveloperToolsDBViewerBaseTable.react").trunc(r, 20) })
					}),
					u.jsx("text", {
						overflow: "scroll",
						width: d - 2,
						className: "x1pg5gke xypthjr",
						x: t * s + s / 2 + "%",
						y: i + 35,
						textAnchor: "middle",
						children: u.jsx("tspan", { children: o("WAWebDeveloperToolsDBViewerBaseTable.react").trunc(String(n), 20) })
					})
				] }, t);
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
