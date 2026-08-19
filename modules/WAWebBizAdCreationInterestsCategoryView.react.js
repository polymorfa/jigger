__d("WAWebBizAdCreationInterestsCategoryView.react", [
	"WAWebBizAdCreationInterestRow.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = [];
	function c(e) {
		var t, n = o("react-compiler-runtime").c(11), a = e.category, i = e.isInterestSelected, l = e.onCategoryClick, c = e.onInterestToggle, d = (t = a == null ? void 0 : a.children) != null ? t : u, m;
		if (n[0] !== i || n[1] !== l || n[2] !== c || n[3] !== d) {
			var p;
			n[5] !== i || n[6] !== l || n[7] !== c ? (p = function(t, n) {
				return s.jsx(r("WAWebBizAdCreationInterestRow.react"), {
					interestNode: t,
					isSelected: i(t),
					onCategoryClick: l,
					onInterestToggle: c
				}, n);
			}, n[5] = i, n[6] = l, n[7] = c, n[8] = p) : p = n[8], m = d.map(p), n[0] = i, n[1] = l, n[2] = c, n[3] = d, n[4] = m;
		} else m = n[4];
		var _;
		return n[9] !== m ? (_ = s.jsx(s.Fragment, { children: m }), n[9] = m, n[10] = _) : _ = n[10], _;
	}
	l.default = c;
}), 98);
