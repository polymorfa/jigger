__d("WAWebDonutChartSlices.react", [
	"ReactKonva",
	"WAWebChartUtils",
	"countWhere",
	"react",
	"useWAWebInterval"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["animate"], s, u = s || (s = o("react")), c = s, d = c.useMemo, m = c.useState;
	function p(t) {
		var n = t.animate, r = n === void 0 ? !1 : n, o = babelHelpers.objectWithoutPropertiesLoose(t, e), a = r ? _ : f;
		return u.jsx(a, babelHelpers.extends({}, o));
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.sliceData, n = m(new Array(t.length).fill(0)), a = n[0], i = n[1], l = d(function() {
			return t.map(function(e) {
				return e / o("WAWebChartUtils").ANIMATION_DURATION_MS;
			});
		}, [t]), s = d(function() {
			return t.reduce(function(e, t) {
				return e + t;
			});
		}, [t]), c = a.reduce(function(e, t) {
			return e + t;
		}), p = r("useWAWebInterval")(function() {
			c !== s && i(a.map(function(e, n) {
				return Math.min(e + l[n] * o("WAWebChartUtils").ANIMATION_REFRESH_INTERVAL_MS, t[n]);
			}));
		}, o("WAWebChartUtils").ANIMATION_REFRESH_INTERVAL_MS), _ = p[0], g = p[1];
		return c === s ? g() : _(), u.jsx(f, babelHelpers.extends({}, e, { sliceData: a }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.gap, n = t === void 0 ? 4 : t, a = e.getChartColor, i = e.size, l = e.sliceData, s = e.strokeColor, c = e.thickness, d = r("countWhere")(l, function(e) {
			return e > 0;
		}) > 1, m = l.reduce(function(e, t, r) {
			return e.slices.push(u.jsx(o("ReactKonva").Arc, {
				rotation: e.rotation,
				angle: t,
				innerRadius: i / 2 - (c + (d ? n : 0)),
				outerRadius: i / 2,
				fill: a(r),
				stroke: s,
				strokeWidth: d ? n : 0
			}, r)), e.rotation += t, e;
		}, {
			slices: [],
			rotation: 0
		}), p = m.slices;
		return p;
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = p;
}), 98);
