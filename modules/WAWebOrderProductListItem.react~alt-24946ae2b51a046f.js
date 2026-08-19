__d("WAWebOrderProductListItem.react", [
	"fbt",
	"WAWebCellFrame.react",
	"WAWebCurrencyUtils",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebOrderItemGetters",
	"WAWebProductCatalogProductThumb.react",
	"WAWebText_DONOTUSE.react",
	"WDSMargins.stylex",
	"isNonZeroNumber",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginInlineEnd6: {
		marginInlineEnd: "xbelrpt",
		$$css: !0
	} };
	function m(t) {
		var n, a, i = t.onClick, l = t.product, u = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: l.name,
			ellipsify: !0,
			titlify: !0
		}), m = c.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
			mediaData: o("WAWebOrderItemGetters").getMediaData(l),
			theme: "list"
		}), p = s._(
			/*BTDS*/
			"",
			[s._param("item-quantity", l.quantity)]
		), _ = null;
		l.quantity && (_ = c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
			className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginStart0, d.marginInlineEnd6),
			children: p
		}));
		var f = null;
		o("isNonZeroNumber").isNonZeroNumber(l.price) && (f = c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
			className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginStart0, d.marginInlineEnd6),
			children: o("WAWebCurrencyUtils").formatAmount1000(l.currency, l.price)
		}));
		var g = null;
		f != null && (g = c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginStart0, d.marginInlineEnd6), { children: "•" })));
		var h = (n = (a = l.properties) == null ? void 0 : a.map(function(e) {
			var t = e[0], n = e[1];
			return c.jsx(o("WAWebFlex.react").FlexRow, { children: c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: s._(
				/*BTDS*/
				"",
				[s._param("propertyName", t), s._param("propertyValue", n)]
			) }) }, t + "-" + n);
		})) != null ? n : [], y = c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [c.jsxs(o("WAWebFlex.react").FlexRow, { children: [
			f,
			g,
			_
		] }), h.length > 0 && c.jsx(o("WAWebFlex.react").FlexColumn, { children: h })] });
		return c.jsx(r("WAWebCellFrame.react"), {
			image: m,
			customImage: !0,
			primary: u,
			secondary: y,
			theme: "order-product",
			onClick: i
		}, l.id.toString());
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
