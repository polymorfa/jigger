__d("WAWebProductCatalogListItem.react", [
	"fbt",
	"WABidi",
	"WAWebAccessibility.react",
	"WAWebAddToCartIcon.react",
	"WAWebBadge.react",
	"WAWebBizCatalogGatingUtils",
	"WAWebCartQuantityControls.react",
	"WAWebCatalogVariantHelper",
	"WAWebChatCell.react",
	"WAWebCopyToClipboard",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebDevOnlyBadge.react",
	"WAWebDrawerContext",
	"WAWebDropdownItem.react",
	"WAWebDropdownItemSeparator.react",
	"WAWebEmojiText.react",
	"WAWebErrorIcon.react",
	"WAWebFlex.react",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebLinkedCatalogHelper",
	"WAWebManageCart",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductPriceInfoText.react",
	"WAWebProductCatalogProductThumb.react",
	"WAWebProductCollection",
	"WAWebProductSelectors",
	"WAWebProductTypes",
	"WAWebQplFlowWrapper",
	"WAWebStateUtils",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsMeUser",
	"WDSButton.react",
	"WDSIconIcAddShoppingCart.react",
	"WDSIconIcLink.react",
	"WDSIconIcSchedule.react",
	"WDSIconIcShare.react",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"gkx",
	"isStringNullOrEmpty",
	"qpl",
	"react",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useContext, m = c.useRef, p = c.useState, _ = { marginInline5: {
		marginInlineStart: "xpcyujq",
		marginInlineEnd: "xf6vk7d",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, f = { shareButton: {
		color: "xhslqc4",
		":hover_color": "x12ln5q2",
		":focus_color": "x1guw8n8",
		$$css: !0
	} }, g = r("qpl")._(774774794, "10"), h = function(t, n) {
		if (n === !0 && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) return u.jsx(r("WAWebBadge.react"), {
			theme: "warning",
			Icon: o("WAWebErrorIcon.react").ErrorIcon
		});
		switch (t) {
			case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.NO_REVIEW:
			case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.OUTDATED:
			case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING: return u.jsx(r("WAWebBadge.react"), {
				theme: "pending",
				Icon: r("WDSIconIcSchedule.react")
			});
			case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED: return u.jsx(r("WAWebBadge.react"), {
				theme: "warning",
				Icon: o("WAWebErrorIcon.react").ErrorIcon
			});
		}
	};
	function y(e) {
		"use no forget";
		var t, n = e.canManageCatalog, a = n === void 0 ? !1 : n, i = e.checkbox, l = e.collectionId, c = e.detail, y = e.disableOutOfStockAppearance, C = e.isMuted, b = e.managedFocus, v = b === void 0 ? !1 : b, S = e.onCartOpen, R = e.onClick, L = e.onProductDelete, E = e.onProductHideShow, k = e.onProductShare, I = e.theme, T = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), D = d(o("WAWebDrawerContext").DrawerContext), x = o("useWAWebModelValues").useModelValues(e.product, [
			"id",
			"name",
			"description",
			"availability",
			"url",
			"retailerId",
			"currency",
			"priceAmount1000",
			"salePriceAmount1000",
			"salePriceStartDate",
			"salePriceEndDate",
			"reviewStatus",
			"catalogWid",
			"productImageCollection",
			"imageHash",
			"imageCdnUrl",
			"isHidden",
			"isSanctioned",
			"maxAvailable",
			"variantInfo"
		]), $ = m(null), P = m(null), N = p(null), M = N[0], w = N[1], A = p(!1), F = A[0], O = A[1], B = p(!1), W = B[0], q = B[1], U = function(t) {
			t.preventDefault(), t.stopPropagation(), R == null || R();
		}, V = function(t) {
			var e;
			t.stopPropagation(), t.preventDefault(), (e = $.current) == null || e.mouseOver(), O(!0);
		}, H = function() {
			var e;
			(e = $.current) == null || e.mouseLeave(), O(!1);
		};
		o("useWAWebListener").useListener(e.active, x.id.toString(), T);
		var G = function() {
			return !(!x.variantInfo || !x.variantInfo.types || x.variantInfo.types.length === 0);
		}, z = function(t) {
			var e = o("WAWebProductCatalogContext").getProductCatalogContext(D);
			o("WAWebQplFlowWrapper").QPL.markerStart(g, { annotations: { string: { EntryPoint: "Catalog" } } }), e.session.isAccidental() ? o("WAWebQplFlowWrapper").QPL.markerDrop(g) : (o("WAWebManageCart").addToCart(x, e, l), t.preventDefault(), t.stopPropagation());
		}, j = function(t) {
			t.preventDefault(), t.stopPropagation(), E && E(o("WAWebStateUtils").unproxy(x));
		}, K = function(t) {
			t.preventDefault(), t.stopPropagation(), L && L(x);
		}, Q = function() {
			w(null), r("WAWebFocusTracer").focus(P.current);
		}, X = function() {
			var e = [], t = x.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED && x.isHidden !== !0 && x.isSanctioned !== !0;
			k != null && t && e.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-share-label",
				action: function(t) {
					t.stopPropagation(), k(o("WAWebStateUtils").unproxy(x));
				},
				icon: u.jsx(r("WDSIconIcShare.react"), {}),
				children: s._(
					/*BTDS*/
					""
				)
			}, "ShareLabel"));
			var n = o("WAWebUserPrefsMeUser").isMePnUser(x.catalogWid);
			return n && E && !o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog() && (x.isHidden ? e.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-show-label",
				action: j,
				icon: u.jsx(r("WDSIconIcVisibility.react"), {}),
				children: s._(
					/*BTDS*/
					""
				)
			}, "ShowLabel")) : e.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-hide-label",
				action: j,
				icon: u.jsx(r("WDSIconIcVisibilityOff.react"), {}),
				children: s._(
					/*BTDS*/
					""
				)
			}, "HideLabel"))), t && S != null && e.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-addcart-label",
				action: z,
				icon: u.jsx(r("WDSIconIcAddShoppingCart.react"), {}),
				children: s._(
					/*BTDS*/
					""
				)
			}, "AddToCartLabel")), n && L && !o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog() && (e.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})), e.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-edit-label",
				action: K,
				icon: u.jsx(o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon, {}),
				theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
				children: s._(
					/*BTDS*/
					""
				)
			}, "DeleteLabel"))), n && !r("gkx")("26258") && (e.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})), e.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				addSpacing: !0,
				testid: "mi-product-copy-id",
				action: function() {
					o("WAWebCopyToClipboard").copyTextToClipboard(x.id.toString());
				},
				children: u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, { label: "Copy Product ID" })
			}, "copy-id"))), e;
		}, Y = function(t) {
			if (M) {
				w(null);
				return;
			}
			var e = X(), n = o("WAWebProductCatalogContext").getProductCatalogContext(D);
			o("WAWebProductCatalogLogEvents").logCatalogContextMenuClick(x.id.toString(), n.session.isAccidental() ? void 0 : n), w({
				menu: e,
				event: t.event,
				anchor: t.anchor
			});
		}, J = (t = x.getPreviewImage()) == null ? void 0 : t.mediaData, Z = I || (!y && o("WAWebProductTypes").PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(x.availability) ? "product-out-of-stock" : "product"), ee = h(x.reviewStatus, x.isSanctioned), te, ne;
		x.isHidden && (te = u.jsx(r("WDSIconIcVisibilityOff.react"), {}), ne = u.jsx(o("WAWebAccessibility.react").InvisibleLabel, { children: s._(
			/*BTDS*/
			""
		) }));
		var re = J ? u.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
			theme: "list",
			mediaData: J,
			badge: ee,
			overlayContent: te
		}) : null, oe = o("WABidi").bidiDir(x.name), ae = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: x.name,
			direction: oe,
			dirMismatch: oe === "rtl" !== r("WAWebL10N").isRTL(),
			ellipsify: !0,
			titlify: !0
		}), ie = o("WAWebProductSelectors").isEmptyPrice(x) ? null : u.jsx(r("WAWebProductCatalogProductPriceInfoText.react"), {
			product: x,
			showAvailabilityNotice: !0
		}), le, se;
		if (o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled()) {
			var ue, ce = x == null || (ue = x.variantInfo) == null || (ue = ue.listing_details) == null || (ue = ue.description) == null ? void 0 : ue.toLocaleUpperCase();
			if (ce != null) le = ce, se = o("WABidi").bidiDir(ce);
			else {
				var de, me = x == null || (de = x.variantInfo) == null || (de = de.types) == null ? void 0 : de.find(function(e) {
					var t;
					return ((t = e.name) == null ? void 0 : t.toLocaleLowerCase("en-US")) === o("WAWebCatalogVariantHelper").VariantOptionName.COLOR;
				});
				me != null && me.options.length > 1 && me.name != null && (le = o("WAWebCatalogVariantHelper").getVariantTypeOptions(o("WAWebCatalogVariantHelper").VariantOptionName.COLOR, me.options.length));
			}
		}
		le == null && !r("isStringNullOrEmpty")(x.description) && (le = x.description, se = o("WABidi").bidiDir(x.description));
		var pe = ie != null || le != null ? u.jsxs(u.Fragment, { children: [
			u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: le,
				direction: se,
				dirMismatch: se != null && se === "rtl" !== r("WAWebL10N").isRTL(),
				ellipsify: !0
			}) }),
			u.jsx(o("WAWebFlex.react").FlexRow, { children: ie }),
			ne
		] }) : null, _e;
		M && (_e = u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ChatContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: Q,
			children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: M })
		}));
		var fe;
		o("WAWebBizCatalogGatingUtils").isQuantityControlsFeatureEnabled() ? G() ? fe = u.jsx(o("WAWebCartQuantityControls.react").WAWebVariantCartQuantityControls, {
			product: x,
			collectionId: l
		}) : fe = x.availability === o("WAWebProductTypes").ProductAvailability.IN_STOCK ? u.jsx(o("WAWebCartQuantityControls.react").WAWebCartQuantityControls, {
			product: x,
			context: D,
			collectionId: l
		}) : null : fe = u.jsx(r("WAWebAddToCartIcon.react"), { onClick: z });
		var ge = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.marginInline5,
			children: S != null && x.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED ? fe : null
		}), he = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.marginInline5,
			children: k != null && x.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED ? u.jsx(r("WDSButton.react"), {
				"aria-label": "",
				xstyle: f.shareButton,
				onPress: function(t) {
					t.stopPropagation(), k(o("WAWebStateUtils").unproxy(x));
				},
				Icon: r("WDSIconIcLink.react"),
				variant: "borderless"
			}) : null
		}), ye = c != null ? c : a ? null : u.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1s85apg" },
			1: { className: "x78zum5" }
		}[!!(W || F || o("WAWebBizCatalogGatingUtils").isQuantityControlsFeatureEnabled()) << 0], { children: [ge, he] }));
		return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, babelHelpers.extends({
			ref: P,
			handlers: {
				space: U,
				right: function() {
					var e;
					r("WAWebFocusTracer").focus((e = $.current) == null ? void 0 : e.getContextMenuRef());
				}
			},
			tabIndex: 0,
			role: "button",
			onMouseEnter: function() {
				return q(!0);
			},
			onMouseLeave: function() {
				return q(!1);
			}
		}, v ? void 0 : {
			onFocus: V,
			onBlur: H,
			onMouseLeave: function() {
				H(), q(!1);
			}
		}, { children: [u.jsx(r("WAWebChatCell.react"), {
			testid: "product-catalog-item",
			customImage: !0,
			image: re,
			primary: ae,
			onClick: R,
			secondary: pe,
			theme: Z,
			active: F || !!M,
			checkbox: i,
			idle: C,
			detail: ye,
			contextEnabled: function() {
				return a;
			},
			onContext: Y,
			ref: $,
			contextMenuControlled: !0
		}, x.id.toString()), _e] }));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
