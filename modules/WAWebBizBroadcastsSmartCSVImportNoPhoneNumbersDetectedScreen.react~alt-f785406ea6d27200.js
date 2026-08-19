__d("WAWebBizBroadcastsSmartCSVImportNoPhoneNumbersDetectedScreen.react", [
	"fbt",
	"WAWebBizBroadcastsTemplateParsingUtils",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		actions: {
			columnGap: "xs2akgl",
			justifyContent: "x13a6bvl",
			marginTop: "x9u28bd",
			width: "xh8yej3",
			$$css: !0
		},
		body: {
			rowGap: "x1qvou4u",
			$$css: !0
		},
		bullet: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		header: {
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			$$css: !0
		},
		root: {
			boxSizing: "x9f619",
			maxWidth: "x1recik0",
			paddingBottom: "xvg22vi",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1f0uite",
			width: "xs8rnei",
			$$css: !0
		},
		title: {
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = e.onSelectColumns, a = e.onTryAnotherFile;
		return u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			onOverlayClick: a,
			testid: "biz-broadcasts-no-phone-numbers-detected-modal",
			children: u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
				align: "stretch",
				xstyle: c.root,
				children: [
					u.jsxs(t.FlexRow, {
						xstyle: c.header,
						children: [u.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							xstyle: c.title,
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcClose.react"),
							"aria-label": s._(
								/*BTDS*/
								""
							),
							onPress: a,
							variant: "borderless",
							testid: "biz-broadcasts-no-phone-numbers-close-button"
						})]
					}),
					u.jsxs(t.FlexColumn, {
						align: "stretch",
						xstyle: c.body,
						children: [u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsxs("ul", {
							className: "x78zum5 xdt5ytf xat24cr xdj266r x12w63v0 x129bwdz",
							children: [
								u.jsx(m, { children: s._(
									/*BTDS*/
									""
								) }),
								u.jsx(m, { children: s._(
									/*BTDS*/
									""
								) }),
								u.jsx(m, { children: s._(
									/*BTDS*/
									""
								) }),
								u.jsx(m, { children: s._(
									/*BTDS*/
									"",
									[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), babelHelpers.extends({}, o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkProps(), { children: s._(
										/*BTDS*/
										""
									) })))]
								) })
							]
						})]
					}),
					u.jsxs(t.FlexRow, {
						xstyle: c.actions,
						children: [u.jsx(r("WDSButton.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onPress: a,
							variant: "borderless",
							testid: "biz-broadcasts-no-phone-numbers-try-another-file-button"
						}), u.jsx(r("WDSButton.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onPress: n,
							variant: "filled",
							testid: "biz-broadcasts-no-phone-numbers-select-columns-button"
						})]
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.children;
		return u.jsxs("li", {
			className: "x1trrmfo x78zum5 x3ct3a4",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				xstyle: c.bullet,
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: t
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);
