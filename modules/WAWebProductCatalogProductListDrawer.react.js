__d("WAWebProductCatalogProductListDrawer.react", [
	"fbt",
	"WAFilteredCatch",
	"WATypeUtils",
	"WAWebBackendErrors",
	"WAWebCartCollection",
	"WAWebCatalogCollection",
	"WAWebCommonCartIconMenuBarItem.react",
	"WAWebContactGetters",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebDropdown.react",
	"WAWebDropdownItem.react",
	"WAWebFlatListController",
	"WAWebFlatListLoadingSpinnerItem.react",
	"WAWebFrontendConstants",
	"WAWebManageAddItemCta.react",
	"WAWebMenuBar.react",
	"WAWebProductCatalogCatalogConstants",
	"WAWebProductCatalogCheckCartEnabled",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogFetchState",
	"WAWebProductCatalogFetchStateTopBar.react",
	"WAWebProductCatalogLinkIcon.react",
	"WAWebProductCatalogList.react",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductListDrawerHeader.react",
	"WDSIconIcMoreVert.react",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebDebouncedCallback",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebThrottledCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useEffect, _ = d.useMemo, f = d.useState;
	function g(e, t, n, r, a, i, l) {
		if (!r.aborted) {
			a(!1);
			var s = Array.isArray(e) ? e[0] : e, u = s.productCollection.getProductModels().length;
			u === n && i(!0), t * o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight && l();
		}
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(17), n = e.businessProfile, a = e.canManageCatalog, i = e.contact, l = e.loadingMore, s = e.onAddProduct, u = e.productCatalogList, d;
		if (a && s) {
			var m;
			t[0] !== s ? (m = c.jsx(r("WAWebManageAddItemCta.react"), {
				onClick: s,
				theme: "in-list",
				testid: "add-item"
			}), t[0] = s, t[1] = m) : m = t[1], d = m;
		}
		var p;
		t[2] !== n || t[3] !== i ? (p = n && c.jsx("div", {
			"data-testid": "catalog-header",
			className: "x1okw0bk",
			children: c.jsx(r("WAWebProductCatalogProductListDrawerHeader.react"), {
				profilePicThumb: i.getProfilePicThumb(),
				contact: i,
				businessProfile: n
			})
		}), t[2] = n, t[3] = i, t[4] = p) : p = t[4];
		var _;
		t[5] !== n ? (_ = {
			0: { className: "x1okw0bk x6ikm8r x10wlt62 x12xbjc7" },
			1: { className: "x1okw0bk x6ikm8r x10wlt62 x12xbjc7 x1380le5" }
		}[!!n << 0], t[5] = n, t[6] = _) : _ = t[6];
		var f;
		t[7] !== l ? (f = l && c.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {}), t[7] = l, t[8] = f) : f = t[8];
		var g;
		t[9] !== d || t[10] !== u || t[11] !== _ || t[12] !== f ? (g = c.jsxs("div", babelHelpers.extends({ "data-testid": "catalog-items" }, _, { children: [
			d,
			u,
			f
		] })), t[9] = d, t[10] = u, t[11] = _, t[12] = f, t[13] = g) : g = t[13];
		var h;
		return t[14] !== p || t[15] !== g ? (h = c.jsxs(c.Fragment, { children: [p, g] }), t[14] = p, t[15] = g, t[16] = h) : h = t[16], h;
	}
	function y(e) {
		var t = e.canManageCatalog, n = e.cartCount, a = e.cartEnabled, i = e.catalogId, l = e.handleCartClick, u = e.handleCatalogLinkClick, d = e.onCartClick, m = e.onOpenSettings, p = t ? c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			testid: "menu-bar-menu",
			icon: c.jsx(r("WDSIconIcMoreVert.react"), {}),
			title: s._(
				/*BTDS*/
				""
			),
			dropdownMenu: {
				menu: c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-forward menu-item",
					action: u,
					children: s._(
						/*BTDS*/
						""
					)
				}), m && c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-settings menu-item",
					action: m,
					children: s._(
						/*BTDS*/
						""
					)
				})] }),
				type: o("WAWebDropdown.react").MenuType.DropdownMenu,
				flipOnRTL: !0,
				dirX: o("WAWebDropdown.react").DirX.LEFT
			}
		}) : c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			testid: "menu-bar-catalog-link",
			icon: c.jsx(r("WAWebProductCatalogLinkIcon.react"), { theme: null }),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: u
		}), _ = a && d ? c.jsx(r("WAWebCommonCartIconMenuBarItem.react"), {
			cartIconTheme: null,
			cartCountText: o("WATypeUtils").isNumber(n) && n > 0 ? n.toString() : void 0,
			onClick: l,
			catalogOwnerJid: i.toString()
		}) : null;
		return [_, p];
	}
	function C(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.autoUpdate, l = i === void 0 ? !1 : i, u = a.businessProfile, d = a.canManageCatalog, C = a.catalogId, b = a.contact, v = a.onAddProduct, S = a.onCartClick, R = a.onCatalogLinkClick, L = a.onOpenSettings, E = a.onProductDetail, k = a.onProductShare, I = a.setScrollOffset, T = r("useWAWebUnmountSignal")(), D = m(o("WAWebDrawerContext").DrawerContext), x = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), $ = r("useWAWebDebouncedCallback")(x, 100), P = o("useWAWebContactValues").useContactValues(b.id, [o("WAWebContactGetters").getId]), N = P[0], M = _(function() {
			return new (r("WAWebFlatListController"))();
		}, []), w = function() {
			var e = o("WAWebCatalogCollection").CatalogCollection.get(C);
			return !e || e.stale ? null : e;
		}, A = _(function() {
			return o("WAWebCartCollection").CartCollection.findCart(N.toString());
		}, [N]), F = f(!1), O = F[0], B = F[1], W = f(0), q = W[0], U = W[1], V = f(!1), H = V[0], G = V[1], z = f(!1), j = z[0], K = z[1], Q = f(w), X = Q[0], Y = Q[1], J = f(function() {
			return A.itemCount;
		}), Z = J[0], ee = J[1], te = f(function() {
			return w() ? "SUCCESS" : "NONE";
		}), ne = te[0], re = te[1], oe = function() {
			var e = A.itemCount;
			Z !== e && ee(e);
		};
		o("useWAWebListener").useListener(A, "all", oe);
		var ae = function() {
			if (!H) {
				var e = o("WAWebCatalogCollection").CatalogCollection.assertGet(C);
				if (e.afterCursor) {
					var t = e.productCollection.getProductModels().length;
					B(!0), U(t), o("WAWebCatalogCollection").CatalogCollection.update(C).then(function(e) {
						g(e, t, q, T, B, G, ae);
					}).catch(function() {
						B(!1), G(!0);
					});
				}
			}
		}, ie = r("useWAWebDebouncedCallback")(function() {
			a.onRemoveProduct == null || a.onRemoveProduct(), x();
		}, 100), le = l ? X == null ? void 0 : X.productCollection : null;
		o("useWAWebListener").useListener(le, "add", $), o("useWAWebListener").useListener(le, "remove", ie);
		var se = function() {
			return o("WAWebCatalogCollection").CatalogCollection.find(C).then(function(e) {
				Y(e), re("SUCCESS"), ae();
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				(e.status === 403 || e.status === 404) && (Y(null), re("NOT_FOUND"));
			})).catch(function(e) {
				o("WAWebProductCatalogFetchState").parseErrorState(r("getErrorSafe")(e), function(e) {
					return re(e);
				});
			});
		};
		p(function() {
			X ? ae() : se(), r("WAWebProductCatalogCheckCartEnabled")(C).then(function(e) {
				K(e), o("WAWebProductCatalogLogEvents").logCatalogListView({
					catalogOwnerWid: C,
					catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(D),
					cartToggle: e
				});
			});
		}, []);
		var ue = r("useWAWebThrottledCallback")(function(e) {
			O || e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE > e.scrollHeight - e.clientHeight && ae();
		}, 100), ce = function(t) {
			var e, n;
			t.currentTarget && ue(t.currentTarget), I == null || I((e = (n = t.currentTarget) == null ? void 0 : n.scrollTop) != null ? e : 0);
		}, de = function() {
			S == null || S(N.toString());
		}, me = function() {
			X && (R(X, b), o("WAWebProductCatalogLogEvents").logCatalogShareLinkClick({
				catalogOwnerWid: C,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(D)
			}));
		}, pe = j && S ? de : void 0, _e = X ? c.jsx(h, {
			canManageCatalog: d,
			onAddProduct: v,
			businessProfile: u,
			contact: b,
			loadingMore: O,
			productCatalogList: c.jsx(r("WAWebProductCatalogList.react"), {
				onCartOpen: pe,
				onProductDetail: E,
				flatListController: M,
				catalog: X,
				canManageCatalog: d,
				shareLinks: d,
				onProductShare: k
			})
		}) : c.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), { fetchState: ne }), fe = y({
			canManageCatalog: d,
			handleCatalogLinkClick: me,
			onOpenSettings: L,
			cartEnabled: j,
			onCartClick: S,
			cartCount: Z,
			handleCartClick: de,
			catalogId: C
		});
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "products",
			onDrop: a.onBack,
			tsNavigationData: {
				surface: "unknown",
				viewName: "catalog-product-list"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: a.onBack,
				menu: fe,
				focusBackOrCancel: !0
			}), c.jsx(r("WAWebDrawerBody.react"), {
				onScroll: ce,
				flatListControllers: [M],
				scrollOffset: a.scrollOffset,
				children: _e
			})]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
