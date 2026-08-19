__d("WASmaxOutDevicesNotifyRequest", [
	"WASmaxChildren",
	"WASmaxJsx",
	"WASmaxOutDevicesBaseIQSetRequestMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.userJid, n = o("WASmaxJsx").smax("user", { jid: o("WAWap").USER_JID(t) });
		return n;
	}
	function s(t) {
		var n = t.userArgs, r = o("WASmaxOutDevicesBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", {
			to: o("WAWap").S_WHATSAPP_NET,
			xmlns: "fbid:devices"
		}, o("WASmaxJsx").smax("users", null, o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 25))));
		return r;
	}
	l.makeNotifyRequestUsersUser = e, l.makeNotifyRequest = s;
}), 98);
