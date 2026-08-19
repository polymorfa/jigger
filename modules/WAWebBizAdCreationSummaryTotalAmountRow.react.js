__d("WAWebBizAdCreationSummaryTotalAmountRow.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax.graphql",
	"WAWebBizSummaryLineItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var a, i, l = o("react-compiler-runtime").c(6), u = t.estimatedTaxRef, d = t.isContinuousDuration, m = d === void 0 ? !1 : d, p = o("CometRelay").useFragment(e !== void 0 ? e : e = n("WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax.graphql"), u), _ = (a = p == null || (i = p.total) == null ? void 0 : i.formattedAmount) != null ? a : "", f;
		l[0] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), l[0] = f) : f = l[0];
		var g;
		l[1] !== m || l[2] !== _ ? (g = m ? s._(
			/*BTDS*/
			"",
			[s._param("Pre-formatted total amount", _)]
		) : _, l[1] = m, l[2] = _, l[3] = g) : g = l[3];
		var h;
		return l[4] !== g ? (h = c.jsx(r("WAWebBizSummaryLineItem.react"), {
			label: f,
			value: g
		}), l[4] = g, l[5] = h) : h = l[5], h;
	}
	l.default = d;
}), 226);
