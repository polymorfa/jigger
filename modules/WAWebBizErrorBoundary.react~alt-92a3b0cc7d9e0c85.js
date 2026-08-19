__d("WAWebBizErrorBoundary.react", [
	"FBLogger",
	"WAWebBizLoggerProjectContext.react",
	"WAWebErrorBoundary.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = e.children, n = e.fallback, r = e.name, a = e.onError, i = function(t) {
			var e = t.boundaryName, o = e === void 0 ? r : e, a = t.error;
			return s.jsx(d, {
				boundaryName: o,
				error: a,
				fallbackUI: n
			});
		};
		return s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			fallback: i,
			name: r,
			onError: a,
			children: t
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.boundaryName, n = e.error, a = e.fallbackUI, i = o("WAWebBizLoggerProjectContext.react").useBizLoggerProject();
		return u(function() {
			n != null ? r("FBLogger")(i).catching(n).mustfix("Uncaught render error in " + t) : r("FBLogger")(i).mustfix("Uncaught render error in " + t);
		}, [
			n,
			t,
			i
		]), a;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
