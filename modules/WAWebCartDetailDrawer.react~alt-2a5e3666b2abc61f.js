__d("WAWebCartDetailDrawer.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WATimeUtils",
	"WAWebBizClearCartAction",
	"WAWebBizMatchCartItemsToProductsAction",
	"WAWebBizPullCartUpdateAction",
	"WAWebBizSubmitOrderAction",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebButton.react",
	"WAWebCartCollection",
	"WAWebCartDetailDrawerFooter.react",
	"WAWebCartLogEvents",
	"WAWebCartProductList.react",
	"WAWebChatThreadLogging",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerManagerContext",
	"WAWebFlatListController",
	"WAWebFlatListLoadingSpinnerItem.react",
	"WAWebFlex.react",
	"WAWebOrderGatingUtils",
	"WAWebOrderLogEvents",
	"WAWebProductCatalogContext",
	"WAWebPromiseQueue",
	"WAWebShoppingCartEmptyIcon.react",
	"WAWebShowGenericErrorToastAction",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebThemeContext",
	"WAWebUtilsLogQplEvents",
	"WDSPaddings.stylex",
	"react",
	"useLazyRef",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m = d || (d = o("react")), p = d, _ = p.useContext, f = p.useEffect, g = p.useMemo, h = p.useRef, y = p.useState, C = {
		marginBottom15: {
			marginBottom: "x1fqp7bg",
			$$css: !0
		},
		marginTop30: {
			marginTop: "x11fxgd9",
			$$css: !0
		},
		paddingBottom30: {
			paddingBottom: "xbaz6xv",
			$$css: !0
		}
	}, b = {
		contentBackground: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		emptyCardText: {
			textAlign: "x2b8uid",
			$$css: !0
		}
	}, v = { surface: "catalog-cart" };
	function S(e) {
		var t = e.cart, n = t.itemCount;
		return n == null || n === 0 ? null : m.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
			/*BTDS*/
			"",
			[s._plural(n, "cart-number-of-items")]
		) });
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.cart, n = e.cartFlatListController, a = e.cartProductItems, i = e.isDarkTheme, l = e.isDirectConnection, s = e.onProductCatalog, u = e.onProductDetail, c = e.onSend, d = e.sellerJid, p = o("WAWebBizMatchCartItemsToProductsAction").getSavingsFromCartItemsAndProducts(a);
		return m.jsxs(m.Fragment, { children: [
			m.jsx(E, {
				cart: t,
				onProductCatalog: s
			}),
			m.jsx(r("WAWebCartProductList.react"), {
				flatListController: n,
				onProductDetail: u,
				sellerJid: d,
				cartProductItems: a
			}),
			m.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1280gxy x9f619 x1n2onr6 xhtitgo" },
				1: { className: "x9f619 x1n2onr6 xhtitgo x1m8r95a" }
			}[!!i << 0], { children: m.jsx(r("WAWebCartDetailDrawerFooter.react"), {
				savings: p,
				cart: t,
				onSend: c,
				isDirectConnection: l
			}) }))
		] });
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.onProductCatalog;
		return m.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			testid: "cart-add-more-button",
			onClick: t,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.cart, n = e.onProductCatalog;
		return m.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.padding16, b.contentBackground],
			children: [m.jsx(S, { cart: t }), m.jsx(L, { onProductCatalog: n })]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.businessProfile, n = e.onProductCatalog;
		return m.jsxs("div", {
			className: "x6s0dn4 x1280gxy x78zum5 xdt5ytf x5yr21d x13crsa5 xx281p9 x1rxj1xn x67w97k",
			children: [
				m.jsx(o("WAWebShoppingCartEmptyIcon.react").ShoppingCartEmptyIcon, {}),
				m.jsx(o("WAWebText.react").WAWebTextLarge, {
					xstyle: [C.marginTop30, C.marginBottom15],
					children: s._(
						/*BTDS*/
						""
					)
				}),
				m.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					xstyle: [b.emptyCardText, C.paddingBottom30],
					theme: "plain",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				o("WAWebBusinessProfileUtils").hasCatalog(t) && m.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
					onClick: n,
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	var I = n("$InternalEnum")({
		LOADING: "loading",
		READY_EMPTY: "readyEmpty",
		READY_CONTENT: "readyContent"
	});
	function T(e) {
		var t = e.children, n = e.drawerState, o = e.emptyContent;
		switch (n) {
			case I.READY_EMPTY: return o;
			case I.READY_CONTENT: return t;
			case I.LOADING: return m.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {});
		}
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, c), i = a.canLogQpl, l = i === void 0 ? !0 : i, d = a.chat, p = a.closeDrawerRightOnSend, C = a.onBack, b = a.onProductCatalog, S = a.onProductDetail, L = a.sellerJid, E = _(o("WAWebDrawerContext").DrawerContext), D = o("WAWebThemeContext").useIsDarkTheme(), x = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"), $ = g(function() {
			return o("WAWebCartCollection").CartCollection.findCart(L);
		}, [L]), P = h(null), N = r("useLazyRef")(function() {
			return new (o("WAWebPromiseQueue")).PromiseQueue();
		}), M = g(function() {
			return new (r("WAWebFlatListController"))();
		}, []), w = y(!0), A = w[0], F = w[1], O = y(void 0), B = O[0], W = O[1], q = y([]), U = q[0], V = q[1], H = async function(t) {
			var e = await Promise.all([t ? r("WAWebBizPullCartUpdateAction")($, l) : Promise.resolve(), o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(d.id)]), n = e[0], a = e[1];
			n && (P.current = n);
			var i = o("WAWebBizMatchCartItemsToProductsAction").matchCartItemsToProducts($, P.current);
			F(!1), W(a), V(i);
		};
		o("useWAWebListener").useListener($, "change:cartItemCollection", function() {
			N.current.enqueue(function() {
				return H();
			});
		}), f(function() {
			var t = !0;
			l && o("WAWebUtilsLogQplEvents").qplAnnotateCartView($.id.toString() !== L, $.itemCount), H(!0, l).then(function(e) {
				t = !1, l && o("WAWebUtilsLogQplEvents").qplEndCartView(2), o("WAWebCartLogEvents").logCartListImpression($.id.toString(), o("WAWebProductCatalogContext").getProductCatalogContext(E));
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unable to open the cart"]))).verbose().sendLogs("openCart: failed to open the cart"), r("WAWebShowGenericErrorToastAction")(), r("WAWebBizClearCartAction")($);
			}).finally(function() {
				t && l && o("WAWebUtilsLogQplEvents").qplEndCartView(3), F(!1);
			});
		}, []);
		var G = function() {
			var e, t = (e = x.existsDrawer()) != null ? e : !1;
			t && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
		}, z = function() {
			F(!0), o("WAWebUtilsLogQplEvents").qplStartOrderCreate(U.length), r("WAWebBizSubmitOrderAction")($, d, B).then(function(e) {
				var t = !!$.message;
				o("WAWebOrderLogEvents").logSendOrderMessage({
					catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(E),
					catalogOwnerJid: $.id.toString(),
					isOrderMsgAttached: t,
					orderId: e,
					quantity: $.itemCount
				}), o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
					activityType: "ordersSent",
					chatId: d.id,
					ts: o("WATimeUtils").unixTime()
				}]), C(), r("WAWebBizClearCartAction")($), $.message = void 0, p && G(), o("WAWebUtilsLogQplEvents").qplEndOrderCreate(2);
			}).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Unable to create catalog order"]))).verbose().sendLogs("submitOrder: order creation or order message send error"), r("WAWebShowGenericErrorToastAction")(), H(!0), o("WAWebUtilsLogQplEvents").qplEndOrderCreate(3);
			}).finally(function() {
				F(!1);
			});
		}, j = g(function() {
			return A ? I.LOADING : $.itemCount ? I.READY_CONTENT : I.READY_EMPTY;
		}, [A, $.itemCount]), K = m.jsx(k, {
			onProductCatalog: b,
			businessProfile: B
		}), Q = o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			onDrop: C,
			theme: "striped",
			tsNavigationData: v,
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: Q,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: C
			}), m.jsx(r("WAWebDrawerBody.react"), {
				flatListControllers: [M],
				children: m.jsx(T, {
					drawerState: j,
					emptyContent: K,
					children: m.jsx(R, {
						cart: $,
						onSend: z,
						cartFlatListController: M,
						onProductDetail: S,
						onProductCatalog: b,
						sellerJid: L,
						cartProductItems: U,
						isDarkTheme: D,
						isDirectConnection: !!(B != null && B.isBusinessDirectConnection())
					})
				})
			})]
		});
	}
	D.displayName = D.name + " [from " + i.id + "]", l.default = D;
}), 226);
