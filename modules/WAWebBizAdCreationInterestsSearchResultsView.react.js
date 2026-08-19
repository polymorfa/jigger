__d("WAWebBizAdCreationInterestsSearchResultsView.react", [
	"fbt",
	"WAWebBizAdCreationInterestRow.react",
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(12), n = e.isInterestSelected, a = e.onInterestToggle, i = e.searchResults, l = e.showTargetType, c = l === void 0 ? !1 : l;
		if (i.length === 0) {
			var m;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: d.emptyState,
				children: u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), t[0] = m) : m = t[0], m;
		}
		var p;
		if (t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== c) {
			var _;
			t[6] !== n || t[7] !== a || t[8] !== c ? (_ = function(t, o) {
				return u.jsx(r("WAWebBizAdCreationInterestRow.react"), {
					interestNode: t,
					isSelected: n(t),
					onInterestToggle: a,
					showTargetType: c
				}, o);
			}, t[6] = n, t[7] = a, t[8] = c, t[9] = _) : _ = t[9], p = i.map(_), t[1] = n, t[2] = a, t[3] = i, t[4] = c, t[5] = p;
		} else p = t[5];
		var f;
		return t[10] !== p ? (f = u.jsx(u.Fragment, { children: p }), t[10] = p, t[11] = f) : f = t[11], f;
	}
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
