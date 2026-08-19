__d("WAWebProductCollectionCollectionsManagementDrawer.react", [
	"fbt",
	"WAArrayDiff",
	"WAArrayMove",
	"WAArraysShallowEqual",
	"WAWebBizCatalogUtils",
	"WAWebButton.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebFlatListController",
	"WAWebFlatListLoadingSpinnerItem.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebLinkedCatalogHelper",
	"WAWebManageActions",
	"WAWebManageAddItemCta.react",
	"WAWebProductCatalogCatalogConstants",
	"WAWebProductCatalogContext",
	"WAWebProductCollectionCollectionsList.react",
	"WAWebProductCollectionCollectionsManagementDrawerMenu",
	"WAWebSelfCatalogLookup",
	"WAWebSpinner.react",
	"WAWebUA",
	"WAWebUtilsLogQplEvents",
	"react",
	"useWAWebOnUnmount",
	"useWAWebStableCallback",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useMemo, g = d.useRef, h = d.useState, y = {
		footer: {
			backgroundColor: "xhjsbib",
			$$css: !0
		},
		reorderLoadingScreen: {
			minWidth: "xgqtt45",
			minHeight: "x1us19tq",
			position: "x10l6tqk",
			zIndex: "xjhb59c",
			backgroundColor: "x1nuwr84",
			transitionProperty: "x15406qy",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "xwji4o3",
			$$css: !0
		},
		paddingAll12: {
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		paddingBottom20: {
			paddingBottom: "xv6tirj",
			$$css: !0
		}
	};
	function C(e) {
		var t = e.disableBtn, n = t === void 0 ? !1 : t, r = e.isLoading, a = e.onClick;
		return c.jsx(o("WAWebFlex.react").FlexContainer, {
			xstyle: [
				y.footer,
				y.paddingAll12,
				y.paddingBottom20
			],
			direction: "horizontal",
			justify: "end",
			children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
				onClick: a,
				disabled: n,
				spinner: r,
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: y.reorderLoadingScreen,
			align: "center",
			justify: "center",
			testid: "collection-reorder-updating-loading",
			children: c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 4,
				color: "accent"
			}) })
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.catalog, n = e.catalogFlatListController, a = e.checkIfCollectionIsDirty, i = e.drawerRef, l = e.editCollection, u = e.handleReorderMove, d = e.isLoadingMore, m = e.isReorder, p = e.onSeeCollection, _ = e.reorderedCollection;
		return t ? c.jsxs("div", { children: [
			!m && !o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog() && c.jsx(r("WAWebManageAddItemCta.react"), {
				onClick: function() {
					l(null);
				},
				theme: "collections",
				title: s._(
					/*BTDS*/
					""
				)
			}),
			_.length !== 0 && c.jsx(r("WAWebProductCollectionCollectionsList.react"), {
				canManage: !0,
				catalog: t,
				onEditCollection: l,
				data: _,
				flatListController: n,
				onSeeCollection: p,
				isReorder: m,
				handleReorderMove: u,
				containerRef: i,
				onFinalDropOfItem: a
			}),
			d && c.jsx("div", {
				className: "xrvj5dj xl56j7k x1qx5ct2",
				children: c.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {})
			})
		] }) : null;
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.editCollection, l = a.isReorder, u = l === void 0 ? !1 : l, d = a.onBack, y = a.onReorderCollection, S = a.onSeeCollection, R = a.setScrollOffset, L = f(function() {
			return new (r("WAWebFlatListController"))();
		}, []), E = g(null), k = h(!0), I = k[0], T = k[1], D = g(null), x = h(null), $ = x[0], P = x[1], N = h([]), M = N[0], w = N[1], A = h(!1), F = A[0], O = A[1], B = h(!1), W = B[0], q = B[1], U = g(!0), V = p(o("WAWebDrawerContext").DrawerContext), H = f(function() {
			return o("WAWebSelfCatalogLookup").getSelfCatalog();
		}, []), G = m(function(e) {
			var t = async function() {
				if (H) try {
					var t = new (o("WAWebBizCatalogUtils")).CollectionsDataSource(H, !0, o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT, e);
					if (await (t == null ? void 0 : t.loadInitialItems()), !U.current || !t) return;
					var n = new (o("WAWebBizCatalogUtils")).CatalogListItemScrollHelper(t);
					D.current = t, P(n), w(t.getData()), T(!1), e && o("WAWebUtilsLogQplEvents").qplEndCollectionsManagementView(2);
				} catch (t) {
					e && o("WAWebUtilsLogQplEvents").qplEndCollectionsManagementView(3);
				}
			};
			t();
		}, [H]);
		_(function() {
			if (H) {
				var e = a.isPushed, t = e === void 0 ? !0 : e;
				H.collections.on("add remove", function() {
					!U.current || !D.current || w(function(e) {
						var t, n = ((t = D.current) == null ? void 0 : t.getData()) || [];
						return u ? [].concat(e, n.slice(e.length)) : n;
					});
				}), G(t && !u);
			}
		}, []);
		var z = r("useWAWebThrottledCallback")(function(e, t) {
			R == null || R(t.scrollTop), $ != null && $.willLoadMore(t) && T(!0), $ == null || $.onScroll(e, t).then(function(e) {
				e && T(!1);
			}).catch(function(e) {
				throw T(!1), e;
			});
		}, 100), j = function(t) {
			t.currentTarget && z(t, t.currentTarget);
		}, K = m(function(e, t) {
			w(function(n) {
				return o("WAArrayMove").arrayMove(n, e, t);
			});
		}, []), Q = r("useWAWebStableCallback")(function() {
			var e = (H == null ? void 0 : H.collections.map(function(e) {
				return e.id;
			})) || [], t = M.reduce(function(e, t) {
				return t.collection && e.push(t.collection.id), e;
			}, []);
			O(!r("WAArraysShallowEqual")(e, t));
		});
		r("useWAWebOnUnmount")(function() {
			U.current = !1;
		});
		var X = m(function() {
			var e = async function() {
				try {
					var e;
					if (!H) return;
					q(!0);
					var t = o("WAWebProductCatalogContext").getProductCatalogContext(V), n = (H == null ? void 0 : H.collections.map(function(e) {
						return e.id;
					})) || [], r = M.reduce(function(e, t) {
						return t.collection && e.push(t.collection.id), e;
					}, []), a = o("WAArrayDiff").findArrayDiff(n, r), i = a.moved;
					if (!i.length) {
						q(!1), O(!1);
						return;
					}
					var l = await o("WAWebManageActions").handleCollectionReorder(i, t);
					if (!U.current || !D.current) return;
					if ((e = D.current) == null || e.resetData(), l) {
						d();
						return;
					}
					await G(!1), O(!1);
				} finally {
					U.current && q(!1);
				}
			};
			e();
		}, [
			M,
			H,
			d,
			V,
			G
		]);
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "products",
			tsNavigationData: {
				surface: "unknown",
				viewName: "catalog-collections-management"
			},
			children: [
				c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: u ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: a.onBack,
					menu: c.jsx(r("WAWebProductCollectionCollectionsManagementDrawerMenu"), {
						isReorderEnabled: !o("WAWebUA").UA.isSafari && !u && M.length > 1,
						onReorder: y
					})
				}),
				c.jsx(r("WAWebDrawerBody.react"), {
					ref: E,
					onScroll: j,
					flatListControllers: [L],
					scrollOffset: a.scrollOffset,
					children: c.jsx(v, {
						catalog: H,
						isReorder: u,
						isLoadingMore: I,
						reorderedCollection: M,
						editCollection: i,
						onSeeCollection: S,
						handleReorderMove: K,
						checkIfCollectionIsDirty: Q,
						catalogFlatListController: L,
						drawerRef: E.current
					})
				}),
				u && c.jsx(C, {
					disableBtn: !F || W,
					isLoading: W,
					onClick: X
				}),
				W && c.jsx(b, {})
			]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);
