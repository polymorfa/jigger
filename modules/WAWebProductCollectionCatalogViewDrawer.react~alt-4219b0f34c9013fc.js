__d("WAWebProductCollectionCatalogViewDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebActionToast.react",
	"WAWebActiveAccountInfoContext.react",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizCatalogUtils",
	"WAWebBusinessDirectConnectionCollection",
	"WAWebBusinessDirectUtils",
	"WAWebCartCollection",
	"WAWebCatalogCollection",
	"WAWebCatalogNuxBanners.react",
	"WAWebClickableLink.react",
	"WAWebContactGetters",
	"WAWebDirectConnectionGatingUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlatListController",
	"WAWebFlatListLoadingSpinnerItem.react",
	"WAWebFlex.react",
	"WAWebInfoRefreshedIcon.react",
	"WAWebLinkedCatalogHelper",
	"WAWebManageAddItemCta.react",
	"WAWebProductCatalogCatalogConstants",
	"WAWebProductCatalogCatalogDrawerMenu.react",
	"WAWebProductCatalogCheckCartEnabled",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogFetchState",
	"WAWebProductCatalogFetchStateTopBar.react",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductListDrawerHeader.react",
	"WAWebProductCollectionCatalogCategoriesBanner",
	"WAWebProductCollectionCatalogPostcodeMenu",
	"WAWebProductCollectionsList.react",
	"WAWebShouldShowAdCreationEntryPoint",
	"WAWebToastManager",
	"WAWebUtilsLogQplEvents",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSText.react",
	"getErrorSafe",
	"qpl",
	"react",
	"stylex",
	"useWAWebContactValues",
	"useWAWebDebouncedCallback",
	"useWAWebForceUpdate",
	"useWAWebThrottledCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d, m = d || (d = o("react")), p = d, _ = p.useContext, f = p.useEffect, g = p.useMemo, h = p.useState, y = {
		padding15: {
			paddingTop: "xqy66fx",
			paddingInlineEnd: "x1q3ajuy",
			paddingBottom: "xr1496l",
			paddingInlineStart: "x1gx403c",
			$$css: !0
		},
		paddingInlineStart25: {
			paddingInlineStart: "xvahy20",
			$$css: !0
		}
	}, C = r("qpl")._(774781666, "3445"), b = { list: {
		flex: "x1okw0bk",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} };
	function v(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.autoUpdate, l = a.businessProfile, c = a.canLogQpl, d = c === void 0 ? !0 : c, p = a.canManageCatalog, y = a.catalogId, b = a.contact, v = a.isInitialStep, R = v === void 0 ? !1 : v, L = a.onAddProduct, E = a.onBack, k = a.onCartClick, I = a.onCatalogLinkClick, T = a.onCollectionSeeAll, D = a.onEditCollection, x = a.onOpenCollections, $ = a.onOpenMerchantDetailsForm, P = a.onOpenSettings, N = a.onProductDetail, M = a.onProductShare, w = a.onRemoveProduct, A = a.scrollOffset, F = a.setScrollOffset, O = _(o("WAWebDrawerContext").DrawerContext), B = o("WAWebDirectConnectionGatingUtils").enablePostcodeInCatalog() && !!l && o("WAWebBusinessDirectUtils").businessSupportsPostcode(l), W = r("useWAWebUnmountSignal")(), q = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), U = r("useWAWebDebouncedCallback")(q, 100), V = g(function() {
			return new (r("WAWebFlatListController"))();
		}, []), H = o("useWAWebContactValues").useContactValues(b.id, [o("WAWebContactGetters").getId]), G = H[0], z = g(function() {
			return o("WAWebCartCollection").CartCollection.findCart(G.toString());
		}, [G]), j = h(!1), K = j[0], Q = j[1], X = h(null), Y = X[0], J = X[1], Z = h(z.itemCount), ee = Z[0], te = Z[1], ne = h("NONE"), re = ne[0], oe = ne[1], ae = h(null), ie = ae[0], le = ae[1], se = h(null), ue = se[0], ce = se[1], de = h(!0), me = de[0], pe = de[1], _e = async function(t) {
			await (t == null ? void 0 : t.loadInitialItems()), pe(!1);
		}, fe = r("useWAWebDebouncedCallback")(function() {
			q(), w == null || w();
		}, 100), ge = function(t) {
			i && t != null && (t.productCollection.on("add", U), t.productCollection.on("remove", fe), t.collections.on("add", U), t.collections.on("remove", U));
		}, he = h(), ye = he[0], Ce = he[1], be = h(!1), ve = be[0], Se = be[1], Re = function() {
			var e = d, t = e ? C : void 0;
			o("WAWebCatalogCollection").CatalogCollection.find(y, { markerId: t }).then(function(t) {
				if (!W.aborted) {
					var n = new (o("WAWebBizCatalogUtils")).CatalogWithCollectionsDataSource({
						canLogQpl: e,
						catalog: t,
						forCatalogManager: p || !1,
						listItemHeight: o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT
					}), r = new (o("WAWebBizCatalogUtils")).CatalogListItemScrollHelper(n);
					J(t), le(n), ce(r), oe("SUCCESS"), _e(n).then(function() {
						e && o("WAWebUtilsLogQplEvents").qplEndCatalogCollectionsView(2);
					}).catch(function() {
						e && o("WAWebUtilsLogQplEvents").qplEndCatalogCollectionsView(3);
					}), ge(t), A !== void 0 && V.setScrollFromStart(A);
				}
			}).catch(function(t) {
				e && o("WAWebUtilsLogQplEvents").qplEndCatalogCollectionsView(3), o("WAWebProductCatalogFetchState").parseErrorState(r("getErrorSafe")(t), function(e) {
					oe(e), pe(!1);
				});
			});
		}, Le = function() {
			if (B) {
				Se(!0);
				var e = new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					""
				)), t = r("WAWebBusinessDirectConnectionCollection").getCypher(y).then(function(e) {
					Ce(e), Se(!1), Re();
				}).catch(function() {
					throw pe(!1), new (o("WAWebActionToast.react")).ActionType(s._(
						/*BTDS*/
						""
					));
				});
				o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebActionToast.react").ActionToast, {
					initialAction: e,
					pendingAction: t
				}));
			} else Re();
		};
		f(function() {
			Le(), r("WAWebProductCatalogCheckCartEnabled")(y).then(function(e) {
				Q(e), e && z.on("change:cartItemCollection", function() {
					return te(z.itemCount);
				}), o("WAWebProductCatalogLogEvents").logCatalogListView({
					catalogOwnerWid: y,
					catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(O),
					cartToggle: e
				});
			}).catch(function() {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebProductCollectionCatalogViewDrawer] cartEnabled ✗"])));
			});
		}, []);
		var Ee = r("useWAWebThrottledCallback")(function(e, t) {
			F == null || F(t.scrollTop), ue != null && ue.willLoadMore(t) && pe(!0), ue == null || ue.onScroll(e, t).then(function(e) {
				e && pe(!1);
			}).catch(function(e) {
				throw pe(!1), e;
			});
		}, 100), ke = function(t) {
			Ee(t, t.currentTarget);
		}, Ie = function() {
			o("WAWebUtilsLogQplEvents").qplStartCartView("Catalog"), k == null || k(G.toString());
		}, Te = function() {
			Y && (I(Y, b), o("WAWebProductCatalogLogEvents").logCatalogShareLinkClick({
				catalogOwnerWid: y,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(O)
			}));
		}, De = o("WAWebActiveAccountInfoContext.react").getActiveAccountInfo(), xe = {};
		R ? xe.onCancel = E : xe.onBack = E;
		var $e;
		if (p === !0 && De != null && o("WAWebShouldShowAdCreationEntryPoint").getShouldShowAdCreationEntryPoint()) {
			var Pe = Y == null ? void 0 : Y.getMostRecentlyApprovedProduct(), Ne = Pe == null ? void 0 : Pe.id.toString();
			if (Ne != null) {
				var Me = {
					activeAccountInfo: De,
					sourceAdCreation: "whatsapp_smb_web_catalog",
					productId: Ne
				};
				$e = { adCreationUrlInput: Me };
			}
		}
		var we = o("WAWebProductCatalogCatalogDrawerMenu.react").getCatalogDrawerMenu({
			onSendCatalog: Te,
			onCartClick: K ? Ie : void 0,
			cartCount: ee,
			catalogId: y.toString(),
			canManageCatalog: p,
			onOpenCollections: x,
			onOpenMerchantDetailsForm: $,
			onOpenSettings: P,
			boostMenuOptionInput: $e
		}), Ae = g(function() {
			return { surface: p ? "smb-catalog" : "catalog-home" };
		}, [p]);
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "products",
			onDrop: E,
			tsNavigationData: Ae,
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				menu: we,
				focusBackOrCancel: !0
			}, xe)), m.jsx(r("WAWebDrawerBody.react"), {
				onScroll: ke,
				flatListControllers: [V],
				children: m.jsx(S, {
					cartEnabled: K,
					contact: b,
					handleCartClick: Ie,
					onProductDetail: N,
					onCartClick: k,
					catalog: Y,
					dataSource: ie,
					businessProfile: l,
					canManageCatalog: p,
					onAddProduct: L,
					onProductShare: M,
					onCollectionSeeAll: T,
					onOpenCollections: x,
					onEditCollection: D,
					catalogFetchState: re,
					directConnectionPostcodeEnabled: B,
					loadingDirectConnectionInfo: ve,
					businessDirectConnection: ye,
					loadingMore: me,
					postcodeChangeSuccess: function() {
						o("WAWebCatalogCollection").CatalogCollection.removeCatalog(y), J(null), le(null), ce(null), oe("NONE"), pe(!0), Le();
					}
				})
			})]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		"use no forget";
		var t, n = e.businessDirectConnection, a = e.businessProfile, i = e.canManageCatalog, l = e.cartEnabled, u = e.catalog, d = e.catalogFetchState, p = e.contact, _ = e.dataSource, f = e.directConnectionPostcodeEnabled, g = e.handleCartClick, h = e.loadingDirectConnectionInfo, C = e.loadingMore, v = e.onAddProduct, S = e.onCartClick, L = e.onCollectionSeeAll, E = e.onEditCollection, k = e.onOpenCollections, I = e.onProductDetail, T = e.onProductShare, D = e.postcodeChangeSuccess, x = l && S ? g : void 0, $;
		i && v && !o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog() && ($ = m.jsx(r("WAWebManageAddItemCta.react"), {
			onClick: v,
			theme: "collections",
			testid: "add-item"
		}));
		var P;
		if (u && i && o("WAWebLinkedCatalogHelper").isLinkedCatalog(u.id) && o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled()) {
			var N = m.jsx(r("WAWebClickableLink.react"), {
				href: o("WAWebFaqUrl").getSMBLinkedCatalogUrl(),
				onClick: R,
				children: s._(
					/*BTDS*/
					""
				)
			});
			P = m.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [y.padding15, y.paddingInlineStart25],
				align: "center",
				children: [m.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, { xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd4 }), m.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						"",
						[s._param("learn_more_link", N)]
					)
				})]
			});
		}
		var M;
		if (u && i && E && !o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog()) {
			var w = u.productCollection.getProductModels(!0).some(function(e) {
				return !e.isHidden && e.reviewStatus !== "REJECTED";
			});
			M = w ? m.jsx(r("WAWebManageAddItemCta.react"), {
				onClick: function() {
					E(null);
				},
				theme: "collections",
				title: s._(
					/*BTDS*/
					""
				),
				testid: "add-collection"
			}) : null;
		}
		var A, F;
		return u && _ ? (A = m.jsx(r("WAWebProductCollectionsList.react"), {
			onCartOpen: x,
			onProductDetail: I,
			catalog: u,
			canManageCatalog: i,
			shareLinks: i,
			onProductShare: T,
			onCollectionSeeAll: L,
			data: _.getData(),
			onEditCollection: E
		}), i && !o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog() && (F = m.jsx(r("WAWebCatalogNuxBanners.react"), { onOpenCollections: k }))) : A = m.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), { fetchState: d }), m.jsxs(m.Fragment, { children: [a && m.jsxs(m.Fragment, { children: [
			m.jsx("div", {
				"data-testid": "catalog-header",
				className: "x1okw0bk",
				children: m.jsx(r("WAWebProductCatalogProductListDrawerHeader.react"), {
					profilePicThumb: p.getProfilePicThumb(),
					contact: p,
					businessProfile: a
				})
			}),
			u && o("WAWebABProps").getABPropConfigValue("catalog_categories_enabled") && (t = a.directConnection) != null && t.enabled ? m.jsx(r("WAWebProductCollectionCatalogCategoriesBanner"), { catalog: u }) : null,
			u && f && !h && n && m.jsx(o("WAWebProductCollectionCatalogPostcodeMenu").CatalogPostcodeMenu, {
				catalog: u,
				businessDirectConnection: n,
				postcodeChangeSuccess: D
			})
		] }), m.jsxs("div", babelHelpers.extends({ "data-testid": "catalog-items" }, (c || (c = r("stylex"))).props(b.list, o("WDSPaddings.stylex").wdsPaddings.paddingBottom8, a && o("WDSMargins.stylex").wdsMargins.marginTop8), { children: [
			F,
			P,
			$,
			M,
			A,
			C && m.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {})
		] }))] });
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getSMBLinkedCatalogUrl());
	}
	l.default = v;
}), 226);
