__d("WAWebTimeSeries.react", [
	"WAWeb-moment",
	"WAWebL10N",
	"WAWebLineChart.react",
	"WAWebNewsletterMetricUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(7), n = e.animate, a = e.data, i = e.getChartColor, l = e.height, u = e.onHover, _ = e.width, f = n === void 0 ? !1 : n, g;
		return t[0] !== f || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== u || t[5] !== _ ? (g = s.jsx(r("WAWebLineChart.react"), {
			animate: f,
			getChartColor: i,
			onHover: u,
			data: a,
			height: l,
			width: _,
			formatXLabel: c,
			formatYLabel: d,
			xTickGenerator: m,
			yTickGenerator: p
		}), t[0] = f, t[1] = a, t[2] = i, t[3] = l, t[4] = u, t[5] = _, t[6] = g) : g = t[6], g;
	}
	function c(e) {
		return Intl.DateTimeFormat([r("WAWebL10N").getFullLocale(), r("WAWeb-moment").locale()], {
			month: "short",
			day: "numeric"
		}).format(e);
	}
	function d(e) {
		return r("WAWebL10N").d(e);
	}
	function m(e, t, n) {
		var r = (t - e) / (n - 1);
		return Array.from({ length: n }, function(t, n) {
			return o("WAWebNewsletterMetricUtils").roundToNearestDay(e + n * r);
		});
	}
	function p(e, t, n) {
		for (var r = _({
			count: n,
			maxY: t,
			minY: e
		}), o = Math.floor(e / r) * r, a = (Math.floor(e / r) + n) * r;;) {
			var i = e - o, l = a - t, s = Math.abs(i - l), u = o - r, c = a - r, d = e - u, m = c - t, p = Math.abs(d - m);
			if (p < s) o = u, a = c;
			else break;
		}
		return Array.from({ length: n + 1 }, function(e, t) {
			return o + t * r;
		});
	}
	function _(e) {
		for (var t = e.count, n = e.maxY, r = e.minY, o = (n - r) / t, a = 1; a < o || (Math.floor(r / a) + t + 1) * a < n;) a *= a.toString()[0] === "2" ? 2.5 : 2;
		return Math.floor(a);
	}
	l.default = u;
}), 98);
