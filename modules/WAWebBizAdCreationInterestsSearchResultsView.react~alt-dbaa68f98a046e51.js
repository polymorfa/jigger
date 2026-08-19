__d("WAWebBizAdCreationInterestsSearchResultsView.react", [
	"fbt",
	"WAWebBizAdCreationInterestRow.react",
	"WAWebFlex.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isInterestSelected, n = e.onInterestToggle, a = e.searchResults, i = e.showTargetType, l = i === void 0 ? !1 : i;
		return a.length === 0 ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.emptyState,
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : u.jsx(u.Fragment, { children: a.map(function(e, o) {
			return u.jsx(r("WAWebBizAdCreationInterestRow.react"), {
				interestNode: e,
				isSelected: t(e),
				onInterestToggle: n,
				showTargetType: l
			}, o);
		}) });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = { emptyState: {
		alignItems: "x6s0dn4",
		flex: "x98rzlu",
		justifyContent: "xl56j7k",
		paddingTop: "xl7twdi",
		paddingBottom: "xvg22vi",
		$$css: !0
	} };
	l.default = c;
}), 226);
