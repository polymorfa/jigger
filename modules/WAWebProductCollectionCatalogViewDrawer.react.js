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
	"asyncToGeneratorRuntime",
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
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, u), l = i.autoUpdate, c = i.businessProfile, d = i.canLogQpl, p = d === void 0 ? !0 : d, y = i.canManageCatalog, b = i.catalogId, v = i.contact, R = i.isInitialStep, L = R === void 0 ? !1 : R, E = i.onAddProduct, k = i.onBack, I = i.onCartClick, T = i.onCatalogLinkClick, D = i.onCollectionSeeAll, x = i.onEditCollection, $ = i.onOpenCollections, P = i.onOpenMerchantDetailsForm, N = i.onOpenSettings, M = i.onProductDetail, w = i.onProductShare, A = i.onRemoveProduct, F = i.scrollOffset, O = i.setScrollOffset, B = _(o("WAWebDrawerContext").DrawerContext), W = o("WAWebDirectConnectionGatingUtils").enablePostcodeInCatalog() && !!c && o("WAWebBusinessDirectUtils").businessSupportsPostcode(c), q = r("useWAWebUnmountSignal")(), U = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), V = r("useWAWebDebouncedCallback")(U, 100), H = g(function() {
			return new (r("WAWebFlatListController"))();
		}, []), G = o("useWAWebContactValues").useContactValues(v.id, [o("WAWebContactGetters").getId]), z = G[0], j = g(function() {
			return o("WAWebCartCollection").CartCollection.findCart(z.toString());
		}, [z]), K = h(!1), Q = K[0], X = K[1], Y = h(null), J = Y[0], Z = Y[1], ee = h(j.itemCount), te = ee[0], ne = ee[1], re = h("NONE"), oe = re[0], ae = re[1], ie = h(null), le = ie[0], se = ie[1], ue = h(null), ce = ue[0], de = ue[1], me = h(!0), pe = me[0], _e = me[1], fe = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield e == null ? void 0 : e.loadInitialItems(), _e(!1);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), ge = r("useWAWebDebouncedCallback")(function() {
			U(), A == null || A();
		}, 100), he = function(t) {
			l && t != null && (t.productCollection.on("add", V), t.productCollection.on("remove", ge), t.collections.on("add", V), t.collections.on("remove", V));
		}, ye = h(), Ce = ye[0], be = ye[1], ve = h(!1), Se = ve[0], Re = ve[1], Le = function() {
			var e = p, t = e ? C : void 0;
			o("WAWebCatalogCollection").CatalogCollection.find(b, { markerId: t }).then(function(t) {
				if (!q.aborted) {
					var n = new (o("WAWebBizCatalogUtils")).CatalogWithCollectionsDataSource({
						canLogQpl: e,
						catalog: t,
						forCatalogManager: y || !1,
						listItemHeight: o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT
					}), r = new (o("WAWebBizCatalogUtils")).CatalogListItemScrollHelper(n);
					Z(t), se(n), de(r), ae("SUCCESS"), fe(n).then(function() {
						e && o("WAWebUtilsLogQplEvents").qplEndCatalogCollectionsView(2);
					}).catch(function() {
						e && o("WAWebUtilsLogQplEvents").qplEndCatalogCollectionsView(3);
					}), he(t), F !== void 0 && H.setScrollFromStart(F);
				}
			}).catch(function(t) {
				e && o("WAWebUtilsLogQplEvents").qplEndCatalogCollectionsView(3), o("WAWebProductCatalogFetchState").parseErrorState(r("getErrorSafe")(t), function(e) {
					ae(e), _e(!1);
				});
			});
		}, Ee = function() {
			if (W) {
				Re(!0);
				var e = new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					""
				)), t = r("WAWebBusinessDirectConnectionCollection").getCypher(b).then(function(e) {
					be(e), Re(!1), Le();
				}).catch(function() {
					throw _e(!1), new (o("WAWebActionToast.react")).ActionType(s._(
						/*BTDS*/
						""
					));
				});
				o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebActionToast.react").ActionToast, {
					initialAction: e,
					pendingAction: t
				}));
			} else Le();
		};
		f(function() {
			Ee(), r("WAWebProductCatalogCheckCartEnabled")(b).then(function(e) {
				X(e), e && j.on("change:cartItemCollection", function() {
					return ne(j.itemCount);
				}), o("WAWebProductCatalogLogEvents").logCatalogListView({
					catalogOwnerWid: b,
					catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(B),
					cartToggle: e
				});
			}).catch(function() {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebProductCollectionCatalogViewDrawer] cartEnabled ✗"])));
			});
		}, []);
		var ke = r("useWAWebThrottledCallback")(function(e, t) {
			O == null || O(t.scrollTop), ce != null && ce.willLoadMore(t) && _e(!0), ce == null || ce.onScroll(e, t).then(function(e) {
				e && _e(!1);
			}).catch(function(e) {
				throw _e(!1), e;
			});
		}, 100), Ie = function(t) {
			ke(t, t.currentTarget);
		}, Te = function() {
			o("WAWebUtilsLogQplEvents").qplStartCartView("Catalog"), I == null || I(z.toString());
		}, De = function() {
			J && (T(J, v), o("WAWebProductCatalogLogEvents").logCatalogShareLinkClick({
				catalogOwnerWid: b,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(B)
			}));
		}, xe = o("WAWebActiveAccountInfoContext.react").getActiveAccountInfo(), $e = {};
		L ? $e.onCancel = k : $e.onBack = k;
		var Pe;
		if (y === !0 && xe != null && o("WAWebShouldShowAdCreationEntryPoint").getShouldShowAdCreationEntryPoint()) {
			var Ne = J == null ? void 0 : J.getMostRecentlyApprovedProduct(), Me = Ne == null ? void 0 : Ne.id.toString();
			if (Me != null) {
				var we = {
					activeAccountInfo: xe,
					sourceAdCreation: "whatsapp_smb_web_catalog",
					productId: Me
				};
				Pe = { adCreationUrlInput: we };
			}
		}
		var Ae = o("WAWebProductCatalogCatalogDrawerMenu.react").getCatalogDrawerMenu({
			onSendCatalog: De,
			onCartClick: Q ? Te : void 0,
			cartCount: te,
			catalogId: b.toString(),
			canManageCatalog: y,
			onOpenCollections: $,
			onOpenMerchantDetailsForm: P,
			onOpenSettings: N,
			boostMenuOptionInput: Pe
		}), Fe = g(function() {
			return { surface: y ? "smb-catalog" : "catalog-home" };
		}, [y]);
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "products",
			onDrop: k,
			tsNavigationData: Fe,
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				menu: Ae,
				focusBackOrCancel: !0
			}, $e)), m.jsx(r("WAWebDrawerBody.react"), {
				onScroll: Ie,
				flatListControllers: [H],
				children: m.jsx(S, {
					cartEnabled: Q,
					contact: v,
					handleCartClick: Te,
					onProductDetail: M,
					onCartClick: I,
					catalog: J,
					dataSource: le,
					businessProfile: c,
					canManageCatalog: y,
					onAddProduct: E,
					onProductShare: w,
					onCollectionSeeAll: D,
					onOpenCollections: $,
					onEditCollection: x,
					catalogFetchState: oe,
					directConnectionPostcodeEnabled: W,
					loadingDirectConnectionInfo: Se,
					businessDirectConnection: Ce,
					loadingMore: pe,
					postcodeChangeSuccess: function() {
						o("WAWebCatalogCollection").CatalogCollection.removeCatalog(b), Z(null), se(null), de(null), ae("NONE"), _e(!0), Ee();
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
