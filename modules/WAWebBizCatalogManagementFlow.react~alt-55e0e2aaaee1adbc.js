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
		var t, n = e.ref, a = babelHelpers.objectWithoutPropertiesLoose(e, m), i = o("useWAWebFlow").useFlow(), l = i[0], u = i[1], c = v(null), d = c[0], p = c[1], _ = v(!1), g = _[0], y = _[1], S = b(!1), R = b(!1), I = function(t) {
			p(t), u.push(k.CollectionContent);
		}, D = h(function(e) {
			y(e), u.push(k.CatalogView);
		}, [u]), x = function(t) {
			o("WAWebDrawerManager").DrawerManager.openDrawerMid(f.jsx(r("WAWebBizEditProductFlow"), {
				catalog: r("nullthrows")(a.catalog),
				product: t
			}), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				newDrawerContext: a.context,
				transition: "slide-left"
			});
		}, $ = function() {
			u.push(k.NewCatalog);
		}, P = h(function() {
			u.push(k.ComplianceForm);
		}, [u]), N = function() {
			return a.onAddProduct();
		};
		C(function() {
			a.collection != null ? I(a.collection) : a.catalog != null ? (D(!0), a.promotionCampaign === "video-upload" ? N() : (a.promotionCampaign, a.product != null && x(a.product))) : (o("WAWebQplFlowWrapper").QPL.markerDrop(L), $());
		}, []), C(function() {
			a.showComplianceForm && !S.current ? (S.current = !0, P()) : a.showProductList && !R.current && (R.current = !0, D(!1));
		}, [
			a.showComplianceForm,
			a.showProductList,
			P,
			D
		]);
		var M = function() {
			u.push(k.MerchantDetails);
		}, w = function(t) {
			r("WAWebBizShowCartAction")(t, void 0, a.context);
		}, A = function(t) {
			t || o("WAWebProductCollectionLogEvents").logCollectionCreateClicked(o("WAWebProductCatalogContext").getProductCatalogContext(a.context)), a.catalog && (p(t), u.push(k.EditCollection));
		}, F = function(t, n) {
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
				newDrawerContext: a.context,
				transition: "slide-left"
			});
		}, O = function(t) {
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
				newDrawerContext: a.context,
				transition: "slide-left"
			});
		}, B = function() {
			o("WAWebQplFlowWrapper").QPL.markerStart(E), u.push(k.OpenCollections), o("WAWebProductCollectionLogEvents").logCollectionMenuClicked(o("WAWebProductCatalogContext").getProductCatalogContext(a.context));
		}, W = function() {
			u.push(k.ReorderCollections);
		}, q = function(t) {
			o("WAWebUtilsLogQplEvents").qplStartCollectionViewAll("Collection"), p(t), u.push(k.SeeCollection);
		}, U = function() {
			u.push(k.CatalogSettings);
		}, V = function() {
			return a.onAddFirstProduct();
		}, H = function() {
			return a.onRemoveProduct();
		}, G = async function() {
			z(), S.current = !1, await a.onComplianceFormClosed(), a.catalog ? N() : V();
		}, z = function() {
			u.pop(), o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		}, j = function() {
			u.end(o("WAWebUim").DismissReason.LIFECYCLE), o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		};
		if (u.step == null) return null;
		var K;
		switch (u.step) {
			case k.CollectionContent:
				K = f.jsx(r("WAWebProductCollectionCollectionContentDrawer.react"), {
					contact: a.contact,
					onProductDetail: x,
					onProductShare: O,
					catalogId: a.catalogId,
					onBack: z,
					onCatalogLinkClick: F,
					onCartClick: w,
					collection: d != null ? d : void 0,
					canManageCatalog: !0,
					headerType: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onEditCollection: A
				});
				break;
			case k.CatalogView:
				K = f.jsx(r("WAWebProductCollectionCatalogViewDrawer.react"), {
					contact: a.contact,
					onCatalogLinkClick: F,
					onProductShare: O,
					onProductDetail: x,
					onAddProduct: N,
					onRemoveProduct: H,
					catalogId: a.catalogId,
					onBack: j,
					onCartClick: w,
					businessProfile: null,
					onCollectionSeeAll: I,
					canManageCatalog: !0,
					autoUpdate: !0,
					onOpenCollections: B,
					onOpenMerchantDetailsForm: M,
					onEditCollection: A,
					onOpenSettings: U,
					canLogQpl: g,
					isInitialStep: (t = a.isInitialStep) != null ? t : !1
				});
				break;
			case k.NewCatalog:
				K = f.jsx(r("WAWebManageNewCatalogDrawer.react"), {
					isCreatingCatalogFn: function() {
						return a.isCreatingCatalog;
					},
					onBack: z,
					onAddProductClick: V,
					catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(a.context)
				});
				break;
			case k.ComplianceForm:
				K = f.jsx(o("WAWebMerchantDetailsFormFlowLoadable").MerchantDetailsFormFlowLoadable, {
					contactId: a.contact.id,
					enableCatalogCreationContext: !0,
					onAddProduct: G,
					onBack: function() {
						z(), S.current = !1, a.onComplianceFormClosed();
					},
					onUnmount: function() {
						S.current = !1, a.onComplianceFormClosed();
					}
				});
				break;
			case k.MerchantDetails:
				K = f.jsx(o("WAWebMerchantDetailsFormFlowLoadable").MerchantDetailsFormFlowLoadable, {
					contactId: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
					onBack: z
				});
				break;
			case k.EditCollection:
				K = f.jsx(r("WAWebManageEditCollectionDrawer.react"), {
					onBack: z,
					collection: d,
					catalog: r("nullthrows")(a.catalog)
				});
				break;
			case k.OpenCollections:
				K = f.jsx(r("WAWebProductCollectionCollectionsManagementDrawer.react"), {
					onBack: z,
					editCollection: A,
					onSeeCollection: q,
					onReorderCollection: W
				});
				break;
			case k.ReorderCollections:
				K = f.jsx(r("WAWebProductCollectionCollectionsManagementDrawer.react"), {
					onBack: z,
					editCollection: A,
					onSeeCollection: q,
					isReorder: !0
				});
				break;
			case k.SeeCollection:
				K = f.jsx(T, {
					catalogId: a.catalogId,
					collection: d,
					product: null,
					isInitialStep: !1
				});
				break;
			case k.CatalogSettings:
				K = f.jsx(r("WAWebProductCatalogCatalogSettingsDrawer.react"), { onBack: z });
				break;
		}
		return f.jsx(l, {
			ref: n,
			flow: u,
			displayName: "CatalogManagementFlow",
			children: K
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, p), l = y(o("WAWebDrawerContext").DrawerContext), m = v(S.PENDING), _ = m[0], g = m[1], b = o("WAWebContactCollection").ContactCollection.get(i.catalogId), L = v(!1), E = L[0], k = L[1], T = v(!1), D = T[0], x = T[1], $ = v(!1), P = $[0], N = $[1], M = v(!1), w = M[0], A = M[1], F = (n = o("useWAWebCatalogValues").useOptionalCatalogValues(i.catalogId, [o("WAWebCatalogGetters").getId])) != null ? n : [null], O = F[0], B = h(function() {
			return O ? o("WAWebCatalogCollection").CatalogCollection.get(O) : o("WAWebCatalogCollection").CatalogCollection.get(i.catalogId);
		}, [O, i.catalogId]), W = o("useWAWebCatalogRecovery").useCatalogRecovery(), q = h(async function() {
			var t;
			if (!b) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Cannot update compliance for non existing user"]))).sendLogs("catalog-management-flow-compliance-no-contact-error");
				return;
			}
			g(S.PENDING);
			var n = (t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(b.id)) == null ? void 0 : t.address, r = S.NO, a = B();
			o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(b.id) && (!a || !a.productCollection.length) && !o("WAWebBizComplianceUtil").isBusinessCompliant(n, await o("WAWebComplianceInfo.react").getLegalEntityDetails(b.id).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["updateComplianceStatus: Failed to fetch legal entity details"])));
			}), b.id) && (r = S.YES), g(r);
		}, [b, B]), U = h(function() {
			var e = B();
			if (o("WAWebProductCatalogLogEvents").logAddProductClick(o("WAWebProductCatalogContext").getProductCatalogContext(l), e != null), _ === S.YES) k(!0);
			else if (_ === S.PENDING) N(!0);
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
						newDrawerContext: l,
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
					newDrawerContext: l,
					transition: "slide-left"
				});
			}
		}, [
			_,
			l,
			B
		]), V = h(async function() {
			A(!0);
			var e = o("WAWebProductCatalogContext").getProductCatalogContext(l);
			o("WAWebProductCatalogLogEvents").logCreateProductCatalogClick(e), o("WAWebQplFlowWrapper").QPL.markerStart(R);
			var t = !0;
			try {
				await o("WAWebBizProductCatalogBridge").createCatalog(), o("WAWebProductCatalogLogEvents").logCreateProductCatalogSuccess(e), t = !1, o("WAWebQplFlowWrapper").QPL.markerEnd(R, 2);
				try {
					await o("WAWebCatalogCollection").CatalogCollection.find(i.catalogId), x(!0), U();
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
				})), x(!0));
			} finally {
				t && o("WAWebQplFlowWrapper").QPL.markerEnd(R, 3);
			}
			A(!1);
		}, [
			i.catalogId,
			l,
			U
		]), H = h(async function() {
			o("WAWebProductCatalogLogEvents").logAddProductClick(o("WAWebProductCatalogContext").getProductCatalogContext(l), !1), _ === S.YES ? k(!0) : _ === S.PENDING ? N(!0) : await V();
		}, [
			_,
			V,
			l
		]), G = h(async function() {
			await q();
		}, [q]);
		if (C(function() {
			q();
		}, []), C(function() {
			var e = B();
			P && _ !== S.PENDING && (N(!1), _ === S.YES ? k(!0) : e ? U() : V()), _ === S.YES && o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		}, [
			P,
			_,
			B,
			V,
			U
		]), !b) return null;
		if (P) return f.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			children: [f.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				onCancel: function() {
					k(!1), N(!1);
				},
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), f.jsx(r("WAWebDrawerBody.react"), {
				theme: "center-content",
				children: f.jsx(o("WAWebComplianceInfo.react").ComplianceInfoLoading, {})
			})]
		});
		var z;
		if (W && o("WAWebCatalogCollection").CatalogCollection.selfCatalogErrorEmailMask != null && i.catalogId != null) {
			var j = o("WAWebCatalogCollection").CatalogCollection.selfCatalogErrorEmailMask;
			z = f.jsx(o("WAWebCatalogRecoveryDrawer.react").CatalogRecoveryDrawer, {
				catalogId: i.catalogId,
				emailMask: j
			});
		}
		return f.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, { children: function(t) {
			return z != null ? z : f.jsx(I, babelHelpers.extends({
				ref: a,
				contact: b,
				context: t,
				showComplianceForm: E,
				showProductList: D,
				isCreatingCatalog: w,
				onAddProduct: U,
				onAddFirstProduct: H,
				onRemoveProduct: G,
				onComplianceFormClosed: function() {
					return k(!1), q();
				},
				catalog: B()
			}, i));
		} });
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = T;
}), 226);
