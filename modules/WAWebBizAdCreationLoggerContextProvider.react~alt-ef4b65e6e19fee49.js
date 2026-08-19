__d("WAWebBizAdCreationLoggerContextProvider.react", [
	"FBLogger",
	"WAWebBizAdCreationConfigContext",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizNativeAdsCtwaAdAccountType",
	"react",
	"useWAWebBizAdCreationIdentityContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useMemo;
	function m(e) {
		var t = e.children, n = e.codebase, a = e.platform, i = e.product, l = e.recreateBoostId, u = e.surface, m = c(r("WAWebBizAdCreationConfigContext"));
		m == null && r("FBLogger")("wa_ctwa_web").warn("WAWebBizAdCreationLoggerContextProvider: configContext is null, ad creation session will be untracked");
		var p = r("useWAWebBizAdCreationIdentityContext")(), _ = d(function() {
			return o("WAWebBizNativeAdsCtwaAdAccountType").getCtwaAdAccountType(p == null ? void 0 : p.accountType, p == null ? void 0 : p.pageType);
		}, [p == null ? void 0 : p.accountType, p == null ? void 0 : p.pageType]), f = d(function() {
			return m == null ? null : {
				codebase: n,
				entryPoint: m.entryPoint,
				flow: m.flow,
				flowID: m.flowID,
				pageID: m.pageID,
				platform: a,
				product: i,
				recreateBoostId: l,
				surface: u,
				waAdAccountType: _
			};
		}, [
			m,
			i,
			n,
			a,
			l,
			u,
			_
		]);
		return s.jsx(r("WAWebBizAdCreationLoggerContext"), {
			value: f,
			children: t
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
