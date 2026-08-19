__d("WAWebBizAdCreationEnterFlowLogger.react", [
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WAWebBizImpressionLoggingWrapper.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useRef;
	function m(e) {
		var t = o("react-compiler-runtime").c(6), n = e.adAccountID, a = e.children, i = c(r("WAWebBizAdCreationLoggerContext")), l = d(!1), u;
		t[0] !== n || t[1] !== i ? (u = function() {
			i != null && !l.current && (l.current = !0, r("WAWebBizAdLogger").logCritical({
				adAccountID: n,
				event: "enter_flow",
				loggerContext: i
			}));
		}, t[0] = n, t[1] = i, t[2] = u) : u = t[2];
		var m;
		return t[3] !== a || t[4] !== u ? (m = s.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: u,
			triggerOnce: !1,
			children: a
		}), t[3] = a, t[4] = u, t[5] = m) : m = t[5], m;
	}
	l.default = m;
}), 98);
