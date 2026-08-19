__d("WAFlowsItemDetailLayoutTemplate.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsItemDetail.react",
	"WAFlowsItemDetailFooter.react",
	"WAFlowsShoppingCustomActionCallbacks",
	"WAFlowsStateParser",
	"WAFlowsStateProvider.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.layout, n = e.screenID, a = o("WAFlowsStateProvider.react").useWAFlowsMeta(), i = o("WAFlowsEnvContext.react").useWAFlowsEnv(), l = i.env, u = o("WAFlowsStateParser").usePropertyValues(n, t, a), c = u.item, d = o("WAFlowsShoppingCustomActionCallbacks").useCartUpdateCallback(n, l.isJestTesting), m = o("WAFlowsShoppingCustomActionCallbacks").useViewCartCallback(n, t["on-view-cart-click-action"]), p = o("WAFlowsShoppingCustomActionCallbacks").useLoadVariantProduct(n);
		return c ? s.jsxs("article", { children: [s.jsx(r("WAFlowsItemDetail.react"), {
			item: c,
			"data-testid": void 0,
			showDescription: u.showDescription,
			showDiscountStrikethrough: u.showDiscountStrikethrough,
			showMedia: u.showMedia,
			onVariantSelectedCallback: p,
			enabled: u.enabled
		}), s.jsx(o("WAFlowsItemDetailFooter.react").WAFlowsItemDetailFooter, {
			item: c,
			onQuantityChange: d,
			onViewCartClick: m,
			enabled: u.enabled
		})] }) : null;
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
