__d("withCometPlaceholder", ["CometPlaceholder.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = function(t, n, o) {
		return n === void 0 && (n = null), (function(e) {
			return s.jsx(r("CometPlaceholder.react"), {
				fallback: n,
				name: o,
				children: s.jsx(t, babelHelpers.extends({}, e))
			});
		});
	};
	l.withCometPlaceholder = u;
}), 98);
