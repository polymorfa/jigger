__d("WAWebBizAgentSmbOffboardingMsgBar.react", [
	"fbt",
	"WAWebAuthAgentSmbJourneyLogger",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(3), n = e.parentCompanyName;
		o("WAWebAuthAgentSmbJourneyLogger").useLogAgentBlockedComposerViewOnMount("agent_degraded", !0);
		var r = n !== "", a;
		return t[0] !== r || t[1] !== n ? (a = u.jsx("span", {
			"data-testid": "agent-smb-offboarding-msgbar",
			children: r ? s._(
				/*BTDS*/
				"",
				[s._param("companyName", n)]
			) : s._(
				/*BTDS*/
				""
			)
		}), t[0] = r, t[1] = n, t[2] = a) : a = t[2], a;
	}
	l.default = c;
}), 226);
