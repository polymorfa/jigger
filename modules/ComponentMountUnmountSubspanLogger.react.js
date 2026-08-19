__d("ComponentMountUnmountSubspanLogger.react", [
	"InteractionTracingMetrics",
	"hero-tracing-placeholder",
	"performanceNow",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useContext, d = u.useEffect;
	function m(t) {
		var n = o("react-compiler-runtime").c(4), a = t.description, i = c(o("hero-tracing-placeholder").HeroInteractionIDContext), l, s;
		return n[0] !== a || n[1] !== i ? (l = function() {
			var t = (e || (e = r("performanceNow")))();
			return (function() {
				if (i != null) {
					var n = (e || (e = r("performanceNow")))();
					r("InteractionTracingMetrics").addSubspan(i, a, "AppTiming", t, n, {});
				}
			});
		}, s = [a, i], n[0] = a, n[1] = i, n[2] = l, n[3] = s) : (l = n[2], s = n[3]), d(l, s), null;
	}
	l.default = m;
}), 98);
