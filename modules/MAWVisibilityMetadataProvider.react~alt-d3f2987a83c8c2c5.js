__d("MAWVisibilityMetadataProvider.react", ["MAWVisibilityMetadataContext.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo, c = {
		entries: [],
		getMissingCountBetweenTimestamps: function(t, n) {
			return 0;
		},
		isEnabled: !1
	};
	function d(e) {
		var t = e.children, n = e.threadKey, r = u(function() {
			return c;
		}, []);
		return s.jsx(o("MAWVisibilityMetadataContext.react").MAWVisibilityMetadataContext, {
			value: r,
			children: t
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
