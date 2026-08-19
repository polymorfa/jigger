__d("WAWebBizImpressionLoggingWrapper.react", [
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebBizImpressionLogging"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useRef;
	function d(t) {
		var n = o("react-compiler-runtime").c(6), a = t.children, i = t.onImpression, l = t.testid, s = t.triggerOnce, d = t.xstyle, m = s === void 0 ? !0 : s, p = c(null);
		r("useWAWebBizImpressionLogging")(p, i, m);
		var _;
		n[0] !== d ? (_ = (e || (e = r("stylex"))).props(d), n[0] = d, n[1] = _) : _ = n[1];
		var f;
		return n[2] !== a || n[3] !== _ || n[4] !== l ? (f = u.jsx("div", babelHelpers.extends({
			ref: p,
			"data-testid": l
		}, _, { children: a })), n[2] = a, n[3] = _, n[4] = l, n[5] = f) : f = n[5], f;
	}
	l.default = d;
}), 98);
