__d("WASmaxOutDevicesRemoveRequest", [
	"WASmaxJsx",
	"WASmaxOutDevicesBaseIQSetRequestMixin",
	"WASmaxOutDevicesIdentityKeyMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.removeId, n = e.identityKeyMixinArgs, r = o("WASmaxOutDevicesBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", {
			to: o("WAWap").S_WHATSAPP_NET,
			xmlns: "fbid:devices"
		}, o("WASmaxOutDevicesIdentityKeyMixin").mergeIdentityKeyMixin(o("WASmaxJsx").smax("remove", { id: o("WAWap").INT(t) }), n)));
		return r;
	}
	l.makeRemoveRequest = e;
}), 98);
