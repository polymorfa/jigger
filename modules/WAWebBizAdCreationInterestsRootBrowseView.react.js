__d("WAWebBizAdCreationInterestsRootBrowseView.react", [
	"WAWebBizAdCreationInterestRow.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(7), n = e.interests, a = e.onCategoryClick, i;
		if (t[0] !== n || t[1] !== a) {
			var l;
			t[3] !== a ? (l = function(t, n) {
				return s.jsx(r("WAWebBizAdCreationInterestRow.react"), {
					interestNode: t,
					onCategoryClick: a
				}, n);
			}, t[3] = a, t[4] = l) : l = t[4], i = n.map(l), t[0] = n, t[1] = a, t[2] = i;
		} else i = t[2];
		var u;
		return t[5] !== i ? (u = s.jsx(s.Fragment, { children: i }), t[5] = i, t[6] = u) : u = t[6], u;
	}
	l.default = u;
}), 98);
