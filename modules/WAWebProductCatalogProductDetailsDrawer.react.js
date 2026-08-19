__d("WAWebProductCatalogProductDetailsDrawer.react", [
	"fbt",
	"Promise",
	"WAAbortError",
	"WAFilteredCatch",
	"WALogger",
	"WATimeUtils",
	"WAWebBackendErrors",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizProductCatalogAction",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebCartCollection",
	"WAWebCatalogCollection",
	"WAWebCatalogLoadError.react",
	"WAWebCatalogLoadErrorLoadable",
	"WAWebChatThreadLogging",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebProductCatalogCatalogDrawerSection.react",
	"WAWebProductCatalogCheckCartEnabled",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogDetailDrawerMenu.react",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductDetailsInfo.react",
	"WAWebProductCatalogProductTile.react",
	"WAWebProductCatalogReportProductFlow",
	"WAWebProductCollection",
	"WAWebProductDetailsInfoVariants.react",
	"WAWebProductTypes",
	"WAWebSpinner.react",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebUserPrefsMeUser",
	"WAWebUtilsLogQplEvents",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _ = ["ref"], f, g, h, y = h || (h = o("react")), C = h, b = C.useContext, v = C.useEffect, S = C.useMemo, R = C.useState, L = {
		marginInline10: {
			marginInlineStart: "x1hm9lzh",
			marginInlineEnd: "x1sa5p1d",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		paddingBlock18: {
			paddingTop: "x109j2v6",
			paddingBottom: "x1hhzuzn",
			$$css: !0
		},
		paddingInline30: {
			paddingInlineStart: "x162tt16",
			paddingInlineEnd: "x5zjp28",
			$$css: !0
		}
	}, E = { surface: "catalog-item" }, k = {
		availabilityBanner: {
			display: "x78zum5",
			lineHeight: "x1fc57z9",
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		text: {
			fontWeight: "xk50ysn",
			$$css: !0
		},
		loadingText: {
			color: "xxr6tci",
			$$css: !0
		},
		loadingContainer: {
			position: "x10l6tqk",
			zIndex: "x12xzxwr",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			background: "xsm26vf",
			boxShadow: "x1499u3w",
			opacity: "x1hc1fzr",
			transitionProperty: "xfagghw",
			transitionDuration: "xofcydl",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		shiftUp: {
			position: "x10l6tqk",
			zIndex: "xuvdrym",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			background: "xsm26vf",
			boxShadow: "x1499u3w",
			transitionProperty: "xfagghw",
			transitionDuration: "x1wsgiic",
			transitionTimingFunction: "x9lcvmn",
			transform: "x1mbp4g0",
			$$css: !0
		},
		body: {
			flex: "x1okw0bk",
			$$css: !0
		}
	};
	function I(e) {
		var t = o("react-compiler-runtime").c(14), n = e.isAvailable, a = e.productCatalogFetchState, i = e.productFetchState, l = e.productSanctioned, u;
		if (i === "ERROR" || i === "TOKEN_RECOVERY_REQUIRED") {
			var c;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [k.text, L.marginInline10], t[0] = c) : c = t[0];
			var d;
			t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = y.jsx(o("WAWebText.react").WAWebTextSmall, {
				as: "span",
				xstyle: c,
				color: "critical",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[1] = d) : d = t[1], u = d;
		} else if (n) {
			var h;
			t[6] === Symbol.for("react.memo_cache_sentinel") ? (h = y.jsx(o("WAWebSpinner.react").Spinner, {
				size: 14,
				color: "highlight"
			}, "DetailDrawer-loadingBar-spinner"), t[6] = h) : h = t[6];
			var C;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (C = [
				k.text,
				L.marginInline10,
				k.loadingText
			], t[7] = C) : C = t[7];
			var b;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (b = [h, y.jsx(o("WAWebText.react").WAWebTextSmall, {
				as: "span",
				xstyle: C,
				children: s._(
					/*BTDS*/
					""
				)
			}, "DetailDrawer-loadingBar-msg")], t[8] = b) : b = t[8], u = b;
		} else if (l === !0 && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) {
			var m;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = [k.text, L.marginInline10], t[2] = m) : m = t[2];
			var p;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = y.jsx(o("WAWebText.react").WAWebTextSmall, {
				as: "span",
				xstyle: m,
				color: "critical",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[3] = p) : p = t[3], u = p;
		} else {
			var _;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = [k.text, L.marginInline10], t[4] = _) : _ = t[4];
			var f;
			t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = y.jsx(o("WAWebText.react").WAWebTextSmall, {
				as: "span",
				xstyle: _,
				color: "critical",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[5] = f) : f = t[5], u = f;
		}
		var v = i === "PENDING" || a === "PENDING", S = v || !n, R;
		t[9] !== S ? (R = (g || (g = r("stylex"))).props(S && k.loadingContainer, !S && k.shiftUp, S && o("WDSPaddings.stylex").wdsPaddings.padding8), t[9] = S, t[10] = R) : R = t[10];
		var E;
		return t[11] !== u || t[12] !== R ? (E = y.jsx("div", babelHelpers.extends({}, R, { children: u })), t[11] = u, t[12] = R, t[13] = E) : E = t[13], E;
	}
	function T(e) {
		var t = o("react-compiler-runtime").c(4), n = e.handleBack, r = e.menu, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i;
		return t[1] !== n || t[2] !== r ? (i = y.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: a,
			onBack: n,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			menu: r
		}), t[1] = n, t[2] = r, t[3] = i) : i = t[3], i;
	}
	function D(t) {
		"use no forget";
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, _), h = l.chat, C = l.collectionId, D = l.hideCatalogSection, x = l.hideDescription, $ = l.hideHeader, P = l.hideMessageBusinessButton, N = l.onBack, M = l.onCartClick, w = l.onProductCatalog, A = l.onProductDetail, F = l.onProductLinkClick, O = l.onProductMoreInformation, B = l.refreshCarousel, W = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), q = r("useWAWebUnmountSignal")(), U = b(o("WAWebDrawerContext").DrawerContext), V = R(l.product), H = V[0], G = V[1], z = o("useWAWebModelValues").useModelValues(H, [
			"id",
			"catalogWid",
			"productImageCollection",
			"fetchedFromServer",
			"name",
			"availability",
			"reviewStatus",
			"isSanctioned",
			"variantInfo"
		]), j = R(null), K = j[0], Q = j[1], X = R(!1), Y = X[0], J = X[1], Z = R(null), ee = Z[0], te = Z[1], ne = R("NONE"), re = ne[0], oe = ne[1], ae = R("NONE"), ie = ae[0], le = ae[1], se = S(function() {
			return o("WAWebCartCollection").CartCollection.findCart(z.catalogWid.toString());
		}, [z.catalogWid]);
		o("useWAWebListener").useListener(se, "change:cartItemCollection", W);
		var ue = function() {
			return N();
		}, ce = function() {
			var t = z.catalogWid;
			o("WAWebCatalogCollection").CatalogCollection.findCarouselCatalog(t).then(function(e) {
				if (!q.aborted) {
					var t = Array.isArray(e) ? e[0] : e;
					te(t || null), le(t ? "SUCCESS" : "NONE");
				}
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
				t.status === "not_found" || t.status === 404 ? (te(null), le("NOT_FOUND")) : (te(null), le("ERROR"), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch product catalog from server"]))));
			}));
		}, de = function(t) {
			var e, n = (e = o("WAWebCatalogCollection").CatalogCollection.get(z.catalogWid)) == null ? void 0 : e.productCollection.get(t);
			n != null ? G(n) : o("WAWebCatalogCollection").CatalogCollection.findProduct({
				catalogWid: z.catalogWid,
				productId: t.toString()
			}).then(function(e) {
				var n = e[0], r = n == null ? void 0 : n.productCollection.get(t);
				r && G(r);
			}).catch(function(e) {
				o("WAWebProductDetailsInfoVariants.react").showProductChangeErrorToast();
			});
		}, me = function() {
			o("WAWebModalManager").ModalManager.open(y.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "product-catalog-details"
				},
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, pe = function() {
			var e = z.catalogWid, t = z.id.toString();
			return o("WAWebCatalogCollection").CatalogCollection.findProduct({
				catalogWid: e,
				productId: t,
				productMsgMediaData: o("WAWebStateUtils").unproxy(z).productMsgMediaData,
				canLogQpl: !0
			});
		}, _e = function() {
			var e = z.catalogWid, t = pe(), a = o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(e), i = !0;
			return (f || (f = n("Promise"))).all([a, t]).then(function(e) {
				var t = e[0];
				if (q.aborted) throw new (o("WAAbortError")).AbortError();
				return i = !1, o("WAWebUtilsLogQplEvents").qplEndProductView(2), Q(t), oe("SUCCESS"), t;
			}).then(function(e) {
				le(function(t) {
					if (t === "PENDING") {
						if (!o("WAWebBusinessProfileUtils").hasCatalog(e)) return "NONE";
						ce();
					}
					return t;
				});
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, function() {
				ue(), me(), oe("NOT_FOUND"), i = !1, o("WAWebUtilsLogQplEvents").qplDropProductView();
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").CatalogUnknownError, function(e) {
				oe("ERROR"), o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch product from server"])));
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				oe("ERROR"), o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch product from server"])));
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").AdAccountRecoveryRequiredError, function(e) {
				oe("TOKEN_RECOVERY_REQUIRED"), o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch product: token recovery error"])));
			})).finally(function() {
				i && o("WAWebUtilsLogQplEvents").qplEndProductView(3);
			});
		};
		v(function() {
			if (h && o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
				activityType: "pdpViews",
				ts: o("WATimeUtils").unixTime(),
				chatId: h.id
			}]), B === !0) {
				var e = o("WAWebCatalogCollection").CatalogCollection.get(z.catalogWid);
				e != null && e.productCollection && e.fetchedFromServer ? le("SUCCESS") : le("PENDING");
			}
			o("WAWebUtilsLogQplEvents").qplAnnotateProductView(o("WAWebUserPrefsMeUser").isMePnUser(z.catalogWid));
			var t = z.catalogWid, n = z.id.toString();
			if (!t || !n) {
				o("WAWebUtilsLogQplEvents").qplDropProductView();
				return;
			}
			return _e().catch(function() {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[product catalog] failed to fetch data"]))).sendLogs("product-catalog-failed-to-fetch-data");
			}), r("WAWebProductCatalogCheckCartEnabled")(t).then(function(e) {
				J(e), o("WAWebProductCatalogLogEvents").logProductDetailView({
					product: o("WAWebStateUtils").unproxy(z),
					catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(U),
					cartToggle: e,
					collectionId: C
				});
			}).catch(function() {
				o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[product catalog] failed to check cart enabled"]))).sendLogs("product-catalog-failed-to-check-cart-enabled");
			}), function() {
				var e = z.catalogWid, t = z.id.toString();
				if (!(!e || !t)) {
					var n = o("WAWebCatalogCollection").CatalogCollection.get(e), r = n && n.msgProductCollection.get(t);
					r != null && r.fetchedFromServer && n && n.msgProductCollection.remove(r);
				}
			};
		}, []);
		var fe = function() {
			o("WAWebUtilsLogQplEvents").qplStartCartView("Product"), M == null || M(z.catalogWid.toString());
		}, ge = function() {
			o("WAWebModalManager").ModalManager.open(y.jsx(r("WAWebProductCatalogReportProductFlow"), {
				product: z,
				sessionId: o("WAWebProductCatalogContext").getProductCatalogSessionId(U)
			}));
		}, he = function() {
			o("WAWebProductCatalogLogEvents").logProductShareLinkClick({
				product: z,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(U)
			}), F(z);
		}, ye = function(t, n) {
			n === void 0 && (n = !0), h && o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
				activityType: t,
				ts: o("WATimeUtils").unixTime(),
				chatId: h.id,
				boolValue: n
			}]);
		}, Ce = function() {
			var e = o("WAWebCatalogCollection").CatalogCollection.get(z.catalogWid);
			o("WAWebBizProductCatalogAction").sendProductToChat(z, e, o("WAWebProductCatalogContext").getProductCatalogContext(U)), ye("isCtaOnPdpClicked"), o("WAWebProductCatalogLogEvents").logProductMessageBusinessClick(z, o("WAWebProductCatalogContext").getProductCatalogContext(U));
		}, be = function() {
			ye("isCartAddClicked");
		}, ve = function() {
			var e = z, t = e.catalogWid, n = o("WAWebCatalogCollection").CatalogCollection.get(t);
			if (n) {
				var r = n.productCollection.get(e.id);
				o("WAWebCmd").Cmd.attachProduct({ product: r ? o("WAWebStateUtils").unproxy(r) : o("WAWebStateUtils").unproxy(e) });
			}
		}, Se = function() {
			O(z);
		}, Re = function() {
			w && w(z.catalogWid, o("WAWebProductCatalogContext").getProductCatalogContext(U));
		}, Le = function(t) {
			if (o("WAWebUtilsLogQplEvents").qplStartProductView("Product"), A) return A(t);
		}, Ee = function() {
			var e = z.reviewStatus;
			return e === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED;
		}, ke = function() {
			return re !== "ERROR" && re !== "NOT_FOUND" && !Ee() && z.isSanctioned !== !0;
		}, Ie = ke(), Te = o("WAWebBusinessProfileUtils").hasCatalog(K) && !D, De = function() {
			return o("WAWebProductTypes").PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(z.availability) ? y.jsx("div", babelHelpers.extends({}, (g || (g = r("stylex"))).props([
				k.availabilityBanner,
				L.paddingBlock18,
				L.paddingInline30,
				o("WDSMargins.stylex").wdsMargins.marginBottom0
			]), { children: z.availability === o("WAWebProductTypes").ProductAvailability.OUT_OF_STOCK ? s._(
				/*BTDS*/
				""
			) : null })) : null;
		}, xe;
		return ke() && (xe = o("WAWebProductCatalogDetailDrawerMenu.react").getDetailDrawerMenu({
			onSendProduct: ve,
			onReportProduct: ge,
			onProductLinkClick: he,
			onProductMoreInformation: Se,
			onCartClick: Y ? fe : void 0,
			cartCount: se.itemCount,
			catalogId: z.catalogWid.toString(),
			contactId: h == null ? void 0 : h.contact.id
		})), y.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			onDrop: ue,
			theme: "striped",
			tsNavigationData: E,
			children: [!$ && y.jsx(T, {
				handleBack: ue,
				menu: xe
			}), y.jsx(r("WAWebDrawerBody.react"), { children: y.jsxs("div", babelHelpers.extends({ "data-testid": "product-details" }, (g || (g = r("stylex"))).props([k.body, o("WDSPaddings.stylex").wdsPaddings.paddingBottom32]), { children: [
				y.jsx(I, {
					productFetchState: re,
					productCatalogFetchState: ie,
					isAvailable: Ie,
					productSanctioned: !!z.isSanctioned
				}),
				y.jsx(r("WAWebProductCatalogProductTile.react"), {
					product: z,
					isAvailable: Ie,
					fetching: re === "PENDING"
				}),
				De(),
				re === "TOKEN_RECOVERY_REQUIRED" && y.jsx("div", {
					className: "xseo6mj",
					children: y.jsx(o("WAWebCatalogLoadError.react").CatalogLoadError, {
						ctaDisplayType: o("WAWebCatalogLoadErrorLoadable").CTADisplayType.LINK,
						shouldShowHeader: !1
					})
				}),
				y.jsx(r("WAWebProductCatalogProductDetailsInfo.react"), {
					product: z,
					collectionId: C,
					onSendChat: Ce,
					onAddToCart: be,
					isAvailable: Ie,
					hideRetailerID: (a = l.chat) == null ? void 0 : a.contact.isEnterprise,
					onProductChange: de,
					hideMessageBusinessButton: P,
					hideDescription: x
				}),
				Te && ee ? y.jsx(r("WAWebProductCatalogCatalogDrawerSection.react"), {
					catalog: ee,
					onProductCatalog: Re,
					onProductDetail: Le,
					filterProductId: z.id.toString(),
					title: s._(
						/*BTDS*/
						""
					),
					animation: !1
				}) : null
			] })) })]
		}, "product-details-drawer");
	}
	D.displayName = D.name + " [from " + i.id + "]", l.default = D;
}), 226);
