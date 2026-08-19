__d("MAWEndToEndEncryptedPrivacyMenuItem.react", [
	"fbt",
	"MWThreadListHoverButtonDropdownMenuIcons",
	"MWXMenuItem.react",
	"XMessengerHelpCenterContentControllerRouteBuilder",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.loggingEvent, o = (t = r("XMessengerHelpCenterContentControllerRouteBuilder").buildUri({ cms_id: "1084673321594605" })) == null ? void 0 : t.toString();
		return u.jsx(r("MWXMenuItem.react"), {
			href: o,
			icon: r("MWThreadListHoverButtonDropdownMenuIcons").SecretConversation,
			loggingEvent: n,
			primaryText: s._(
				/*BTDS*/
				""
			),
			target: "_blank"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
