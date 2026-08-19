__d("WAFlowsItemList.react", [
	"WAFlowsBaseList.react",
	"WAFlowsComponentConstants",
	"WAFlowsEnvContext.react",
	"WAFlowsImage.react",
	"WAFlowsLocalization",
	"WAFlowsPrice.react",
	"WAFlowsScreenUtils",
	"WAFlowsScrollable.react",
	"WAFlowsStateProvider.react",
	"WAFlowsText.react",
	"WAFlowsTypes",
	"WAFlowsUsePressedState",
	"WAFlowsWELJActionCreators",
	"getStyleValue",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useRef, f = c.useState, g = "10px 30px", h = "x19ml7pd-B", y = "x626qny-B", C = {
		itemName: {
			color: "x14ug900",
			$$css: !0
		},
		itemNameDisabled: {
			color: "x18cpw0e",
			$$css: !0
		},
		container: {
			height: "x5yr21d",
			$$css: !0
		},
		content: {
			display: "x78zum5",
			justifyContent: "x1nhvcw1",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		scrollableContainer: {
			marginTop: "x1sytv6u",
			marginLeft: "xfb5sle",
			marginInlineStart: null,
			marginInlineEnd: null,
			width: "xh8yej3",
			paddingTop: "x12t3zde",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x8945me",
			$$css: !0
		},
		image: {
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
		imageDisabled: {
			opacity: "x3h2i22",
			$$css: !0
		},
		itemPriceColor: {
			color: "xhslqc4",
			fontSize: "x1dbuin5",
			$$css: !0
		}
	}, b = {
		image: {
			borderStartStartRadius: "x1obq294",
			borderStartEndRadius: "x5a5i1n",
			borderEndEndRadius: "xde0f50",
			borderEndStartRadius: "x15x8krk",
			$$css: !0
		},
		blockContainerOption: {
			"::after_width": "x1ydyt0i",
			$$css: !0
		},
		blockContainer: {
			paddingTop: "x12t3zde",
			paddingBottom: "x2yie3v",
			$$css: !0
		},
		itemPriceMainContainer: {
			paddingTop: "x1nn3v0j",
			$$css: !0
		},
		itemName: {
			fontSize: "x187uvkv",
			fontWeight: "x1xq4eza",
			$$css: !0
		}
	}, v = {
		image: {
			borderStartStartRadius: "xjwep3j",
			borderStartEndRadius: "x1t39747",
			borderEndEndRadius: "x1wcsgtt",
			borderEndStartRadius: "x1pczhz8",
			$$css: !0
		},
		blockContainer: {
			paddingTop: "x1b58sdr",
			paddingBottom: "xmnamis",
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
	function S(t) {
		var n, a, i, l = t.baseListRef, s = t.enabled, c = t.hideMedia, g = t.item, h = t.onItemClick, y = t.showDiscountStrikethrough, b = f(0), v = b[0], S = b[1], R = o("WAFlowsStateProvider.react").useWAFlowsState(), E = R.internal, k = E.screenHistory, I = E.scrollConfig, T = o("WAFlowsStateProvider.react").useWAFlowsMeta(), D = _(null), x = o("WAFlowsEnvContext.react").useWAFlowsEnv(), $ = x.env, P = L($.platform), N = m(o("WAFlowsStateProvider.react").FlowStateDispatchContext), M = (n = o("WAFlowsStateProvider.react").useWAFlowsState().internal.shopping) == null ? void 0 : n.categoryName;
		p(function() {
			var e = k.length >= 2 && T.getScreenLayoutType(k[k.length - 2]);
			e === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CATEGORY_LIST && N(o("WAFlowsWELJActionCreators").createConfigNavbarAction({ title: M != null ? M : o("WAFlowsLocalization").getItemListDefaultScreenNameFbt().toString() }));
		}, [
			N,
			T,
			k,
			M
		]), p(function() {
			S(function(e) {
				return e || o("WAFlowsScreenUtils").getMilliseconds(o("getStyleValue").getStyleValue("--waf-wds-animation-duration", l.current));
			});
		}, [l]);
		var w = d(function(e) {
			var t, n;
			e.stopPropagation(), e.preventDefault(), s && h((t = g == null ? void 0 : g.id) != null ? t : "", (n = g == null ? void 0 : g.name) != null ? n : "", g.retailer_id);
		}, [
			g == null ? void 0 : g.id,
			g == null ? void 0 : g.name,
			g.retailer_id,
			h,
			s
		]), A = { width: ($.platform === "ios" ? o("WAFlowsComponentConstants").ITEM_LIST_IMAGE_WIDTH_IOS : o("WAFlowsComponentConstants").ITEM_LIST_IMAGE_WIDTH_ANDROID) + "px" }, F = o("WAFlowsUsePressedState").usePressedState($, v, D, I == null ? void 0 : I.isScrolling);
		return u.jsxs("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props(C.content, P.optionContainerButton, F ? P.optionContainerButtonPressed : P.optionContainerButtonNotPressed), {
			role: "button",
			onClick: w,
			"data-testid": void 0,
			tabIndex: 0,
			ref: D,
			children: [!c && u.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1sv007z" },
				1: { className: "x11pwdeo" }
			}[!!$.isRTL << 0], { children: u.jsx("div", {
				style: A,
				children: u.jsx(o("WAFlowsImage.react").WAFlowsImage, {
					src: (a = g == null || (i = g.media) == null || (i = i.images) == null || (i = i[0]) == null ? void 0 : i.request_image_url) != null ? a : "",
					altText: o("WAFlowsLocalization").getItemListImageAltFbt(),
					height: $.platform === "ios" ? o("WAFlowsComponentConstants").ITEM_LIST_IMAGE_HEIGHT_IOS : o("WAFlowsComponentConstants").ITEM_LIST_IMAGE_HEIGHT_ANDROID,
					width: $.platform === "ios" ? o("WAFlowsComponentConstants").ITEM_LIST_IMAGE_WIDTH_IOS : o("WAFlowsComponentConstants").ITEM_LIST_IMAGE_WIDTH_ANDROID,
					xstyle: [
						C.image,
						P.image,
						!s && C.imageDisabled
					],
					scaleType: "cover"
				})
			}) })), u.jsxs("div", { children: [u.jsx(o("WAFlowsText.react").WAFlowsTextBody, {
				text: g.name,
				xstyle: [P.itemName, s ? C.itemName : C.itemNameDisabled]
			}), u.jsx(r("WAFlowsPrice.react"), {
				price: g.price,
				currency: g.currency,
				salePrice: g.sale_price,
				showDiscountStrikethrough: y,
				disabled: !s,
				xstyle: P.itemPriceMainContainer,
				itemPriceXstyle: C.itemPriceColor,
				textType: "body-small"
			})] })]
		}));
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(t) {
		var n = t.dataTestId, a = n === void 0 ? "WAFlowsItemListLayout" : n, i = t.hideMedia, l = i === void 0 ? !1 : i, s = t.items, c = t.onItemClick, d = t.onLoadMoreItems, m = t.showDiscountStrikethrough, p = m === void 0 ? !0 : m, f = t.xstyle, g = o("WAFlowsEnvContext.react").useWAFlowsEnv(), h = g.env, y = _(null), b = L(h.platform), v = o("WAFlowsStateProvider.react").useWAFlowsState(), R = v.internal.status, E = R !== o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f, C.container), {
			"data-testid": void 0,
			children: u.jsx(r("WAFlowsScrollable.react"), {
				nativeDraggingControl: !0,
				nativeDraggingOnOverscroll: !0,
				onScrollBottom: d,
				xstyle: C.scrollableContainer,
				children: u.jsx(r("WAFlowsBaseList.react"), {
					dataSource: s,
					dataTestId: a + "-item-base-list",
					listItemXstyle: [b.blockContainerOption, b.blockContainer],
					baseListRef: y,
					enabled: E,
					renderItem: function(t) {
						return u.jsx(S, {
							item: t,
							hideMedia: l,
							onItemClick: c,
							baseListRef: y,
							enabled: E
						});
					}
				})
			})
		}));
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		return e === "android" ? v : b;
	}
	l.default = R;
}), 98);
