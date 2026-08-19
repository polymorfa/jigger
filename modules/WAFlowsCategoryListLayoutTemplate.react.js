__d("WAFlowsCategoryListLayoutTemplate.react", [
	"WAFlowsCategoryList.react",
	"WAFlowsShoppingCustomActionCallbacks",
	"WAFlowsStateParser",
	"WAFlowsStateProvider.react",
	"WAFlowsViewCartFooter.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.layout, n = e.screenID, a = o("WAFlowsStateProvider.react").useWAFlowsMeta(), i = o("WAFlowsStateParser").usePropertyValues(n, t, a), l = i.categories, u = o("WAFlowsShoppingCustomActionCallbacks").useCategoryClickCallback(n, t["on-last-level-click-action"]), c = o("WAFlowsShoppingCustomActionCallbacks").useViewCartCallback(n, t["on-view-cart-click-action"]);
		return s.jsxs("article", { children: [s.jsx(r("WAFlowsCategoryList.react"), {
			categories: l,
			dataTestId: n,
			onCategoryClick: u,
			screenID: n
		}), s.jsx(r("WAFlowsViewCartFooter.react"), { onViewCartClick: c })] });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
