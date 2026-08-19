__d("WAWebBizAgentSmbOffboardingMsgBar.react", [
	"fbt",
	"WAWebAuthAgentSmbJourneyLogger",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.parentCompanyName;
		o("WAWebAuthAgentSmbJourneyLogger").useLogAgentBlockedComposerViewOnMount("agent_degraded", !0);
		var n = t !== "";
		return u.jsx("span", {
			"data-testid": "agent-smb-offboarding-msgbar",
			children: n ? s._(
				/*BTDS*/
				"",
				[s._param("companyName", t)]
			) : s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
