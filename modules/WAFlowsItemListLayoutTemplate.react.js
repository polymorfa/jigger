__d("WAFlowsItemListLayoutTemplate.react", [
	"WAFlowsItemList.react",
	"WAFlowsShoppingCustomActionCallbacks",
	"WAFlowsStateParser",
	"WAFlowsStateProvider.react",
	"WAFlowsViewCartFooter.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.layout, n = e.screenID, a = o("WAFlowsStateProvider.react").useWAFlowsMeta(), i = o("WAFlowsStateParser").usePropertyValues(n, t, a), l = i.items, u = o("WAFlowsShoppingCustomActionCallbacks").useItemClickCallback(n, t["on-item-click-action"]), c = o("WAFlowsShoppingCustomActionCallbacks").useViewCartCallback(n, t["on-view-cart-click-action"]);
		return s.jsxs("article", {
			className: "x5yr21d",
			children: [s.jsx(r("WAFlowsItemList.react"), {
				items: l,
				hideMedia: t["show-media"],
				showDiscountStrikethrough: t["show-discount-strikethrough"],
				onItemClick: u,
				dataTestId: n
			}), s.jsx(r("WAFlowsViewCartFooter.react"), { onViewCartClick: c })]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
