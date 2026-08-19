__d("WAWebProductCatalogProductLinkDrawer.react", [
	"fbt",
	"WAWebBizSendProductButton.react",
	"WAWebBizSendProductLinkFlow.react",
	"WAWebCatalogShortLinkUtils",
	"WAWebCellFrame.react",
	"WAWebCmd",
	"WAWebCopyLinkButton.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebEmojiText.react",
	"WAWebModalManager",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLinkText.react",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductThumb.react",
	"WAWebSendLinkButton.react",
	"WAWebStateUtils",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useContext, p = { paddingBottom10: {
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, _ = { surface: "smb-catalog-share-product-link" }, f = {
		prompt: {
			lineHeight: "x101yacv",
			$$css: !0
		},
		productImageContainer: {
			width: "xjzcg3w",
			height: "xcbkimw",
			$$css: !0
		},
		productThumbContainer: {
			position: "x170k5ml",
			backgroundColor: null,
			$$css: !0
		}
	}, g = "product-link-anchor";
	function h(e) {
		var t = e.getProductImageCollectionHead();
		return t ? d.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
			xstyle: f.productImageContainer,
			mediaData: t.mediaData
		}) : d.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumbPlaceholder, { xstyle: f.productThumbContainer });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.centerDrawer, l = a.onBack, c = a.onCancel, y = a.onSend, C = a.product, b = a.prompt, v = a.sendProductMsg, S = m(o("WAWebDrawerContext").DrawerContext), R = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizSendProductLinkFlow.react"), {
				product: C,
				onSend: y
			}), { transition: "modal-flow" }), o("WAWebProductCatalogLogEvents").logShareProductViaWALinkClick({
				product: C,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(S)
			});
		}, L = function(t) {
			t.preventDefault(), R();
		}, E = function() {
			o("WAWebProductCatalogLogEvents").logShareProductCopyLinkClick({
				product: C,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(S)
			});
		}, k = function() {
			o("WAWebCmd").Cmd.attachProduct({
				product: o("WAWebStateUtils").unproxy(C),
				onSend: y
			});
		}, I = o("WAWebCatalogShortLinkUtils").createProductLink(C.catalogWid.user, C.id.toString()), T, D;
		i && (T = "labels", D = "center-column");
		var x;
		return v != null ? x = d.jsx(r("WAWebBizSendProductButton.react"), { onClick: k }) : x = d.jsx(r("WAWebSendLinkButton.react"), { onClick: R }), d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: T,
			tsNavigationData: _,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "product-link-title",
				title: s._(
					/*BTDS*/
					""
				),
				onBack: l,
				onCancel: c,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), d.jsxs(r("WAWebDrawerBody.react"), {
				theme: D,
				children: [
					d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(f.prompt, o("WDSPaddings.stylex").wdsPaddings.paddingHor20, p.paddingBottom10), { children: [
						" ",
						b,
						" "
					] })),
					d.jsx(r("WAWebCellFrame.react"), {
						image: h(C),
						primary: d.jsx(o("WAWebEmojiText.react").EmojiText, {
							text: C.name,
							direction: "auto"
						}),
						theme: "identity",
						secondary: d.jsx(r("WAWebProductCatalogLinkText.react"), {
							id: g,
							href: I,
							onClick: L,
							noHandle: !0
						})
					}),
					x,
					d.jsx(r("WAWebCopyLinkButton.react"), {
						elementId: g,
						onClick: E
					})
				]
			})]
		}, "product-link-drawer");
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
