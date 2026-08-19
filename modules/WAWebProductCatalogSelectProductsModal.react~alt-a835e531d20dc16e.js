__d("WAWebProductCatalogSelectProductsModal.react", [
	"fbt",
	"WAWebCatalogCollection",
	"WAWebProductCatalogSendCatalogButton.react",
	"WAWebSelectModal.react",
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.onCancel, n = e.onConfirm, a = e.onShare, i = e.ref, l = e.singleSelect, d = c(!1), m = d[0], p = d[1], _ = c([]), f = _[0], g = _[1], h = function(t) {
			var e = t.item, r = t.selected, o = t.selectedItems;
			p(o.length === 0), l === !0 && r && n({ selectedItems: [e] });
		}, y = function(t) {
			var e = t;
			g(e), p(e.length > 0);
		}, C = function() {
			var e, t = r("nullthrows")((e = f[0]) == null ? void 0 : e.catalogWid), n = r("nullthrows")(o("WAWebCatalogCollection").CatalogCollection.get(t));
			a(n);
		}, b = u.jsx(r("WAWebProductCatalogSendCatalogButton.react"), {
			disabled: !m,
			onClick: C
		});
		return u.jsx(o("WAWebSelectModal.react").SelectModal, {
			ref: i,
			title: s._(
				/*BTDS*/
				""
			),
			onCancel: t,
			onConfirm: n,
			listType: o("WAWebSelectModal.react").ListType.ProductSelectModal,
			enableSearchBox: !1,
			maxItems: l === !0 ? 1 : void 0,
			customHeader: b,
			onSelectionChanged: h,
			onDataLoaded: y,
			tsNavigationData: {
				surface: "unknown",
				viewName: "select-products"
			}
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
