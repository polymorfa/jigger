__d("WAWebCartDetailDrawer.react", [
	"fbt",
	"$InternalEnum",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"react",
	"useLazyRef",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m, p = m || (m = o("react")), _ = m, f = _.useContext, g = _.useEffect, h = _.useMemo, y = _.useRef, C = _.useState, b = {
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
	}, v = {
		contentBackground: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		emptyCardText: {
			textAlign: "x2b8uid",
			$$css: !0
		}
	}, S = { surface: "catalog-cart" };
	function R(e) {
		var t = e.cart, n = t.itemCount;
		return n == null || n === 0 ? null : p.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
			/*BTDS*/
			"",
			[s._plural(n, "cart-number-of-items")]
		) });
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.cart, n = e.cartFlatListController, a = e.cartProductItems, i = e.isDarkTheme, l = e.isDirectConnection, s = e.onProductCatalog, u = e.onProductDetail, c = e.onSend, d = e.sellerJid, m = o("WAWebBizMatchCartItemsToProductsAction").getSavingsFromCartItemsAndProducts(a);
		return p.jsxs(p.Fragment, { children: [
			p.jsx(k, {
				cart: t,
				onProductCatalog: s
			}),
			p.jsx(r("WAWebCartProductList.react"), {
				flatListController: n,
				onProductDetail: u,
				sellerJid: d,
				cartProductItems: a
			}),
			p.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1280gxy x9f619 x1n2onr6 xhtitgo" },
				1: { className: "x9f619 x1n2onr6 xhtitgo x1m8r95a" }
			}[!!i << 0], { children: p.jsx(r("WAWebCartDetailDrawerFooter.react"), {
				savings: m,
				cart: t,
				onSend: c,
				isDirectConnection: l
			}) }))
		] });
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.onProductCatalog;
		return p.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			testid: "cart-add-more-button",
			onClick: t,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.cart, n = e.onProductCatalog;
		return p.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.padding16, v.contentBackground],
			children: [p.jsx(R, { cart: t }), p.jsx(E, { onProductCatalog: n })]
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.businessProfile, n = e.onProductCatalog;
		return p.jsxs("div", {
			className: "x6s0dn4 x1280gxy x78zum5 xdt5ytf x5yr21d x13crsa5 xx281p9 x1rxj1xn x67w97k",
			children: [
				p.jsx(o("WAWebShoppingCartEmptyIcon.react").ShoppingCartEmptyIcon, {}),
				p.jsx(o("WAWebText.react").WAWebTextLarge, {
					xstyle: [b.marginTop30, b.marginBottom15],
					children: s._(
						/*BTDS*/
						""
					)
				}),
				p.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					xstyle: [v.emptyCardText, b.paddingBottom30],
					theme: "plain",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				o("WAWebBusinessProfileUtils").hasCatalog(t) && p.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
					onClick: n,
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	var T = n("$InternalEnum")({
		LOADING: "loading",
		READY_EMPTY: "readyEmpty",
		READY_CONTENT: "readyContent"
	});
	function D(e) {
		var t = e.children, n = e.drawerState, o = e.emptyContent;
		switch (n) {
			case T.READY_EMPTY: return o;
			case T.READY_CONTENT: return t;
			case T.LOADING: return p.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {});
		}
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, c), l = i.canLogQpl, m = l === void 0 ? !0 : l, _ = i.chat, b = i.closeDrawerRightOnSend, v = i.onBack, R = i.onProductCatalog, E = i.onProductDetail, k = i.sellerJid, x = f(o("WAWebDrawerContext").DrawerContext), $ = o("WAWebThemeContext").useIsDarkTheme(), P = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"), N = h(function() {
			return o("WAWebCartCollection").CartCollection.findCart(k);
		}, [k]), M = y(null), w = r("useLazyRef")(function() {
			return new (o("WAWebPromiseQueue")).PromiseQueue();
		}), A = h(function() {
			return new (r("WAWebFlatListController"))();
		}, []), F = C(!0), O = F[0], B = F[1], W = C(void 0), q = W[0], U = W[1], V = C([]), H = V[0], G = V[1], z = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield (d || (d = n("Promise"))).all([e ? r("WAWebBizPullCartUpdateAction")(N, m) : (d || (d = n("Promise"))).resolve(), o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(_.id)]), a = t[0], i = t[1];
				a && (M.current = a);
				var l = o("WAWebBizMatchCartItemsToProductsAction").matchCartItemsToProducts(N, M.current);
				B(!1), U(i), G(l);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})();
		o("useWAWebListener").useListener(N, "change:cartItemCollection", function() {
			w.current.enqueue(function() {
				return z();
			});
		}), g(function() {
			var t = !0;
			m && o("WAWebUtilsLogQplEvents").qplAnnotateCartView(N.id.toString() !== k, N.itemCount), z(!0, m).then(function(e) {
				t = !1, m && o("WAWebUtilsLogQplEvents").qplEndCartView(2), o("WAWebCartLogEvents").logCartListImpression(N.id.toString(), o("WAWebProductCatalogContext").getProductCatalogContext(x));
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unable to open the cart"]))).verbose().sendLogs("openCart: failed to open the cart"), r("WAWebShowGenericErrorToastAction")(), r("WAWebBizClearCartAction")(N);
			}).finally(function() {
				t && m && o("WAWebUtilsLogQplEvents").qplEndCartView(3), B(!1);
			});
		}, []);
		var j = function() {
			var e, t = (e = P.existsDrawer()) != null ? e : !1;
			t && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
		}, K = function() {
			B(!0), o("WAWebUtilsLogQplEvents").qplStartOrderCreate(H.length), r("WAWebBizSubmitOrderAction")(N, _, q).then(function(e) {
				var t = !!N.message;
				o("WAWebOrderLogEvents").logSendOrderMessage({
					catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(x),
					catalogOwnerJid: N.id.toString(),
					isOrderMsgAttached: t,
					orderId: e,
					quantity: N.itemCount
				}), o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
					activityType: "ordersSent",
					chatId: _.id,
					ts: o("WATimeUtils").unixTime()
				}]), v(), r("WAWebBizClearCartAction")(N), N.message = void 0, b && j(), o("WAWebUtilsLogQplEvents").qplEndOrderCreate(2);
			}).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Unable to create catalog order"]))).verbose().sendLogs("submitOrder: order creation or order message send error"), r("WAWebShowGenericErrorToastAction")(), z(!0), o("WAWebUtilsLogQplEvents").qplEndOrderCreate(3);
			}).finally(function() {
				B(!1);
			});
		}, Q = h(function() {
			return O ? T.LOADING : N.itemCount ? T.READY_CONTENT : T.READY_EMPTY;
		}, [O, N.itemCount]), X = p.jsx(I, {
			onProductCatalog: R,
			businessProfile: q
		}), Y = o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return p.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			onDrop: v,
			theme: "striped",
			tsNavigationData: S,
			children: [p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: Y,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: v
			}), p.jsx(r("WAWebDrawerBody.react"), {
				flatListControllers: [A],
				children: p.jsx(D, {
					drawerState: Q,
					emptyContent: X,
					children: p.jsx(L, {
						cart: N,
						onSend: K,
						cartFlatListController: A,
						onProductDetail: E,
						onProductCatalog: R,
						sellerJid: k,
						cartProductItems: H,
						isDarkTheme: $,
						isDirectConnection: !!(q != null && q.isBusinessDirectConnection())
					})
				})
			})]
		});
	}
	x.displayName = x.name + " [from " + i.id + "]", l.default = x;
}), 226);
