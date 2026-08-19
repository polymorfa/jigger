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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(2), n = e.cart, r = n.itemCount;
		if (r == null || r === 0) return null;
		var a;
		return t[0] !== r ? (a = m.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
			/*BTDS*/
			"",
			[s._plural(r, "cart-number-of-items")]
		) }), t[0] = r, t[1] = a) : a = t[1], a;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(24), n = e.cart, a = e.cartFlatListController, i = e.cartProductItems, l = e.isDarkTheme, s = e.isDirectConnection, u = e.onProductCatalog, c = e.onProductDetail, d = e.onSend, p = e.sellerJid, _;
		t[0] !== i ? (_ = o("WAWebBizMatchCartItemsToProductsAction").getSavingsFromCartItemsAndProducts(i), t[0] = i, t[1] = _) : _ = t[1];
		var f = _, g;
		t[2] !== n || t[3] !== u ? (g = m.jsx(E, {
			cart: n,
			onProductCatalog: u
		}), t[2] = n, t[3] = u, t[4] = g) : g = t[4];
		var h;
		t[5] !== a || t[6] !== i || t[7] !== c || t[8] !== p ? (h = m.jsx(r("WAWebCartProductList.react"), {
			flatListController: a,
			onProductDetail: c,
			sellerJid: p,
			cartProductItems: i
		}), t[5] = a, t[6] = i, t[7] = c, t[8] = p, t[9] = h) : h = t[9];
		var y;
		t[10] !== l ? (y = {
			0: { className: "x1280gxy x9f619 x1n2onr6 xhtitgo" },
			1: { className: "x9f619 x1n2onr6 xhtitgo x1m8r95a" }
		}[!!l << 0], t[10] = l, t[11] = y) : y = t[11];
		var C;
		t[12] !== n || t[13] !== s || t[14] !== d || t[15] !== f ? (C = m.jsx(r("WAWebCartDetailDrawerFooter.react"), {
			savings: f,
			cart: n,
			onSend: d,
			isDirectConnection: s
		}), t[12] = n, t[13] = s, t[14] = d, t[15] = f, t[16] = C) : C = t[16];
		var b;
		t[17] !== y || t[18] !== C ? (b = m.jsx("div", babelHelpers.extends({}, y, { children: C })), t[17] = y, t[18] = C, t[19] = b) : b = t[19];
		var v;
		return t[20] !== g || t[21] !== h || t[22] !== b ? (v = m.jsxs(m.Fragment, { children: [
			g,
			h,
			b
		] }), t[20] = g, t[21] = h, t[22] = b, t[23] = v) : v = t[23], v;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(3), n = e.onProductCatalog, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = m.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			testid: "cart-add-more-button",
			onClick: n,
			children: r
		}), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(8), n = e.cart, r = e.onProductCatalog, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [o("WDSPaddings.stylex").wdsPaddings.padding16, b.contentBackground], t[0] = a) : a = t[0];
		var i;
		t[1] !== n ? (i = m.jsx(S, { cart: n }), t[1] = n, t[2] = i) : i = t[2];
		var l;
		t[3] !== r ? (l = m.jsx(L, { onProductCatalog: r }), t[3] = r, t[4] = l) : l = t[4];
		var s;
		return t[5] !== i || t[6] !== l ? (s = m.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			xstyle: a,
			children: [i, l]
		}), t[5] = i, t[6] = l, t[7] = s) : s = t[7], s;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(10), n = e.businessProfile, r = e.onProductCatalog, a, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x6s0dn4 x1280gxy x78zum5 xdt5ytf x5yr21d x13crsa5 xx281p9 x1rxj1xn x67w97k" }, i = m.jsx(o("WAWebShoppingCartEmptyIcon.react").ShoppingCartEmptyIcon, {}), t[0] = a, t[1] = i) : (a = t[0], i = t[1]);
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = m.jsx(o("WAWebText.react").WAWebTextLarge, {
			xstyle: [C.marginTop30, C.marginBottom15],
			children: s._(
				/*BTDS*/
				""
			)
		}), t[2] = l) : l = t[2];
		var u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = [b.emptyCardText, C.paddingBottom30], t[3] = u) : u = t[3];
		var c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: u,
			theme: "plain",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[4] = c) : c = t[4];
		var d;
		t[5] !== n || t[6] !== r ? (d = o("WAWebBusinessProfileUtils").hasCatalog(n) && m.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: r,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[5] = n, t[6] = r, t[7] = d) : d = t[7];
		var p;
		return t[8] !== d ? (p = m.jsxs("div", babelHelpers.extends({}, a, { children: [
			i,
			l,
			c,
			d
		] })), t[8] = d, t[9] = p) : p = t[9], p;
	}
	var I = n("$InternalEnum")({
		LOADING: "loading",
		READY_EMPTY: "readyEmpty",
		READY_CONTENT: "readyContent"
	});
	function T(e) {
		var t = o("react-compiler-runtime").c(1), n = e.children, a = e.drawerState, i = e.emptyContent;
		switch (a) {
			case I.READY_EMPTY: return i;
			case I.READY_CONTENT: return n;
			case I.LOADING: {
				var l;
				return t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = m.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {}), t[0] = l) : l = t[0], l;
			}
		}
	}
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
