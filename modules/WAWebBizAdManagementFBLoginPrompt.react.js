__d("WAWebBizAdManagementFBLoginPrompt.react", [
	"fbt",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizNativeAdsWamLogger",
	"WAWebFlex.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WAWebWdsIllAdsWaIcon.react",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = JSON.stringify({
		scenario: "S2",
		web_surface: "fb_login_prompt"
	}), _ = {
		container: {
			alignItems: "x6s0dn4",
			flexGrow: "x1iyjqo2",
			rowGap: "x1j3ira4",
			columnGap: "xrdqr27",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		impressionWrapper: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		textContainer: {
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			maxWidth: "xyq1l15",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(18), n = e.adCreationFlowID, a = e.isFBLoggedIn, i = e.onConnectFacebook, l = e.onNavigateToCreation, c, d;
		t[0] !== a || t[1] !== l ? (c = function() {
			a && l();
		}, d = [a, l], t[0] = a, t[1] = l, t[2] = c, t[3] = d) : (c = t[2], d = t[3]), m(c, d);
		var f;
		t[4] !== n || t[5] !== i ? (f = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_FB_WEB_LOGIN_CONSENT_CONFIRM, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_CONSENT_LOGIN_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, n, null, p), i();
		}, t[4] = n, t[5] = i, t[6] = f) : f = t[6];
		var g = f;
		if (a) return null;
		var h;
		t[7] !== n ? (h = function() {
			return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_FB_WEB_LOGIN_CONSENT_CONFIRM, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, n, null, p);
		}, t[7] = n, t[8] = h) : h = t[8];
		var y;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {}), t[9] = y) : y = t[9];
		var C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Headline1",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[10] = C) : C = t[10];
		var b;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.textContainer,
			children: [C, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), t[11] = b) : b = t[11];
		var v;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[12] = v) : v = t[12];
		var S;
		t[13] !== g ? (S = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.container,
			children: [
				y,
				b,
				u.jsx(r("WDSButton.react"), {
					label: v,
					onPress: g,
					size: "medium",
					testid: "fb-login-prompt-continue-button",
					variant: "filled"
				})
			]
		}), t[13] = g, t[14] = S) : S = t[14];
		var R;
		return t[15] !== h || t[16] !== S ? (R = u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: h,
			xstyle: _.impressionWrapper,
			children: S
		}), t[15] = h, t[16] = S, t[17] = R) : R = t[17], R;
	}
	l.default = f;
}), 226);
