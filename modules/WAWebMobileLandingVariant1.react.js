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
	"react",
	"react-compiler-runtime"
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
		var e = o("react-compiler-runtime").c(10), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], e[0] = t) : t = e[0], c(h, t);
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = "xvmahel x1d423rg x1us19tq xh8yej3", e[1] = n) : n = e[1];
		var a;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 0,
			xstyle: d.paddingInlineEnd6,
			children: u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
				height: 30,
				iconXstyle: p.brandColor
			})
		}), e[2] = a) : a = e[2];
		var i;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: p.logoRow,
			testid: "mobile-landing-logo-row",
			children: [a, u.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop2,
				children: u.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
					height: 20,
					iconXstyle: p.brandColor
				})
			})]
		}), e[3] = i) : i = e[3];
		var l;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebFlex.react").FlexItem, {
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
		}), e[4] = l) : l = e[4];
		var m;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x2b8uid" }, e[5] = m) : m = e[5];
		var _;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: p.heroSection,
			testid: "mobile-landing-hero-section",
			children: [l, u.jsx(r("WDSTextContainer.react"), { children: u.jsx("span", babelHelpers.extends({}, m, { children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					"",
					[s._param("url", u.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDefault",
						children: "web.whatsapp.com"
					}))]
				)
			}) })) })]
		}), e[6] = _) : _ = e[6];
		var y;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(r("WDSText.react"), {
			type: "Headline1",
			colorName: "persistentAlwaysBlack",
			xstyle: p.signupTitleText,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[7] = y) : y = e[7];
		var C;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x2b8uid x9e0you" }, e[8] = C) : C = e[8];
		var b;
		return e[9] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			grow: 1,
			className: n,
			testid: "mobile-landing-variant1",
			children: [
				i,
				_,
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					xstyle: p.signupSection,
					testid: "mobile-landing-signup-section",
					children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						xstyle: p.signupContent,
						children: [
							y,
							u.jsx(r("WDSTextContainer.react"), { children: u.jsx("span", babelHelpers.extends({}, C, { children: u.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									"",
									[s._param("privacyPolicyLink", u.jsx(r("WAWebClickableLink.react"), {
										onClick: g,
										children: u.jsx(r("WDSText.react"), {
											type: "Body3",
											colorName: "contentDeemphasized",
											xstyle: p.legalLink,
											children: s._(
												/*BTDS*/
												""
											)
										})
									})), s._param("termsOfServiceLink", u.jsx(r("WAWebClickableLink.react"), {
										onClick: f,
										children: u.jsx(r("WDSText.react"), {
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
							}) })) }),
							u.jsx(r("WAWebMobileLandingPhoneInput.react"), {})
						]
					})
				})
			]
		}), e[9] = b) : b = e[9], b;
	}
	function f() {
		return o("WAWebExternalLink.react").openExternalLink("https://www.whatsapp.com/legal/terms-of-service");
	}
	function g() {
		return o("WAWebExternalLink.react").openExternalLink("https://www.whatsapp.com/legal/privacy-policy");
	}
	function h() {
		o("WAWebMobileLandingAcquisitionQpl").logMobileLandingAcquisitionEvent("variant1_screen_loaded");
	}
	l.default = _;
}), 226);
