__d("WAWebGalaxyFlowsLoadable.react", [
	"JSResourceForInteraction",
	"WAFlowsExpiredCacheCleaner",
	"WAWebABProps",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebFlex.react",
	"WAWebGalaxyFlowQPLLoggerUtils",
	"WAWebGalaxyFlowsData",
	"WAWebGalaxyFlowsDrawerUtils",
	"WAWebGalaxyFlowsNavBarUtils.react",
	"WAWebLazyLoadedRetriable",
	"WAWebSpinner.react",
	"react",
	"react-loadable",
	"useWAWebAsync",
	"useWAWebRenderCallbacks"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = o("WAWebABProps").getABPropConfigValue("flows_wa_web"), p = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebGalaxyFlows.react").__setRef("WAWebGalaxyFlowsLoadable.react").load();
		return e;
	}, "WAWebGalaxyFlows"), _ = r("react-loadable")({
		loader: p,
		loading: function() {
			return null;
		}
	}), f = { loadingContainer: {
		marginTop: "xafmxuu",
		$$css: !0
	} };
	function g(e) {
		var t = e.chat, n = e.hasClearedActiveQPLMarker, a = n === void 0 ? !1 : n, i = e.messageData, l = e.msg, u = e.onCancel, p = e.ref, g = d(!1);
		c(function() {
			o("WAFlowsExpiredCacheCleaner").clearExpiredCachedStates().catch(function(e) {});
		}, []), r("useWAWebRenderCallbacks")({
			onMount: function() {
				o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationStart();
			},
			onUnmount: function() {
				!a && o("WAWebGalaxyFlowQPLLoggerUtils").clearAllActiveWaeQPLMarkerInstances();
			}
		});
		var h = r("useWAWebAsync")(async function(e) {
			return g.current ? i : (g.current = !0, r("WAWebGalaxyFlowsData")(i, l, t, e));
		}, [
			i,
			l,
			t.contact.id
		]);
		return !m || _ == null || h.error != null || h.loading ? s.jsxs(r("WAWebDrawer.react"), {
			ref: p,
			children: [s.jsx(o("WAWebGalaxyFlowsNavBarUtils.react").WAWebGalaxyFlowsNavBar, {
				onCancel: u,
				msg: l,
				isResponseFlow: i.isResponseFlow
			}), s.jsx(r("WAWebDrawerBody.react"), { children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				grow: 1,
				xstyle: f.loadingContainer,
				children: [h.loading && s.jsx(o("WAWebSpinner.react").Spinner, {
					size: 24,
					stroke: 4
				}), h.error && o("WAWebGalaxyFlowsDrawerUtils").getGalaxyFlowsFullScreenErrorString()]
			}) })]
		}) : s.jsx(_, {
			chat: t,
			messageData: h.value,
			onCancel: u,
			msg: l
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.WAWebGalaxyFlowsLoadable = g;
}), 98);
