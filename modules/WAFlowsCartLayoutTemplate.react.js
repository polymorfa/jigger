__d("WAFlowsCartLayoutTemplate.react", [
	"WAFlowsCart.react",
	"WAFlowsEnvContext.react",
	"WAFlowsShoppingCustomActionCallbacks",
	"WAFlowsStateParser",
	"WAFlowsStateProvider.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n, a, i = e.layout, l = e.screenID, u = o("WAFlowsStateProvider.react").useWAFlowsMeta(), c = o("WAFlowsStateProvider.react").useWAFlowsState(), d = o("WAFlowsEnvContext.react").useWAFlowsEnv(), m = d.env, p = o("WAFlowsStateParser").usePropertyValues(l, i, u), _ = p.items, f = (a = o("WAFlowsShoppingCustomActionCallbacks")).useCartUpdateCallback(l, m.isJestTesting), g = a.useItemClickCallback(l), h = a.useOnAddMoreClickCallback(l), y = a.useCartCouponClickCallback(l);
		a.useDetectCatalogChangesAndNotifyUser(_);
		var C = p == null ? void 0 : p.coupons, b = p == null ? void 0 : p.cart;
		return s.jsx(r("WAFlowsCart.react"), babelHelpers.extends({}, p, {
			items: _,
			inCartItems: (t = (n = c.internal) == null || (n = n.shopping) == null || (n = n.shoppingCart) == null ? void 0 : n.items) != null ? t : [],
			"data-testid": void 0,
			onQuantityChange: f,
			onItemClick: g,
			onAddMoreClick: h,
			onCouponClick: y,
			screenID: l,
			coupons: C,
			cart: b
		}));
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
