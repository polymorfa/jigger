__d("WAWebProductCollectionCollectionContentDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebBizCatalogUtils",
	"WAWebCartCollection",
	"WAWebCatalogCollection",
	"WAWebContactGetters",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebFlatListController",
	"WAWebFlatListLoadingSpinnerItem.react",
	"WAWebManageAddItemCta.react",
	"WAWebManageCollectionIntegrityBanner.react",
	"WAWebProductCatalogCatalogConstants",
	"WAWebProductCatalogCatalogDrawerMenu.react",
	"WAWebProductCatalogCheckCartEnabled",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogFetchState",
	"WAWebProductCatalogFetchStateTopBar.react",
	"WAWebProductCollectionLogEvents",
	"WAWebProductCollectionsList.react",
	"WAWebQplFlowWrapper",
	"WAWebUtilsLogQplEvents",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"qpl",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebDebouncedCallback",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useEffect, f = m.useMemo, g = m.useState, h = r("qpl")._(774780089, "3436");
	function y(t) {
		"use no forget";
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, u), c = l.canManageCatalog, m = l.catalogId, y = l.collection, b = l.contact, v = l.onCartClick, S = l.onCatalogLinkClick, R = l.onEditCollection, L = l.onProductDetail, E = l.onProductShare, k = l.scrollOffset, I = l.setScrollOffset, T = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), D = r("useWAWebUnmountSignal")(), x = p(o("WAWebDrawerContext").DrawerContext), $ = o("useWAWebContactValues").useContactValues(b.id, [o("WAWebContactGetters").getId]), P = $[0], N = f(function() {
			return o("WAWebCartCollection").CartCollection.findCart(P.toString());
		}, [P]), M = f(function() {
			return new (r("WAWebFlatListController"))();
		}, []), w = g(!1), A = w[0], F = w[1], O = g(null), B = O[0], W = O[1], q = g(N.itemCount), U = q[0], V = q[1], H = g("NONE"), G = H[0], z = H[1], j = g(null), K = j[0], Q = j[1], X = g(null), Y = X[0], J = X[1], Z = g(!0), ee = Z[0], te = Z[1];
		o("useWAWebListener").useListener(y == null ? void 0 : y.productCollection, ["add", "remove"], T), o("useWAWebListener").useListener(B == null ? void 0 : B.productCollection, ["add", "remove"], T), o("useWAWebListener").useListener(B == null ? void 0 : B.collections, ["add", "remove"], T), o("useWAWebListener").useListener(y, ["change:reviewStatus", "canAppeal"], T);
		var ne = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield e == null ? void 0 : e.loadInitialItems(), te(!1), o("WAWebProductCollectionLogEvents").logCollectionSeeAllView({
					catalogOwnerJid: m.toString(),
					catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(x),
					collectionId: e == null ? void 0 : e.collectionId
				});
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), re = function() {
			o("WAWebCatalogCollection").CatalogCollection.find(m).then(function(e) {
				if (!D.aborted) {
					W(e), z("SUCCESS");
					var t = new (o("WAWebBizCatalogUtils")).SingleCollectionDataSource(e, y == null ? void 0 : y.id.toString(), c || !1, o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT), n = new (o("WAWebBizCatalogUtils")).CatalogListItemScrollHelper(t);
					Q(t), J(n), ne(t).then(function() {
						o("WAWebQplFlowWrapper").QPL.markerEnd(h, 2);
					}).catch(function() {
						o("WAWebQplFlowWrapper").QPL.markerEnd(h, 3);
					}), k !== void 0 && M.setScrollFromStart(k);
				}
			}).catch(function(e) {
				o("WAWebQplFlowWrapper").QPL.markerEnd(h, 3), o("WAWebProductCatalogFetchState").parseErrorState(r("getErrorSafe")(e), function(e) {
					z(e), te(!1);
				});
			});
		}, oe = function() {
			var e = N.itemCount;
			U !== e && V(e);
		};
		_(function() {
			re(), r("WAWebProductCatalogCheckCartEnabled")(m).then(function(e) {
				F(e), e && N.on("all", oe);
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[product-catalog] failed to check cart enabled"])));
			});
		}, []);
		var ae = function() {
			o("WAWebUtilsLogQplEvents").qplStartCartView("Collection"), v == null || v(P.toString());
		}, ie = function() {
			B && S(B, b);
		}, le = r("useWAWebDebouncedCallback")(function(e, t) {
			I == null || I(t.scrollTop), Y != null && Y.willLoadMore(t) && te(!0), Y == null || Y.onScroll(e, t).then(function(e) {
				e && te(!1);
			}).catch(function(e) {
				throw te(!1), e;
			});
		}, 100), se = function(t) {
			le(t, t.currentTarget);
		}, ue = o("WAWebProductCatalogCatalogDrawerMenu.react").getCatalogDrawerMenu({
			onSendCatalog: ie,
			onCartClick: A ? ae : void 0,
			cartCount: N.itemCount,
			catalogId: m.toString(),
			canManageCatalog: c
		}), ce = ((a = l.collection) == null ? void 0 : a.name) || s._(
			/*BTDS*/
			""
		), de = f(function() {
			return { surface: c ? "smb-catalog-collection-products" : "catalog-collection" };
		}, [c]);
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "products",
			onDrop: l.onBack,
			tsNavigationData: de,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: ce,
				type: l.headerType || o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: l.onBack,
				menu: ue
			}), d.jsx(r("WAWebDrawerBody.react"), {
				flatListControllers: [M],
				onScroll: se,
				children: d.jsx(C, {
					cartEnabled: A,
					onCartClick: v,
					handleCartClick: ae,
					catalog: B,
					dataSource: K,
					catalogFetchState: G,
					loadingMore: ee,
					canManageCatalog: c,
					collection: y,
					onProductDetail: L,
					onProductShare: E,
					onEditCollection: R
				})
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("react-compiler-runtime").c(31), n = e.canManageCatalog, a = e.cartEnabled, i = e.catalog, l = e.catalogFetchState, u = e.collection, c = e.dataSource, m = e.handleCartClick, p = e.loadingMore, _ = e.onCartClick, f = e.onEditCollection, g = e.onProductDetail, h = e.onProductShare, y = a && _ ? m : void 0;
		if (!i || !c) {
			var C;
			return t[0] !== l ? (C = d.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), { fetchState: l }), t[0] = l, t[1] = C) : C = t[1], C;
		}
		var b;
		t[2] !== c ? (b = c.getData(), t[2] = c, t[3] = b) : b = t[3];
		var v = b;
		if (v.length === 0 && !p && n && u) {
			var S;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x1okw0bk x12xbjc7 x6ikm8r x10wlt62" }, t[4] = S) : S = t[4];
			var R;
			t[5] !== u || t[6] !== f ? (R = d.jsx(r("WAWebManageAddItemCta.react"), {
				theme: "collections",
				onClick: function() {
					f == null || f(u);
				},
				testid: "add-collection"
			}), t[5] = u, t[6] = f, t[7] = R) : R = t[7];
			var L;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (L = d.jsx("div", {
				className: "xqy66fx x1q3ajuy xr1496l x1gx403c x101yacv",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[8] = L) : L = t[8];
			var E;
			return t[9] !== R ? (E = d.jsxs("div", babelHelpers.extends({}, S, { children: [R, L] })), t[9] = R, t[10] = E) : E = t[10], E;
		}
		var k;
		t[11] !== (u == null ? void 0 : u.id) ? (k = u == null ? void 0 : u.id.toString(), t[11] = u == null ? void 0 : u.id, t[12] = k) : k = t[12];
		var I;
		t[13] !== n || t[14] !== i || t[15] !== v || t[16] !== y || t[17] !== g || t[18] !== h || t[19] !== k ? (I = d.jsx(r("WAWebProductCollectionsList.react"), {
			onCartOpen: y,
			onProductDetail: g,
			catalog: i,
			canManageCatalog: n,
			shareLinks: n,
			onProductShare: h,
			collectionId: k,
			data: v
		}), t[13] = n, t[14] = i, t[15] = v, t[16] = y, t[17] = g, t[18] = h, t[19] = k, t[20] = I) : I = t[20];
		var T = I, D;
		t[21] !== u || t[22] !== f ? (D = u ? d.jsx(o("WAWebManageCollectionIntegrityBanner.react").CollectionIntegrityBanner, {
			collection: u,
			onEditCollection: f
		}) : void 0, t[21] = u, t[22] = f, t[23] = D) : D = t[23];
		var x = D, $;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "x1okw0bk x12xbjc7 x6ikm8r x10wlt62" }, t[24] = $) : $ = t[24];
		var P;
		t[25] !== p ? (P = p && d.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {}), t[25] = p, t[26] = P) : P = t[26];
		var N;
		return t[27] !== x || t[28] !== T || t[29] !== P ? (N = d.jsxs("div", babelHelpers.extends({}, $, { children: [
			x,
			T,
			P
		] })), t[27] = x, t[28] = T, t[29] = P, t[30] = N) : N = t[30], N;
	}
	l.default = y;
}), 226);
