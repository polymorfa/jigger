__d("WAWebBizImpressionLoggingWrapper.react", [
	"react",
	"stylex",
	"useWAWebBizImpressionLogging"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useRef;
	function d(t) {
		var n = t.children, o = t.onImpression, a = t.testid, i = t.triggerOnce, l = i === void 0 ? !0 : i, s = t.xstyle, d = c(null);
		return r("useWAWebBizImpressionLogging")(d, o, l), u.jsx("div", babelHelpers.extends({
			ref: d,
			"data-testid": a
		}, (e || (e = r("stylex"))).props(s), { children: n }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
