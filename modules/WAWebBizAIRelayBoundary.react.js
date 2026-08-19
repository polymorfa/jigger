__d("WAWebBizAIRelayBoundary.react", [
	"CometRelay",
	"WAWebErrorBoundary.react",
	"WAWebFetchAdAccountToken",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAiFacebookRelayEnvironment"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.children, a = e.unavailableFallback, i = a === void 0 ? null : a, l = r("useWAWebBizAiFacebookRelayEnvironment")(), u = l.env, c = l.refreshEnv, d;
		t[0] !== c ? (d = function(t) {
			o("WAWebFetchAdAccountToken").hasGraphQLAuthError(t) && c();
		}, t[0] = c, t[1] = d) : d = t[1];
		var m = d;
		if (u == null) return i;
		var p;
		t[2] !== i ? (p = function() {
			return i;
		}, t[2] = i, t[3] = p) : p = t[3];
		var _;
		t[4] !== n || t[5] !== u ? (_ = s.jsx(o("CometRelay").RelayEnvironmentProvider, {
			environment: u,
			children: n
		}), t[4] = n, t[5] = u, t[6] = _) : _ = t[6];
		var f;
		return t[7] !== m || t[8] !== p || t[9] !== _ ? (f = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-ai-relay-boundary",
			fallback: p,
			onError: m,
			children: _
		}), t[7] = m, t[8] = p, t[9] = _, t[10] = f) : f = t[10], f;
	}
	l.default = c;
}), 98);
