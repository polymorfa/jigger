__d("WAWebBizBroadcastCatalogPriceText.react", [
	"WAWebCurrencyUtils",
	"WAWebProductSelectors",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(18), n = e.catalogData, a = e.maxLines, i = e.testid;
		if (n == null) return null;
		var l = n.currency, u = n.priceAmount1000, c = n.salePriceAmount1000, d, m, p, _;
		if (t[0] !== u || t[1] !== l || t[2] !== c) {
			_ = Symbol.for("react.early_return_sentinel");
			e: {
				var f = {
					currency: l,
					priceAmount1000: u,
					salePriceAmount1000: c
				}, g = o("WAWebProductSelectors").getActivePrice(f);
				if (l == null || u == null || g == null) {
					_ = null;
					break e;
				}
				d = o("WAWebCurrencyUtils").formatAmount1000(l, g);
				var h;
				t[7] !== u || t[8] !== l ? (h = o("WAWebCurrencyUtils").formatAmount1000(l, u), t[7] = u, t[8] = l, t[9] = h) : h = t[9], m = h, p = o("WAWebProductSelectors").isSalePriceActive(f);
			}
			t[0] = u, t[1] = l, t[2] = c, t[3] = d, t[4] = m, t[5] = p, t[6] = _;
		} else d = t[3], m = t[4], p = t[5], _ = t[6];
		if (_ !== Symbol.for("react.early_return_sentinel")) return _;
		var y = p, C;
		t[10] !== d || t[11] !== m || t[12] !== y ? (C = y ? s.jsxs(s.Fragment, { children: [
			d,
			" ",
			s.jsx("span", {
				className: "xmqliwb",
				children: m
			})
		] }) : d, t[10] = d, t[11] = m, t[12] = y, t[13] = C) : C = t[13];
		var b;
		return t[14] !== a || t[15] !== C || t[16] !== i ? (b = s.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			maxLines: a,
			testid: i,
			children: C
		}), t[14] = a, t[15] = C, t[16] = i, t[17] = b) : b = t[17], b;
	}
	l.default = u;
}), 98);
