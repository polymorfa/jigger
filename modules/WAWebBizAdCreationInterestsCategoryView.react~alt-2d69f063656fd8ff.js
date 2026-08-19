__d("WAWebBizAdCreationInterestsCategoryView.react", ["WAWebBizAdCreationInterestRow.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = [];
	function c(e) {
		var t, n = e.category, o = e.isInterestSelected, a = e.onCategoryClick, i = e.onInterestToggle;
		return s.jsx(s.Fragment, { children: ((t = n == null ? void 0 : n.children) != null ? t : u).map(function(e, t) {
			return s.jsx(r("WAWebBizAdCreationInterestRow.react"), {
				interestNode: e,
				isSelected: o(e),
				onCategoryClick: a,
				onInterestToggle: i
			}, t);
		}) });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
