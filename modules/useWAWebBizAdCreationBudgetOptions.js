__d("useWAWebBizAdCreationBudgetOptions", [
	"WAWebBizAdCreationSpecContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useMemo;
	function d() {
		var e, t = o("react-compiler-runtime").c(10), n = u(r("WAWebBizAdCreationSpecContext")), a = n.currentValue, i = a.budgetData;
		i == null || i.budgetOptions;
		var l;
		if (t[0] !== (i == null ? void 0 : i.budgetOptions)) {
			var s;
			l = (s = i == null ? void 0 : i.budgetOptions) != null ? s : [], t[0] = i == null ? void 0 : i.budgetOptions, t[1] = l;
		} else l = t[1];
		var c = l, d = i == null ? void 0 : i.defaultBudget, p = i == null ? void 0 : i.recommendedBudget, _ = (e = i == null ? void 0 : i.budget) != null ? e : 0, f = i == null ? void 0 : i.minBudget, g;
		if (t[2] !== d || t[3] !== f || t[4] !== p || t[5] !== _ || t[6] !== c) {
			if (g = [].concat(c), d != null && (g = g.concat(d)), p != null && (g = g.concat(p)), g = g.concat(_), g = Array.from(new Set(g)).sort(m), f != null && f > 0) {
				var h;
				t[8] !== f ? (h = function(t) {
					return t >= f;
				}, t[8] = f, t[9] = h) : h = t[9], g = g.filter(h);
			}
			t[2] = d, t[3] = f, t[4] = p, t[5] = _, t[6] = c, t[7] = g;
		} else g = t[7];
		var y = g;
		return y;
	}
	function m(e, t) {
		return e - t;
	}
	l.default = d;
}), 98);
