__d("WAWebProductCatalogProductMessageListDrawer.react", [
	"WATypeUtils",
	"WAWebCartCollection",
	"WAWebCommonCartIconMenuBarItem.react",
	"WAWebContactGetters",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebEmojiText.react",
	"WAWebFlatListController",
	"WAWebFlatListLoadingSpinnerItem.react",
	"WAWebFrontendConstants",
	"WAWebProductCatalogCatalogConstants",
	"WAWebProductCatalogCheckCartEnabled",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogFetchState",
	"WAWebProductCatalogFetchStateTopBar.react",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductMessageList.react",
	"WAWebProductMessageListCollection",
	"WAWebQplFlowWrapper",
	"WAWebUtilsLogQplEvents",
	"getErrorSafe",
	"qpl",
	"react",
	"useLazyRef",
	"useWAWebContactValues",
	"useWAWebListener",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useEffect, p = c.useState, _ = r("qpl")._(774777097, "3431"), f = r("qpl")._(774777097, "3431");
	function g(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.catalogWid, l = a.onCartClick, s = a.onProductDetail, c = a.productListId, g = a.setScrollOffset, y = r("useWAWebUnmountSignal")(), C = d(o("WAWebDrawerContext").DrawerContext), b = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), v = o("useWAWebContactValues").useContactValues(a.contact.id, [o("WAWebContactGetters").getId]), S = v[0], R = p(!1), L = R[0], E = R[1], k = p(0), I = k[0], T = k[1], D = p(!1), x = D[0], $ = D[1], P = p(function() {
			return o("WAWebProductMessageListCollection").ProductMessageListCollection.get(c);
		}), N = P[0], M = P[1], w = p(function() {
			return o("WAWebCartCollection").CartCollection.findCart(S.toString());
		}), A = w[0], F = p(A.itemCount), O = F[0], B = F[1], W = p(!1), q = W[0], U = W[1], V = p(N ? "SUCCESS" : "NONE"), H = V[0], G = V[1], z = function(t) {
			var e = t === !0, n = o("WAWebProductMessageListCollection").ProductMessageListCollection.assertGet(c), r = n.getTotalProductsFetchedOrFailed(), a = n.getProductSize();
			if (x || r === a) {
				e && (o("WAWebQplFlowWrapper").QPL.markerAnnotate(f, { int: { ProductsCount: r } }), o("WAWebQplFlowWrapper").QPL.markerEnd(f, 2)), $(!0);
				return;
			}
			E(!0), T(r);
			var i = e ? _ : void 0;
			o("WAWebProductMessageListCollection").ProductMessageListCollection.update(c, { markerId: i }).then(function(t) {
				if (y.aborted) {
					e && o("WAWebQplFlowWrapper").QPL.markerDrop(f);
					return;
				}
				E(!1);
				var n = Array.isArray(t) ? t[0] : t, a = n.getTotalProductsFetchedOrFailed();
				a === I && $(!0), e && (o("WAWebQplFlowWrapper").QPL.markerAnnotate(f, { int: { ProductsCount: a } }), o("WAWebQplFlowWrapper").QPL.markerEnd(f, 2)), r * o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight && z();
			}).catch(function() {
				E(!1), $(!0), e && o("WAWebQplFlowWrapper").QPL.markerEnd(f, 3);
			});
		}, j = async function() {
			try {
				var e = await o("WAWebProductMessageListCollection").ProductMessageListCollection.find(c);
				if (y.aborted) {
					o("WAWebQplFlowWrapper").QPL.markerDrop(f);
					return;
				}
				M(e), G("SUCCESS"), z(!0);
			} catch (e) {
				o("WAWebProductCatalogFetchState").parseErrorState(r("getErrorSafe")(e), function(e) {
					return G(e);
				}), o("WAWebQplFlowWrapper").QPL.markerEnd(f, 3);
			}
		};
		m(function() {
			N ? z() : j(), r("WAWebProductCatalogCheckCartEnabled")(S).then(function(e) {
				y.aborted || (U(e), o("WAWebProductCatalogLogEvents").logCatalogListView({
					catalogOwnerWid: i,
					catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(C),
					cartToggle: e
				}));
			});
		}, []), o("useWAWebListener").useListener(A, "all", function() {
			B(A.itemCount);
		});
		var K = function(t) {
			L || t.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE > t.scrollHeight - t.clientHeight && z();
		}, Q = function(t) {
			K(t.currentTarget), g == null || g(t.currentTarget.scrollTop);
		}, X = function() {
			o("WAWebUtilsLogQplEvents").qplStartCartView("PLM"), l == null || l(S.toString());
		}, Y = l != null && q ? u.jsx(r("WAWebCommonCartIconMenuBarItem.react"), {
			cartCountText: o("WATypeUtils").isNumber(O) && O > 0 ? O.toString() : void 0,
			onClick: X,
			catalogOwnerJid: S.toString()
		}) : null;
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "products",
			onDrop: a.onBack,
			tsNavigationData: {
				surface: "unknown",
				viewName: "catalog-product-messages"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: u.jsx("div", {
					className: "x78zum5",
					children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: N == null ? void 0 : N.title,
						ellipsify: !0
					})
				}),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: a.onBack,
				menu: Y
			}), u.jsx(r("WAWebDrawerBody.react"), {
				onScroll: Q,
				flatListControllers: [b.current],
				scrollOffset: a.scrollOffset,
				children: u.jsx(h, {
					productMessageList: N,
					loadingMore: L,
					productMessageListFetchState: H,
					onProductDetail: s,
					productListFlatListControllerRef: b
				})
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", g.displayName = "ProductMessageListDrawer";
	function h(e) {
		var t = e.loadingMore, n = e.onProductDetail, o = e.productListFlatListControllerRef, a = e.productMessageList, i = e.productMessageListFetchState;
		return a ? u.jsxs("div", { children: [u.jsx(r("WAWebProductCatalogProductMessageList.react"), {
			productMessageList: a,
			flatListController: o.current,
			onProductDetail: n
		}), t && u.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {})] }) : u.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), { fetchState: i });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 98);
