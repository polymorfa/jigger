__d("WAWebBizAdCreationEnterFlowLogger.react", [
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WAWebBizImpressionLoggingWrapper.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useRef;
	function m(e) {
		var t = e.adAccountID, n = e.children, o = c(r("WAWebBizAdCreationLoggerContext")), a = d(!1);
		return s.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: function() {
				o != null && !a.current && (a.current = !0, r("WAWebBizAdLogger").logCritical({
					adAccountID: t,
					event: "enter_flow",
					loggerContext: o
				}));
			},
			triggerOnce: !1,
			children: n
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
