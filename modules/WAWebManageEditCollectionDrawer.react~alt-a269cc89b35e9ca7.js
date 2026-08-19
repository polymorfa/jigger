__d("WAWebManageEditCollectionDrawer.react", [
	"fbt",
	"WAAbortError",
	"WAWebBizCatalogUtils",
	"WAWebCollectionsFolderIcon.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebFlatListController",
	"WAWebFlatListLoadingSpinnerItem.react",
	"WAWebManageActions",
	"WAWebManageCollectionProductsSelectionList.react",
	"WAWebMultiSelection",
	"WAWebNoop",
	"WAWebProductCatalogCatalogConstants",
	"WAWebProductCatalogContext",
	"WAWebProductCollectionLogEvents",
	"WAWebQplFlowWrapper",
	"WAWebRichTextField.react",
	"WAWebRound.react",
	"WAWebSingleSelection",
	"WAWebSpinner.react",
	"WDSIconIcCheck.react",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"qpl",
	"react",
	"stylex",
	"useWAWebForceUpdate",
	"useWAWebThrottledCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useMemo, f = m.useState, g = {
		paddingTop5: {
			paddingTop: "x123j3cw",
			$$css: !0
		},
		paddingInlineStart10: {
			paddingInlineStart: "xe2zdcy",
			$$css: !0
		}
	}, h = {
		footer: {
			zIndex: "xfo81ep",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			width: "xh8yej3",
			height: "xpyat2d",
			color: "x17t9dm2",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		operation: {
			color: "x1v5yvga",
			$$css: !0
		},
		submitButton: {
			backgroundColor: "xyp3urf",
			color: "x17t9dm2",
			$$css: !0
		}
	}, y = r("qpl")._(774777483, "3443");
	function C(e) {
		var t = e.errorName, n = e.onChange, r = e.value;
		return d.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "edit_collection_name_textfield",
			editable: !0,
			focusOnMount: !0,
			showRemaining: !0,
			value: r,
			onChange: function(t) {
				var e = t.text;
				n(e);
			},
			inputPlaceholder: s._(
				/*BTDS*/
				""
			),
			theme: "text-input",
			error: t,
			maxLength: 30
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.onClick, n = e.updated, a = s._(
			/*BTDS*/
			"",
			[s._plural(n, "updated")]
		);
		return d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([h.footer, o("WDSPaddings.stylex").wdsPaddings.paddingHor24]), { children: [a, d.jsx("div", babelHelpers.extends({}, u.props(o("WDSPaddings.stylex").wdsPaddings.padding12), { children: d.jsx(o("WAWebRound.react").Round, {
			large: !0,
			onClick: t,
			xstyle: h.submitButton,
			testid: "edit_collection_save_button",
			children: d.jsx(r("WDSIconIcCheck.react"), { testid: "checkmark-medium" })
		}) }))] }));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.collection, n = e.handleScroll, a = e.nameInfo, i = e.selectionList, l = e.syncInfo, c = a.errorName, m = a.handleNameChange, p = a.name, _ = l.handleSave, f = l.isUpdating, y = l.loadingMore, v = l.syncSelection, S = f ? d.jsx("div", {
			className: "x10l6tqk xh0rhid xbudbmw xupqr0c x11lhmoz",
			children: d.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 3
			})
		}) : null, R = v();
		return d.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, { children: function(a) {
			var e = o("WAWebProductCatalogContext").getProductCatalogContext(a);
			return d.jsxs(d.Fragment, { children: [
				S,
				d.jsxs("div", {
					className: "x1n2onr6",
					children: [d.jsx("span", {
						className: "x1n2onr6 xyc4j8s x1rg5ohu xni59qk x1a33avv x13k8ehh",
						children: d.jsx(o("WAWebCollectionsFolderIcon.react").CollectionsFolderIcon, {})
					}), d.jsx("span", {
						className: "x1rg5ohu x65xoit xnxb3zj x16dsc37 x889kno",
						children: d.jsx(C, {
							onChange: m,
							value: p,
							errorName: c
						})
					})]
				}),
				d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([
					h.operation,
					g.paddingTop5,
					o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
					o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
					g.paddingInlineStart10
				]), { children: t ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				) })),
				d.jsxs("div", {
					className: "xb8htw9 xw2csxc x1odjw0f",
					onScroll: n,
					children: [i, y && d.jsx("div", {
						className: "xrvj5dj xl56j7k x1qx5ct2",
						children: d.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {})
					})]
				}),
				R > 0 || t && p !== t.name ? d.jsx(b, {
					updated: R,
					onClick: function() {
						_(e);
					}
				}) : null
			] });
		} });
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(t) {
		"use no forget";
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = l.catalog, c = l.collection, m = l.onBack, g = _(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}, []), h = _(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}, []), C = _(function() {
			return new (r("WAWebFlatListController"))();
		}, []), b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), S = r("useWAWebUnmountSignal")(), R = f(null), L = R[0], E = R[1], k = f(c == null ? void 0 : c.name), I = k[0], T = k[1], D = f(c == null ? void 0 : c.name), x = D[0], $ = D[1], P = f(null), N = P[0], M = P[1], w = f(!1), A = w[0], F = w[1], O = f(!0), B = O[0], W = O[1], q = function() {
			var e = new (o("WAWebBizCatalogUtils")).CollectionsContentDataSource(u, o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT, c == null ? void 0 : c.id), t = new (o("WAWebBizCatalogUtils")).CatalogListItemScrollHelper(e);
			E(t), e.loadInitialItems().then(function() {
				if (S.aborted) throw new (o("WAAbortError")).AbortError();
				W(!1), b();
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
		};
		p(function() {
			q();
		}, []);
		var U = function(t) {
			T(t), N != null && t && M(null);
		}, V = r("useWAWebThrottledCallback")(function(e) {
			var t = e.currentTarget;
			L != null && L.willLoadMore(t) && W(!0), L == null || L.onScroll(e, t).then(function(e) {
				W(!1), e && W(!1);
			}).catch(function(e) {
				throw W(!1), e;
			});
		}, 100), H = function(t) {
			return h.list.findIndex(function(e) {
				return e.id.toString() === t;
			});
		}, G = function(t) {
			return H(t) !== -1;
		}, z = function(t) {
			var e = H(t);
			return e !== -1 && !!h.selected[e];
		}, j = function(t, n, r) {
			r === void 0 && (r = !0);
			var e = t.id.toString(), o = H(e);
			o !== -1 ? h.set(o, n, r) : h.setVal(t, n, r);
		}, K = function() {
			var e = u.productCollection.getProductModels(!0), t = 0;
			return e.forEach(function(e) {
				var n = e.id.toString();
				G(n) ? e.checkmark !== z(n) && t++ : h.setVal(e, e.checkmark);
			}), t;
		}, Q = function() {
			var e = u.productCollection.getProductModels(!0), t = [], n = [];
			return e.forEach(function(e) {
				var r = z(e.id.toString());
				e.checkmark !== r && (r ? n.push(e) : t.push(e));
			}), {
				added: n,
				removed: t
			};
		}, X = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = o("WAWebProductCatalogContext").getProductCatalogContext(e);
				if (I == null || I.trim() === "") M(s._(
					/*BTDS*/
					""
				));
				else {
					o("WAWebQplFlowWrapper").QPL.markerStart(y), F(!0);
					var n = Q(), r = n.added, a = n.removed, i = I !== x;
					o("WAWebQplFlowWrapper").QPL.markerAnnotate(y, {
						bool: { IsNew: !c },
						int: { ProductsAdded: r.length }
					}), c && o("WAWebQplFlowWrapper").QPL.markerAnnotate(y, {
						bool: { Renamed: i },
						int: { ProductsDeleted: a.length }
					});
					try {
						var l = yield o("WAWebManageActions").handleCollectionSave(u, c, I, r, a, t);
						if (l) {
							if (m(), c) {
								var d = c.id;
								i && (o("WAWebProductCollectionLogEvents").logCollectionRenamed({
									catalogContext: t,
									collectionId: d
								}), $(I)), o("WAWebProductCollectionLogEvents").logCollectionItemsAssignment({
									collectionId: d,
									addedCount: r.length,
									removedCount: a.length,
									catalogContext: t
								});
							}
							o("WAWebQplFlowWrapper").QPL.markerEnd(y, 2);
						} else F(!1), o("WAWebQplFlowWrapper").QPL.markerDrop(y);
					} catch (e) {
						F(!1), o("WAWebQplFlowWrapper").QPL.markerEnd(y, 3);
					}
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), Y = {
			0: "x1n2onr6 xupqr0c x78zum5 x98rzlu xdt5ytf x6ikm8r x1odjw0f",
			1: "x1n2onr6 xupqr0c x78zum5 x98rzlu xdt5ytf x6ikm8r x1odjw0f x47corl xbyyjgo"
		}[!!A << 0], J = ((a = l.collection) == null ? void 0 : a.name) || s._(
			/*BTDS*/
			""
		), Z = function(t) {
			X(t);
		};
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "products",
			onDrop: l.onBack,
			tsNavigationData: { surface: c ? "smb-catalog-edit-collection" : "smb-catalog-new-collection" },
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: J,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: l.onBack
			}), d.jsx(r("WAWebDrawerBody.react"), {
				className: Y,
				flatListControllers: [C],
				children: d.jsx(v, {
					nameInfo: {
						name: I,
						errorName: N,
						handleNameChange: U
					},
					syncInfo: {
						isUpdating: A,
						loadingMore: B,
						syncSelection: K,
						handleSave: Z
					},
					collection: c,
					handleScroll: V,
					selectionList: d.jsx(r("WAWebManageCollectionProductsSelectionList.react"), {
						catalog: u,
						flatListController: C,
						active: g,
						selections: h,
						onProductSelect: j,
						onSelectionChanged: b
					})
				})
			})]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);
