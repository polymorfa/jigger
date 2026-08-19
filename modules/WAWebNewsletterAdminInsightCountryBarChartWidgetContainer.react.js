__d("WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react", [
	"WAWebBarChart.react",
	"WAWebNewsletterInsightCountryDataProcessors",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(10), a = e.animate, i = e.barXstyle, l = e.values, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = [], t[0] = u) : u = t[0];
		var c = m(u), p = c[0], _ = c[1], f;
		t[1] !== l ? (f = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebNewsletterInsightCountryDataProcessors").getCountryBarValues(l);
				_(e);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[1] = l, t[2] = f) : f = t[2];
		var g = f, h, y;
		t[3] !== g ? (h = function() {
			g();
		}, y = [g], t[3] = g, t[4] = h, t[5] = y) : (h = t[4], y = t[5]), d(h, y);
		var C;
		return t[6] !== a || t[7] !== i || t[8] !== p ? (C = s.jsx(r("WAWebBarChart.react"), {
			animate: a,
			barValues: p,
			barXstyle: i
		}), t[6] = a, t[7] = i, t[8] = p, t[9] = C) : C = t[9], C;
	}
	l.default = p;
}), 98);
