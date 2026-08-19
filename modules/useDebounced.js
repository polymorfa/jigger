__d("useDebounced", ["debounce", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useMemo, d = s.useRef;
	function m(e, t, n) {
		t === void 0 && (t = 100), n === void 0 && (n = !1);
		var o = d(e), a = d(!0), i = d(null);
		u(function() {
			return a.current = !0, i.current && (i.current(), i.current = null), function() {
				a.current = !1;
			};
		}, []), u(function() {
			o.current = e;
		}, [e]);
		var l = c(function() {
			return r("debounce")(function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				a.current ? o.current.apply(o, t) : i.current = function() {
					o.current.apply(o, t);
				};
			}, t, null, !1, n);
		}, [t, n]);
		return l;
	}
	l.default = m;
}), 98);
