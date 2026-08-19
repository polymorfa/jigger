__d("WAWebBizBroadcastPreviewCatalogSection.react", [
	"fbt",
	"WAWebBizBroadcastCatalogPriceText.react",
	"WAWebFlex.react",
	"WAWebStorefrontFilledIcon.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 280, d = {
		catalogCard: {
			backgroundColor: "x1bu39yj",
			columnGap: "x1s70e7g",
			$$css: !0
		},
		catalogFallbackIcon: {
			backgroundColor: "x1abdmlv",
			height: "xhjk10j",
			width: "xh8yej3",
			$$css: !0
		},
		catalogFallbackIconSmall: {
			backgroundColor: "x1abdmlv",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			flexShrink: "x2lah0s",
			height: "xy75621",
			width: "xni59qk",
			$$css: !0
		}
	};
	function m(e) {
		var t, n = e.attachmentData;
		if (n == null) return null;
		var r = ((t = n.catalogData) == null ? void 0 : t.productId) == null;
		return r ? u.jsx(p, { attachmentData: n }) : u.jsx(_, { attachmentData: n });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n = e.attachmentData, a = n.catalogData, i = n.fileName, l = a == null ? void 0 : a.productImageUrl, c = (t = a == null ? void 0 : a.productName) != null ? t : i;
		return u.jsx("div", {
			className: "xyi3aci xwf5gio x1p453bz x1suzm8a xav9cv8 x4tpdpg x1wbi8v6 x7g7pl8 x6ikm8r x10wlt62",
			"data-testid": "biz-broadcast-preview-full-catalog",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: d.catalogCard,
				children: [l != null ? u.jsx("img", {
					className: "xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xy75621 xl1xv1r xni59qk",
					src: l,
					alt: s._(
						/*BTDS*/
						""
					)
				}) : u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: d.catalogFallbackIconSmall,
					children: u.jsx(o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon, { "aria-hidden": c != null })
				}), c != null && u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					maxLines: 2,
					children: c
				})]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.attachmentData, n = t.catalogData, a = t.fileName, i = n != null ? n : {}, l = i.productImageUrl, c = i.productName, m = c != null ? c : a;
		return u.jsxs("div", {
			className: "xyi3aci xwf5gio x1p453bz x1suzm8a xav9cv8 x4tpdpg x1wbi8v6 x7g7pl8 x6ikm8r x10wlt62",
			"data-testid": "biz-broadcast-preview-single-product",
			children: [l != null ? u.jsx("img", {
				className: "x1lliihq xq3t0pi xzf279q x1u2d2a2 xl1xv1r xh8yej3",
				src: l,
				alt: s._(
					/*BTDS*/
					""
				)
			}) : u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: d.catalogFallbackIcon,
				children: u.jsx(o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon, { "aria-hidden": m != null || (n == null ? void 0 : n.priceAmount1000) != null })
			}), (m != null || (n == null ? void 0 : n.priceAmount1000) != null) && u.jsxs("div", {
				className: "x1bu39yj x16ovd2e x12xbjc7 x12w63v0 x1nzty39",
				children: [m != null && u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					maxLines: 2,
					children: m
				}), u.jsx(r("WAWebBizBroadcastCatalogPriceText.react"), { catalogData: n })]
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = m;
}), 226);
