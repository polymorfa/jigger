__d("WAWebBizAgentTerminationMsgBar.react", [
	"fbt",
	"WAWebAuthAgentConsumerJourneyLogger",
	"WAWebBizAgentTerminationModal.react",
	"WAWebModalManager",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e, t, n) {
		var r = o("react-compiler-runtime").c(5), a, i;
		r[0] !== e || r[1] !== n || r[2] !== t ? (a = function() {
			o("WAWebAuthAgentConsumerJourneyLogger").logBlockedComposerImpression({
				businessJid: e,
				offboardingType: n,
				parentCompanyJid: null,
				parentCompanyName: t
			});
		}, i = [
			e,
			t,
			n
		], r[0] = e, r[1] = n, r[2] = t, r[3] = a, r[4] = i) : (a = r[3], i = r[4]), c(a, i);
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(15), n = e.businessJid, a = e.obaPhoneNumber, i = e.offboardingType, l = e.parentCompanyName;
		d(n, l, i);
		var c;
		t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l ? (c = function() {
			o("WAWebAuthAgentConsumerJourneyLogger").logBlockedComposerLearnMoreClick(n, l, null, i), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizAgentTerminationModal.react"), {
				businessJid: n,
				obaPhoneNumber: a,
				offboardingType: i,
				parentCompanyName: l
			}));
		}, t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = c) : c = t[4];
		var m = c, p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[5] = p) : p = t[5];
		var _;
		t[6] !== m ? (_ = u.jsx(r("WDSTextualLink.react"), {
			testid: "agent-termination-msgbar-learn-more",
			onClick: m,
			children: p
		}), t[6] = m, t[7] = _) : _ = t[7];
		var f = _, g = l !== "", h;
		t[8] !== g || t[9] !== f || t[10] !== l ? (h = g ? s._(
			/*BTDS*/
			"",
			[s._param("companyName", l), s._param("learnMore", f)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("learnMore", f)]
		), t[8] = g, t[9] = f, t[10] = l, t[11] = h) : h = t[11];
		var y = h, C;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x126k92a" }, t[12] = C) : C = t[12];
		var b;
		return t[13] !== y ? (b = u.jsx("span", babelHelpers.extends({ "data-testid": "agent-termination-msgbar" }, C, { children: y })), t[13] = y, t[14] = b) : b = t[14], b;
	}
	l.default = m;
}), 226);
