__d("WAWebManageProductInfoDrawer.react", [
	"fbt",
	"WAWebActiveAccountInfoContext.react",
	"WAWebAdvertisePill.react",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizProductCatalogAction",
	"WAWebButton.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlatListLoadingSpinnerItem.react",
	"WAWebFlex.react",
	"WAWebLinkedCatalogHelper",
	"WAWebManageProductStatusBanner.react",
	"WAWebManageProfileLockup.react",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductDetailsInfo.react",
	"WAWebProductCatalogProductTile.react",
	"WAWebProductCollection",
	"WAWebShouldShowAdCreationEntryPoint",
	"WAWebText.react",
	"WAWebTextStatusCollection",
	"WAWebUserPrefsMeUser",
	"WAWebUtilsLogQplEvents",
	"WAWebWamEnumLwiEntryPoint",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useEffect, f = m.useState, g = {
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		paddingInlineEnd10: {
			paddingInlineEnd: "x2vl965",
			$$css: !0
		}
	}, h = { surface: "smb-catalog-product" }, y = {
		productWrapper: {
			width: "x1l2rt3b",
			$$css: !0
		},
		businessInfoTitle: {
			color: "x14ug900",
			$$css: !0
		}
	};
	function C(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.catalog, l = a.collectionId, c = a.onCancel, m = a.onEditProduct, C = a.onShareProduct, v = p(o("WAWebDrawerContext").DrawerContext), S = o("useWAWebModelValues").useModelValues(a.product, [
			"id",
			"catalogWid",
			"name",
			"priceAmount1000",
			"description",
			"productImageCollection",
			"reviewStatus",
			"isSanctioned",
			"url",
			"canAppeal",
			"imageCdnUrl",
			"retailerId",
			"currency",
			"isHidden",
			"isSanctioned",
			"variantInfo"
		]), R = f(!0), L = R[0], E = R[1], k = S.isHidden || S.isSanctioned === !0 && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled();
		_(function() {
			o("WAWebUtilsLogQplEvents").qplAnnotateProductView(o("WAWebUserPrefsMeUser").isMePnUser(S.catalogWid)), i.pullProduct(S.id.toString(), !0).then(function() {
				a.handleProductChange(S.id.toString()), o("WAWebUtilsLogQplEvents").qplEndProductView(2);
			}).catch(b).finally(function() {
				E(!1);
			}), o("WAWebProductCatalogLogEvents").logProductDetailView({
				product: S,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(v),
				collectionId: l
			});
		}, []);
		var I = function() {
			o("WAWebProductCatalogLogEvents").logEditProductClick(S, o("WAWebProductCatalogContext").getProductCatalogContext(v)), m(S);
		}, T = function(t) {
			C(S);
		}, D = function() {
			c(), o("WAWebBizProductCatalogAction").sendProductToChat(S, i), o("WAWebProductCatalogLogEvents").logProductMessageBusinessClick(S, o("WAWebProductCatalogContext").getProductCatalogContext(v));
		}, x = d.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: [
				y.businessInfoTitle,
				g.paddingBlock10,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor20
			],
			children: s._(
				/*BTDS*/
				""
			)
		}), $ = S.reviewStatus !== o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED || k, P = o("WAWebActiveAccountInfoContext.react").getActiveAccountInfo(), N;
		if (S.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED && P != null && o("WAWebShouldShowAdCreationEntryPoint").getShouldShowAdCreationEntryPoint()) {
			var M = {
				activeAccountInfo: P,
				sourceAdCreation: "whatsapp_smb_web_catalog_product",
				productId: S.id.toString()
			};
			N = d.jsx(r("WAWebAdvertisePill.react"), {
				adCreationUrlInput: M,
				lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_PRODUCT_DETAILS_ADVERTISE_BUTTON,
				disabled: k
			});
		}
		var w;
		o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog() || (w = d.jsx(o("WAWebButton.react").Button, {
			type: "strong",
			onClick: I,
			testid: "product-info-drawer edit-button",
			children: s._(
				/*BTDS*/
				""
			)
		}));
		var A = d.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 32,
			align: "center",
			children: [
				w,
				N,
				d.jsx(o("WAWebButton.react").Button, {
					type: "strong-primary",
					onClick: T,
					disabled: $,
					testid: "product-info-drawer share-button",
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		}), F = d.jsxs("div", {
			className: "x78zum5 x6s0dn4",
			children: [d.jsx("div", {
				className: "x6ikm8r x10wlt62 x1c3i2sq xk50ysn xlyipyv",
				children: S.name
			}), d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto, o("WDSPaddings.stylex").wdsPaddings.padding0, g.paddingInlineEnd10), { children: A }))]
		}), O = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), B = o("WAWebTextStatusCollection").TextStatusCollection.get(O), W = B && O ? d.jsx(r("WAWebDrawerSection.react"), {
			title: x,
			theme: "no-padding",
			children: d.jsx(r("WAWebManageProfileLockup.react"), {
				status: B,
				user: O
			})
		}) : null, q = L ? d.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {}) : d.jsxs(d.Fragment, { children: [
			d.jsx(r("WAWebProductCatalogProductTile.react"), {
				product: S,
				isAvailable: !0,
				fetching: !1
			}),
			d.jsx(r("WAWebManageProductStatusBanner.react"), { product: S }),
			d.jsx(r("WAWebProductCatalogProductDetailsInfo.react"), {
				product: S,
				collectionId: l,
				onSendChat: D,
				isAvailable: !0,
				onProductChange: a.handleProductChange
			})
		] });
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "catalog",
			tsNavigationData: h,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "catalog-product-title",
				title: F,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onCancel: c,
				focusBackOrCancel: !0
			}), d.jsxs(r("WAWebDrawerBody.react"), { children: [d.jsx(r("WAWebDrawerSection.react"), {
				theme: "center-column-fixed-width",
				children: q
			}), d.jsx("div", babelHelpers.extends({}, u.props([y.productWrapper, o("WDSMargins.stylex").wdsMargins.marginHorAuto]), { children: W }))] })]
		}, "catalog-link-drawer");
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		o("WAWebUtilsLogQplEvents").qplEndProductView(3);
	}
	l.default = C;
}), 226);
