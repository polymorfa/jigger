__d("WAFlowsItemDetailFooter.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsLocalization",
	"WAFlowsOldButton.react",
	"WAFlowsQuantityInput.react",
	"WAFlowsReactPortal.react",
	"WAFlowsShoppingCartStateUtils",
	"WAFlowsShoppingStateUtils",
	"WAFlowsShoppingTemplateTypes",
	"WAFlowsStateProvider.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = {
		footerContainer: {
			width: "xh8yej3",
			paddingTop: "x1q57ora",
			paddingRight: "xuax084",
			paddingBottom: "xmnamis",
			paddingLeft: "xirhts3",
			boxSizing: "x9f619",
			$$css: !0
		},
		flexRow: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			$$css: !0
		},
		viewCartButtonLTR: {
			marginLeft: "xt3xpxm",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		viewCartButtonRTL: {
			marginRight: "x1t5w0y4",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		viewCartButtonText: {
			color: "x1b2fm6u",
			backgroundColor: "xhx280d",
			":active_backgroundColor": "x4yne3x",
			$$css: !0
		}
	}, _ = {}, f = {
		viewCartButtonBorder: {
			borderTopWidth: "x156rpxl",
			borderInlineEndWidth: "x9ox8f2",
			borderBottomWidth: "x9u5d7x",
			borderInlineStartWidth: "xfcdg90",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xyaa2vf",
			borderInlineEndColor: "x4625nl",
			borderBottomColor: "x1tpmvhq",
			borderInlineStartColor: "xgmazrw",
			":disabled_borderTopWidth": "x1yb04j8",
			":disabled_borderInlineEndWidth": "x1359ahw",
			":disabled_borderBottomWidth": "x1yd0oyr",
			":disabled_borderInlineStartWidth": "x1bb9ieg",
			$$css: !0
		},
		footerContainerStroke: {
			borderTopWidth: "x10b6y01",
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			$$css: !0
		}
	};
	function g(t) {
		var n, a, i, l = t["data-testid"], s = l === void 0 ? "ItemDetailFooter" : l, c = t.enabled, _ = c === void 0 ? !0 : c, f = t.item, g = t.onQuantityChange, y = t.onViewCartClick, C = o("WAFlowsFormContext").useWAFlowsForm(), b = C.isFormValid, v = o("WAFlowsEnvContext.react").useWAFlowsEnv(), S = v.env, R = h(S.platform), L = o("WAFlowsStateProvider.react").useWAFlowsState(), E = L.internal, k = E.isOverlayVisible, I = E.shopping, T = o("WAFlowsShoppingStateUtils").isShoppingIntegratedShoppingMessageFlow(L), D = T || o("WAFlowsShoppingStateUtils").isShoppingOffsiteCheckoutMessageFlow(L), x = m(function() {
			return o("WAFlowsShoppingCartStateUtils").getCartItemsNumber(I);
		}, [I]), $ = m(function() {
			return o("WAFlowsShoppingCartStateUtils").getCartItemQuantity(I, T ? f == null ? void 0 : f.retailer_id : f == null ? void 0 : f.id);
		}, [
			I,
			T,
			f == null ? void 0 : f.id,
			f == null ? void 0 : f.retailer_id
		]), P = I == null || (n = I.shoppingCart) == null ? void 0 : n.items, N = T ? (a = (i = L.external) == null || (i = i.CART) == null || (i = i.external_data) == null || (i = i.meta_catalog) == null ? void 0 : i.products) != null ? a : [] : [], M = d(function(e, t) {
			if (e !== t) {
				var n, r, o, a;
				g({
					id: f.id,
					catalogItemId: f.id,
					quantity: t,
					name: f.name,
					price: f.price,
					salePrice: f.sale_price,
					currency: f.currency,
					maxAvailable: f.max_available,
					retailerId: f.retailer_id,
					media: {
						id: (n = f == null || (r = f.media.images) == null ? void 0 : r[0].id) != null ? n : "",
						url: (o = f == null || (a = f.media) == null || (a = a.images) == null ? void 0 : a[0].request_image_url) != null ? o : ""
					}
				}, e, !0, void 0, void 0, void 0, t === 0);
			}
		}, [f, g]), w = $ > 0, A = x > 0, F = !A && w, O = _ === !0 && b() && (f == null ? void 0 : f.product_availability) === "IN_STOCK";
		return u.jsx(o("WAFlowsReactPortal.react").WAFlowsReactPortal, {
			targetId: "wae-portal-footer",
			children: k === !0 ? u.jsx(u.Fragment, {}) : u.jsxs("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.footerContainer, p.flexRow, R.footerContainerStroke), {
				"data-testid": void 0,
				children: [
					w ? u.jsx(r("WAFlowsQuantityInput.react"), {
						quantity: $,
						maxQuantity: f.max_available,
						onChange: M,
						dataTestId: s + "-quantity-input",
						enabled: _,
						enableV2Style: D
					}) : u.jsx(r("WAFlowsOldButton.react"), {
						label: o("WAFlowsLocalization").getAddToCartFbt(),
						enabled: O,
						onClick: function() {
							return M(1, 0);
						},
						"data-testid": void 0
					}),
					A && u.jsx(r("WAFlowsOldButton.react"), {
						label: o("WAFlowsLocalization").getViewCartWithNumberOfItemsFbt(x, S.locale),
						enabled: _,
						onClick: function() {
							return y(P, N);
						},
						"data-testid": void 0,
						xstyle: [
							!w && p.viewCartButtonText,
							!w && R.viewCartButtonBorder,
							S.isRTL ? p.viewCartButtonRTL : p.viewCartButtonLTR
						]
					}),
					F && u.jsx(r("WAFlowsOldButton.react"), {
						label: o("WAFlowsLocalization").getViewCartFbt(),
						enabled: _,
						onClick: function() {
							return y(P, N);
						},
						"data-testid": void 0,
						xstyle: S.isRTL ? p.viewCartButtonRTL : p.viewCartButtonLTR
					})
				]
			}))
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		return e === "android" ? f : _;
	}
	l.WAFlowsItemDetailFooter = g, l.TYPE = o("WAFlowsShoppingTemplateTypes").ITEM_DETAIL_FOOTER_TYPE;
}), 98);
