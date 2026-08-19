__d("MAWEphemeralAdminMsgCta.react", [
	"JSResourceForInteraction",
	"MWXLink.react",
	"QPLUserFlow",
	"qpl",
	"react",
	"react-compiler-runtime",
	"useMWXLazyDialog",
	"useSecureThreadJid"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = r("JSResourceForInteraction")("MAWEphemeralSettingsDialog.react").__setRef("MAWEphemeralAdminMsgCta.react");
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.threadKey, a = e.title, i = r("useSecureThreadJid")(n, "MAWEphemeralAdminMsgCta"), l;
		t[0] !== i || t[1] !== n ? (l = {
			getThreadJid: i,
			threadKey: n
		}, t[0] = i, t[1] = n, t[2] = l) : l = t[2];
		var c = l, d = r("useMWXLazyDialog")(u), m = d[0], p;
		t[3] !== c || t[4] !== m ? (p = function() {
			r("QPLUserFlow").start(r("qpl")._(1056845690, "2034"), { annotations: { string: { action_type: "change_ephemeral_message_duration" } } }), m(c);
		}, t[3] = c, t[4] = m, t[5] = p) : p = t[5];
		var _ = p, f;
		return t[6] !== _ || t[7] !== a ? (f = s.jsx(r("MWXLink.react"), {
			onClick: _,
			children: a
		}), t[6] = _, t[7] = a, t[8] = f) : f = t[8], f;
	}
	l.default = c;
}), 98);
