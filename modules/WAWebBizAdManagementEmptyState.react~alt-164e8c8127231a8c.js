__d("WAWebBizAdManagementEmptyState.react", [
	"fbt",
	"WAWebBizAdManagementNullView.react",
	"WAWebBizAdManagementPastAdsNudge.react",
	"WAWebFlex.react",
	"WDSButton.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { root: {
		backgroundColor: "x1c7u0tx",
		flexGrow: "x1iyjqo2",
		rowGap: "x1j3ira4",
		$$css: !0
	} };
	function d(e) {
		var t = e.hasCreatedAd, n = e.isWAAEligible, a = e.manageAdsFlowID, i = e.onLoginToFacebook, l = e.onNavigateToCreation, d = e.pageId1;
		if (i != null && t === !0) return u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: c.root,
			children: u.jsx(r("WAWebBizAdManagementPastAdsNudge.react"), {
				manageAdsFlowID: a,
				onConnectFacebook: i,
				onSkipAndCreate: n === !0 ? l : null
			})
		});
		var m = i != null ? u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: i,
			size: "medium",
			variant: "outline"
		}) : null, p = l != null ? u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: l,
			size: "medium",
			variant: "filled"
		}) : m;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: c.root,
			children: [u.jsx(r("WAWebBizAdManagementNullView.react"), {
				manageAdsFlowID: a,
				pageId: d
			}), p]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
