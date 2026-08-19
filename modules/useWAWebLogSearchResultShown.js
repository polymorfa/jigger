__d("useWAWebLogSearchResultShown", [
	"WAWebThreadJourneyLogger",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n = c(!1), r, a;
		t[0] !== e ? (r = function() {
			if (e === "") {
				n.current = !1;
				return;
			}
			n.current || (n.current = !0, o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logSearchResultShown());
		}, a = [e], t[0] = e, t[1] = r, t[2] = a) : (r = t[1], a = t[2]), u(r, a);
	}
	l.default = d;
}), 98);
