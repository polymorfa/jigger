__d("WAWebBizAdManagementIdentityButton.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationIdentityProfileImage.react",
	"WAWebBizAdManagementIdentityButton_facebookProfile.graphql",
	"WAWebBizNativeAdsIdentityLogger",
	"WAWebWamEnumLwiScreenAction",
	"WDSFocusStateStyles",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebBizAdCreationIdentityContext",
	"useWAWebBizAdCreationIdentitySelectionMenu.react",
	"useWAWebNativeAdsFlowIDContext",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useRef, f = { clickable: {
		borderStartStartRadius: "x1c9tyrk",
		borderStartEndRadius: "xeusxvb",
		borderEndEndRadius: "x1pahc9y",
		borderEndStartRadius: "x1ertn4p",
		cursor: "x1ypdohk",
		height: "x1vqgdyp",
		width: "x100vrsf",
		$$css: !0
	} }, g = e !== void 0 ? e : e = n("WAWebBizAdManagementIdentityButton_facebookProfile.graphql");
	function h(e) {
		var t = o("react-compiler-runtime").c(20), n = e.facebookProfileRef, a = n === void 0 ? null : n, i = o("CometRelay").useFragment(g, a), l = r("useWAWebBizAdCreationIdentityContext")(), c = r("useWAWebNativeAdsFlowIDContext")(), m;
		t[0] !== c.manageAdsFlowID || t[1] !== l ? (m = function() {
			var e = l != null ? l : {}, t = e.accountType, n = e.hasLinkedFbPage, r = e.isWAAEligible;
			o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent({
				_accountType: t,
				hasLinkedFbPage: n != null ? n : !1,
				isWAAEligible: r != null ? r : !1,
				lwiFlowId: c.manageAdsFlowID,
				lwiScreenAction: o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW
			});
		}, t[0] = c.manageAdsFlowID, t[1] = l, t[2] = m) : m = t[2];
		var p = m, h = r("useWAWebBizAdCreationIdentitySelectionMenu.react")(!1, p), y = h.menuContent, C = h.onMenuOpen, b = _(null), v;
		t[3] !== y ? (v = {
			dismissable: !0,
			menu: y,
			targetRef: b
		}, t[3] = y, t[4] = v) : v = t[4];
		var S = r("useWDSMenu")(v), R = S.menuPortal, L = S.openMenu, E;
		t[5] !== C || t[6] !== L ? (E = function() {
			C(), L();
		}, t[5] = C, t[6] = L, t[7] = E) : E = t[7];
		var k = E, I;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), t[8] = I) : I = t[8];
		var T = String(I), D;
		t[9] !== k ? (D = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), k());
		}, t[9] = k, t[10] = D) : D = t[10];
		var x, $;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (x = (u || (u = r("stylex"))).props(f.clickable, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), $ = { className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vqgdyp x6ikm8r x10wlt62 x100vrsf" }, t[11] = x, t[12] = $) : (x = t[11], $ = t[12]);
		var P;
		t[13] !== i ? (P = d.jsx("div", babelHelpers.extends({}, $, { children: d.jsx(r("WAWebBizAdCreationIdentityProfileImage.react"), {
			facebookProfileRef: i,
			size: 40
		}) })), t[13] = i, t[14] = P) : P = t[14];
		var N;
		return t[15] !== k || t[16] !== R || t[17] !== P || t[18] !== D ? (N = d.jsxs("div", babelHelpers.extends({
			ref: b,
			"aria-label": T,
			onClick: k,
			onKeyDown: D,
			role: "button",
			tabIndex: 0
		}, x, { children: [P, R] })), t[15] = k, t[16] = R, t[17] = P, t[18] = D, t[19] = N) : N = t[19], N;
	}
	l.default = h;
}), 226);
