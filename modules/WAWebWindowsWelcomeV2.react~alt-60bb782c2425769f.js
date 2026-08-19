__d("WAWebWindowsWelcomeV2.react", [
	"fbt",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebHybridRegGating",
	"WAWebLandingPromoGating",
	"WAWebLinkDeviceQplHelpLinkEvent",
	"WAWebLottieAnimationLoadable",
	"WAWebWindowsWelcomePromo.react",
	"WDSButtonGroup.react",
	"WDSIconIcQrCode.react",
	"WDSSpinner.react",
	"WDSText.react",
	"once",
	"react",
	"requireDeferred",
	"useVisibility"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = r("requireDeferred")("WAWebWelcomeScreenAnimation").__setRef("WAWebWindowsWelcomeV2.react"), _ = {
		containerChildren: {
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			width: "xh8yej3",
			maxWidth: "xqh7x41",
			minWidth: "x18n5i07",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			boxSizing: "x9f619",
			alignSelf: "xamitd3",
			maxHeight: "x1ahwlph",
			$$css: !0
		},
		containerChildrenPromo: {
			maxHeight: "x77mbcv",
			$$css: !0
		},
		innerContainer: {
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			textAlign: "x2b8uid",
			width: "xh8yej3",
			minWidth: "x18n5i07",
			$$css: !0
		},
		title: {
			paddingBottom: "xvg22vi",
			paddingInlineEnd: "xcldk2z x1mg44db",
			fontSize: "x579bpy",
			lineHeight: "xbzal7z",
			letterSpacing: "xn42ay6",
			fontWeight: "x1s688f",
			$$css: !0
		},
		subtitle: {
			paddingBottom: "xx6bls6",
			fontSize: "x1f6kntn",
			lineHeight: "x1fc57z9",
			letterSpacing: "xf4yft",
			fontWeight: "xo1l8bm",
			color: "xhslqc4",
			$$css: !0
		},
		btns: {
			width: "xh8yej3",
			maxWidth: "xyq1l15",
			minWidth: "x2ixbly",
			$$css: !0
		},
		btnsOld: {
			width: "xzjbwwf",
			$$css: !0
		},
		btnSignup: {
			marginBottom: "xefnzgg",
			$$css: !0
		},
		animationContainer: {
			marginBottom: "x1ua1l7f",
			width: "xc5o50y",
			height: "xmrbpvb",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			transform: "x17dzmu4",
			opacity: "x1hc1fzr",
			transitionProperty: "x1humd01",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "xz4gly6",
			$$css: !0
		},
		animationFill: {
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		animationContainerFadeOut: {
			height: "xqtp20y",
			marginBottom: "xat24cr",
			opacity: "xg01cxk",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.onClickHandler, n = e.onSignupClickHandler, a = e.smsRegistration, i = m(null), l = i[0], c = i[1], f = m(!1), g = f[0], h = f[1], y = r("useVisibility")({ onVisible: r("once")(function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.HYBRID_REG_WELCOME_SCREEN_LOADED);
		}) }), C = y[0], b = m(!1), v = b[0], S = b[1], R = s._(
			/*BTDS*/
			""
		), L = s._(
			/*BTDS*/
			""
		), E = s._(
			/*BTDS*/
			""
		), k = s._(
			/*BTDS*/
			""
		), I = s._(
			/*BTDS*/
			""
		), T = o("WAWebHybridRegGating").isHybridRegEnabled();
		d(function() {
			T && l == null && !g && p.onReady(function(e) {
				try {
					c(e());
				} catch (e) {
					h(!0);
				}
			});
		}, [
			T,
			l,
			g
		]);
		var D = T && !o("WAWebLandingPromoGating").isLandingPromoEnabled();
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: [_.containerChildren, o("WAWebLandingPromoGating").isLandingPromoEnabled() && _.containerChildrenPromo],
			justify: "start",
			grow: 1,
			ref: C,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: _.innerContainer,
				align: "center",
				children: [
					T && !g && u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: [_.animationContainer, v && _.animationContainerFadeOut],
						children: l != null ? u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
							loop: !0,
							autoplay: !r("WAWebEnvironment").getIsShowroom(),
							data: l,
							xstyle: _.animationFill
						}) : u.jsx(r("WDSSpinner.react"), { size: 50 })
					}),
					T ? u.jsx(r("WDSText.react"), {
						type: "LargeTitle2",
						colorName: "contentDefault",
						children: R
					}) : u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: _.title,
						children: R
					}),
					T ? u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: _.subtitle,
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: E
						})
					}) : u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: _.subtitle,
						children: L
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(r("WDSButtonGroup.react"), {
						orientation: "stacked",
						width: "fill",
						primaryButtonProps: {
							variant: v ? "outline" : "filled",
							type: "default",
							label: k,
							onPress: function() {
								o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.HYBRID_REG_LOGIN_CLICKED), t();
							},
							xstyle: T ? _.btns : _.btnsOld,
							Icon: T ? r("WDSIconIcQrCode.react") : void 0
						},
						secondaryButtonProps: D ? {
							variant: "borderless",
							type: "default",
							label: I,
							onPress: function() {
								o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.HYBRID_REG_SIGNUP_CLICKED), n();
							},
							xstyle: _.btnSignup
						} : void 0
					}) }),
					o("WAWebLandingPromoGating").isLandingPromoEnabled() && !D && u.jsx(r("WAWebWindowsWelcomePromo.react"), {
						onFocus: S,
						isFocused: v,
						onContinue: n,
						smsRegistration: a
					})
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
