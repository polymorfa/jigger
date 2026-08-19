__d("WAWebBizBroadcastCatalogPriceText.react", [
	"WAWebCurrencyUtils",
	"WAWebProductSelectors",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.catalogData, n = e.maxLines, a = e.testid;
		if (t == null) return null;
		var i = t.currency, l = t.priceAmount1000, u = t.salePriceAmount1000, c = {
			currency: i,
			priceAmount1000: l,
			salePriceAmount1000: u
		}, d = o("WAWebProductSelectors").getActivePrice(c);
		if (i == null || l == null || d == null) return null;
		var m = o("WAWebCurrencyUtils").formatAmount1000(i, d), p = o("WAWebCurrencyUtils").formatAmount1000(i, l), _ = o("WAWebProductSelectors").isSalePriceActive(c);
		return s.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			maxLines: n,
			testid: a,
			children: _ ? s.jsxs(s.Fragment, { children: [
				m,
				" ",
				s.jsx("span", {
					className: "xmqliwb",
					children: p
				})
			] }) : m
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
