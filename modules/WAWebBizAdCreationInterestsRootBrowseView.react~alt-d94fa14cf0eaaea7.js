__d("WAWebBizAdCreationInterestsRootBrowseView.react", ["WAWebBizAdCreationInterestRow.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.interests, n = e.onCategoryClick;
		return s.jsx(s.Fragment, { children: t.map(function(e, t) {
			return s.jsx(r("WAWebBizAdCreationInterestRow.react"), {
				interestNode: e,
				onCategoryClick: n
			}, t);
		}) });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
