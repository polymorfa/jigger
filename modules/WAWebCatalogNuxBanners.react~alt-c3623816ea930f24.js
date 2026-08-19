__d("WAWebCatalogNuxBanners.react", [
	"WAWebNuxBanners.react",
	"WAWebNuxCollectionsBanner.react",
	"WAWebSelfCatalogLookup",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		var t = e.onOpenCollections, n = u(!1), a = n[0], i = n[1], l = o("WAWebSelfCatalogLookup").getSelfCatalog();
		return o("useWAWebListener").useListener(l == null ? void 0 : l.collections, "change", function() {
			i(!0);
		}), a && s.jsx(r("WAWebNuxBanners.react"), { children: s.jsx(r("WAWebNuxCollectionsBanner.react"), { onClick: t }) });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
