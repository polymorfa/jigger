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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingBottom5: {
		paddingBottom: "xs9asl8",
		$$css: !0
	} }, d = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(17), n = e.ctaDisplayType, a = e.shouldShowHeader, i = a === void 0 ? !0 : a, l = p, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[0] = m) : m = t[0];
		var _ = m, f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[1] = f) : f = t[1];
		var g = f, h = g;
		if (n === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.LINK) {
			var y;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
				/*BTDS*/
				"",
				[s._param("error-desc-text", g), s._implicitParam("=m3", u.jsx(r("WAWebClickableLink.react"), {
					onClick: l,
					testid: "go-to-catalog-link",
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			), t[2] = y) : y = t[2], h = y;
		} else if (n === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON) {
			var C;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
				/*BTDS*/
				"",
				[s._param("error-desc-text", g)]
			), t[3] = C) : C = t[3], h = C;
		}
		var b;
		t[4] !== n ? (b = (n === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON || n === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.NONE) && u.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, {
			iconXstyle: d.secondaryColor,
			directional: !0,
			height: 24,
			width: 24
		}), t[4] = n, t[5] = b) : b = t[5];
		var v;
		t[6] !== i ? (v = i && u.jsx(o("WAWebText.react").WAWebTextTitle, {
			textAlign: "center",
			xstyle: [c.paddingBottom5, o("WDSPaddings.stylex").wdsPaddings.paddingTop16],
			children: _
		}), t[6] = i, t[7] = v) : v = t[7];
		var S;
		t[8] !== h ? (S = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			testid: "error-description-test",
			textAlign: "center",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom24,
			children: h
		}), t[8] = h, t[9] = S) : S = t[9];
		var R;
		t[10] !== n ? (R = n === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON && u.jsx(r("WAWebBox.react"), {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom24,
			children: u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
				onClick: l,
				testid: "go-to-catalog-button",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[10] = n, t[11] = R) : R = t[11];
		var L;
		return t[12] !== b || t[13] !== v || t[14] !== S || t[15] !== R ? (L = u.jsxs(r("WAWebBox.react"), {
			align: "center",
			direction: "vertical",
			flex: !0,
			testid: "catalog-load-error",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
			children: [
				b,
				v,
				S,
				R
			]
		}), t[12] = b, t[13] = v, t[14] = S, t[15] = R, t[16] = L) : L = t[16], L;
	}
	function p() {
		o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow({
			entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE,
			isInitialStep: !0
		});
	}
	l.CatalogLoadError = m;
}), 226);
