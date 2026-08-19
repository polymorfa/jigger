__d("WAWebBizAdCreationInterestsSuggestedView.react", [
	"fbt",
	"WAWebBizAdCreationInterestRow.react",
	"WAWebBizAdCreationInterestsSectionHeader.react",
	"WAWebFlex.react",
	"WDSSpinner.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isInterestSelected, n = e.isLoadingSuggestions, a = e.onInterestToggle, i = e.showTargetType, l = i === void 0 ? !1 : i, c = e.suggestedInterests;
		if (!n && c.length === 0) return null;
		var m = l ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			testid: "biz_native_ads_interest_suggested_section",
			children: [l ? u.jsx(r("WAWebBizAdCreationInterestsSectionHeader.react"), { title: m }) : u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: m
			}), n ? u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: d.spinner,
				children: u.jsx(r("WDSSpinner.react"), { size: 24 })
			}) : c.map(function(e, n) {
				return u.jsx(r("WAWebBizAdCreationInterestRow.react"), {
					interestNode: e,
					isSelected: t(e),
					onInterestToggle: a,
					showTargetType: l
				}, n);
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = { spinner: {
		alignItems: "x6s0dn4",
		flex: "x98rzlu",
		justifyContent: "xl56j7k",
		paddingTop: "xl7twdi",
		paddingBottom: "xvg22vi",
		$$css: !0
	} };
	l.default = c;
}), 226);
