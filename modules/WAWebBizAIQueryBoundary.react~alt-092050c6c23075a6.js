__d("WAWebBizAIQueryBoundary.react", [
	"WAWebBizAIQueryError.react",
	"WAWebErrorBoundary.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.boundaryName, n = e.children, a = e.onError, i = e.onRetry, l = e.queryVersion, u = e.renderErrorChrome, d = u === void 0 ? c : u, m = e.testid;
		return s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: t,
			onError: a,
			fallback: function() {
				return d(s.jsx(r("WAWebBizAIQueryError.react"), {
					onRetry: i,
					testid: m
				}));
			},
			children: n
		}, l);
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		return e;
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = u;
}), 98);
