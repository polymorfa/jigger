__d("WAFlowsProvider.react", [
	"ReactRouterDOM",
	"WAFlowsConfigurationContext.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsStateProvider.react",
	"WAFlowsWebNativeBridgeClientABPropsContext.react",
	"react",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = e.children, n = e.controller, r = e.disableStateRestoration, a = e.draft, i = a === void 0 ? !1 : a, l = e.flowId, u = e.flowJSON, c = e.hostPlatform, m = e.isJestTesting, p = e.isResponseFlow, _ = p === void 0 ? !1 : p, f = e.isRTL, g = e.locale, h = e.omitInstanceId, y = h === void 0 ? !1 : h, C = e.onConfigChange, b = e.platform, v = e.theme, S = e.universalWebEnv, R = e.useMemoryRouter, L = R === void 0 ? !1 : R;
		return s.jsx(o("WAFlowsEnvContext.react").WAFlowsEnvContextProvider, {
			hostPlatform: c,
			isJestTesting: m,
			isRTL: f,
			locale: g,
			platform: b,
			theme: v,
			universalWebEnv: S,
			children: s.jsx(d, {
				children: t,
				controller: n,
				disableStateRestoration: r,
				draft: i,
				flowId: l,
				flowJSON: u,
				isResponseFlow: _,
				useMemoryRouter: L,
				omitInstanceId: y,
				onConfigChange: C
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t, n = e.children, a = e.controller, i = e.disableStateRestoration, l = e.draft, c = e.flowId, d = e.flowJSON, m = e.isResponseFlow, p = m === void 0 ? !1 : m, _ = e.omitInstanceId, f = _ === void 0 ? !1 : _, g = e.onConfigChange, h = e.useMemoryRouter, y = o("WAFlowsWebNativeBridgeClientABPropsContext.react").useFetchClientABPropsFromController(a), C = o("WAFlowsEnvContext.react").useWAFlowsEnv().env.universalWebEnv, b = u(function() {
			return f ? void 0 : r("uuidv4")().toString();
		}, [f]), v = (t = a.flowInitData[0]) == null ? void 0 : t.environment.biz_jid, S = s.jsx(o("WAFlowsStateProvider.react").WAFlowsMetaProvider, {
			draft: l,
			flowJSON: d,
			flowId: c,
			bizJid: v,
			isResponseFlow: p,
			children: s.jsx(o("WAFlowsStateProvider.react").WAFlowsStateProvider, {
				disableStateRestoration: i,
				children: n
			}, d)
		});
		return s.jsx(o("WAFlowsEntryPointControllerContext.react").WAFlowsEntryPointControllerContextProvider, {
			controller: a,
			children: s.jsx(o("WAFlowsWebNativeBridgeClientABPropsContext.react").NativeABPropsContext.Provider, {
				value: y,
				children: s.jsx(o("WAFlowsInstanceIdContext.react").WAFlowsInstanceContextProvider, {
					uuid: b,
					children: s.jsx(o("WAFlowsConfigurationContext.react").WAFlowsConfigurationProvider, {
						controller: a,
						onConfigChange: g,
						children: h ? s.jsx(o("ReactRouterDOM").MemoryRouter, { children: S }) : s.jsx(o("ReactRouterDOM").BrowserRouter, {
							basename: C === !0 ? "/flows/" : "/flows/" + c,
							children: S
						})
					})
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
