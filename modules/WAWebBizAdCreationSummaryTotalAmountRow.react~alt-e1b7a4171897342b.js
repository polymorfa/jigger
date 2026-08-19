__d("WAWebBizAdCreationSummaryTotalAmountRow.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax.graphql",
	"WAWebBizSummaryLineItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var a, i, l = t.estimatedTaxRef, u = t.isContinuousDuration, d = u === void 0 ? !1 : u, m = o("CometRelay").useFragment(e !== void 0 ? e : e = n("WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax.graphql"), l), p = (a = m == null || (i = m.total) == null ? void 0 : i.formattedAmount) != null ? a : "";
		return c.jsx(r("WAWebBizSummaryLineItem.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			value: d ? s._(
				/*BTDS*/
				"",
				[s._param("Pre-formatted total amount", p)]
			) : p
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
