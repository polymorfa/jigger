__d("WAWebBarChart.react", [
	"WAWebBarValueRow.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(9), n = e.animate, a = e.barValues, i = e.barXstyle, l = n === void 0 ? !1 : n, u;
		if (t[0] !== l || t[1] !== a || t[2] !== i) {
			var c;
			t[4] !== l || t[5] !== i ? (c = function(t, n) {
				return s.jsx(r("WAWebBarValueRow.react"), {
					animate: l,
					barXstyle: i,
					testid: "bar-chart-row-" + n,
					label: t.label,
					value: t.value,
					percentage: t.percentage
				}, t.key);
			}, t[4] = l, t[5] = i, t[6] = c) : c = t[6], u = a.map(c), t[0] = l, t[1] = a, t[2] = i, t[3] = u;
		} else u = t[3];
		var d;
		return t[7] !== u ? (d = s.jsx(o("WAWebFlex.react").FlexColumn, {
			rowGap: 24,
			testid: "bar-chart",
			paddingTop: 4,
			children: u
		}), t[7] = u, t[8] = d) : d = t[8], d;
	}
	l.default = u;
}), 98);
