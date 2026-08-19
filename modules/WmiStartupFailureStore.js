__d("WmiStartupFailureStore", ["react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useSyncExternalStore, u = !1, c = new Set();
	function d(e) {
		return c.add(e), function() {
			c.delete(e);
		};
	}
	function m() {
		return u;
	}
	function p() {
		u || (u = !0, c.forEach(function(e) {
			return e();
		}));
	}
	function _() {
		return s(d, m, m);
	}
	l.publishStartupFailure = p, l.useWmiStartupFailure = _;
}), 98);
