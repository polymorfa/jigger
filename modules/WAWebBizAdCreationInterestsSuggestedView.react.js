__d("WAWebBizAdCreationInterestsSuggestedView.react", [
	"fbt",
	"WAWebBizAdCreationInterestRow.react",
	"WAWebBizAdCreationInterestsSectionHeader.react",
	"WAWebFlex.react",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(14), n = e.isInterestSelected, a = e.isLoadingSuggestions, i = e.onInterestToggle, l = e.showTargetType, c = e.suggestedInterests, m = l === void 0 ? !1 : l;
		if (!a && c.length === 0) return null;
		var p;
		t[0] !== m ? (p = m ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = m, t[1] = p) : p = t[1];
		var _ = p, f;
		t[2] !== _ || t[3] !== m ? (f = m ? u.jsx(r("WAWebBizAdCreationInterestsSectionHeader.react"), { title: _ }) : u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: _
		}), t[2] = _, t[3] = m, t[4] = f) : f = t[4];
		var g;
		t[5] !== n || t[6] !== a || t[7] !== i || t[8] !== m || t[9] !== c ? (g = a ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.spinner,
			children: u.jsx(r("WDSSpinner.react"), { size: 24 })
		}) : c.map(function(e, t) {
			return u.jsx(r("WAWebBizAdCreationInterestRow.react"), {
				interestNode: e,
				isSelected: n(e),
				onInterestToggle: i,
				showTargetType: m
			}, t);
		}), t[5] = n, t[6] = a, t[7] = i, t[8] = m, t[9] = c, t[10] = g) : g = t[10];
		var h;
		return t[11] !== f || t[12] !== g ? (h = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			testid: "biz_native_ads_interest_suggested_section",
			children: [f, g]
		}), t[11] = f, t[12] = g, t[13] = h) : h = t[13], h;
	}
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
