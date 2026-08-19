__d("WAWebBizCatalogManagementFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAFilteredCatch",
	"WALogger",
	"WAWebBackendErrors",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizComplianceUtil",
	"WAWebBizEditProductFlow",
	"WAWebBizProductCatalogBridge",
	"WAWebBizShowCartAction",
	"WAWebBusinessProfileCollection",
	"WAWebCatalogCollection",
	"WAWebCatalogGetters",
	"WAWebCatalogRecoveryDrawer.react",
	"WAWebComplianceInfo.react",
	"WAWebContactCollection",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebManageEditCollectionDrawer.react",
	"WAWebManageNewCatalogDrawer.react",
	"WAWebMerchantDetailsFormFlowLoadable",
	"WAWebProductCatalogCatalogLinkDrawer.react",
	"WAWebProductCatalogCatalogSettingsDrawer.react",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductLinkDrawer.react",
	"WAWebProductCollectionCatalogViewDrawer.react",
	"WAWebProductCollectionCollectionContentDrawer.react",
	"WAWebProductCollectionCollectionsManagementDrawer.react",
	"WAWebProductCollectionLogEvents",
	"WAWebProductModel",
	"WAWebQplFlowWrapper",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUim",
	"WAWebUserPrefsMeUser",
	"WAWebUtilsLogQplEvents",
	"asyncToGeneratorRuntime",
	"nullthrows",
	"qpl",
	"react",
	"useWAWebCatalogRecovery",
	"useWAWebCatalogValues",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = ["ref"], p = ["ref"], _, f = _ || (_ = o("react")), g = _, h = g.useCallback, y = g.useContext, C = g.useEffect, b = g.useRef, v = g.useState, S = n("$InternalEnum").Mirrored([
		"YES",
		"NO",
		"PENDING"
	]), R = r("qpl")._(774769395, "3439"), L = r("qpl")._(774781666, "3445"), E = r("qpl")._(774768970, "3447"), k = n("$InternalEnum").Mirrored([
		"CollectionContent",
		"CatalogView",
		"NewCatalog",
		"ComplianceForm",
		"MerchantDetails",
		"EditCollection",
		"OpenCollections",
		"ReorderCollections",
		"SeeCollection",
		"CatalogSettings"
	]);
	function I(e) {
		var t, a = e.ref, i = babelHelpers.objectWithoutPropertiesLoose(e, m), l = o("useWAWebFlow").useFlow(), u = l[0], c = l[1], d = v(null), p = d[0], _ = d[1], g = v(!1), y = g[0], S = g[1], R = b(!1), I = b(!1), D = function(t) {
			_(t), c.push(k.CollectionContent);
		}, x = h(function(e) {
			S(e), c.push(k.CatalogView);
		}, [c]), $ = function(t) {
			o("WAWebDrawerManager").DrawerManager.openDrawerMid(f.jsx(r("WAWebBizEditProductFlow"), {
				catalog: r("nullthrows")(i.catalog),
				product: t
			}), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				newDrawerContext: i.context,
				transition: "slide-left"
			});
		}, P = function() {
			c.push(k.NewCatalog);
		}, N = h(function() {
			c.push(k.ComplianceForm);
		}, [c]), M = function() {
			return i.onAddProduct();
		};
		C(function() {
			i.collection != null ? D(i.collection) : i.catalog != null ? (x(!0), i.promotionCampaign === "video-upload" ? M() : (i.promotionCampaign, i.product != null && $(i.product))) : (o("WAWebQplFlowWrapper").QPL.markerDrop(L), P());
		}, []), C(function() {
			i.showComplianceForm && !R.current ? (R.current = !0, N()) : i.showProductList && !I.current && (I.current = !0, x(!1));
		}, [
			i.showComplianceForm,
			i.showProductList,
			N,
			x
		]);
		var w = function() {
			c.push(k.MerchantDetails);
		}, A = function(t) {
			r("WAWebBizShowCartAction")(t, void 0, i.context);
		}, F = function(t) {
			t || o("WAWebProductCollectionLogEvents").logCollectionCreateClicked(o("WAWebProductCatalogContext").getProductCatalogContext(i.context)), i.catalog && (_(t), c.push(k.EditCollection));
		}, O = function(t, n) {
			o("WAWebDrawerManager").DrawerManager.openDrawerMid(f.jsx(r("WAWebProductCatalogCatalogLinkDrawer.react"), {
				onCancel: function() {
					o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
				},
				catalog: t,
				contact: n,
				prompt: s._(
					/*BTDS*/
					""
				),
				onSend: function() {
					return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
				},
				centerDrawer: !0
			}), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				newDrawerContext: i.context,
				transition: "slide-left"
			});
		}, B = function(t) {
			o("WAWebDrawerManager").DrawerManager.openDrawerMid(f.jsx(r("WAWebProductCatalogProductLinkDrawer.react"), {
				onCancel: function() {
					o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
				},
				product: t,
				prompt: s._(
					/*BTDS*/
					""
				),
				onSend: function() {
					return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
				},
				centerDrawer: !0,
				sendProductMsg: !0
			}), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				newDrawerContext: i.context,
				transition: "slide-left"
			});
		}, W = function() {
			o("WAWebQplFlowWrapper").QPL.markerStart(E), c.push(k.OpenCollections), o("WAWebProductCollectionLogEvents").logCollectionMenuClicked(o("WAWebProductCatalogContext").getProductCatalogContext(i.context));
		}, q = function() {
			c.push(k.ReorderCollections);
		}, U = function(t) {
			o("WAWebUtilsLogQplEvents").qplStartCollectionViewAll("Collection"), _(t), c.push(k.SeeCollection);
		}, V = function() {
			c.push(k.CatalogSettings);
		}, H = function() {
			return i.onAddFirstProduct();
		}, G = function() {
			return i.onRemoveProduct();
		}, z = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				j(), R.current = !1, yield i.onComplianceFormClosed(), i.catalog ? M() : H();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), j = function() {
			c.pop(), o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		}, K = function() {
			c.end(o("WAWebUim").DismissReason.LIFECYCLE), o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		};
		if (c.step == null) return null;
		var Q;
		switch (c.step) {
			case k.CollectionContent:
				Q = f.jsx(r("WAWebProductCollectionCollectionContentDrawer.react"), {
					contact: i.contact,
					onProductDetail: $,
					onProductShare: B,
					catalogId: i.catalogId,
					onBack: j,
					onCatalogLinkClick: O,
					onCartClick: A,
					collection: p != null ? p : void 0,
					canManageCatalog: !0,
					headerType: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onEditCollection: F
				});
				break;
			case k.CatalogView:
				Q = f.jsx(r("WAWebProductCollectionCatalogViewDrawer.react"), {
					contact: i.contact,
					onCatalogLinkClick: O,
					onProductShare: B,
					onProductDetail: $,
					onAddProduct: M,
					onRemoveProduct: G,
					catalogId: i.catalogId,
					onBack: K,
					onCartClick: A,
					businessProfile: null,
					onCollectionSeeAll: D,
					canManageCatalog: !0,
					autoUpdate: !0,
					onOpenCollections: W,
					onOpenMerchantDetailsForm: w,
					onEditCollection: F,
					onOpenSettings: V,
					canLogQpl: y,
					isInitialStep: (t = i.isInitialStep) != null ? t : !1
				});
				break;
			case k.NewCatalog:
				Q = f.jsx(r("WAWebManageNewCatalogDrawer.react"), {
					isCreatingCatalogFn: function() {
						return i.isCreatingCatalog;
					},
					onBack: j,
					onAddProductClick: H,
					catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(i.context)
				});
				break;
			case k.ComplianceForm:
				Q = f.jsx(o("WAWebMerchantDetailsFormFlowLoadable").MerchantDetailsFormFlowLoadable, {
					contactId: i.contact.id,
					enableCatalogCreationContext: !0,
					onAddProduct: z,
					onBack: function() {
						j(), R.current = !1, i.onComplianceFormClosed();
					},
					onUnmount: function() {
						R.current = !1, i.onComplianceFormClosed();
					}
				});
				break;
			case k.MerchantDetails:
				Q = f.jsx(o("WAWebMerchantDetailsFormFlowLoadable").MerchantDetailsFormFlowLoadable, {
					contactId: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
					onBack: j
				});
				break;
			case k.EditCollection:
				Q = f.jsx(r("WAWebManageEditCollectionDrawer.react"), {
					onBack: j,
					collection: p,
					catalog: r("nullthrows")(i.catalog)
				});
				break;
			case k.OpenCollections:
				Q = f.jsx(r("WAWebProductCollectionCollectionsManagementDrawer.react"), {
					onBack: j,
					editCollection: F,
					onSeeCollection: U,
					onReorderCollection: q
				});
				break;
			case k.ReorderCollections:
				Q = f.jsx(r("WAWebProductCollectionCollectionsManagementDrawer.react"), {
					onBack: j,
					editCollection: F,
					onSeeCollection: U,
					isReorder: !0
				});
				break;
			case k.SeeCollection:
				Q = f.jsx(T, {
					catalogId: i.catalogId,
					collection: p,
					product: null,
					isInitialStep: !1
				});
				break;
			case k.CatalogSettings:
				Q = f.jsx(r("WAWebProductCatalogCatalogSettingsDrawer.react"), { onBack: j });
				break;
		}
		return f.jsx(u, {
			ref: a,
			flow: c,
			displayName: "CatalogManagementFlow",
			children: Q
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(t) {
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, p), m = y(o("WAWebDrawerContext").DrawerContext), _ = v(S.PENDING), g = _[0], b = _[1], L = o("WAWebContactCollection").ContactCollection.get(l.catalogId), E = v(!1), k = E[0], T = E[1], D = v(!1), x = D[0], $ = D[1], P = v(!1), N = P[0], M = P[1], w = v(!1), A = w[0], F = w[1], O = (a = o("useWAWebCatalogValues").useOptionalCatalogValues(l.catalogId, [o("WAWebCatalogGetters").getId])) != null ? a : [null], B = O[0], W = h(function() {
			return B ? o("WAWebCatalogCollection").CatalogCollection.get(B) : o("WAWebCatalogCollection").CatalogCollection.get(l.catalogId);
		}, [B, l.catalogId]), q = o("useWAWebCatalogRecovery").useCatalogRecovery(), U = h(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t;
			if (!L) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Cannot update compliance for non existing user"]))).sendLogs("catalog-management-flow-compliance-no-contact-error");
				return;
			}
			b(S.PENDING);
			var n = (t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(L.id)) == null ? void 0 : t.address, r = S.NO, a = W();
			o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(L.id) && (!a || !a.productCollection.length) && !o("WAWebBizComplianceUtil").isBusinessCompliant(n, yield o("WAWebComplianceInfo.react").getLegalEntityDetails(L.id).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["updateComplianceStatus: Failed to fetch legal entity details"])));
			}), L.id) && (r = S.YES), b(r);
		}), [L, W]), V = h(function() {
			var e = W();
			if (o("WAWebProductCatalogLogEvents").logAddProductClick(o("WAWebProductCatalogContext").getProductCatalogContext(m), e != null), g === S.YES) T(!0);
			else if (g === S.PENDING) M(!0);
			else if (e) {
				var t = new (o("WAWebProductModel")).Product({
					additionalImageCdnUrl: [],
					catalogWid: e.id
				}), n = function(n) {
					o("WAWebDrawerManager").DrawerManager.openDrawerMid(f.jsx(r("WAWebBizEditProductFlow"), {
						catalog: e,
						product: n
					}), {
						focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
						newDrawerContext: m,
						transition: "slide-left"
					});
				};
				o("WAWebDrawerManager").DrawerManager.openDrawerMid(f.jsx(r("WAWebBizEditProductFlow"), {
					catalog: e,
					product: t,
					onCreate: n,
					newProduct: !0
				}), {
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
					newDrawerContext: m,
					transition: "slide-left"
				});
			}
		}, [
			g,
			m,
			W
		]), H = h(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			F(!0);
			var e = o("WAWebProductCatalogContext").getProductCatalogContext(m);
			o("WAWebProductCatalogLogEvents").logCreateProductCatalogClick(e), o("WAWebQplFlowWrapper").QPL.markerStart(R);
			var t = !0;
			try {
				yield o("WAWebBizProductCatalogBridge").createCatalog(), o("WAWebProductCatalogLogEvents").logCreateProductCatalogSuccess(e), t = !1, o("WAWebQplFlowWrapper").QPL.markerEnd(R, 2);
				try {
					yield o("WAWebCatalogCollection").CatalogCollection.find(l.catalogId), $(!0), V();
				} catch (e) {
					o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
						o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch product catalog from server"])));
					}), o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").CatalogUnknownError, function(e) {
						o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch product catalog from server"])));
					});
				}
			} catch (t) {
				t instanceof o("WAWebBackendErrors").ServerStatusCodeError && (o("WAWebProductCatalogLogEvents").logCreateProductCatalogFailed(e, t.statusCode), o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					id: o("WAWebToast.react").genId("err_catalog_already_created")
				})), $(!0));
			} finally {
				t && o("WAWebQplFlowWrapper").QPL.markerEnd(R, 3);
			}
			F(!1);
		}), [
			l.catalogId,
			m,
			V
		]), G = h(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WAWebProductCatalogLogEvents").logAddProductClick(o("WAWebProductCatalogContext").getProductCatalogContext(m), !1), g === S.YES ? T(!0) : g === S.PENDING ? M(!0) : yield H();
		}), [
			g,
			H,
			m
		]), z = h(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield U();
		}), [U]);
		if (C(function() {
			U();
		}, []), C(function() {
			var e = W();
			N && g !== S.PENDING && (M(!1), g === S.YES ? T(!0) : e ? V() : H()), g === S.YES && o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		}, [
			N,
			g,
			W,
			H,
			V
		]), !L) return null;
		if (N) return f.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			children: [f.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				onCancel: function() {
					T(!1), M(!1);
				},
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), f.jsx(r("WAWebDrawerBody.react"), {
				theme: "center-content",
				children: f.jsx(o("WAWebComplianceInfo.react").ComplianceInfoLoading, {})
			})]
		});
		var j;
		if (q && o("WAWebCatalogCollection").CatalogCollection.selfCatalogErrorEmailMask != null && l.catalogId != null) {
			var K = o("WAWebCatalogCollection").CatalogCollection.selfCatalogErrorEmailMask;
			j = f.jsx(o("WAWebCatalogRecoveryDrawer.react").CatalogRecoveryDrawer, {
				catalogId: l.catalogId,
				emailMask: K
			});
		}
		return f.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, { children: function(t) {
			return j != null ? j : f.jsx(I, babelHelpers.extends({
				ref: i,
				contact: L,
				context: t,
				showComplianceForm: k,
				showProductList: x,
				isCreatingCatalog: A,
				onAddProduct: V,
				onAddFirstProduct: G,
				onRemoveProduct: z,
				onComplianceFormClosed: function() {
					return T(!1), U();
				},
				catalog: W()
			}, l));
		} });
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = T;
}), 226);
