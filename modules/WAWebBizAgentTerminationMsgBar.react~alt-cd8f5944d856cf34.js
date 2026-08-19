__d("WAWebBizAgentTerminationMsgBar.react", [
	"fbt",
	"WAWebAuthAgentConsumerJourneyLogger",
	"WAWebBizAgentTerminationModal.react",
	"WAWebModalManager",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e, t, n) {
		c(function() {
			o("WAWebAuthAgentConsumerJourneyLogger").logBlockedComposerImpression({
				businessJid: e,
				offboardingType: n,
				parentCompanyJid: null,
				parentCompanyName: t
			});
		}, [
			e,
			t,
			n
		]);
	}
	function m(e) {
		var t = e.businessJid, n = e.obaPhoneNumber, a = e.offboardingType, i = e.parentCompanyName;
		d(t, i, a);
		var l = function() {
			o("WAWebAuthAgentConsumerJourneyLogger").logBlockedComposerLearnMoreClick(t, i, null, a), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizAgentTerminationModal.react"), {
				businessJid: t,
				obaPhoneNumber: n,
				offboardingType: a,
				parentCompanyName: i
			}));
		}, c = u.jsx(r("WDSTextualLink.react"), {
			testid: "agent-termination-msgbar-learn-more",
			onClick: l,
			children: s._(
				/*BTDS*/
				""
			)
		}), m = i !== "", p = m ? s._(
			/*BTDS*/
			"",
			[s._param("companyName", i), s._param("learnMore", c)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("learnMore", c)]
		);
		return u.jsx("span", {
			"data-testid": "agent-termination-msgbar",
			className: "x126k92a",
			children: p
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
