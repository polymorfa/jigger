__d("useWAFlowsClickOutsideOfExcludedNode.react", ["react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useEffect;
	function d(e, t, n) {
		n === void 0 && (n = []);
		var r = u(function(e) {
			if (e.target instanceof Node) {
				var r = e.target;
				n.some(function(e) {
					var t;
					return (t = e.current) == null ? void 0 : t.contains(r);
				}) || t();
			}
		}, [n, t]), o = u(function(e) {
			if (e === void 0 && (e = !1), e) {
				document.addEventListener("mousedown", r);
				return;
			}
			document.removeEventListener("mousedown", r);
		}, [r]);
		c(function() {
			return o(e), function() {
				o();
			};
		}, [o, e]);
	}
	l.useWAFlowsClickOutsideOfExcludedNode = d;
}), 98);
