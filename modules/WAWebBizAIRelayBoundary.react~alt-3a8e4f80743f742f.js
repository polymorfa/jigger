__d("WAWebBizAIRelayBoundary.react", [
	"CometRelay",
	"WAWebErrorBoundary.react",
	"WAWebFetchAdAccountToken",
	"react",
	"useWAWebBizAiFacebookRelayEnvironment"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = e.children, n = e.unavailableFallback, a = n === void 0 ? null : n, i = r("useWAWebBizAiFacebookRelayEnvironment")(), l = i.env, c = i.refreshEnv, d = u(function(e) {
			o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e) && c();
		}, [c]);
		return l == null ? a : s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-ai-relay-boundary",
			fallback: function() {
				return a;
			},
			onError: d,
			children: s.jsx(o("CometRelay").RelayEnvironmentProvider, {
				environment: l,
				children: t
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
