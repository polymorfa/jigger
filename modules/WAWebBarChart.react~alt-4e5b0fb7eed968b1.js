__d("WAWebBarChart.react", [
	"WAWebBarValueRow.react",
	"WAWebFlex.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.animate, n = t === void 0 ? !1 : t, a = e.barValues, i = e.barXstyle;
		return s.jsx(o("WAWebFlex.react").FlexColumn, {
			rowGap: 24,
			testid: "bar-chart",
			paddingTop: 4,
			children: a.map(function(e, t) {
				return s.jsx(r("WAWebBarValueRow.react"), {
					animate: n,
					barXstyle: i,
					testid: "bar-chart-row-" + t,
					label: e.label,
					value: e.value,
					percentage: e.percentage
				}, e.key);
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
