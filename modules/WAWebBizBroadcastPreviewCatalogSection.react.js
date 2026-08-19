__d("WAWebBizBroadcastPreviewCatalogSection.react", [
	"fbt",
	"WAWebBizBroadcastCatalogPriceText.react",
	"WAWebFlex.react",
	"WAWebStorefrontFilledIcon.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
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
		var t, n = o("react-compiler-runtime").c(3), r = e.attachmentData;
		if (r == null) return null;
		var a = ((t = r.catalogData) == null ? void 0 : t.productId) == null, i;
		return n[0] !== r || n[1] !== a ? (i = a ? u.jsx(p, { attachmentData: r }) : u.jsx(_, { attachmentData: r }), n[0] = r, n[1] = a, n[2] = i) : i = n[2], i;
	}
	function p(e) {
		var t, n = o("react-compiler-runtime").c(9), a = e.attachmentData, i = a.catalogData, l = a.fileName, c = i == null ? void 0 : i.productImageUrl, m = (t = i == null ? void 0 : i.productName) != null ? t : l, p;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "xyi3aci xwf5gio x1p453bz x1suzm8a xav9cv8 x4tpdpg x1wbi8v6 x7g7pl8 x6ikm8r x10wlt62" }, n[0] = p) : p = n[0];
		var _;
		n[1] !== m || n[2] !== c ? (_ = c != null ? u.jsx("img", {
			className: "xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xy75621 xl1xv1r xni59qk",
			src: c,
			alt: s._(
				/*BTDS*/
				""
			)
		}) : u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: d.catalogFallbackIconSmall,
			children: u.jsx(o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon, { "aria-hidden": m != null })
		}), n[1] = m, n[2] = c, n[3] = _) : _ = n[3];
		var f;
		n[4] !== m ? (f = m != null && u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			maxLines: 2,
			children: m
		}), n[4] = m, n[5] = f) : f = n[5];
		var g;
		return n[6] !== _ || n[7] !== f ? (g = u.jsx("div", babelHelpers.extends({}, p, {
			"data-testid": "biz-broadcast-preview-full-catalog",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: d.catalogCard,
				children: [_, f]
			})
		})), n[6] = _, n[7] = f, n[8] = g) : g = n[8], g;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(13), n = e.attachmentData, a = n.catalogData, i = n.fileName, l;
		t[0] !== a ? (l = a != null ? a : {}, t[0] = a, t[1] = l) : l = t[1];
		var c = l, m = c.productImageUrl, p = c.productName, _ = p != null ? p : i, f;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "xyi3aci xwf5gio x1p453bz x1suzm8a xav9cv8 x4tpdpg x1wbi8v6 x7g7pl8 x6ikm8r x10wlt62" }, t[2] = f) : f = t[2];
		var g;
		t[3] !== (a == null ? void 0 : a.priceAmount1000) || t[4] !== _ || t[5] !== m ? (g = m != null ? u.jsx("img", {
			className: "x1lliihq xq3t0pi xzf279q x1u2d2a2 xl1xv1r xh8yej3",
			src: m,
			alt: s._(
				/*BTDS*/
				""
			)
		}) : u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: d.catalogFallbackIcon,
			children: u.jsx(o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon, { "aria-hidden": _ != null || (a == null ? void 0 : a.priceAmount1000) != null })
		}), t[3] = a == null ? void 0 : a.priceAmount1000, t[4] = _, t[5] = m, t[6] = g) : g = t[6];
		var h;
		t[7] !== a || t[8] !== _ ? (h = (_ != null || (a == null ? void 0 : a.priceAmount1000) != null) && u.jsxs("div", {
			className: "x1bu39yj x16ovd2e x12xbjc7 x12w63v0 x1nzty39",
			children: [_ != null && u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDefault",
				maxLines: 2,
				children: _
			}), u.jsx(r("WAWebBizBroadcastCatalogPriceText.react"), { catalogData: a })]
		}), t[7] = a, t[8] = _, t[9] = h) : h = t[9];
		var y;
		return t[10] !== g || t[11] !== h ? (y = u.jsxs("div", babelHelpers.extends({}, f, {
			"data-testid": "biz-broadcast-preview-single-product",
			children: [g, h]
		})), t[10] = g, t[11] = h, t[12] = y) : y = t[12], y;
	}
	l.default = m;
}), 226);
