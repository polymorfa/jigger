__d("WAWebProductCatalogSelectableProductItem.react", [
	"WAWebCheckboxSelectableWrapper.react",
	"WAWebMediaTypes",
	"WAWebNoop",
	"WAWebProductCatalogListItem.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = d;
	function c(e) {
		var t, n = (t = e.product.getPreviewImage()) == null ? void 0 : t.mediaData;
		return n ? s.jsx(u, babelHelpers.extends({ mediaData: n }, e)) : null;
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.active, n = e.onClick, a = e.product, i = e.selections, l = o("useWAWebModelValues").useModelValues(e.mediaData, ["mediaStage"]), u = l.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED, c = u ? r("WAWebNoop") : n;
		return s.jsx(r("WAWebCheckboxSelectableWrapper.react"), {
			model: a,
			selections: i,
			disabled: u,
			children: s.jsx(r("WAWebProductCatalogListItem.react"), {
				product: a,
				onClick: c,
				active: t,
				checkbox: !0,
				disableOutOfStockAppearance: !0,
				isMuted: u
			})
		}, a.id.toString());
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
