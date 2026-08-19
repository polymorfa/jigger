__d("WAWebBlockedParticipantCallWarning", [
	"fbt",
	"WAWebABProps",
	"WAWebBlockedParticipantWarningAction",
	"WAWebConfirmPopup.react",
	"WAWebFbtIntlList",
	"WAWebFrontendContactGetters",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l, s) {
	function e(e, t) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			if (!o("WAWebABProps").getABPropConfigValue("wa_web_blocked_participant_call_warning")) return !0;
			var n = o("WAWebBlockedParticipantWarningAction").getBlockedParticipantsInGroup(e);
			if (n.length === 0) return !0;
			var a = r("WAWebFbtIntlList")(n.map(function(e) {
				return o("WAWebFrontendContactGetters").getFormattedShortName(e);
			}), r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA), i = t === "start" ? {
				title: s._(
					/*BTDS*/
					""
				),
				children: s._(
					/*BTDS*/
					"",
					[s._param("blocked contact names", a)]
				),
				okText: s._(
					/*BTDS*/
					""
				),
				cancelText: s._(
					/*BTDS*/
					""
				),
				tsNavigationData: {
					surface: "unknown",
					viewName: "blocked-participant-start-warning"
				}
			} : {
				title: s._(
					/*BTDS*/
					""
				),
				children: s._(
					/*BTDS*/
					"",
					[s._param("blocked contact names", a)]
				),
				okText: s._(
					/*BTDS*/
					""
				),
				cancelText: s._(
					/*BTDS*/
					""
				),
				tsNavigationData: {
					surface: "unknown",
					viewName: "blocked-participant-join-warning"
				}
			};
			return o("WAWebConfirmPopup.react").waitForConfirmPopup(i);
		}), u.apply(this, arguments);
	}
	l.maybeShowBlockedParticipantCallWarning = e;
}), 226);
