__d("WAWebCatalogCartVariantsPopup.react", [
	"fbt",
	"WALogger",
	"WAWebChatCollection",
	"WAWebFlex.react",
	"WAWebLid1X1MigrationGating",
	"WAWebLidMigrationUtils",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebProductCatalogProductDetailsDrawer.react",
	"WAWebWidFactory",
	"nullthrows",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(14), a = t.collectionId, i = t.onAddToCart, l = t.product, u;
		n[0] !== i ? (u = function() {
			i == null || i(), o("WAWebModalManager").ModalManager.close();
		}, n[0] = i, n[1] = u) : u = n[1];
		var d = u, m = l.catalogWid;
		if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
			var p;
			n[2] !== l.catalogWid ? (p = o("WAWebLidMigrationUtils").toUserLid(o("WAWebWidFactory").createUserWidOrThrow(l.catalogWid.toString())), n[2] = l.catalogWid, n[3] = p) : p = n[3];
			var _ = p;
			_ != null && (m = _);
		}
		m == null && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[catalog] product details drawer: chatId is null"]))).sendLogs("catalog-pdp-chat-id-null");
		var f;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), n[4] = f) : f = n[4];
		var g = f, h;
		n[5] !== m ? (h = r("nullthrows")(o("WAWebChatCollection").ChatCollection.get(m)), n[5] = m, n[6] = h) : h = n[6];
		var y;
		n[7] !== l ? (y = r("nullthrows")(l), n[7] = l, n[8] = y) : y = n[8];
		var C;
		return n[9] !== a || n[10] !== d || n[11] !== h || n[12] !== y ? (C = c.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Tower,
			title: "Product details with variants",
			ariaLabel: g,
			testid: "catalog-pdp-with-variants-modal",
			children: c.jsx(o("WAWebFlex.react").FlexRow, { children: c.jsx(r("WAWebProductCatalogProductDetailsDrawer.react"), {
				chat: h,
				collectionId: a,
				product: y,
				onEnd: r("WAWebNoop"),
				onBack: o("WAWebModalManager").closeModalManager,
				refreshCarousel: !1,
				onProductLinkClick: r("WAWebNoop"),
				onProductMoreInformation: r("WAWebNoop"),
				onCartClick: d,
				hideMessageBusinessButton: !0,
				hideHeader: !0,
				hideCatalogSection: !0,
				hideDescription: !0
			}) })
		}), n[9] = a, n[10] = d, n[11] = h, n[12] = y, n[13] = C) : C = n[13], C;
	}
	l.default = d;
}), 226);
