__d("useLegacyUserWatchdog", [
	"MAWIssueNewUserVisibleErrors",
	"clearTimeout",
	"react",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useEffect, u = 1440 * 60 * 1e3, c = 5 * u;
	function d() {
		s(m, void 0);
	}
	function m() {
		var e = r("setTimeout")(p, c);
		return function() {
			return r("clearTimeout")(e);
		};
	}
	function p() {
		var e;
		(e = o("MAWIssueNewUserVisibleErrors")).issueError(e.MAWLegacyUserErrorMsgBody, e.MAWLegacyUserErrorMsgTitle, e.MAWUserVisibleErrorPresentationType.BANNER);
	}
	l.default = d;
}), 98);
