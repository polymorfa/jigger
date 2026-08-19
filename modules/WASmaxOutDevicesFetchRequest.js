__d("WASmaxOutDevicesFetchRequest", [
	"WASmaxChildren",
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutDevicesBaseIQGetRequestMixin",
	"WASmaxOutDevicesDhashMixin",
	"WASmaxOutDevicesICDCSeqMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.userJid, n = e.dhashMixinArgs, r = e.iCDCSeqMixinArgs, a = o("WASmaxMixins").optionalMerge(o("WASmaxOutDevicesICDCSeqMixin").mergeICDCSeqMixin, o("WASmaxMixins").optionalMerge(o("WASmaxOutDevicesDhashMixin").mergeDhashMixin, o("WASmaxJsx").smax("user", { jid: o("WAWap").USER_JID(t) }), n), r);
		return a;
	}
	function s(t) {
		var n = t.userArgs, r = o("WASmaxOutDevicesBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
			to: o("WAWap").S_WHATSAPP_NET,
			xmlns: "fbid:devices"
		}, o("WASmaxJsx").smax("users", null, o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 25))));
		return r;
	}
	l.makeFetchRequestUsersUser = e, l.makeFetchRequest = s;
}), 98);
