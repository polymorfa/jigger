__d("WAWebBizAdManagementEmptyState.react", [
	"fbt",
	"WAWebBizAdManagementNullView.react",
	"WAWebBizAdManagementPastAdsNudge.react",
	"WAWebFlex.react",
	"WDSButton.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { root: {
		backgroundColor: "x1c7u0tx",
		flexGrow: "x1iyjqo2",
		rowGap: "x1j3ira4",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(15), n = e.hasCreatedAd, a = e.isWAAEligible, i = e.manageAdsFlowID, l = e.onLoginToFacebook, d = e.onNavigateToCreation, m = e.pageId1;
		if (l != null && n === !0) {
			var p = a === !0 ? d : null, _;
			return t[0] !== i || t[1] !== l || t[2] !== p ? (_ = u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				xstyle: c.root,
				children: u.jsx(r("WAWebBizAdManagementPastAdsNudge.react"), {
					manageAdsFlowID: i,
					onConnectFacebook: l,
					onSkipAndCreate: p
				})
			}), t[0] = i, t[1] = l, t[2] = p, t[3] = _) : _ = t[3], _;
		}
		var f;
		t[4] !== l ? (f = l != null ? u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: l,
			size: "medium",
			variant: "outline"
		}) : null, t[4] = l, t[5] = f) : f = t[5];
		var g = f, h;
		t[6] !== g || t[7] !== d ? (h = d != null ? u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: d,
			size: "medium",
			variant: "filled"
		}) : g, t[6] = g, t[7] = d, t[8] = h) : h = t[8];
		var y = h, C;
		t[9] !== i || t[10] !== m ? (C = u.jsx(r("WAWebBizAdManagementNullView.react"), {
			manageAdsFlowID: i,
			pageId: m
		}), t[9] = i, t[10] = m, t[11] = C) : C = t[11];
		var b;
		return t[12] !== y || t[13] !== C ? (b = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: c.root,
			children: [C, y]
		}), t[12] = y, t[13] = C, t[14] = b) : b = t[14], b;
	}
	l.default = d;
}), 226);
