__d("WAWebMobileLandingVariant1.react", [
	"fbt",
	"WAWebClickableLink.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebMobileLandingAcquisitionQpl",
	"WAWebMobileLandingPhoneInput.react",
	"WAWebWaLogoIcon.react",
	"WAWebWaWordmarkIcon.react",
	"WDSMargins.stylex",
	"WDSText.react",
	"WDSTextContainer.react",
	"bx",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect, d = { paddingInlineEnd6: {
		paddingInlineEnd: "x1icxu4v",
		$$css: !0
	} }, m = 380, p = {
		brandColor: {
			color: "x1y4xi8",
			$$css: !0
		},
		logoRow: {
			marginTop: "x9u28bd",
			marginBottom: "x14mdic9",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		heroSection: {
			maxWidth: "x1dt7z5j",
			width: "xh8yej3",
			marginInlineStart: "xvc5jky",
			marginInlineEnd: "x11t971q",
			marginLeft: null,
			marginRight: null,
			paddingBottom: "xvg22vi",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		clipArtContainer: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		signupTitleText: {
			textAlign: "x2b8uid",
			marginBottom: "xefnzgg",
			$$css: !0
		},
		legalLink: {
			textDecorationLine: "xujl8zx",
			$$css: !0
		},
		signupSection: {
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			backgroundColor: "x12peec7",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			width: "xh8yej3",
			paddingTop: "xl7twdi",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			boxSizing: "x9f619",
			$$css: !0
		},
		signupContent: {
			maxWidth: "x1dt7z5j",
			width: "xh8yej3",
			marginInlineStart: "xvc5jky",
			marginInlineEnd: "x11t971q",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		}
	};
	function _() {
		var e, t;
		return c(function() {
			o("WAWebMobileLandingAcquisitionQpl").logMobileLandingAcquisitionEvent("variant1_screen_loaded");
		}, []), u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
			align: "center",
			grow: 1,
			className: "xvmahel x1d423rg x1us19tq xh8yej3",
			testid: "mobile-landing-variant1",
			children: [
				u.jsxs(t.FlexRow, {
					align: "center",
					justify: "center",
					xstyle: p.logoRow,
					testid: "mobile-landing-logo-row",
					children: [u.jsx(t.FlexItem, {
						grow: 0,
						xstyle: d.paddingInlineEnd6,
						children: u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
							height: 30,
							iconXstyle: p.brandColor
						})
					}), u.jsx(t.FlexItem, {
						grow: 1,
						xstyle: o("WDSMargins.stylex").wdsMargins.marginTop2,
						children: u.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
							height: 20,
							iconXstyle: p.brandColor
						})
					})]
				}),
				u.jsxs(t.FlexColumn, {
					align: "center",
					xstyle: p.heroSection,
					testid: "mobile-landing-hero-section",
					children: [u.jsx(t.FlexItem, {
						align: "center",
						justify: "center",
						xstyle: p.clipArtContainer,
						children: u.jsx("img", {
							className: "x1wkxgih x19kjcj4",
							alt: s._(
								/*BTDS*/
								""
							),
							src: r("bx").getURL(r("bx")("15023"))
						})
					}), u.jsx(r("WDSTextContainer.react"), { children: u.jsx("span", {
						className: "x2b8uid",
						children: u.jsx(e = r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								"",
								[s._param("url", u.jsx(e, {
									type: "Body2Emphasized",
									colorName: "contentDefault",
									children: "web.whatsapp.com"
								}))]
							)
						})
					}) })]
				}),
				u.jsx(t.FlexColumn, {
					align: "center",
					xstyle: p.signupSection,
					testid: "mobile-landing-signup-section",
					children: u.jsxs(t.FlexColumn, {
						align: "center",
						xstyle: p.signupContent,
						children: [
							u.jsx(e, {
								type: "Headline1",
								colorName: "persistentAlwaysBlack",
								xstyle: p.signupTitleText,
								children: s._(
									/*BTDS*/
									""
								)
							}),
							u.jsx(r("WDSTextContainer.react"), { children: u.jsx("span", {
								className: "x2b8uid x9e0you",
								children: u.jsx(e, {
									type: "Body3",
									colorName: "contentDeemphasized",
									children: s._(
										/*BTDS*/
										"",
										[s._param("privacyPolicyLink", u.jsx(r("WAWebClickableLink.react"), {
											onClick: function() {
												return o("WAWebExternalLink.react").openExternalLink("https://www.whatsapp.com/legal/privacy-policy");
											},
											children: u.jsx(e, {
												type: "Body3",
												colorName: "contentDeemphasized",
												xstyle: p.legalLink,
												children: s._(
													/*BTDS*/
													""
												)
											})
										})), s._param("termsOfServiceLink", u.jsx(r("WAWebClickableLink.react"), {
											onClick: function() {
												return o("WAWebExternalLink.react").openExternalLink("https://www.whatsapp.com/legal/terms-of-service");
											},
											children: u.jsx(e, {
												type: "Body3",
												colorName: "contentDeemphasized",
												xstyle: p.legalLink,
												children: s._(
													/*BTDS*/
													""
												)
											})
										}))]
									)
								})
							}) }),
							u.jsx(r("WAWebMobileLandingPhoneInput.react"), {})
						]
					})
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
