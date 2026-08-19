__d("WAWebBizAIIntegrationHubData.react", [
	"CometRelay",
	"WAWebBizAIIntegrationHubMainView.react",
	"WAWebBizAIIntegrationHubTypes",
	"WAWebBizAiPluginsForSurfaceQuery",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = e.loggedViewVersionRef, n = e.onBack, a = e.onSelectPlugin, i = e.queryRef, l = e.queryVersion, c = o("CometRelay").usePreloadedQuery(o("WAWebBizAiPluginsForSurfaceQuery").PLUGINS_QUERY, i), d = u(function() {
			return o("WAWebBizAIIntegrationHubTypes").partitionPlugins(o("WAWebBizAiPluginsForSurfaceQuery").normalizePlugins(c));
		}, [c]), m = d.availableApps, p = d.connectedApps;
		return s.jsx(r("WAWebBizAIIntegrationHubMainView.react"), {
			availableApps: m,
			connectedApps: p,
			loggedViewVersionRef: t,
			onBack: n,
			onSelectPlugin: a,
			queryVersion: l
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
