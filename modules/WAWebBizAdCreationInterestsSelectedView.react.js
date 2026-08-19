__d("WAWebBizAdCreationInterestsSelectedView.react", [
	"fbt",
	"WAWebBizAdCreationInterestRow.react",
	"WAWebBizAdCreationInterestsSectionHeader.react",
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(15), n = e.onInterestToggle, a = e.selectedInterests, i = e.showTargetType, l = i === void 0 ? !1 : i, c;
		t[0] !== l ? (c = l ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = l, t[1] = c) : c = t[1];
		var d = c, m;
		t[2] !== d || t[3] !== l ? (m = l ? u.jsx(r("WAWebBizAdCreationInterestsSectionHeader.react"), { title: d }) : u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: d
		}), t[2] = d, t[3] = l, t[4] = m) : m = t[4];
		var p;
		if (t[5] !== n || t[6] !== a || t[7] !== l) {
			var _;
			t[9] !== n || t[10] !== l ? (_ = function(t, o) {
				return u.jsx(r("WAWebBizAdCreationInterestRow.react"), {
					interestNode: t,
					isSelected: !0,
					onInterestToggle: n,
					showTargetType: l
				}, o);
			}, t[9] = n, t[10] = l, t[11] = _) : _ = t[11], p = a.map(_), t[5] = n, t[6] = a, t[7] = l, t[8] = p;
		} else p = t[8];
		var f;
		return t[12] !== m || t[13] !== p ? (f = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			testid: "biz_native_ads_interest_selected_section",
			children: [m, p]
		}), t[12] = m, t[13] = p, t[14] = f) : f = t[14], f;
	}
	l.default = c;
}), 226);
