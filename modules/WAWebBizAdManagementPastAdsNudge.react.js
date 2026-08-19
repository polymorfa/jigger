__d("WAWebBizAdManagementPastAdsNudge.react", [
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
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		buttonContainer: {
			alignItems: "x6s0dn4",
			columnGap: "x1aj3ljl",
			$$css: !0
		},
		container: {
			alignItems: "x6s0dn4",
			flexGrow: "x1iyjqo2",
			justifyContent: "xl56j7k",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1j3ira4",
			$$css: !0
		},
		impressionWrapper: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		textContainer: {
			maxWidth: "xyq1l15",
			rowGap: "x1qvou4u",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(28), n = e.manageAdsFlowID, a = e.onConnectFacebook, i = e.onSkipAndCreate, l = i != null, c;
		t[0] !== l ? (c = JSON.stringify({
			skippable: l,
			web_surface: "past_ads_nudge"
		}), t[0] = l, t[1] = c) : c = t[1];
		var m = c, p;
		t[2] !== m || t[3] !== n || t[4] !== a ? (p = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_NATIVE_PAST_ADS_NUDGE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_CONSENT_LOGIN_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, n, null, m), a();
		}, t[2] = m, t[3] = n, t[4] = a, t[5] = p) : p = t[5];
		var _ = p, f;
		t[6] !== m || t[7] !== n || t[8] !== i ? (f = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_NATIVE_PAST_ADS_NUDGE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_CONSENT_SKIP_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, n, null, m), i == null || i();
		}, t[6] = m, t[7] = n, t[8] = i, t[9] = f) : f = t[9];
		var g = f, h;
		t[10] !== m || t[11] !== n ? (h = function() {
			return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_NATIVE_PAST_ADS_NUDGE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, n, null, m);
		}, t[10] = m, t[11] = n, t[12] = h) : h = t[12];
		var y;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {}), t[13] = y) : y = t[13];
		var C;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			textAlign: "center",
			type: "Headline2",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[14] = C) : C = t[14];
		var b;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.textContainer,
			children: [C, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				textAlign: "center",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), t[15] = b) : b = t[15];
		var v;
		t[16] !== g || t[17] !== l ? (v = l ? u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: g,
			size: "medium",
			testid: "past-ads-nudge-skip-button",
			variant: "borderless"
		}) : null, t[16] = g, t[17] = l, t[18] = v) : v = t[18];
		var S;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[19] = S) : S = t[19];
		var R;
		t[20] !== _ ? (R = u.jsx(r("WDSButton.react"), {
			label: S,
			onPress: _,
			size: "medium",
			testid: "past-ads-nudge-connect-fb-button",
			variant: "filled"
		}), t[20] = _, t[21] = R) : R = t[21];
		var L;
		t[22] !== R || t[23] !== v ? (L = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.container,
			children: [
				y,
				b,
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: d.buttonContainer,
					children: [v, R]
				})
			]
		}), t[22] = R, t[23] = v, t[24] = L) : L = t[24];
		var E;
		return t[25] !== L || t[26] !== h ? (E = u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: h,
			xstyle: d.impressionWrapper,
			children: L
		}), t[25] = L, t[26] = h, t[27] = E) : E = t[27], E;
	}
	l.default = m;
}), 226);
