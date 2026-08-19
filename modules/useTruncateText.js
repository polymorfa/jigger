__d("useTruncateText", ["react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useMemo;
	function u(e, t) {
		var n;
		return (n = s(function() {
			return e != null && e.toString().length > t ? e.toString().substring(0, t).trimEnd() + "..." : e;
		}, [t, e])) == null ? void 0 : n.toString();
	}
	l.useTruncateText = u;
}), 98);
