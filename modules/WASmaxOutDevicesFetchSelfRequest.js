__d("WASmaxOutDevicesFetchSelfRequest", [
	"WASmaxJsx",
	"WASmaxOutDevicesBaseIQGetRequestMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e() {
		var e = o("WASmaxOutDevicesBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
			to: o("WAWap").S_WHATSAPP_NET,
			xmlns: "fbid:devices"
		}, o("WASmaxJsx").smax("self", null)));
		return e;
	}
	l.makeFetchSelfRequest = e;
}), 98);
