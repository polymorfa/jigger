__d("WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react", [
	"WAWebBarChart.react",
	"WAWebNewsletterInsightCountryDataProcessors",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(10), n = e.animate, a = e.barXstyle, i = e.values, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [], t[0] = l) : l = t[0];
		var u = m(l), c = u[0], p = u[1], _;
		t[1] !== i ? (_ = async function() {
			var e = await o("WAWebNewsletterInsightCountryDataProcessors").getCountryBarValues(i);
			p(e);
		}, t[1] = i, t[2] = _) : _ = t[2];
		var f = _, g, h;
		t[3] !== f ? (g = function() {
			f();
		}, h = [f], t[3] = f, t[4] = g, t[5] = h) : (g = t[4], h = t[5]), d(g, h);
		var y;
		return t[6] !== n || t[7] !== a || t[8] !== c ? (y = s.jsx(r("WAWebBarChart.react"), {
			animate: n,
			barValues: c,
			barXstyle: a
		}), t[6] = n, t[7] = a, t[8] = c, t[9] = y) : y = t[9], y;
	}
	l.default = p;
}), 98);
