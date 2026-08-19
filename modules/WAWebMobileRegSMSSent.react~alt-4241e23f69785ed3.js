__d("WAWebMobileRegSMSSent.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebLockOutlineIcon.react",
	"WAWebMobileLandingReferrer",
	"WAWebWaLogoIcon.react",
	"WAWebWaWordmarkIcon.react",
	"WAXWhatsAppWebMobileControllerRouteBuilder",
	"WDSText.react",
	"WDSThemes",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useMemo, m = {
		fullHeight: {
			position: "xixxii4",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x5yr21d",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		page: {
			backgroundColor: "xq1354q",
			minHeight: "x1us19tq",
			width: "xh8yej3",
			fontFamily: "x1x14wtl",
			$$css: !0
		},
		container: {
			paddingTop: "x4i7bpe",
			width: "xh8yej3",
			maxWidth: "x1j9u4d2",
			marginInlineStart: "xbt2mb3",
			marginInlineEnd: "xyu1916",
			marginLeft: null,
			marginRight: null,
			boxSizing: "x9f619",
			$$css: !0
		},
		content: {
			marginTop: "xg87l8a",
			marginInlineStart: "xyxtwap",
			marginInlineEnd: "x7vsco6",
			marginLeft: null,
			marginRight: null,
			borderStartStartRadius: "xuqqiot",
			borderStartEndRadius: "x1lkg3h2",
			borderEndEndRadius: "x17mbzc4",
			borderEndStartRadius: "xcouhex",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x2ubtbe",
			borderInlineEndColor: "x1fwa7gd",
			borderBottomColor: "x1esgvb3",
			borderInlineStartColor: "x17vd3jm",
			backgroundColor: "x1280gxy",
			paddingTop: "x1stpksq",
			paddingInlineEnd: "x1yo0pi1",
			paddingBottom: "x1s51fez",
			paddingInlineStart: "x1wjr2jv",
			$$css: !0
		},
		brandColor: {
			color: "x1y4xi8",
			$$css: !0
		},
		centerText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		subtitle: {
			marginBottom: "x1xka2u1",
			$$css: !0
		},
		checkMessages: {
			textDecorationLine: "xujl8zx",
			textDecorationColor: "x1kqcxns",
			textUnderlineOffset: "x3pynha",
			$$css: !0
		},
		smsFrom: {
			marginBottom: "x91k8ka",
			$$css: !0
		},
		helpLink: {
			textDecorationLine: "xujl8zx",
			$$css: !0
		},
		helpRow: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		encryptedRow: {
			marginTop: "x1hmvnq2",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.phoneNumber, a = t.providerNumber, i = function() {
			var e = o("WAWebMobileLandingReferrer").getMobileLandingReferrer(), t = r("WAXWhatsAppWebMobileControllerRouteBuilder").buildUri({ referrer: e }).toString();
			o("WAWebExternalLink.react").openExternalLink(window.location.origin + t, { target: o("WAWebExternalLink.react").ExternalLinkTarget.CURRENT_TAB });
		}, l = function() {
			o("WAWebExternalLink.react").openExternalLink("https://www.whatsapp.com/contact");
		}, u = d(function() {
			if (n == null) return "";
			var e = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
				countryCodeIso: "US",
				phoneNumberWithoutCountryCode: n
			});
			return e == null ? n : o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getFullFormattedInputValue(!1, 1, e.formattedInputValue);
		}, [n]);
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, m.fullHeight), { children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			grow: 1,
			xstyle: m.page,
			children: [c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: m.container,
				children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					columnGap: 8,
					children: [c.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
						height: 33,
						iconXstyle: m.brandColor
					}), c.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
						height: 24,
						iconXstyle: m.brandColor
					})]
				}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					xstyle: m.content,
					children: [
						c.jsx(r("WDSText.react"), {
							type: "LargeTitle2",
							colorName: "persistentAlwaysBlack",
							xstyle: m.centerText,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "persistentAlwaysBlack",
							xstyle: [m.centerText, m.subtitle],
							children: s._(
								/*BTDS*/
								"",
								[s._param("phoneNumber", c.jsx(r("WDSText.react"), {
									type: "Body1Emphasized",
									colorName: "persistentAlwaysBlack",
									children: u
								}))]
							)
						}),
						c.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							xstyle: [m.centerText, m.checkMessages],
							children: s._(
								/*BTDS*/
								""
							)
						}),
						a != null && c.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							xstyle: [m.centerText, m.smsFrom],
							children: s._(
								/*BTDS*/
								"",
								[s._param("providerNumber", a)]
							)
						}),
						c.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							xstyle: [m.centerText, m.helpRow],
							children: s._(
								/*BTDS*/
								"",
								[s._param("edit_number", c.jsx(_, {
									testid: "mobile_reg_sms_sent_edit_number",
									onPress: i,
									children: s._(
										/*BTDS*/
										""
									)
								}))]
							)
						}),
						c.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							xstyle: [m.centerText, m.helpRow],
							children: s._(
								/*BTDS*/
								"",
								[s._param("contact_whatsapp", c.jsx(_, {
									testid: "mobile_reg_sms_sent_contact_support",
									onPress: l,
									children: s._(
										/*BTDS*/
										""
									)
								}))]
							)
						})
					]
				})]
			}), c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				columnGap: 4,
				xstyle: m.encryptedRow,
				children: [c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
					height: 23,
					width: 23,
					"aria-hidden": !0
				}), c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})]
		}) }));
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.children, n = e.onPress, o = e.testid;
		return c.jsx("button", {
			type: "button",
			"data-testid": o,
			onClick: n,
			className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak x1ypdohk xt0psk2 x1qlqyl8 xjb2p0i x1pd3egz x1t35e8",
			children: c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				xstyle: m.helpLink,
				children: t
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
