__d("WAFlowsEnvContext.react", [
	"invariant",
	"WAFlowsEnvContextUtils",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.createContext, m = c.useContext, p = c.useEffect, _ = c.useMemo, f = d(null), g = window.getComputedStyle(document.body);
	function h(e) {
		var t = e.children, n = e.hostPlatform, r = n === void 0 ? "ios" : n, a = e.isJestTesting, i = a === void 0 ? !1 : a, l = e.isRTL, s = l === void 0 ? g.getPropertyValue("direction") === "rtl" : l, c = e.locale, d = e.platform, m = d === void 0 ? "ios" : d, h = e.theme, y = h === void 0 ? "light" : h, C = e.universalWebEnv, b = C === void 0 ? !1 : C, v = _(function() {
			return { env: {
				isJestTesting: i,
				hostPlatform: r,
				userAgentVersion: o("WAFlowsEnvContextUtils").getBrowserVersion(r),
				platform: m,
				theme: y,
				isRTL: s,
				locale: c != null ? c : navigator.language,
				universalWebEnv: b
			} };
		}, [
			r,
			s,
			c,
			m,
			y,
			b,
			i
		]);
		return p(function() {
			var e = document.querySelector("body");
			e && m === "android" && y === "dark" && r !== "web_tooling" && (e.style.backgroundColor = "#111b21");
			var t = "wa-flows-", n = t + "platform", o = t + "theme";
			return r !== "web_tooling" && (e == null || e.setAttribute(n, m), e == null || e.setAttribute(o, y)), function() {
				e == null || e.removeAttribute(n), e == null || e.removeAttribute(o);
			};
		}, [
			r,
			m,
			y
		]), u.jsx(f.Provider, {
			value: v,
			children: t
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		var e = m(f);
		return e != null || s(0, 73068), e;
	}
	l.WAFlowsEnvContextProvider = h, l.useWAFlowsEnv = y;
}), 98);
