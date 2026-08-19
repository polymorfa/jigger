__d("MAWEndToEndEncryptedPrivacyMenuItem.react", [
	"fbt",
	"MWThreadListHoverButtonDropdownMenuIcons",
	"MWXMenuItem.react",
	"XMessengerHelpCenterContentControllerRouteBuilder",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(4), n = e.loggingEvent, a;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var i;
			a = (i = r("XMessengerHelpCenterContentControllerRouteBuilder").buildUri({ cms_id: "1084673321594605" })) == null ? void 0 : i.toString(), t[0] = a;
		} else a = t[0];
		var l = a, c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[1] = c) : c = t[1];
		var d;
		return t[2] !== n ? (d = u.jsx(r("MWXMenuItem.react"), {
			href: l,
			icon: r("MWThreadListHoverButtonDropdownMenuIcons").SecretConversation,
			loggingEvent: n,
			primaryText: c,
			target: "_blank"
		}), t[2] = n, t[3] = d) : d = t[3], d;
	}
	l.default = c;
}), 226);
