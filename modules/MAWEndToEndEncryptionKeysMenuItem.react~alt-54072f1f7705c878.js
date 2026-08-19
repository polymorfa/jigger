__d("MAWEndToEndEncryptionKeysMenuItem.react", [
	"fbt",
	"MAWEndToEndEncryptionKeysVerifyDialog.entrypoint",
	"MWThreadListHoverButtonDropdownMenuIcons",
	"MWXMenuItem.react",
	"react",
	"useMWXEntryPointDialog"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.loggingEvent, n = e.thread, o = r("useMWXEntryPointDialog")(r("MAWEndToEndEncryptionKeysVerifyDialog.entrypoint"), { threadKey: n.threadKey }), a = o[0], i = o[1], l = o[2], c = o[3];
		return u.jsx(r("MWXMenuItem.react"), {
			icon: r("MWThreadListHoverButtonDropdownMenuIcons").EndToEndEncryptionKeys,
			loggingEvent: t,
			onClick: function() {
				return a({ threadKey: n.threadKey });
			},
			onHoverIn: i,
			onHoverOut: l,
			onPressIn: c,
			primaryText: s._(
				/*BTDS*/
				""
			),
			testid: void 0
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
