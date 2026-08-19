__d("WAWebChartLine.react", [
	"ReactKonva",
	"WAWebChartUtils",
	"react",
	"useWAWebInterval"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["animate"], s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n = t.animate, r = n === void 0 ? !1 : n, o = babelHelpers.objectWithoutPropertiesLoose(t, e), a = r ? m : p;
		return u.jsx(a, babelHelpers.extends({}, o));
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.color, n = e.series, a = c([]), i = a[0], l = a[1], s = c(0), d = s[0], m = s[1], _ = o("WAWebChartUtils").ANIMATION_DURATION_MS / n.length, f = r("useWAWebInterval")(function() {
			d !== n.length && (l([].concat(i, [n[d]])), m(d + 1));
		}, _), g = f[0], h = f[1];
		return d === n.length ? h() : g(), u.jsx(p, {
			color: t,
			series: i
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.color, n = e.series;
		return u.jsx(o("ReactKonva").Line, {
			points: o("WAWebChartUtils").flatten(n),
			stroke: t,
			strokeWidth: 2,
			lineJoin: "round",
			lineCap: "round"
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = d;
}), 98);
