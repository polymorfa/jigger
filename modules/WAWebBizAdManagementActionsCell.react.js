__d("WAWebBizAdManagementActionsCell.react", [
	"fbt",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizNativeAdsRecreateConstants",
	"WAWebBizNativeAdsWamLogger",
	"WAWebFlex.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WDSButton.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcDelete.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcPauseCircle.react",
	"WDSIconIcPlayArrow.react",
	"WDSIconIcVisibility.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdDeleteModal",
	"useWAWebBizAdPauseModal",
	"useWAWebBizAdResumeWithToast",
	"useWAWebNativeAdsFlowIDContext",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = [], _ = { container: {
		width: "xh8yej3",
		$$css: !0
	} };
	function f(e) {
		var t = o("react-compiler-runtime").c(44), n = e.boostId, a = e.boostingStatus, i = e.isResuming, l = e.manageAdsFlowID, c = e.onDeletePress, d = e.onPausePress, m = e.onRecreatePress, _ = e.onResumePress, f = e.onViewResults, g = e.regulatedCategories, h = g === void 0 ? p : g, y = a === "ACTIVE", C = a === "PAUSED", b = o("WAWebBizNativeAdsRecreateConstants").getRecreateEligibility(a, h), v;
		t[0] !== n || t[1] !== l || t[2] !== d ? (v = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_PAUSE_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, l, n), d();
		}, t[0] = n, t[1] = l, t[2] = d, t[3] = v) : v = t[3];
		var S = v, R;
		t[4] !== n || t[5] !== l || t[6] !== _ ? (R = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_RESUME_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, l, n), _();
		}, t[4] = n, t[5] = l, t[6] = _, t[7] = R) : R = t[7];
		var L = R, E;
		t[8] !== n || t[9] !== l || t[10] !== c ? (E = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_DELETE_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, l, n), c();
		}, t[8] = n, t[9] = l, t[10] = c, t[11] = E) : E = t[11];
		var k = E, I;
		t[12] !== n || t[13] !== l || t[14] !== f ? (I = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_SEE_DETAILS_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, l, n), f();
		}, t[12] = n, t[13] = l, t[14] = f, t[15] = I) : I = t[15];
		var T = I, D;
		t[16] !== n || t[17] !== l || t[18] !== m ? (D = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_INLINE_RECREATE_CTA_CLICK, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, l, n), m();
		}, t[16] = n, t[17] = l, t[18] = m, t[19] = D) : D = t[19];
		var x = D, $;
		t[20] !== S || t[21] !== y ? ($ = y ? u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcPauseCircle.react"),
			onPress: S,
			title: s._(
				/*BTDS*/
				""
			)
		}) : null, t[20] = S, t[21] = y, t[22] = $) : $ = t[22];
		var P;
		t[23] !== L || t[24] !== C || t[25] !== i ? (P = C ? u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcPlayArrow.react"),
			disabled: i,
			onPress: L,
			title: i ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}) : null, t[23] = L, t[24] = C, t[25] = i, t[26] = P) : P = t[26];
		var N;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), t[27] = N) : N = t[27];
		var M;
		t[28] !== T ? (M = u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcVisibility.react"),
			onPress: T,
			title: N
		}), t[28] = T, t[29] = M) : M = t[29];
		var w;
		t[30] !== n || t[31] !== x || t[32] !== l || t[33] !== b ? (w = b === "ineligible" ? null : b === "blocked_by_sac" ? u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: function() {
				return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_INLINE_RECREATE_CTA_IMPRESSION, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, l, n, JSON.stringify({ recreate_blocked_reason: "sac" }));
			},
			children: u.jsx(r("WDSTooltip.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				children: u.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcContentCopy.react"),
					disabled: !0,
					title: s._(
						/*BTDS*/
						""
					)
				})
			})
		}) : b === "eligible" ? u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcContentCopy.react"),
			onPress: x,
			title: s._(
				/*BTDS*/
				""
			)
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + b);
		})(), t[30] = n, t[31] = x, t[32] = l, t[33] = b, t[34] = w) : w = t[34];
		var A;
		t[35] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
			/*BTDS*/
			""
		), t[35] = A) : A = t[35];
		var F;
		t[36] !== k ? (F = u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDelete.react"),
			destructive: !0,
			onPress: k,
			title: A
		}), t[36] = k, t[37] = F) : F = t[37];
		var O;
		return t[38] !== M || t[39] !== w || t[40] !== F || t[41] !== $ || t[42] !== P ? (O = u.jsxs(r("WDSMenu.react"), { children: [
			$,
			P,
			M,
			w,
			F
		] }), t[38] = M, t[39] = w, t[40] = F, t[41] = $, t[42] = P, t[43] = O) : O = t[43], O;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(22), n = e.boostId, a = e.boostingStatus, i = e.onRecreatePress, l = e.onViewResults, s = e.regulatedCategories, c = s === void 0 ? p : s, d = m(null), g = r("useWAWebNativeAdsFlowIDContext")(), h = r("useWAWebBizAdPauseModal")(n), y = r("useWAWebBizAdDeleteModal")(n), C = r("useWAWebBizAdResumeWithToast")(n), b = C[0], v = C[1], S;
		t[0] !== n || t[1] !== a || t[2] !== g.manageAdsFlowID || t[3] !== b || t[4] !== v || t[5] !== i || t[6] !== l || t[7] !== y || t[8] !== h || t[9] !== c ? (S = {
			dismissable: !0,
			enableUIM: !1,
			menu: u.jsx(f, {
				boostId: n,
				boostingStatus: a,
				isResuming: v,
				manageAdsFlowID: g.manageAdsFlowID,
				onDeletePress: y,
				onPausePress: h,
				onRecreatePress: i,
				onResumePress: b,
				onViewResults: l,
				regulatedCategories: c
			}),
			targetRef: d
		}, t[0] = n, t[1] = a, t[2] = g.manageAdsFlowID, t[3] = b, t[4] = v, t[5] = i, t[6] = l, t[7] = y, t[8] = h, t[9] = c, t[10] = S) : S = t[10];
		var R = r("useWDSMenu")(S), L = R.closeMenu, E = R.isMenuOpen, k = R.menuPortal, I = R.openMenu, T;
		t[11] !== n || t[12] !== L || t[13] !== g.manageAdsFlowID || t[14] !== E || t[15] !== I ? (T = function(t) {
			t.stopPropagation(), E ? L() : (o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_ADS_LISTING_THREE_DOTS_CLICKED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, g.manageAdsFlowID, n), I());
		}, t[11] = n, t[12] = L, t[13] = g.manageAdsFlowID, t[14] = E, t[15] = I, t[16] = T) : T = t[16];
		var D = T, x;
		t[17] !== D ? (x = u.jsx(r("WDSButton.react"), {
			ref: d,
			Icon: r("WDSIconIcMoreVert.react"),
			onPress: D,
			size: "small",
			type: "default",
			variant: "borderless"
		}), t[17] = D, t[18] = x) : x = t[18];
		var $;
		return t[19] !== k || t[20] !== x ? ($ = u.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			xstyle: _.container,
			children: [x, k]
		}), t[19] = k, t[20] = x, t[21] = $) : $ = t[21], $;
	}
	l.default = g;
}), 226);
