__d("WAFlowsViewCartFooter.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsFooter.react",
	"WAFlowsLocalization",
	"WAFlowsShoppingCartStateUtils",
	"WAFlowsStateProvider.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = e.dataTestId, n = t === void 0 ? "view-cart-footer-with-quantity" : t, r = e.onViewCartClick, a = o("WAFlowsStateProvider.react").useWAFlowsState(), i = a.internal, l = i.shopping, c = i.status, d = o("WAFlowsEnvContext.react").useWAFlowsEnv(), m = d.env, p = u(function() {
			return o("WAFlowsShoppingCartStateUtils").getCartItemsNumber(l);
		}, [l]), _ = p > 0;
		return _ && s.jsx(o("WAFlowsFooter.react").WAFlowsFooter, {
			label: o("WAFlowsLocalization").getViewCartWithNumberOfItemsFbt(p, m.locale).toString(),
			onClick: r,
			dataTestId: n,
			enabled: c !== o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
