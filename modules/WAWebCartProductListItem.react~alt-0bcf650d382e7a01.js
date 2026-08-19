__d("WAWebCartProductListItem.react", [
	"fbt",
	"WAWebCartQuantityControls.react",
	"WAWebCellFrame.react",
	"WAWebDrawerContext",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebProductCatalogProductPriceInfoText.react",
	"WAWebProductCatalogProductThumb.react",
	"WAWebText_DONOTUSE.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useContext, d = { marginInlineEnd5: {
		marginInlineEnd: "xf6vk7d",
		$$css: !0
	} };
	function m(e) {
		var t, n, a, i = e.onClick, l = e.product, c = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: l.name,
			ellipsify: !0,
			titlify: !0
		}), d = (t = l.getPreviewImage()) == null ? void 0 : t.mediaData, m = d ? u.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
			theme: "cart-list",
			mediaData: d
		}) : null, _ = u.jsx(r("WAWebProductCatalogProductPriceInfoText.react"), {
			className: "x6s0dn4 x78zum5",
			showTotalPrice: !0,
			product: l
		}), f = (n = (a = l.variantInfo) == null || (a = a.variant_properties) == null ? void 0 : a.map(function(e) {
			var t = e.name, n = e.value;
			return u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: s._(
				/*BTDS*/
				"",
				[s._param("propertyName", t), s._param("propertyValue", n)]
			) }) }, (t != null ? t : "") + "-" + (n != null ? n : ""));
		})) != null ? n : [], g = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [f.length > 0 && u.jsx(o("WAWebFlex.react").FlexColumn, { children: f }), u.jsx(p, { cartProduct: l })] });
		return u.jsx(r("WAWebCellFrame.react"), {
			image: m,
			customImage: !0,
			primary: c,
			secondary: g,
			theme: "cart-product",
			onClick: i,
			detail: _
		}, l.id.toString());
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.cartProduct, n = c(o("WAWebDrawerContext").DrawerContext);
		return u.jsx(r("WAWebFlexItem.react"), {
			xstyle: d.marginInlineEnd5,
			children: u.jsx(o("WAWebCartQuantityControls.react").WAWebCartQuantityControls, {
				product: t,
				context: n
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
