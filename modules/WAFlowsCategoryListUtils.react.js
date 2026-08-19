__d("WAFlowsCategoryListUtils.react", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e, t) {
		var n = [], r = [];
		if (e === "") {
			var o;
			n = (o = t == null ? void 0 : t.topCategories) != null ? o : [];
		} else {
			var a;
			n = (a = t == null ? void 0 : t.subCategories[e]) != null ? a : [];
		}
		for (var i = 0; i < n.length; i++) {
			var l = n[i], s = t.categoriesData[l];
			s && r.push(s);
		}
		return r;
	}
	i.getDisplayCategoryData = e;
}), 66);
