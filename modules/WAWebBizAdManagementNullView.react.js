__d("WAWebBizAdManagementNullView.react", [
	"fbt",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizNativeAdsWamLogger",
	"WAWebFlex.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WAWebWdsIllAdsWaIcon.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		container: {
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		description: {
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		textContainer: {
			maxWidth: "xyq1l15",
			paddingTop: "x1p57kb1",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(8), n = e.manageAdsFlowID, a = e.pageId, i;
		t[0] !== n || t[1] !== a ? (i = function() {
			return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_TOTAL_METRICS_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, n, null, JSON.stringify({
				null_state: !0,
				pageId: a
			}));
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {}), t[3] = l) : l = t[3];
		var d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Headline1",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[4] = d) : d = t[4];
		var m;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.container,
			children: [l, u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.textContainer,
				children: [d, u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					xstyle: c.description,
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})]
		}), t[5] = m) : m = t[5];
		var p;
		return t[6] !== i ? (p = u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: i,
			children: m
		}), t[6] = i, t[7] = p) : p = t[7], p;
	}
	l.default = d;
}), 226);
