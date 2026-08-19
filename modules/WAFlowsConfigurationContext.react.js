__d("WAFlowsConfigurationContext.react", [
	"invariant",
	"WAFlowsEnvContext.react",
	"WAFlowsInitEnvironmentTypes",
	"WAFlowsResponseHandler",
	"WebDriverConfig",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useContext, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = {
		hideBranding: !1,
		responseMessageVersion: 1,
		allowCopyFieldsInSMBResponse: !1,
		ignoreRoutingModel: !1,
		responseNavbarAction: "download",
		responseFooterAction: null,
		redirect_to_response_on_completion: !1,
		hideContextMenu: !1,
		hideScreenTitlesInResponseView: !1
	}, g = babelHelpers.extends({}, f, {
		hideBranding: !0,
		responseMessageVersion: 2,
		allowCopyFieldsInSMBResponse: !0,
		ignoreRoutingModel: !0,
		responseNavbarAction: "share",
		responseFooterAction: "copy"
	}), h = babelHelpers.extends({}, f, {
		hideBranding: !0,
		hideContextMenu: !0,
		hideScreenTitlesInResponseView: !0
	}), y = u.createContext(null);
	function C(e) {
		var t = e.children, n = e.controller, r = e.onConfigChange, a = o("WAFlowsEnvContext.react").useWAFlowsEnv(), i = a.env, l = _(n), s = _(r), c = n.flowInitData, d = c[0], C = d == null ? void 0 : d.environment.creation_source, b = p(function() {
			if (C == null) return f;
			switch (C) {
				case "FLEXIBLE_CHECKOUT": return g;
				case "CSAT": return h;
				default: return f;
			}
		}, [C]), S = p(function() {
			var e = o("WAFlowsResponseHandler").isResponseFlow(d);
			return !e || (d == null ? void 0 : d.environment.response_viewer) !== o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB ? null : C === "FLEXIBLE_CHECKOUT" ? "copy" : i.platform === "wa_web" ? "download" : null;
		}, [
			C,
			i.platform,
			d
		]), R = p(function() {
			var e = v();
			return babelHelpers.extends({}, b, e, { responseFooterAction: S });
		}, [b, S]);
		return m(function() {
			s.current = r;
		}, [r]), m(function() {
			l.current.onConfigurationChange == null || l.current.onConfigurationChange(R), s.current == null || s.current(R);
		}, [R]), m(function() {
			l.current = n;
		}, [n]), u.jsx(y.Provider, {
			value: R,
			children: t
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		var e = d(y);
		return e != null || s(0, 93510), e;
	}
	function v() {
		var e = o("WebDriverConfig").isJestE2ETestRun;
		if (!e) return null;
		var t = new URLSearchParams(window.location.search), n = t.get("configuration_overrides");
		if (n != null) return JSON.parse(n);
	}
	l.WA_FLOWS_DEAFULT_CONFIGURATION = f, l.WAFlowsConfigurationProvider = C, l.useWAFlowsConfiguration = b;
}), 98);
