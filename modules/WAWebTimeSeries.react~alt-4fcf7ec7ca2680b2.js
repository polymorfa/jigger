__d("WAWebTimeSeries.react", [
	"WAWeb-moment",
	"WAWebL10N",
	"WAWebLineChart.react",
	"WAWebNewsletterMetricUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.animate, n = t === void 0 ? !1 : t, o = e.data, a = e.getChartColor, i = e.height, l = e.onHover, u = e.width;
		return s.jsx(r("WAWebLineChart.react"), {
			animate: n,
			getChartColor: a,
			onHover: l,
			data: o,
			height: i,
			width: u,
			formatXLabel: c,
			formatYLabel: d,
			xTickGenerator: m,
			yTickGenerator: p
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
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
