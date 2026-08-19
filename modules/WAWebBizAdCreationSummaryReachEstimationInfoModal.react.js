__d("WAWebBizAdCreationSummaryReachEstimationInfoModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		closeButton: {
			height: "xg7h5cd",
			width: "xeq5yr9",
			$$css: !0
		},
		content: {
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			$$css: !0
		},
		header: {
			columnGap: "xrdqr27",
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "x1phvje8",
			$$css: !0
		},
		root: {
			boxSizing: "x9f619",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x3p9ev8",
			$$css: !0
		}
	}, d = "https://www.facebook.com/business/help/675615482516035";
	function m() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: c.root,
				children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: c.header,
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: o("WAWebModalManager").closeModalManager,
						size: "medium",
						variant: "borderless",
						xstyle: c.closeButton
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}), u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "stretch",
					xstyle: c.content,
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
								href: d,
								children: s._(
									/*BTDS*/
									"",
									[s._param("learnMoreLink", r("WAWebFbtCommon")("Learn more"))]
								)
							}))]
						)
					})
				})]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
