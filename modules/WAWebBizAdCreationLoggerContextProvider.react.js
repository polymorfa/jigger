__d("WAWebBizAdCreationLoggerContextProvider.react", [
	"FBLogger",
	"WAWebBizAdCreationConfigContext",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizNativeAdsCtwaAdAccountType",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationIdentityContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useMemo;
	function m(e) {
		var t = o("react-compiler-runtime").c(17), n = e.children, a = e.codebase, i = e.platform, l = e.product, u = e.recreateBoostId, d = e.surface, m = c(r("WAWebBizAdCreationConfigContext"));
		m == null && r("FBLogger")("wa_ctwa_web").warn("WAWebBizAdCreationLoggerContextProvider: configContext is null, ad creation session will be untracked");
		var p = r("useWAWebBizAdCreationIdentityContext")();
		p == null || p.accountType, p == null || p.pageType;
		var _ = p == null ? void 0 : p.accountType, f = p == null ? void 0 : p.pageType, g;
		t[0] !== _ || t[1] !== f ? (g = o("WAWebBizNativeAdsCtwaAdAccountType").getCtwaAdAccountType(_, f), t[0] = _, t[1] = f, t[2] = g) : g = t[2];
		var h = g, y;
		e: {
			if (m == null) {
				y = null;
				break e;
			}
			var C;
			t[3] !== a || t[4] !== m.entryPoint || t[5] !== m.flow || t[6] !== m.flowID || t[7] !== m.pageID || t[8] !== i || t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== h ? (C = {
				codebase: a,
				entryPoint: m.entryPoint,
				flow: m.flow,
				flowID: m.flowID,
				pageID: m.pageID,
				platform: i,
				product: l,
				recreateBoostId: u,
				surface: d,
				waAdAccountType: h
			}, t[3] = a, t[4] = m.entryPoint, t[5] = m.flow, t[6] = m.flowID, t[7] = m.pageID, t[8] = i, t[9] = l, t[10] = u, t[11] = d, t[12] = h, t[13] = C) : C = t[13], y = C;
		}
		var b = y, v;
		return t[14] !== n || t[15] !== b ? (v = s.jsx(r("WAWebBizAdCreationLoggerContext"), {
			value: b,
			children: n
		}), t[14] = n, t[15] = b, t[16] = v) : v = t[16], v;
	}
	l.default = m;
}), 98);
