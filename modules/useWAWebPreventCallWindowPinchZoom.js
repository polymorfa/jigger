__d("useWAWebPreventCallWindowPinchZoom", [
	"react",
	"react-compiler-runtime",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useEffect, u = 1e3;
	function c(e, t) {
		var n = o("react-compiler-runtime").c(5), a;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
			leading: !0,
			trailing: !1
		}, n[0] = a) : a = n[0];
		var i = r("useWAWebThrottledCallback")(t, u, a), l, c;
		n[1] !== e || n[2] !== i ? (l = function() {
			var t = e.current;
			if (t != null) {
				var n = function(t) {
					t.ctrlKey && (t.preventDefault(), t.stopPropagation(), i());
				};
				return t.addEventListener("wheel", n, { passive: !1 }), (function() {
					t.removeEventListener("wheel", n);
				});
			}
		}, c = [e, i], n[1] = e, n[2] = i, n[3] = l, n[4] = c) : (l = n[3], c = n[4]), s(l, c);
	}
	l.default = c;
}), 98);
