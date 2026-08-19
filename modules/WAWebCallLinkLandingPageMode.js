__d("WAWebCallLinkLandingPageMode", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		var t = e.guestCallingEnabled, n = e.isGuestCallingSession, r = e.isLoggedIn, o = e.isWebGroupCalling100Enabled, a = e.webGroupCallingEnabled;
		return t && n ? "guest_redirect" : r ? a == null ? null : a ? "lobby" : "join_call_lite" : t ? "guest_redirect" : o ? "qr_redirect" : "join_call_lite";
	}
	i.computeMode = e;
}), 66);
