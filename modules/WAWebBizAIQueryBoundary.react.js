__d("WAWebBizAIQueryBoundary.react", [
	"WAWebBizAIQueryError.react",
	"WAWebErrorBoundary.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(10), n = e.boundaryName, a = e.children, i = e.onError, l = e.onRetry, u = e.queryVersion, d = e.renderErrorChrome, m = e.testid, p = d === void 0 ? c : d, _;
		t[0] !== l || t[1] !== p || t[2] !== m ? (_ = function() {
			return p(s.jsx(r("WAWebBizAIQueryError.react"), {
				onRetry: l,
				testid: m
			}));
		}, t[0] = l, t[1] = p, t[2] = m, t[3] = _) : _ = t[3];
		var f;
		return t[4] !== n || t[5] !== a || t[6] !== i || t[7] !== u || t[8] !== _ ? (f = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: n,
			onError: i,
			fallback: _,
			children: a
		}, u), t[4] = n, t[5] = a, t[6] = i, t[7] = u, t[8] = _, t[9] = f) : f = t[9], f;
	}
	function c(e) {
		return e;
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = u;
}), 98);
