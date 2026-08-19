__d("WAWebCatalogLoadError.react", [
	"fbt",
	"WAWebBox.react",
	"WAWebButton.react",
	"WAWebCatalogLoadErrorLoadable",
	"WAWebCatalogManagementFlowLoadable",
	"WAWebClickableLink.react",
	"WAWebText.react",
	"WAWebWamEnumCatalogEntryPoint",
	"WAWebWarningOutlineIcon.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingBottom5: {
		paddingBottom: "xs9asl8",
		$$css: !0
	} }, d = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function m(e) {
		var t = e.ctaDisplayType, n = e.shouldShowHeader, a = n === void 0 ? !0 : n, i = function() {
			o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow({
				entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE,
				isInitialStep: !0
			});
		}, l = s._(
			/*BTDS*/
			""
		), m = s._(
			/*BTDS*/
			""
		), p = m;
		return t === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.LINK ? p = s._(
			/*BTDS*/
			"",
			[s._param("error-desc-text", m), s._implicitParam("=m3", u.jsx(r("WAWebClickableLink.react"), {
				onClick: i,
				testid: "go-to-catalog-link",
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) : t === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON && (p = s._(
			/*BTDS*/
			"",
			[s._param("error-desc-text", m)]
		)), u.jsxs(r("WAWebBox.react"), {
			align: "center",
			direction: "vertical",
			flex: !0,
			testid: "catalog-load-error",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
			children: [
				(t === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON || t === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.NONE) && u.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, {
					iconXstyle: d.secondaryColor,
					directional: !0,
					height: 24,
					width: 24
				}),
				a && u.jsx(o("WAWebText.react").WAWebTextTitle, {
					textAlign: "center",
					xstyle: [c.paddingBottom5, o("WDSPaddings.stylex").wdsPaddings.paddingTop16],
					children: l
				}),
				u.jsx(o("WAWebText.react").WAWebTextSmall, {
					testid: "error-description-test",
					textAlign: "center",
					xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom24,
					children: p
				}),
				t === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON && u.jsx(r("WAWebBox.react"), {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom24,
					children: u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
						onClick: i,
						testid: "go-to-catalog-button",
						children: s._(
							/*BTDS*/
							""
						)
					})
				})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.CatalogLoadError = m;
}), 226);
