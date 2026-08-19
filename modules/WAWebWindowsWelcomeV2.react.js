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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(40), n = e.onClickHandler, a = e.onSignupClickHandler, i = e.smsRegistration, l = m(null), c = l[0], f = l[1], h = m(!1), y = h[0], C = h[1], b;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (b = { onVisible: r("once")(g) }, t[0] = b) : b = t[0];
		var v = r("useVisibility")(b), S = v[0], R = m(!1), L = R[0], E = R[1], k;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), t[1] = k) : k = t[1];
		var I = k, T;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), t[2] = T) : T = t[2];
		var D = T, x;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[3] = x) : x = t[3];
		var $ = x, P;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), t[4] = P) : P = t[4];
		var N = P, M;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		), t[5] = M) : M = t[5];
		var w = M, A;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (A = o("WAWebHybridRegGating").isHybridRegEnabled(), t[6] = A) : A = t[6];
		var F = A, O, B;
		t[7] !== c || t[8] !== y ? (O = function() {
			F && c == null && !y && p.onReady(function(e) {
				try {
					f(e());
				} catch (e) {
					C(!0);
				}
			});
		}, B = [
			F,
			c,
			y
		], t[7] = c, t[8] = y, t[9] = O, t[10] = B) : (O = t[9], B = t[10]), d(O, B);
		var W;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (W = F && !o("WAWebLandingPromoGating").isLandingPromoEnabled(), t[11] = W) : W = t[11];
		var q = W, U;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (U = [_.containerChildren, o("WAWebLandingPromoGating").isLandingPromoEnabled() && _.containerChildrenPromo], t[12] = U) : U = t[12];
		var V;
		t[13] !== c || t[14] !== y || t[15] !== L ? (V = F && !y && u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: [_.animationContainer, L && _.animationContainerFadeOut],
			children: c != null ? u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
				loop: !0,
				autoplay: !r("WAWebEnvironment").getIsShowroom(),
				data: c,
				xstyle: _.animationFill
			}) : u.jsx(r("WDSSpinner.react"), { size: 50 })
		}), t[13] = c, t[14] = y, t[15] = L, t[16] = V) : V = t[16];
		var H, G;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (H = F ? u.jsx(r("WDSText.react"), {
			type: "LargeTitle2",
			colorName: "contentDefault",
			children: I
		}) : u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.title,
			children: I
		}), G = F ? u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.subtitle,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: $
			})
		}) : u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.subtitle,
			children: D
		}), t[17] = H, t[18] = G) : (H = t[17], G = t[18]);
		var z = L ? "outline" : "filled", j;
		t[19] !== n ? (j = function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.HYBRID_REG_LOGIN_CLICKED), n();
		}, t[19] = n, t[20] = j) : j = t[20];
		var K;
		t[21] !== z || t[22] !== j ? (K = {
			variant: z,
			type: "default",
			label: N,
			onPress: j,
			xstyle: F ? _.btns : _.btnsOld,
			Icon: F ? r("WDSIconIcQrCode.react") : void 0
		}, t[21] = z, t[22] = j, t[23] = K) : K = t[23];
		var Q;
		t[24] !== a ? (Q = q ? {
			variant: "borderless",
			type: "default",
			label: w,
			onPress: function() {
				o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.HYBRID_REG_SIGNUP_CLICKED), a();
			},
			xstyle: _.btnSignup
		} : void 0, t[24] = a, t[25] = Q) : Q = t[25];
		var X;
		t[26] !== K || t[27] !== Q ? (X = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: K,
			secondaryButtonProps: Q
		}) }), t[26] = K, t[27] = Q, t[28] = X) : X = t[28];
		var Y;
		t[29] !== L || t[30] !== a || t[31] !== i ? (Y = o("WAWebLandingPromoGating").isLandingPromoEnabled() && !q && u.jsx(r("WAWebWindowsWelcomePromo.react"), {
			onFocus: E,
			isFocused: L,
			onContinue: a,
			smsRegistration: i
		}), t[29] = L, t[30] = a, t[31] = i, t[32] = Y) : Y = t[32];
		var J;
		t[33] !== V || t[34] !== X || t[35] !== Y ? (J = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.innerContainer,
			align: "center",
			children: [
				V,
				H,
				G,
				X,
				Y
			]
		}), t[33] = V, t[34] = X, t[35] = Y, t[36] = J) : J = t[36];
		var Z;
		return t[37] !== S || t[38] !== J ? (Z = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: U,
			justify: "start",
			grow: 1,
			ref: S,
			children: J
		}), t[37] = S, t[38] = J, t[39] = Z) : Z = t[39], Z;
	}
	function g() {
		o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.HYBRID_REG_WELCOME_SCREEN_LOADED);
	}
	l.default = f;
}), 226);
