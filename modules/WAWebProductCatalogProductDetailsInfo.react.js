__d("WAWebProductCatalogProductDetailsInfo.react", [
	"fbt",
	"WALogger",
	"WAWebAddToCartIcon.react",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizGetProductQuantityCartAction",
	"WAWebButton.react",
	"WAWebCartQuantityControls.react",
	"WAWebDrawerContext",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFormatConfiguration",
	"WAWebLinkify",
	"WAWebManageCart",
	"WAWebProductCatalogCheckCartEnabled",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductPriceInfoText.react",
	"WAWebProductCollection",
	"WAWebProductDetailsInfoVariants.react",
	"WAWebProductTypes",
	"WAWebQplFlowWrapper",
	"WAWebStateUtils",
	"WAWebStopEvent",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUserPrefsMeUser",
	"isStringNullOrEmpty",
	"qpl",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useHoverState",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useEffect, f = m.useState, g = 100, h = {
		addToCartIconDisabled: {
			color: "xhslqc4",
			":hover_color": "x12ln5q2",
			$$css: !0
		},
		addToCartIcon: {
			color: "xo1mcw5",
			":hover_color": "xyla9g4",
			$$css: !0
		},
		addToCartBtnHoverIcon: {
			color: "xk4n5i7",
			":hover_color": "xfrlarv",
			$$css: !0
		},
		description: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			wordWrap: "x1vvkbs",
			$$css: !0
		},
		name: {
			fontWeight: "xk50ysn",
			wordWrap: "x1vvkbs",
			$$css: !0
		},
		marginBottom20: {
			marginBottom: "xdqhqc9",
			$$css: !0
		},
		marginBottom12: {
			marginBottom: "xcytdqz",
			$$css: !0
		}
	}, y = r("qpl")._(774774794, "10");
	function C(e) {
		var t = o("react-compiler-runtime").c(7), n = e.isAvailable, r = e.onSendChat, a = e.product, i = o("WAWebUserPrefsMeUser").isMePnUser(a.catalogWid);
		if (i || !r || !a.fetchedFromServer || !n || a.reviewStatus !== o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED) return null;
		var l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[0] = l) : l = t[0];
		var u = l, c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x78zum5 x2b8uid xefnzgg" }, t[1] = c) : c = t[1];
		var m;
		t[2] !== r ? (m = d.jsx(o("WAWebButton.react").Button, {
			testid: "product-message-business-btn",
			onClick: r,
			type: "secondary",
			stretch: !0,
			children: u
		}), t[2] = r, t[3] = m) : m = t[3];
		var p;
		return t[4] !== c || t[5] !== m ? (p = d.jsx("div", babelHelpers.extends({}, c, {
			title: u,
			children: m
		})), t[4] = c, t[5] = m, t[6] = p) : p = t[6], p;
	}
	function b(e) {
		var t = e.cartEnabled, n = e.collectionId, a = e.context, i = e.isAvailable, l = e.onClick, u = e.product, c = r("useHoverState")(), m = c.isHovered, p = c.onMouseEnter, _ = c.onMouseLeave, f = o("WAWebUserPrefsMeUser").isMePnUser(u.catalogWid);
		if (f || !t || !u.fetchedFromServer || !i || u.reviewStatus !== o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED) return null;
		var g = o("WAWebBizCatalogGatingUtils").isQuantityControlsFeatureEnabled(), y = s._(
			/*BTDS*/
			""
		), C = o("WAWebProductTypes").PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(u.availability), b = null;
		C ? b = h.addToCartIconDisabled : m ? b = h.addToCartBtnHoverIcon : b = h.addToCartIcon;
		var v = r("WAWebBizGetProductQuantityCartAction")(u.id, u.catalogWid), S = g ? null : d.jsx(r("WAWebAddToCartIcon.react"), { colorXStyle: b }), R = g && v > 0 ? d.jsx(o("WAWebCartQuantityControls.react").WAWebCartQuantityControls, {
			product: u,
			context: a,
			collectionId: n || ""
		}) : d.jsx(o("WAWebButton.react").Button, {
			testid: "add-to-cart-btn",
			onClick: l,
			type: "secondary",
			disabled: C,
			stretch: !0,
			children: d.jsxs("span", babelHelpers.extends({}, {
				0: { className: "x78zum5 x6s0dn4 x1o2pa38" },
				1: { className: "x78zum5 x6s0dn4 x1o2pa38 x1rdy4ex x14z9mp x4vbgl9 x1lziwak" }
			}[!!S << 0], { children: [S, y] }))
		});
		return d.jsx("div", babelHelpers.extends({}, {
			0: { className: "x78zum5 x2b8uid" },
			1: { className: "x78zum5 x2b8uid xl56j7k xhrpt6u xat24cr" }
		}[!!g << 0], {
			title: y,
			onMouseEnter: p,
			onMouseLeave: _,
			children: R
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.isAvailable, n = e.onClick, a = e.product, i = a.url;
		if (!a.fetchedFromServer || r("isStringNullOrEmpty")(i) || !t) return null;
		var l = o("WAWebFormatConfiguration").TrustedGroupDesc({ links: o("WAWebLinkify").findLinks(i) });
		return d.jsx("div", { children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
			selectable: !0,
			formatters: l,
			text: i,
			onClick: function(t) {
				return n(t, i);
			}
		}) });
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = o("react-compiler-runtime").c(24), n = e.hideRetailerID, a = e.isAvailable, i = e.isDescExpanded, l = e.onClickUrl, c = e.onReadMore, m = e.product, p;
		t[0] !== m.description ? (p = r("isStringNullOrEmpty")(m.description), t[0] = m.description, t[1] = p) : p = t[1];
		var _ = !p, f;
		t[2] !== m.retailerId ? (f = r("isStringNullOrEmpty")(m.retailerId), t[2] = m.retailerId, t[3] = f) : f = t[3];
		var y = !f, C = !r("isStringNullOrEmpty")(m.url);
		if (!_ && !C && !y) return null;
		var b = m.description != null && m.description.length > g, S;
		t[4] !== i || t[5] !== c || t[6] !== m.description || t[7] !== b || t[8] !== _ ? (S = _ ? d.jsxs("div", { children: [d.jsx(o("WAWebEmojiText.react").EmojiText, {
			selectable: !0,
			multiline: !0,
			text: m.description,
			textLimit: i ? 1 / 0 : g
		}), b && !i ? d.jsxs("span", {
			className: "x1ph7ams",
			role: "button",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClick: c,
			children: [" ", s._(
				/*BTDS*/
				""
			)]
		}) : null] }) : null, t[4] = i, t[5] = c, t[6] = m.description, t[7] = b, t[8] = _, t[9] = S) : S = t[9];
		var R = S, L;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (L = (u || (u = r("stylex")))([h.description, h.marginBottom20]), t[10] = L) : L = t[10];
		var E;
		t[11] !== a || t[12] !== l || t[13] !== m ? (E = d.jsx(v, {
			isAvailable: a,
			product: m,
			onClick: l
		}), t[11] = a, t[12] = l, t[13] = m, t[14] = E) : E = t[14];
		var k;
		t[15] !== n || t[16] !== m.retailerId || t[17] !== y ? (k = y && !n ? d.jsx("div", { children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: m.retailerId,
			selectable: !0,
			direction: "inherit"
		}) }) : null, t[15] = n, t[16] = m.retailerId, t[17] = y, t[18] = k) : k = t[18];
		var I;
		return t[19] !== R || t[20] !== L || t[21] !== E || t[22] !== k ? (I = d.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			theme: "plain",
			className: L,
			children: [
				R,
				E,
				k
			]
		}), t[19] = R, t[20] = L, t[21] = E, t[22] = k, t[23] = I) : I = t[23], I;
	}
	function R(t) {
		var n, a = t.collectionId, i = t.hideDescription, l = t.hideMessageBusinessButton, s = t.hideRetailerID, u = t.isAvailable, c = t.onAddToCart, m = t.onProductChange, g = t.onSendChat, v = t.product, R = p(o("WAWebDrawerContext").DrawerContext), L = o("useWAWebModelValues").useModelValues(v, [
			"name",
			"url",
			"description",
			"availability",
			"currency",
			"priceAmount1000",
			"salePriceAmount1000",
			"salePriceStartDate",
			"salePriceEndDate",
			"fetchedFromServer",
			"retailerId",
			"catalogWid",
			"productImageCollection",
			"imageHash",
			"reviewStatus",
			"imageCdnUrl",
			"id",
			"maxAvailable",
			"variantInfo"
		]), E = f(!1), k = E[0], I = E[1], T = f(!1), D = T[0], x = T[1];
		_(function() {
			r("WAWebProductCatalogCheckCartEnabled")(L.catalogWid).then(function(e) {
				x(e);
			}).catch(function() {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[product-catalog] failed to check cart enabled"]))).sendLogs("failed-to-check-cart-enabled");
			});
		}, []);
		var $ = function() {
			g == null || g();
		}, P = function(t) {
			o("WAWebQplFlowWrapper").QPL.markerStart(y, { annotations: { string: { EntryPoint: "Product" } } }), o("WAWebManageCart").addToCart(L, o("WAWebProductCatalogContext").getProductCatalogContext(R), a), c == null || c(), t.stopPropagation();
		}, N = function() {
			I(!0);
		}, M = function(t, n) {
			o("WAWebStopEvent").stopEvent(t);
			var e = o("WAWebStateUtils").unproxy(L);
			o("WAWebProductCatalogLogEvents").logDetailLinkClick({
				product: e,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(R)
			});
			var r = n ? o("WAWebLinkify").findLink({ text: n }) : null;
			if (r) {
				var a = e.signedShimmedUrl != null ? e.signedShimmedUrl : null;
				o("WAWebExternalLink.react").openExternalLink(a != null ? a : r.url);
			}
		};
		return d.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-product",
			animation: !1,
			children: [
				d.jsx(o("WAWebText.react").WAWebTextTitle, {
					xstyle: [h.name, h.marginBottom12],
					children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: L.name,
						selectable: !0
					})
				}),
				L.priceAmount1000 != null ? d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					className: "xcytdqz",
					color: "dark",
					theme: "plain",
					children: d.jsx(r("WAWebProductCatalogProductPriceInfoText.react"), {
						product: L,
						selectable: !0,
						direction: "inherit"
					})
				}) : null,
				((n = L.variantInfo) == null || (n = n.availability) == null ? void 0 : n.listing) != null && o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled() && d.jsx(o("WAWebProductDetailsInfoVariants.react").ProductCatalogDetailsInfoVariants, {
					product: L,
					productChanged: m
				}),
				!i && d.jsx(S, {
					product: L,
					isAvailable: u,
					isDescExpanded: k,
					hideRetailerID: s === !0,
					onReadMore: N,
					onClickUrl: M
				}),
				!l && d.jsx(C, {
					onSendChat: $,
					isAvailable: u,
					product: L
				}),
				d.jsx(b, {
					collectionId: a,
					cartEnabled: D,
					isAvailable: u,
					product: L,
					onClick: P,
					context: R
				})
			]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);
