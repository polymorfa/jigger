__d("WAWebDesktopUpsellCallingPopover.react", [
	"WAWebButton.react",
	"WAWebDesktopUpsellCommonStrings",
	"WAWebFlex.react",
	"WAWebText.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
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
		var t, n = e.body, r = e.onClick, a = e.title;
		return s.jsxs((t = o("WAWebFlex.react")).FlexRow, {
			xstyle: [
				c.container,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
				u.paddingBottom14,
				o("WDSPaddings.stylex").wdsPaddings.paddingTop12
			],
			align: "center",
			justify: "all",
			children: [s.jsxs(t.FlexColumn, {
				xstyle: c.textContainer,
				children: [s.jsx(t.FlexItem, { children: s.jsx(o("WAWebText.react").WAWebTextTitle, { children: a }) }), s.jsx(t.FlexItem, {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginTop2,
					children: s.jsx(o("WAWebText.react").WAWebTextMuted, { children: n })
				})]
			}), s.jsx(t.FlexColumn, {
				xstyle: c.buttonContainer,
				align: "center",
				justify: "center",
				children: s.jsx(t.FlexItem, {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginStart16,
					children: s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
						onClick: r,
						children: o("WAWebDesktopUpsellCommonStrings").getDesktopAppDownloadBtnLabel()
					})
				})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
