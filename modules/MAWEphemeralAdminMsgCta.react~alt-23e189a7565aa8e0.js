__d("MAWEphemeralAdminMsgCta.react", [
	"JSResourceForInteraction",
	"MWXLink.react",
	"QPLUserFlow",
	"qpl",
	"react",
	"useMWXLazyDialog",
	"useSecureThreadJid"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = r("JSResourceForInteraction")("MAWEphemeralSettingsDialog.react").__setRef("MAWEphemeralAdminMsgCta.react");
	function c(e) {
		var t = e.threadKey, n = e.title, o = r("useSecureThreadJid")(t, "MAWEphemeralAdminMsgCta"), a = {
			getThreadJid: o,
			threadKey: t
		}, i = r("useMWXLazyDialog")(u), l = i[0], c = function() {
			r("QPLUserFlow").start(r("qpl")._(1056845690, "2034"), { annotations: { string: { action_type: "change_ephemeral_message_duration" } } }), l(a);
		};
		return s.jsx(r("MWXLink.react"), {
			onClick: c,
			children: n
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
