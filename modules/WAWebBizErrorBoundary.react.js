__d("WAWebBizErrorBoundary.react", [
	"FBLogger",
	"WAWebBizLoggerProjectContext.react",
	"WAWebErrorBoundary.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = o("react-compiler-runtime").c(8), n = e.children, r = e.fallback, a = e.name, i = e.onError, l;
		t[0] !== r || t[1] !== a ? (l = function(t) {
			var e = t.boundaryName, n = t.error, o = e === void 0 ? a : e;
			return s.jsx(d, {
				boundaryName: o,
				error: n,
				fallbackUI: r
			});
		}, t[0] = r, t[1] = a, t[2] = l) : l = t[2];
		var u = l, c;
		return t[3] !== u || t[4] !== n || t[5] !== a || t[6] !== i ? (c = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			fallback: u,
			name: a,
			onError: i,
			children: n
		}), t[3] = u, t[4] = n, t[5] = a, t[6] = i, t[7] = c) : c = t[7], c;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(5), n = e.boundaryName, a = e.error, i = e.fallbackUI, l = o("WAWebBizLoggerProjectContext.react").useBizLoggerProject(), s, c;
		return t[0] !== n || t[1] !== a || t[2] !== l ? (s = function() {
			a != null ? r("FBLogger")(l).catching(a).mustfix("Uncaught render error in " + n) : r("FBLogger")(l).mustfix("Uncaught render error in " + n);
		}, c = [
			a,
			n,
			l
		], t[0] = n, t[1] = a, t[2] = l, t[3] = s, t[4] = c) : (s = t[3], c = t[4]), u(s, c), i;
	}
	l.default = c;
}), 98);
