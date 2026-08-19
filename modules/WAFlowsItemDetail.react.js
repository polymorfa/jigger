__d("WAFlowsItemDetail.react", [
	"WAFlowsComponentConstants",
	"WAFlowsDropdown.react",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsImageCarousel.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsNoop",
	"WAFlowsPrice.react",
	"WAFlowsRadioButtonsGroup.react",
	"WAFlowsStateProvider.react",
	"WAFlowsText.react",
	"WAFlowsWELJActionCreators",
	"WDSNativeImageCarousel.react",
	"WaFlowsItemDetailDescription.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.memo, m = c.useContext, p = c.useEffect, _ = c.useMemo, f = c.useState, g = {
		productName: {
			lineHeight: "xladpa3",
			$$css: !0
		},
		productDisabled: {
			color: "x18cpw0e",
			$$css: !0
		},
		price: {
			marginTop: "x1mjqqkp",
			marginBottom: "xhbfen4",
			$$css: !0
		},
		variantLabel: {
			marginBottom: "xhbfen4",
			$$css: !0
		},
		headerFullWidthContainer: {
			marginRight: "xh1goz3",
			width: "x1f9pvjq",
			$$css: !0
		},
		headerFullWidthContainerLTR: {
			marginLeft: "xfb5sle",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		headerFullWidthContainerRTL: {
			marginRight: "xh1goz3",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		headerContainerFlowPublished: {
			marginTop: "x1sytv6u",
			$$css: !0
		},
		outOfStockMessageText: {
			fontSize: "x1dbuin5",
			$$css: !0
		},
		itemPriceColor: {
			color: "x14ug900",
			$$css: !0
		},
		description: {
			color: "xhslqc4",
			$$css: !0
		}
	}, h = {
		headerFullWidthContainerLigthBackground: {
			backgroundColor: "x12peec7",
			$$css: !0
		},
		productName: {
			fontSize: "x1hy8jkd",
			fontWeight: "x12ioufu",
			$$css: !0
		}
	}, y = {
		headerContainerWithVariants: {
			borderBottomWidth: "x8mxp1h",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		productName: {
			fontSize: "x1aueamr",
			$$css: !0
		}
	};
	function C(t) {
		var n, a, i, l, s = t.item, c = t.showDescription, d = c === void 0 ? !0 : c, h = t.showDiscountStrikethrough, y = h === void 0 ? !0 : h, C = t.showMedia, b = C === void 0 ? !0 : C, L = t.onVariantSelectedCallback, I = L === void 0 ? r("WAFlowsNoop") : L, T = t.enabled, D = T === void 0 ? !0 : T, x = t["data-testid"], $ = x === void 0 ? "ItemDetail" : x, P = o("WAFlowsEnvContext.react").useWAFlowsEnv(), N = P.env, M = o("WAFlowsStateProvider.react").useWAFlowsMeta(), w = _(function() {
			var e;
			return S(s == null || (e = s.variant_info) == null ? void 0 : e.variant_properties);
		}, [s == null || (n = s.variant_info) == null ? void 0 : n.variant_properties]), A = f(w), F = A[0], O = A[1], B = _(function() {
			return {
				getValue: function(t) {
					return F[t];
				},
				setValue: function(t, n) {
					if (n != null && typeof n == "string" && n !== F[t]) {
						var e;
						O(babelHelpers.extends({}, F, (e = {}, e[t] = n, e)));
					}
				},
				getError: function() {},
				setFocus: function() {},
				setBlur: function() {},
				isFocused: function() {
					return !1;
				},
				isFormValid: function() {
					return !0;
				},
				isLastChild: function() {
					return !0;
				},
				getNextInput: function() {}
			};
		}, [F]), W = _(function() {
			var e;
			return R(s == null || (e = s.variant_info) == null || (e = e.availability) == null ? void 0 : e.listing);
		}, [s == null || (a = s.variant_info) == null || (a = a.availability) == null ? void 0 : a.listing]), q = _(function() {
			var e;
			return s == null || (e = s.variant_info) == null || (e = e.types) == null ? void 0 : e.map(function(e) {
				var t = {
					name: e.name,
					required: !0,
					dataSource: k(e, F, W),
					enabled: D
				};
				return u.jsx("div", babelHelpers.extends({}, {
					0: { className: "x2yie3v" },
					1: { className: "x2yie3v x1cvbfqh" }
				}[!D << 0], { children: e.options.length <= o("WAFlowsComponentConstants").ITEM_DETAIL_VARIANT_SELECTION_THRESHOLD ? u.jsxs(u.Fragment, { children: [u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
					text: e.name,
					fontWeight: "medium",
					xstyle: g.variantLabel
				}), u.jsx(o("WAFlowsRadioButtonsGroup.react").WAFlowsRadioButtonsGroup, babelHelpers.extends({}, t, { enabled: D }))] }) : u.jsx(o("WAFlowsDropdown.react").WAFlowsDropdown, babelHelpers.extends({}, t, {
					label: e.name,
					hideClearButton: !0,
					enabled: D
				})) }), e.name);
			});
		}, [
			s == null || (i = s.variant_info) == null ? void 0 : i.types,
			D,
			W,
			F
		]);
		p(function() {
			var e = E(W, F);
			if (!(e != null && e.product_id)) O(w);
			else if (e.product_id !== s.id) {
				var t;
				I(e.product_id, s.name, (t = e == null ? void 0 : e.retailer_id) != null ? t : "");
			}
		}, [
			s.id,
			F,
			w,
			W,
			I,
			s.name
		]);
		var U = m(o("WAFlowsStateProvider.react").FlowStateDispatchContext);
		p(function() {
			var e;
			U(o("WAFlowsWELJActionCreators").createConfigNavbarAction({ title: (e = s == null ? void 0 : s.name) != null ? e : o("WAFlowsLocalization").getItemListDetailScreenNameFbt().toString() }));
		}, [U, s == null ? void 0 : s.name]);
		var V = o("WAFlowsStateProvider.react").useWAFlowsState().internal.status, H = q != null && q.length > 0, G = _(function() {
			var e = [];
			for (var t of (n = s == null || (r = s.media) == null ? void 0 : r.images) != null ? n : []) {
				var n, r;
				t.request_image_url != null && e.push({ src: t.request_image_url });
			}
			return e;
		}, [s == null || (l = s.media) == null ? void 0 : l.images]), z = b && G.length > 0, j = v(N.platform);
		return s !== void 0 ? u.jsxs("article", {
			"data-testid": void 0,
			children: [u.jsxs("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
				g.headerFullWidthContainer,
				N.theme === "light" && j.headerFullWidthContainerLigthBackground,
				N.isRTL ? g.headerFullWidthContainerRTL : g.headerFullWidthContainerLTR,
				H && j.headerContainerWithVariants,
				!M.isDraft() && g.headerContainerFlowPublished
			]), { children: [
				z && u.jsx("div", {
					"data-testid": void 0,
					children: u.jsx(o("WAFlowsImageCarousel.react").WAFlowsImageCarousel, {
						images: G,
						aspectRatio: "1:1",
						scaleType: "cover",
						dataTestId: "wa-flows-item-detail-image",
						hasRoundBorder: !1,
						altText: o("WAFlowsLocalization").getItemDetailImageAltFbt().toString(),
						trackerType: o("WDSNativeImageCarousel.react").TWDSNativeImageCarouselTrackerType.BAR
					})
				}),
				(s == null ? void 0 : s.product_availability) === "OUT_OF_STOCK" && u.jsx("div", {
					className: "x8945me x167vaf5 x78zum5 x6s0dn4 x3qdkio x1pizb70",
					children: u.jsx(o("WAFlowsText.react").WAFlowsText, {
						type: "body",
						text: o("WAFlowsLocalization").getItemOutOfStockFbt().toString(),
						xstyle: g.outOfStockMessageText
					})
				}),
				u.jsxs("div", {
					className: "x1mcfnh7 x10l3h1t x8945me x167vaf5",
					children: [
						u.jsx(o("WAFlowsText.react").WAFlowsTextBody, {
							xstyle: [
								g.productName,
								j.productName,
								V === o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING && g.productDisabled
							],
							text: s.name,
							"data-testid": void 0
						}),
						u.jsx(r("WAFlowsPrice.react"), {
							currency: s.currency,
							price: s.price,
							salePrice: s.sale_price,
							xstyle: g.price,
							showDiscountStrikethrough: y,
							disabled: V === o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING,
							itemPriceXstyle: g.itemPriceColor
						}),
						d && u.jsx(r("WaFlowsItemDetailDescription.react"), {
							text: s.description,
							complianceInfo: s.compliance_info,
							enabled: V !== o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING,
							xstyle: g.description
						})
					]
				})
			] })), u.jsx("section", {
				className: "x1mcfnh7 x17r0vjz",
				"data-testid": void 0,
				children: u.jsx(o("WAFlowsFormContext").WAFlowsFormContext.Provider, {
					value: B,
					children: q
				})
			})]
		}) : u.jsx(u.Fragment, {});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = d(C);
	function v(e) {
		return e === "android" ? y : h;
	}
	function S(e) {
		var t;
		return (t = e == null ? void 0 : e.reduce(function(e, t) {
			return t.name != null && t.value != null && (e["" + t.name] = "" + t.value), e;
		}, {})) != null ? t : {};
	}
	function R(e) {
		var t = {};
		return e == null || e.forEach(function(e) {
			var n;
			return t[L(e.options)] = {
				is_available: e.is_available,
				product_id: e.product_id,
				retailer_id: (n = e == null ? void 0 : e.retailer_id) != null ? n : ""
			};
		}), t;
	}
	function L(e) {
		return e.map(function(e) {
			return e.name + "_" + e.value;
		}).join("|");
	}
	function E(e, t) {
		var n = L(Object.entries(t).map(function(e) {
			return {
				name: e[0],
				value: e[1]
			};
		}));
		return e[n];
	}
	function k(e, t, n) {
		return e.options.map(function(r) {
			var a, i = babelHelpers.extends({}, t, (a = {}, a[e.name] = r.value, a)), l = E(n, i);
			return {
				id: r.value,
				description: l != null && l.is_available ? void 0 : o("WAFlowsLocalization").getOutOfStockFbt().toString(),
				title: r.value,
				enabled: l != null
			};
		});
	}
	var I = b;
	l.default = I;
}), 98);
