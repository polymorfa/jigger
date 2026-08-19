__d("WAWebProductCatalogCatalogLinkDrawer.react", [
	"fbt",
	"WAWebBizSendCatalogLinkFlow.react",
	"WAWebCatalogShortLinkUtils",
	"WAWebCellFrame.react",
	"WAWebCopyLinkButton.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLinkText.react",
	"WAWebProductCatalogLogEvents",
	"WAWebSendLinkButton.react",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useContext, p = { paddingBottom10: {
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, _ = { surface: "smb-catalog-share-link" }, f = { prompt: {
		lineHeight: "x101yacv",
		$$css: !0
	} }, g = "catalog-link-anchor";
	function h(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.catalog, l = a.centerDrawer, c = a.contact, h = a.onBack, y = a.onCancel, C = a.onSend, b = a.prompt, v = m(o("WAWebDrawerContext").DrawerContext), S = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizSendCatalogLinkFlow.react"), {
				catalog: i,
				onSend: C
			}), { transition: "modal-flow" }), o("WAWebProductCatalogLogEvents").logShareCatalogViaWALinkClick({
				catalogOwnerWid: i.id,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(v)
			});
		}, R = function(t) {
			t.preventDefault(), S();
		}, L = function() {
			o("WAWebProductCatalogLogEvents").logShareCatalogCopyLinkClick({
				catalogOwnerWid: i.id,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(v)
			});
		}, E = d.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: c.id,
			size: 82,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High
		}), k, I;
		return l && (k = "labels", I = "center-column"), d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: k,
			tsNavigationData: _,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "catalog-link-title",
				title: s._(
					/*BTDS*/
					""
				),
				onBack: h,
				onCancel: y,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), d.jsxs(r("WAWebDrawerBody.react"), {
				theme: I,
				children: [
					d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([
						f.prompt,
						o("WDSPaddings.stylex").wdsPaddings.paddingTop0,
						o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
						p.paddingBottom10
					]), { children: b })),
					d.jsx(r("WAWebCellFrame.react"), {
						image: E,
						primary: d.jsx(o("WAWebName.react").Name, {
							contact: c,
							useVerifiedName: !0
						}),
						theme: "identity",
						secondary: d.jsx(r("WAWebProductCatalogLinkText.react"), {
							id: g,
							href: o("WAWebCatalogShortLinkUtils").createCatalogLink(i.id.user),
							onClick: R,
							noHandle: !0
						})
					}),
					d.jsx(r("WAWebSendLinkButton.react"), { onClick: S }),
					d.jsx(r("WAWebCopyLinkButton.react"), {
						elementId: g,
						onClick: L
					})
				]
			})]
		}, "catalog-link-drawer");
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
