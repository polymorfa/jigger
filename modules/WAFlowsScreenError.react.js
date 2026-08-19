__d("WAFlowsScreenError.react", [
	"fbt",
	"ReactRouterDOM",
	"WAFlowsEmbeddedLink.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsErrorDetails.react",
	"WAFlowsStateProvider.react",
	"WAFlowsText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useContext, d = { android: {
		color: "xhslqc4",
		$$css: !0
	} };
	function m(e) {
		var t, n = e.error, r = e.message, a = e.retryDataExchangeAction, i = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext), l = o("ReactRouterDOM").useHistory(), m = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), p = o("WAFlowsEnvContext.react").useWAFlowsEnv(), _ = p.env, f = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController().actionOverrides, g = ((t = m.flowInitData[0]) == null ? void 0 : t.environment.flow_status) === "DRAFT";
		return n && (g || f.platform === "web_tooling") ? u.jsx("div", {
			className: "x1b58sdr x193vv82 xmnamis x1d8cgvq",
			children: u.jsx(o("WAFlowsErrorDetails.react").WAFlowsErrorDetails, {
				error: n,
				retryDataExchangeAction: a
			})
		}) : u.jsxs("div", {
			className: "x78zum5 xdt5ytf xl56j7k x6s0dn4 x5yr21d x1t0p1hu x8945me x167vaf5 x1w6r25c",
			children: [u.jsx(o("WAFlowsText.react").WAFlowsText, {
				xstyle: _.platform === "android" ? d.android : void 0,
				textAlign: "center",
				type: "body",
				text: String(r),
				"data-testid": void 0
			}), a && u.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
				text: s._(
					/*BTDS*/
					""
				),
				onClick: function() {
					i(f.dataExchangeActionHandler(a, l, !0, _));
				}
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
