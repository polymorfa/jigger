__d("WAWebCometBuildRoot", [
	"CometAppMainContentAreaRenderer.react",
	"CometAppShell.react",
	"CometAppViewStack.react",
	"CometPageTransitioning.react",
	"CometRelayEnvironmentFactory",
	"CometToasterRoot.react",
	"buildCometRootComponent",
	"buildWAWebCometRouterStateProvider",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e, t) {
		var n = r("buildWAWebCometRouterStateProvider")(babelHelpers.extends({}, e, {
			initialLoadTraceId: t,
			initialTimeSpentMetadata: null,
			relayEnvironmentFactory: o("CometRelayEnvironmentFactory").CometRelayEnvironmentFactory
		}));
		return o("buildCometRootComponent").buildCometRootComponent(s.jsx(c, {}), {
			initialLoadTraceId: t,
			relayEnvironmentFactory: o("CometRelayEnvironmentFactory").CometRelayEnvironmentFactory
		}, {
			CometRouterStateProvider: n,
			OtherRootComponents: {
				CookieConsentDialog: null,
				KeyCommandNub: null,
				Redblock: null,
				UncaughtErrorFallback: null
			},
			UIStateProviders: null
		});
	}
	function c() {
		return s.jsxs(r("CometAppShell.react"), {
			toaster: s.jsx(r("CometToasterRoot.react"), {}),
			children: [s.jsx(r("CometPageTransitioning.react"), {}), s.jsx(r("CometAppViewStack.react"), { baseView: s.jsx(r("CometAppMainContentAreaRenderer.react"), {
				shouldRenderTopNav: !1,
				disableNegativeMarginBottom: !0
			}) })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.buildRootComponent = u;
}), 98);
