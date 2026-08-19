__d("WAWebBizAdCreationSubmitFlowSummaryLogger.react", [
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WAWebBizImpressionLoggingWrapper.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useRef;
	function m(e) {
		var t = e.boostingStatus, n = e.children, o = c(r("WAWebBizAdCreationLoggerContext")), a = d(!1);
		return s.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: function() {
				o != null && !a.current && (a.current = !0, r("WAWebBizAdLogger").logCritical({
					action: "create",
					context: "ad",
					event: "submit_flow_summary",
					extra: { boosting_status: t },
					loggerContext: o
				}));
			},
			triggerOnce: !1,
			children: n
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
