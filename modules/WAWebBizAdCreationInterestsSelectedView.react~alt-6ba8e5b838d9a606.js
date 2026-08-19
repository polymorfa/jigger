__d("WAWebBizAdCreationInterestsSelectedView.react", [
	"fbt",
	"WAWebBizAdCreationInterestRow.react",
	"WAWebBizAdCreationInterestsSectionHeader.react",
	"WAWebFlex.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onInterestToggle, n = e.selectedInterests, a = e.showTargetType, i = a === void 0 ? !1 : a, l = i ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			testid: "biz_native_ads_interest_selected_section",
			children: [i ? u.jsx(r("WAWebBizAdCreationInterestsSectionHeader.react"), { title: l }) : u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: l
			}), n.map(function(e, n) {
				return u.jsx(r("WAWebBizAdCreationInterestRow.react"), {
					interestNode: e,
					isSelected: !0,
					onInterestToggle: t,
					showTargetType: i
				}, n);
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
