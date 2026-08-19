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
	"getErrorSafe",
	"qpl",
	"react",
	"useWAWebContactValues",
	"useWAWebDebouncedCallback",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useEffect, f = m.useMemo, g = m.useState, h = r("qpl")._(774780089, "3436");
	function y(t) {
		"use no forget";
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, u), l = i.canManageCatalog, c = i.catalogId, m = i.collection, y = i.contact, b = i.onCartClick, v = i.onCatalogLinkClick, S = i.onEditCollection, R = i.onProductDetail, L = i.onProductShare, E = i.scrollOffset, k = i.setScrollOffset, I = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), T = r("useWAWebUnmountSignal")(), D = p(o("WAWebDrawerContext").DrawerContext), x = o("useWAWebContactValues").useContactValues(y.id, [o("WAWebContactGetters").getId]), $ = x[0], P = f(function() {
			return o("WAWebCartCollection").CartCollection.findCart($.toString());
		}, [$]), N = f(function() {
			return new (r("WAWebFlatListController"))();
		}, []), M = g(!1), w = M[0], A = M[1], F = g(null), O = F[0], B = F[1], W = g(P.itemCount), q = W[0], U = W[1], V = g("NONE"), H = V[0], G = V[1], z = g(null), j = z[0], K = z[1], Q = g(null), X = Q[0], Y = Q[1], J = g(!0), Z = J[0], ee = J[1];
		o("useWAWebListener").useListener(m == null ? void 0 : m.productCollection, ["add", "remove"], I), o("useWAWebListener").useListener(O == null ? void 0 : O.productCollection, ["add", "remove"], I), o("useWAWebListener").useListener(O == null ? void 0 : O.collections, ["add", "remove"], I), o("useWAWebListener").useListener(m, ["change:reviewStatus", "canAppeal"], I);
		var te = async function(t) {
			await (t == null ? void 0 : t.loadInitialItems()), ee(!1), o("WAWebProductCollectionLogEvents").logCollectionSeeAllView({
				catalogOwnerJid: c.toString(),
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(D),
				collectionId: t == null ? void 0 : t.collectionId
			});
		}, ne = function() {
			o("WAWebCatalogCollection").CatalogCollection.find(c).then(function(e) {
				if (!T.aborted) {
					B(e), G("SUCCESS");
					var t = new (o("WAWebBizCatalogUtils")).SingleCollectionDataSource(e, m == null ? void 0 : m.id.toString(), l || !1, o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT), n = new (o("WAWebBizCatalogUtils")).CatalogListItemScrollHelper(t);
					K(t), Y(n), te(t).then(function() {
						o("WAWebQplFlowWrapper").QPL.markerEnd(h, 2);
					}).catch(function() {
						o("WAWebQplFlowWrapper").QPL.markerEnd(h, 3);
					}), E !== void 0 && N.setScrollFromStart(E);
				}
			}).catch(function(e) {
				o("WAWebQplFlowWrapper").QPL.markerEnd(h, 3), o("WAWebProductCatalogFetchState").parseErrorState(r("getErrorSafe")(e), function(e) {
					G(e), ee(!1);
				});
			});
		}, re = function() {
			var e = P.itemCount;
			q !== e && U(e);
		};
		_(function() {
			ne(), r("WAWebProductCatalogCheckCartEnabled")(c).then(function(e) {
				A(e), e && P.on("all", re);
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[product-catalog] failed to check cart enabled"])));
			});
		}, []);
		var oe = function() {
			o("WAWebUtilsLogQplEvents").qplStartCartView("Collection"), b == null || b($.toString());
		}, ae = function() {
			O && v(O, y);
		}, ie = r("useWAWebDebouncedCallback")(function(e, t) {
			k == null || k(t.scrollTop), X != null && X.willLoadMore(t) && ee(!0), X == null || X.onScroll(e, t).then(function(e) {
				e && ee(!1);
			}).catch(function(e) {
				throw ee(!1), e;
			});
		}, 100), le = function(t) {
			ie(t, t.currentTarget);
		}, se = o("WAWebProductCatalogCatalogDrawerMenu.react").getCatalogDrawerMenu({
			onSendCatalog: ae,
			onCartClick: w ? oe : void 0,
			cartCount: P.itemCount,
			catalogId: c.toString(),
			canManageCatalog: l
		}), ue = ((n = i.collection) == null ? void 0 : n.name) || s._(
			/*BTDS*/
			""
		), ce = f(function() {
			return { surface: l ? "smb-catalog-collection-products" : "catalog-collection" };
		}, [l]);
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "products",
			onDrop: i.onBack,
			tsNavigationData: ce,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: ue,
				type: i.headerType || o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: i.onBack,
				menu: se
			}), d.jsx(r("WAWebDrawerBody.react"), {
				flatListControllers: [N],
				onScroll: le,
				children: d.jsx(C, {
					cartEnabled: w,
					onCartClick: b,
					handleCartClick: oe,
					catalog: O,
					dataSource: j,
					catalogFetchState: H,
					loadingMore: Z,
					canManageCatalog: l,
					collection: m,
					onProductDetail: R,
					onProductShare: L,
					onEditCollection: S
				})
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.canManageCatalog, n = e.cartEnabled, a = e.catalog, i = e.catalogFetchState, l = e.collection, u = e.dataSource, c = e.handleCartClick, m = e.loadingMore, p = e.onCartClick, _ = e.onEditCollection, f = e.onProductDetail, g = e.onProductShare, h = n && p ? c : void 0;
		if (!a || !u) return d.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), { fetchState: i });
		var y = u.getData();
		if (y.length === 0 && !m && t && l) return d.jsxs("div", {
			className: "x1okw0bk x12xbjc7 x6ikm8r x10wlt62",
			children: [d.jsx(r("WAWebManageAddItemCta.react"), {
				theme: "collections",
				onClick: function() {
					_ == null || _(l);
				},
				testid: "add-collection"
			}), d.jsx("div", {
				className: "xqy66fx x1q3ajuy xr1496l x1gx403c x101yacv",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
		var C = d.jsx(r("WAWebProductCollectionsList.react"), {
			onCartOpen: h,
			onProductDetail: f,
			catalog: a,
			canManageCatalog: t,
			shareLinks: t,
			onProductShare: g,
			collectionId: l == null ? void 0 : l.id.toString(),
			data: y
		}), b = l ? d.jsx(o("WAWebManageCollectionIntegrityBanner.react").CollectionIntegrityBanner, {
			collection: l,
			onEditCollection: _
		}) : void 0;
		return d.jsxs("div", {
			className: "x1okw0bk x12xbjc7 x6ikm8r x10wlt62",
			children: [
				b,
				C,
				m && d.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {})
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);
