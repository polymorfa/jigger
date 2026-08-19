__d("WAWebDesktopUpsellCallingPopover.react", [
	"WAWebButton.react",
	"WAWebDesktopUpsellCommonStrings",
	"WAWebFlex.react",
	"WAWebText.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { paddingBottom14: {
		paddingBottom: "x1g2khh7",
		$$css: !0
	} }, c = {
		container: {
			minWidth: "x1h80ny7",
			$$css: !0
		},
		textContainer: {
			maxWidth: "x1jkqq1h",
			$$css: !0
		},
		buttonContainer: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(14), n = e.body, r = e.onClick, a = e.title, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			c.container,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
			u.paddingBottom14,
			o("WDSPaddings.stylex").wdsPaddings.paddingTop12
		], t[0] = i) : i = t[0];
		var l;
		t[1] !== a ? (l = s.jsx(o("WAWebFlex.react").FlexItem, { children: s.jsx(o("WAWebText.react").WAWebTextTitle, { children: a }) }), t[1] = a, t[2] = l) : l = t[2];
		var d;
		t[3] !== n ? (d = s.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginTop2,
			children: s.jsx(o("WAWebText.react").WAWebTextMuted, { children: n })
		}), t[3] = n, t[4] = d) : d = t[4];
		var m;
		t[5] !== l || t[6] !== d ? (m = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.textContainer,
			children: [l, d]
		}), t[5] = l, t[6] = d, t[7] = m) : m = t[7];
		var p;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (p = o("WAWebDesktopUpsellCommonStrings").getDesktopAppDownloadBtnLabel(), t[8] = p) : p = t[8];
		var _;
		t[9] !== r ? (_ = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.buttonContainer,
			align: "center",
			justify: "center",
			children: s.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginStart16,
				children: s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
					onClick: r,
					children: p
				})
			})
		}), t[9] = r, t[10] = _) : _ = t[10];
		var f;
		return t[11] !== m || t[12] !== _ ? (f = s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: i,
			align: "center",
			justify: "all",
			children: [m, _]
		}), t[11] = m, t[12] = _, t[13] = f) : f = t[13], f;
	}
	l.default = d;
}), 98);
