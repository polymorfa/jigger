__d("WAWebPaymentLinkOrderDetailsHeader.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebMastercardLogoIcon.react",
	"WAWebMediaLinkPreviewContainer.react",
	"WAWebPaymentAmountDisplay.react",
	"WAWebPaymentVisaLogoIcon.react",
	"WDSIconIcLink.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		header: {
			boxSizing: "x9f619",
			borderStartStartRadius: "x1i282gy",
			borderStartEndRadius: "xx9ypkp",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			marginTop: "xfl633f",
			marginBottom: "xefnzgg",
			marginInlineStart: "x1sbwfh8",
			marginInlineEnd: "x16q7b9a",
			marginLeft: null,
			marginRight: null,
			paddingBottom: "xwib8y2",
			$$css: !0
		},
		bubbleIn: {
			backgroundColor: "x6egj2d",
			$$css: !0
		},
		bubbleOut: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		subdomainRow: {
			marginTop: "x9otpla",
			$$css: !0
		},
		subdomainText: {
			fontSize: "x1pg5gke",
			color: "xhslqc4",
			paddingInlineStart: "x135b78x",
			$$css: !0
		},
		payWithRow: {
			width: "xh8yej3",
			paddingTop: "x1yrsyyn",
			paddingBottom: "x18d9i69",
			$$css: !0
		},
		payWithText: {
			fontWeight: "xk50ysn",
			fontSize: "x1f6kntn",
			$$css: !0
		},
		iconsContainer: {
			flexGrow: "x1iyjqo2",
			justifyContent: "x13a6bvl",
			alignSelf: "xpvyfi4",
			$$css: !0
		},
		linkIconSmall: {
			width: "x6jxa94",
			height: "x1v9usgg",
			color: "xhslqc4",
			$$css: !0
		},
		cardBrandIcon: {
			marginInlineStart: "xdwrcjd",
			marginTop: "x1gslohp",
			backgroundColor: "x1p8t8ri",
			width: "x1849jeq",
			height: "xxk0z11",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1ekq09l",
			borderInlineEndColor: "xlmuga0",
			borderBottomColor: "x54tcbp",
			borderInlineStartColor: "xlzwp1d",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.isSentByMe, n = e.matchedText, a = e.onClick, i = e.parsedAmount;
		return u.jsx("div", {
			role: "button",
			onClick: a,
			onKeyPress: a,
			tabIndex: 0,
			"data-testid": "payment-link-order-preview-container",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				testid: "payment-link-order-preview-header",
				align: "stretch",
				xstyle: [c.header, t ? c.bubbleOut : c.bubbleIn],
				children: [u.jsx(r("WAWebPaymentAmountDisplay.react"), {
					amount1000: i.amount1000,
					currency: i.currency
				}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingBottom8, o("WDSPaddings.stylex").wdsPaddings.paddingHor8],
					children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: c.payWithRow,
						align: "center",
						testid: "payment-link-order-preview-pay-with-row",
						children: [u.jsx(o("WAWebFlex.react").FlexRow, {
							xstyle: c.payWithText,
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: c.iconsContainer,
							children: [u.jsx(o("WAWebPaymentVisaLogoIcon.react").PaymentVisaLogoIcon, {
								iconXstyle: c.cardBrandIcon,
								viewBox: {
									x: 0,
									y: 5,
									width: 24,
									height: 14
								}
							}), u.jsx(o("WAWebMastercardLogoIcon.react").MastercardLogoIcon, {
								iconXstyle: c.cardBrandIcon,
								viewBox: {
									x: -2,
									y: -1.5,
									width: 26,
									height: 16
								}
							})]
						})]
					}), u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: c.subdomainRow,
						children: [u.jsx(r("WDSIconIcLink.react"), {
							testid: "ic-link-subdomain",
							iconXstyle: c.linkIconSmall
						}), u.jsx(o("WAWebFlex.react").FlexRow, {
							xstyle: c.subdomainText,
							children: o("WAWebMediaLinkPreviewContainer.react").getHostnameForUrl(n)
						})]
					})]
				})]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
