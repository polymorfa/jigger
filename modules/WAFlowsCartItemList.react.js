__d("WAFlowsCartItemList.react", [
	"WAFlowsBaseList.react",
	"WAFlowsComponentConstants",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsImage.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsPrice.react",
	"WAFlowsQuantityInput.react",
	"WAFlowsScreenUtils",
	"WAFlowsShoppingStateUtils",
	"WAFlowsSnackbarUtils",
	"WAFlowsStateProvider.react",
	"WAFlowsUsePressedState",
	"getStyleValue",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = "10px 30px", g = "x19ml7pd-B", h = "x626qny-B", y = {
		cartItemListRowRoot: {
			display: "x78zum5",
			justifyContent: "x1qughib",
			alignItems: "x7a106z",
			columnGap: "x1izhsip",
			$$css: !0
		},
		cartItemName: {
			color: "x14ug900",
			$$css: !0
		},
		cartItemImageContainer: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		cartItemImage: {
			borderStartStartRadius: "x1obq294",
			borderStartEndRadius: "x5a5i1n",
			borderEndEndRadius: "xde0f50",
			borderEndStartRadius: "x15x8krk",
			borderTopWidth: "x10b6y01",
			borderInlineEndWidth: "x1vs7ofh",
			borderBottomWidth: "x8mxp1h",
			borderInlineStartWidth: "xnh1d43",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		cartItemImageDisabled: {
			opacity: "x3h2i22",
			$$css: !0
		},
		itemLabel: {
			color: "xhslqc4",
			fontSize: "x1dbuin5",
			$$css: !0
		},
		itemLabelSeparator: {
			paddingRight: "x1d60ukw",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		itemLabelSeparatorRTL: {
			paddingLeft: "xf00w7v",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		quantityInput: {
			marginTop: "x1mjqqkp",
			$$css: !0
		},
		outOfStockContainer: {
			opacity: "xti2d7y",
			$$css: !0
		},
		outOfStockText: {
			color: "xhslqc4",
			$$css: !0
		},
		cartTextDisabled: {
			color: "x18cpw0e",
			$$css: !0
		},
		invisibleButton: {
			backgroundColor: "xjbqb8w",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		}
	}, C = {
		removeIconEnabled: {
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		removeIconDisabled: {
			backgroundColor: "x3qdkio",
			$$css: !0
		},
		blockContainerOption: {
			"::after_width": "x1itn6jy",
			$$css: !0
		},
		blockContainer: {
			paddingTop: "x12t3zde",
			paddingBottom: "x2yie3v",
			$$css: !0
		}
	}, b = {
		cartItemListRowRoot: {
			paddingBottom: "x2yie3v",
			$$css: !0
		},
		removeIconDisabled: {
			backgroundColor: "x3qdkio",
			$$css: !0
		},
		blockContainer: {
			paddingTop: "x1b58sdr",
			$$css: !0
		},
		optionContainerButton: {
			position: "x1n2onr6",
			zIndex: "x1ja2u2z",
			"::after_opacity": "xmf22ne",
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_backgroundColor": "xvn5ife",
			"::after_left": "xa667ol",
			"::after_right": "x1e9ms35",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_top": "x1m1drc7",
			"::after_bottom": "x1xrz1ek",
			"::after_zIndex": "xi4xitw",
			"::after_animationTimingFunction": "x1a986gr",
			"::after_animationFillMode": "x17pmmvk",
			"::after_animationDuration": "xml25ke",
			"::after_willChange": "x12j4teu",
			"::after_pointerEvents": "x2q1x1w",
			$$css: !0
		},
		optionContainerButtonPressed: {
			"::after_animationName": "xa0psnz",
			$$css: !0
		},
		optionContainerButtonNotPressed: {
			"::after_animationName": "xkdns79",
			$$css: !0
		}
	};
	function v(e) {
		var t = e.catalogItems, n = e["data-testid"], a = e.enabled, i = a === void 0 ? !0 : a, l = e.isOutOfStock, s = e.items, c = e.onCouponClick, d = e.onItemClick, m = e.onQuantityChange, _ = o("WAFlowsEnvContext.react").useWAFlowsEnv(), f = _.env, g = L(f.platform), h = p(null);
		return u.jsx(r("WAFlowsBaseList.react"), {
			dataSource: s,
			dataTestId: n,
			listItemXstyle: [g.blockContainerOption, g.blockContainer],
			baseListRef: h,
			enabled: i,
			renderItem: function(n, r) {
				return u.jsx(S, {
					item: n,
					idx: r,
					onItemClick: d,
					onQuantityChange: m,
					"data-testid": void 0,
					isOutOfStock: l != null ? l : !1,
					enabled: i,
					baseListRef: h,
					inStockItems: s,
					catalogItems: t,
					onCouponClick: c
				});
			}
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(t) {
		var n, a, i, l = t.baseListRef, s = t.catalogItems, c = t["data-testid"], f = t.enabled, g = t.idx, h = t.inStockItems, C = t.isOutOfStock, b = t.item, v = t.onCouponClick, S = t.onItemClick, E = t.onQuantityChange, k = o("WAFlowsEnvContext.react").useWAFlowsEnv(), I = k.env, T = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), D = L(I.platform), x = _(0), $ = x[0], P = x[1], N = o("WAFlowsStateProvider.react").useWAFlowsState(), M = N.internal.scrollConfig, w = o("WAFlowsShoppingStateUtils").isShoppingIntegratedShoppingMessageFlow(N) || o("WAFlowsShoppingStateUtils").isShoppingOffsiteCheckoutMessageFlow(N), A = p(null), F = c != null ? c + "-quantity-" + g : void 0, O = { width: o("WAFlowsComponentConstants").CART_ITEM_LIST_IMAGE_WIDTH + "px" };
		m(function() {
			P(function(e) {
				return e || o("WAFlowsScreenUtils").getMilliseconds(o("getStyleValue").getStyleValue("--waf-wds-animation-duration", l.current));
			});
		}, [l]);
		var B = d(function(e, t, n, r) {
			var a = e.quantity;
			E == null || E(e, t, !1, h, n, r);
			var i = e;
			!C && t <= 0 && a != null && a > t && o("WAFlowsSnackbarUtils").showSnackbar({
				text: o("WAFlowsLocalization").getCartItemRemovedFbt(),
				action: {
					text: o("WAFlowsLocalization").getCartItemOrOfferCodeRemoveUndoFbt(),
					callback: function() {
						E == null || E(i, a, !1, h, n, r);
					}
				}
			}, T.invoke);
		}, [
			E,
			h,
			C,
			T.invoke
		]), W = d(function(e) {
			e.stopPropagation(), e.preventDefault(), f && (S == null || S(b.catalogItemId, b.name, b.retailerId));
		}, [
			b.catalogItemId,
			b.name,
			S,
			b.retailerId,
			f
		]), q = o("WAFlowsUsePressedState").usePressedState(I, $, A, M == null ? void 0 : M.isScrolling);
		return u.jsxs("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
			y.cartItemListRowRoot,
			D.cartItemListRowRoot,
			D.optionContainerButton,
			q ? D.optionContainerButtonPressed : D.optionContainerButtonNotPressed
		]), {
			ref: A,
			children: [
				u.jsx("button", {
					onClick: W,
					className: e([
						y.cartItemImageContainer,
						y.invisibleButton,
						C && y.outOfStockContainer
					]),
					style: O,
					children: u.jsx(o("WAFlowsImage.react").WAFlowsImage, {
						src: b == null || (n = b.media) == null ? void 0 : n.url,
						altText: o("WAFlowsLocalization").getCartImageAltFbt(),
						height: o("WAFlowsComponentConstants").CART_ITEM_LIST_IMAGE_HEIGHT,
						width: o("WAFlowsComponentConstants").CART_ITEM_LIST_IMAGE_WIDTH,
						xstyle: [y.cartItemImage, !f && y.cartItemImageDisabled],
						scaleType: "cover"
					})
				}),
				u.jsxs("div", babelHelpers.extends({}, {
					0: { className: "x1iyjqo2 xdpxx8g" },
					1: { className: "x1iyjqo2 xdpxx8g xti2d7y" }
				}[!!C << 0], { children: [u.jsxs("button", {
					onClick: W,
					className: "xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak",
					children: [u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
						text: b.name,
						fontWeight: I.platform === "android" ? "normal" : "semibold",
						xstyle: [
							y.cartItemName,
							f && C && y.outOfStockText,
							!f && y.cartTextDisabled
						]
					}), u.jsx(R, {
						labels: (a = b.labels) != null ? a : [],
						enabled: f
					})]
				}), C === !1 && u.jsx(r("WAFlowsQuantityInput.react"), {
					quantity: b.quantity,
					maxQuantity: b.maxAvailable,
					xstyle: y.quantityInput,
					displaySmallIcons: !0,
					onChange: function(t) {
						return B(b, t, v, s);
					},
					enabled: f,
					dataTestId: F,
					enableV2Style: w
				})] })),
				u.jsx("button", {
					onClick: W,
					className: "xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak x2lah0s",
					children: u.jsx(r("WAFlowsPrice.react"), {
						price: (i = b == null ? void 0 : b.price) != null ? i : 0,
						currency: b.currency,
						salePrice: b.salePrice,
						disabled: !f || C,
						layout: "stacked",
						itemPriceXstyle: C ? y.outOfStockText : void 0
					})
				})
			]
		}));
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.enabled, n = e.labels, r = o("WAFlowsEnvContext.react").useWAFlowsEnv(), a = r.env;
		return u.jsx("section", { children: n.map(function(e, n) {
			return u.jsxs("div", {
				className: "x78zum5 x1nhvcw1 x1a02dak",
				children: [
					u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
						xstyle: [y.itemLabel, !t && y.cartTextDisabled],
						text: e.name
					}),
					u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
						xstyle: [
							y.itemLabel,
							a.isRTL ? y.itemLabelSeparatorRTL : y.itemLabelSeparator,
							!t && y.cartTextDisabled
						],
						text: ":"
					}),
					u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
						xstyle: [y.itemLabel, !t && y.cartTextDisabled],
						text: e.value
					})
				]
			}, n);
		}) });
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		return e === "android" ? b : C;
	}
	l.default = v;
}), 98);
