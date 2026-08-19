__d("WAWebBizAIIntegrationHubDrawer.react", [
	"fbt",
	"WAWebBizAIIntegrationAppDetailDrawer.react",
	"WAWebBizAIIntegrationHubData.react",
	"WAWebBizAIIntegrationHubHelpers",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAIQueryBoundary.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebSpinner.react",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.Suspense, m = c.useCallback, p = c.useRef, _ = c.useState, f = u.jsx("div", {
		"data-testid": "biz-ai-integration-hub-loading",
		className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
		children: u.jsx(o("WAWebSpinner.react").Spinner, {
			color: "default",
			size: 24,
			stroke: 3
		})
	});
	function g(e) {
		var t = e.onBack, n = e.onRetry, a = e.queryRef, i = e.queryVersion, l = i === void 0 ? 0 : i, s = e.ref, c = o("useWAWebFlow").useFlow(o("WAWebBizAIIntegrationHubHelpers").IntegrationHubStep.Main, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), g = c[0], y = c[1], C = y.step, b = _(null), v = b[0], S = b[1], R = p(null), L = m(function() {
			R.current !== l && (R.current = l, o("WAWebBizAILargeScreensLogEvents").logViewPartnersHub(0, !1));
		}, [l]), E = m(function() {
			return y.pop();
		}, [y]), k = m(function(e) {
			S(e), y.push(o("WAWebBizAIIntegrationHubHelpers").IntegrationHubStep.AppDetail);
		}, [y]);
		if (C == null) return null;
		var I = C === o("WAWebBizAIIntegrationHubHelpers").IntegrationHubStep.Main ? u.jsx(r("WAWebBizAIQueryBoundary.react"), {
			boundaryName: "biz-ai-integration-hub",
			onError: L,
			onRetry: n,
			queryVersion: l,
			renderErrorChrome: function(n) {
				return u.jsx(h, {
					onBack: t,
					children: n
				});
			},
			testid: "biz-ai-integration-hub-error",
			children: u.jsx(d, {
				fallback: u.jsx(h, {
					onBack: t,
					children: f
				}),
				children: a != null ? u.jsx(r("WAWebBizAIIntegrationHubData.react"), {
					loggedViewVersionRef: R,
					onBack: t,
					onSelectPlugin: k,
					queryRef: a,
					queryVersion: l
				}) : u.jsx(h, {
					onBack: t,
					children: f
				})
			})
		}) : C === o("WAWebBizAIIntegrationHubHelpers").IntegrationHubStep.AppDetail ? v != null ? u.jsx(r("WAWebBizAIIntegrationAppDetailDrawer.react"), {
			onBack: E,
			plugin: v
		}) : null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + C);
		})();
		return u.jsx(r("WAWebDrawer.react"), {
			ref: s,
			testid: "biz-ai-integration-hub-drawer",
			children: u.jsx(g, {
				flow: y,
				children: I
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.children, n = e.onBack;
		return u.jsxs("div", {
			className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: n
			}), u.jsx(r("WAWebDrawerBody.react"), { children: t })]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);
