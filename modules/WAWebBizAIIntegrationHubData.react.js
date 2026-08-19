__d("WAWebBizAIIntegrationHubData.react", [
	"CometRelay",
	"WAWebBizAIIntegrationHubMainView.react",
	"WAWebBizAIIntegrationHubTypes",
	"WAWebBizAiPluginsForSurfaceQuery",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.loggedViewVersionRef, a = e.onBack, i = e.onSelectPlugin, l = e.queryRef, u = e.queryVersion, c = o("CometRelay").usePreloadedQuery(o("WAWebBizAiPluginsForSurfaceQuery").PLUGINS_QUERY, l), d;
		t[0] !== c ? (d = o("WAWebBizAIIntegrationHubTypes").partitionPlugins(o("WAWebBizAiPluginsForSurfaceQuery").normalizePlugins(c)), t[0] = c, t[1] = d) : d = t[1];
		var m = d, p = m.availableApps, _ = m.connectedApps, f;
		return t[2] !== p || t[3] !== _ || t[4] !== n || t[5] !== a || t[6] !== i || t[7] !== u ? (f = s.jsx(r("WAWebBizAIIntegrationHubMainView.react"), {
			availableApps: p,
			connectedApps: _,
			loggedViewVersionRef: n,
			onBack: a,
			onSelectPlugin: i,
			queryVersion: u
		}), t[2] = p, t[3] = _, t[4] = n, t[5] = a, t[6] = i, t[7] = u, t[8] = f) : f = t[8], f;
	}
	l.default = c;
}), 98);
