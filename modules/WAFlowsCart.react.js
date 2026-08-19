__d("WAFlowsCart.react", [
	"WAFlowsActionHandlerTypes",
	"WAFlowsCartItemList.react",
	"WAFlowsCartUtils.react",
	"WAFlowsComponentConstants",
	"WAFlowsCoupons.react",
	"WAFlowsEmbeddedLink.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsFooter.react",
	"WAFlowsIcon.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsMMDisclosure.react",
	"WAFlowsOverlay.react",
	"WAFlowsShoppingCustomActionCallbacks",
	"WAFlowsShoppingStateUtils",
	"WAFlowsSnackbarUtils",
	"WAFlowsStateProvider.react",
	"WAFlowsText.react",
	"WAFlowsWELJActionCreators",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.memo, m = c.useContext, p = c.useEffect, _ = c.useMemo, f = c.useState, g = {
		emptyCartLabel: {
			marginTop: "x1fgj74o",
			marginBottom: "xn41z2f",
			$$css: !0
		},
		itemsCountAndAddMore: {
			display: "x78zum5",
			justifyContent: "x1qughib",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		cartTextDisabled: {
			color: "x18cpw0e",
			$$css: !0
		},
		ctaButtonWithIcon: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			columnGap: "x4prdry",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		ctaIcon: {
			backgroundColor: "xep993w",
			$$css: !0
		},
		ctaIconDisabled: {
			backgroundColor: "x15ju934",
			$$css: !0
		},
		shippingAndTaxes: {
			color: "xhslqc4",
			$$css: !0
		},
		discountSavings: {
			marginTop: "x1tbvfm1",
			marginBottom: "xhcrhct",
			lineHeight: "x8r4c90",
			$$css: !0
		},
		discountSavingsEnabled: {
			color: "x1du590y",
			$$css: !0
		}
	}, h = {
		ctaIcon: {
			transform: "x1xignkv",
			transformOrigin: "x1g0ag68",
			$$css: !0
		},
		listTitleLabel: {
			fontSize: "x1dbuin5",
			paddingLeft: "x1uhho1l",
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			paddingTop: "x15nm23f",
			paddingBottom: "x740rwh",
			minHeight: "xrg34sf",
			$$css: !0
		},
		addMoreLink: {
			minHeight: "xrg34sf",
			paddingLeft: "x1uhho1l",
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			paddingTop: "x15nm23f",
			paddingBottom: "x740rwh",
			fontSize: "x1dbuin5",
			$$css: !0
		},
		outOfStockLabel: {
			fontSize: "xrv4cvt",
			paddingLeft: "x1uhho1l",
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			paddingTop: "x15nm23f",
			paddingBottom: "x740rwh",
			minHeight: "xrg34sf",
			$$css: !0
		},
		couponblockContainer: {
			backgroundColor: "x16w0wmm",
			marginTop: "xj1urod",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		},
		shippingAndTaxes: {
			fontSize: "x1xto104",
			lineHeight: "xdpg8n2",
			marginTop: "x1tbvfm1",
			marginBottom: "x1gr9t9r",
			$$css: !0
		},
		discountSavings: {
			fontSize: "xkpwil5",
			$$css: !0
		}
	}, y = {
		cartItemsListDivider: {
			borderBottomWidth: "x8mxp1h",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			position: "x1n2onr6",
			left: "x13oq2vl",
			insetInlineStart: null,
			insetInlineEnd: null,
			width: "x1f9pvjq",
			$$css: !0
		},
		itemsCountAndAddMore: {
			paddingTop: "xexx8yu",
			paddingBottom: "x2yie3v",
			$$css: !0
		},
		listTitleLabel: {
			fontSize: "xrv4cvt",
			paddingLeft: "x1uhho1l",
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			paddingTop: "x1iul6r4",
			paddingBottom: "xes99ow",
			$$css: !0
		},
		addMoreLink: {
			fontSize: "x1s8wshw",
			paddingLeft: "x9dzeaa",
			paddingRight: "x52dz5p",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			paddingTop: "x18khy8n",
			paddingBottom: "xfigtdt",
			minHeight: "x1rqwxy8",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			borderStartStartRadius: "xyuqf4z",
			borderStartEndRadius: "xczkxey",
			borderEndEndRadius: "xsgf5lw",
			borderEndStartRadius: "x1x06yp2",
			$$css: !0
		},
		outOfStockLabel: {
			fontSize: "xrv4cvt",
			paddingTop: "x1mcfnh7",
			paddingBottom: "x2yie3v",
			$$css: !0
		},
		shippingAndTaxes: {
			fontSize: "xboafo0",
			lineHeight: "xl2ypbo",
			marginTop: "x1tbvfm1",
			marginBottom: "x1gr9t9r",
			$$css: !0
		},
		discountSavings: {
			fontSize: "x1xto104",
			$$css: !0
		}
	};
	function C(t) {
		var n = t.enabled, a = t.itemsCount, i = t.onAddMoreClick, l = o("WAFlowsEnvContext.react").useWAFlowsEnv(), s = l.env, c = R(s.platform);
		return u.jsxs("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props([c.itemsCountAndAddMore, g.itemsCountAndAddMore]), { children: [u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
			text: o("WAFlowsLocalization").getCartItemsCountFbt(a, s.locale),
			fontWeight: "medium",
			xstyle: [c.listTitleLabel, !n && g.cartTextDisabled]
		}), i && u.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
			text: o("WAFlowsLocalization").getAddMoreFbt(),
			xstyle: [c.addMoreLink, !n && g.cartTextDisabled],
			onClick: function() {
				n && i();
			},
			truncationEnabled: !1
		})] }));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.bannerText;
		return u.jsx("section", {
			className: "x15s5u4p xsaxbkt x8mxp1h x1q0q8m5 x120ee7l x1n2onr6 x13oq2vl x1f9pvjq",
			children: u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
				text: t,
				textAlign: "center"
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var n, a, i, l, s, c, d, h, y, v, S, L, E, k, I, T, D, x, $, P, N, M, w = t.inCartItems, A = t.items, F = A === void 0 ? [] : A, O = t.ctaLabel, B = t.bannerText, W = t.onCtaClick, q = t.onQuantityChange, U = t.onAddMoreClick, V = t.onCouponClick, H = t.onItemClick, G = t.screenID, z = t.coupons, j = t.enabled, K = j === void 0 ? !0 : j, Q = t["data-testid"], X = Q === void 0 ? "CART" : Q, Y = o("WAFlowsEnvContext.react").useWAFlowsEnv(), J = Y.env, Z = o("WAFlowsStateProvider.react").useWAFlowsState(), ee = o("WAFlowsStateProvider.react").useWAFlowsMeta(), te = Z.internal.status, ne = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), re = m(o("WAFlowsStateProvider.react").FlowStateDispatchContext), oe = o("WAFlowsShoppingStateUtils").isShoppingIntegratedShoppingMessageFlow(Z), ae = o("WAFlowsShoppingStateUtils").isShoppingOffsiteCheckoutMessageFlow(Z), ie = Z.internal.shopping, le = oe && (ie == null || (n = ie.integratedShopping) == null ? void 0 : n.couponEnabled) === !0, se = R(J.platform), ue = f((a = (i = Z.internal.shopping) == null || (i = i.offsiteCheckout) == null ? void 0 : i.showDisclosure) != null ? a : !1), ce = ue[0], de = ue[1], me = f(null), pe = me[0], _e = me[1];
		p(function() {
			if (ae) {
				var e, t, n;
				de((e = (t = Z.internal.shopping) == null || (t = t.offsiteCheckout) == null ? void 0 : t.showDisclosure) != null ? e : !1), _e((n = Z.internal.shopping) == null || (n = n.offsiteCheckout) == null ? void 0 : n.disclosureState);
			}
		}, [
			ae,
			(l = Z.internal.shopping) == null || (l = l.offsiteCheckout) == null ? void 0 : l.disclosureState,
			(s = Z.internal.shopping) == null || (s = s.offsiteCheckout) == null ? void 0 : s.showDisclosure
		]);
		var fe = o("WAFlowsShoppingCustomActionCallbacks").useIntegratedShoppingCartClickCallback(G), ge = o("WAFlowsShoppingCustomActionCallbacks").useMarketingMessageCheckoutAsyncCallback(ne, Z, ee, J, G, re), he = ge[0], ye = ge[1], Ce = ge[2], be = ae ? function() {
			he(o("WAFlowsShoppingCustomActionCallbacks").FLOWJOffsiteCheckoutClickActionType.CHECKOUT);
		} : oe ? function() {
			fe(w, F, !0, o("WAFlowsCartUtils.react").cartCheckoutCallback);
		} : W, ve = function() {
			he(o("WAFlowsShoppingCustomActionCallbacks").FLOWJOffsiteCheckoutClickActionType.CONTINUE);
		}, Se = function() {
			re(o("WAFlowsWELJActionCreators").createShoppingMMDisclosureShowAction(!1)), de(!1), he(o("WAFlowsShoppingCustomActionCallbacks").FLOWJOffsiteCheckoutClickActionType.GO_BACK);
		};
		p(function() {
			Ce != null && o("WAFlowsSnackbarUtils").showSnackbar({ text: o("WAFlowsLocalization").getFallbackErrorMessage() }, ne.invoke);
		}, [Ce, ne.invoke]), p(function() {
			re(o("WAFlowsWELJActionCreators").createConfigNavbarAction({
				title: ce ? o("WAFlowsCartUtils.react").MM_DISCLOSURE_TITLE : void 0,
				backButtonAction: ce ? o("WAFlowsActionHandlerTypes").NavBarBackButtonAction.CLOSE_OVERLAY : void 0
			}));
		}, [re, ce]);
		var Re = oe ? ie == null || (c = ie.shoppingCart) == null || (c = c.amount) == null ? void 0 : c.totalAmount : null, Le = _(function() {
			var e = o("WAFlowsCartUtils.react").getInStockItems(w, F, oe), t = o("WAFlowsCartUtils.react").getOutOfStockItems(w, F, oe);
			if (e.length === 0) return {
				inStockCartItems: e,
				outOfStockCartItems: t,
				totalPrice: 0
			};
			var n = o("WAFlowsCartUtils.react").getCartItemsCount(w, F, oe), r = Re != null ? Re : o("WAFlowsCartUtils.react").getSubtotalValue(e), a = e[0].currency;
			return {
				inStockCartItems: e,
				outOfStockCartItems: t,
				itemsCount: n,
				totalPrice: r,
				currency: a
			};
		}, [
			w,
			F,
			oe,
			Re
		]), Ee = Le.currency, ke = Le.inStockCartItems, Ie = Le.itemsCount, Te = Le.outOfStockCartItems, De = Le.totalPrice, xe = K && te !== o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING && !ye, $e = {
			enabled: xe,
			onItemClick: H,
			onQuantityChange: q
		}, Pe = u.jsx(r("WAFlowsIcon.react"), {
			id: "waf_external_link",
			altText: o("WAFlowsLocalization").getExternalLinkIconAltFbt().toString(),
			xstyle: [
				g.ctaIcon,
				se.ctaIcon,
				!xe && g.ctaIconDisabled
			]
		}), Ne = ae || oe ? u.jsx(o("WAFlowsText.react").WAFlowsTextBodySmall, {
			text: o("WAFlowsLocalization").getShippingAndTaxesFbt().toString(),
			xstyle: [g.shippingAndTaxes, se.shippingAndTaxes],
			fontWeight: "normal",
			"data-testid": void 0
		}) : null, Me = ie == null || (d = ie.shoppingCart) == null || (d = d.coupon) == null || (d = d.discount) == null ? void 0 : d.price, we = ke.length > 0, Ae = oe && Me !== void 0 && we ? u.jsxs("div", {
			className: "x78zum5 x1qughib",
			children: [u.jsx(o("WAFlowsText.react").WAFlowsTextBodySmall, {
				text: o("WAFlowsLocalization").getDiscountSavingsFbt().toString(),
				xstyle: [
					g.discountSavings,
					xe ? g.discountSavingsEnabled : null,
					se.discountSavings
				],
				fontWeight: "normal",
				"data-testid": void 0
			}), u.jsx(o("WAFlowsText.react").WAFlowsTextBodySmall, {
				text: o("WAFlowsCartUtils.react").getFormattedPrice(Me, Ee != null ? Ee : o("WAFlowsComponentConstants").CART_DEFAULT_CURRENCY, J.locale),
				xstyle: [g.discountSavings, se.discountSavings],
				fontWeight: "normal",
				"data-testid": void 0
			})]
		}) : null, Fe = z !== void 0 ? (z || []).map(function(e) {
			return {
				id: e.id,
				title: e.code,
				description: e.description
			};
		}) : [], Oe = O != null ? O : oe ? o("WAFlowsLocalization").getContinueToCheckoutFbt().toString() : o("WAFlowsLocalization").getCheckoutFbt().toString();
		return u.jsxs("article", {
			"data-testid": void 0,
			children: [
				B != null && u.jsx(b, { bannerText: B }),
				u.jsx(C, {
					enabled: xe,
					itemsCount: Ie != null ? Ie : 0,
					onAddMoreClick: U
				}),
				we ? u.jsxs(u.Fragment, { children: [u.jsx(r("WAFlowsCartItemList.react"), babelHelpers.extends({
					"data-testid": void 0,
					items: ke
				}, $e, {
					catalogItems: F,
					onCouponClick: V
				})), u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(se.cartItemsListDivider)))] }) : u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
					xstyle: g.emptyCartLabel,
					textAlign: "center",
					textColor: "secondary",
					text: o("WAFlowsLocalization").getCartEmptyFbt()
				}),
				Te.length > 0 ? u.jsxs("section", { children: [
					u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
						fontWeight: "medium",
						text: o("WAFlowsLocalization").getOutOfStockFbt(),
						xstyle: se.outOfStockLabel
					}),
					u.jsx(r("WAFlowsCartItemList.react"), babelHelpers.extends({
						"data-testid": void 0,
						items: Te,
						isOutOfStock: !0
					}, $e, {
						catalogItems: F,
						onCouponClick: V
					})),
					u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(se.cartItemsListDivider)))
				] }) : null,
				le && we && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(J.platform === "ios" && se.couponblockContainer), { children: u.jsx(o("WAFlowsCoupons.react").WAFlowsCoupons, {
					label: o("WAFlowsLocalization").getShoppingCouponPickerLabelFbt().toString(),
					dataSource: Fe,
					onSelect: V,
					screenID: G,
					inCartItems: w,
					catalogItems: F,
					enabled: xe
				}) })),
				Z.internal.isOverlayVisible !== !0 && u.jsx(o("WAFlowsFooter.react").WAFlowsFooter, {
					leftCaption: we ? ae || oe ? o("WAFlowsLocalization").getEstimatedTotalFbt().toString() : o("WAFlowsLocalization").getTotalFbt().toString() : "",
					rightCaption: we ? o("WAFlowsCartUtils.react").getFormattedPrice(De, Ee != null ? Ee : o("WAFlowsComponentConstants").CART_DEFAULT_CURRENCY, J.locale) : "",
					icon: ae ? Pe : void 0,
					xstyleButton: ae ? g.ctaButtonWithIcon : void 0,
					label: Oe,
					onClick: be,
					enabled: xe && we,
					boldCaptions: !0,
					shoppingCaptionBottomContainer: Ne,
					shoppingCaptionTopContainer: Ae,
					dataTestId: X + "-cta"
				}),
				ae && u.jsx(r("WAFlowsOverlay.react"), {
					isPanelVisible: ce,
					onVisibilityChange: de,
					children: u.jsx(r("WAFlowsMMDisclosure.react"), {
						titleText: (h = pe == null || (y = pe.disclosure_data) == null ? void 0 : y.title_text) != null ? h : "",
						dataRowOneText: (v = pe == null || (S = pe.disclosure_data) == null ? void 0 : S.data_row_one_text) != null ? v : "",
						dataRowTwoText: (L = pe == null || (E = pe.disclosure_data) == null ? void 0 : E.data_row_two_text) != null ? L : "",
						dataRowThreeText: (k = pe == null || (I = pe.disclosure_data) == null ? void 0 : I.data_row_three_text) != null ? k : "",
						learnMoreUrl: (T = pe == null || (D = pe.disclosure_data) == null ? void 0 : D.learn_more_url) != null ? T : "",
						disclosureDescription: (x = pe == null || ($ = pe.disclosure_data) == null ? void 0 : $.disclosure_description) != null ? x : "",
						region: (P = pe == null ? void 0 : pe.region) != null ? P : "",
						disclosureDescriptionTextIcon: (N = pe == null || (M = pe.disclosure_data) == null ? void 0 : M.disclosure_description_text_icon) != null ? N : "",
						onBackClick: Se,
						onContinueClick: ve
					})
				})
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	var S = d(v);
	function R(e) {
		return e === "android" ? y : h;
	}
	var L = S;
	l.default = L;
}), 98);
