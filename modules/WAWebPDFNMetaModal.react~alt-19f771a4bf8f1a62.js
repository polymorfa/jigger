__d("WAWebPDFNMetaModal.react", [
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebPDFNContentElement.react",
	"WAWebPDFNHeaderImage.react",
	"WAWebPDFNSanitizedSvg.react",
	"WAWebThemeContext",
	"WDSPaddings.stylex",
	"WaWebPDFNCommonUtils",
	"XMDSButton.react",
	"XMDSDialogHeader.react",
	"XMDSDialogPage.react",
	"XMDSDialogTitle.react",
	"XMDSText.react",
	"XMDSTheme.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		paddingTop10: {
			paddingTop: "x889kno",
			$$css: !0
		},
		paddingBottom6: {
			paddingBottom: "x10b6aqq",
			$$css: !0
		}
	}, c = {
		cdsContainer: {
			fontFamily: "xjn6cdj",
			$$css: !0
		},
		bulletSubtitle: {
			fontSize: "x6prxxf",
			lineHeight: "x17fgdl5",
			fontWeight: "xo1l8bm",
			$$css: !0
		},
		secondaryText: {
			color: "xb6zdsr",
			$$css: !0
		},
		secondaryTextDark: {
			color: "x1rmb33y",
			$$css: !0
		},
		link: {
			fontWeight: "x1xlr1w8",
			$$css: !0
		},
		blueLink: {
			color: "x1aejobo",
			$$css: !0
		},
		blueLinkDark: {
			color: "x180kvt1",
			$$css: !0
		},
		cdsFooterText: {
			fontSize: "x1nxh6w3",
			lineHeight: "xuy8w9f",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = e.onAccept, a = e.onCancel, i = e.pdfnNotice, l = o("WAWebThemeContext").useIsDarkTheme(), u = o("WaWebPDFNCommonUtils").getFormattedPdfnContent(i, { linkXstyle: [c.link, l ? c.blueLinkDark : c.blueLink] }), d = u.bulletContent, m = u.footerContent, _ = u.headerContent, f = u.okText, g = d != null ? s.jsx(p, { bullets: d }) : null, h = m != null ? s.jsx(r("WAWebPDFNContentElement.react"), {
			as: "div",
			content: m,
			xstyle: [
				c.cdsFooterText,
				l ? c.secondaryTextDark : c.secondaryText,
				o("WDSPaddings.stylex").wdsPaddings.paddingBottom12
			]
		}) : null, y = s.jsx(r("WAWebPDFNHeaderImage.react"), {
			content: _,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
		});
		return s.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.CDS,
			children: s.jsx(r("XMDSTheme.react"), {
				displayMode: l ? "dark" : "light",
				children: s.jsx(r("XMDSDialogPage.react"), {
					footer: null,
					header: s.jsx(r("XMDSDialogHeader.react"), { onClose: a }),
					inline: !0,
					children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
						paddingStart: 20,
						paddingEnd: 20,
						xstyle: c.cdsContainer,
						children: [
							s.jsx(o("WAWebFlex.react").FlexRow, {
								alignSelf: "center",
								children: y
							}),
							s.jsx(r("XMDSDialogTitle.react"), { children: s.jsx(r("XMDSText.react"), {
								textStyle: "headline2",
								xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingVer16,
								children: i == null || (t = i.privacyDisclosureModal) == null ? void 0 : t.title
							}) }),
							g,
							h,
							s.jsx(r("XMDSButton.react"), {
								label: f,
								onPress: n
							})
						]
					})
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.iconSvg, n = e.secondaryText, a = e.text, i = o("WAWebThemeContext").useIsDarkTheme(), l = n != null ? s.jsx(r("WAWebPDFNContentElement.react"), {
			as: "span",
			xstyle: [c.bulletSubtitle, i ? c.secondaryTextDark : c.secondaryText],
			content: n
		}) : null;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 12,
			xstyle: [u.paddingTop10, u.paddingBottom6],
			children: [s.jsx(r("WAWebPDFNSanitizedSvg.react"), { iconSvg: t }), s.jsxs(o("WAWebFlex.react").FlexColumn, {
				rowGap: 4,
				children: [s.jsx(r("XMDSText.react"), {
					textStyle: "primaryLabel",
					children: a
				}), l]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.bullets;
		return s.jsx(o("WAWebFlex.react").FlexColumn, {
			paddingBottom: 16,
			children: t.map(function(e, t) {
				return s.jsx(m, {
					text: e.text,
					icon: e.icon,
					iconSvg: e.iconSvg,
					secondaryText: e.secondaryText
				}, t);
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = d;
}), 98);
