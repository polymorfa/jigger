__d("MAWVisibilityMetadataContext.react", ["react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useContext, m = {
		entries: [],
		getMissingCountBetweenTimestamps: function(t, n) {
			return 0;
		},
		isEnabled: !1
	}, p = c(m);
	function _() {
		return d(p);
	}
	l.MAWVisibilityMetadataContext = p, l.useMAWVisibilityMetadata = _;
}), 98);
