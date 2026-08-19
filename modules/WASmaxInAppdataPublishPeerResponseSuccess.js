__d("WASmaxInAppdataPublishPeerResponseSuccess", [
	"WAResultOrError",
	"WASmaxInAppdataPublishAckMixin",
	"WASmaxInAppdataPublishDeviceListStaleMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		var n = o("WASmaxParseUtils").assertTag(e, "ack");
		if (!n.success) return n;
		var r = o("WASmaxInAppdataPublishAckMixin").parseAckMixin(e, t);
		if (!r.success) return r;
		var a = o("WASmaxInAppdataPublishDeviceListStaleMixin").parseDeviceListStaleMixin(e);
		return o("WAResultOrError").makeResult(babelHelpers.extends({}, r.value, { deviceListStaleMixin: a.success ? a.value : null }));
	}
	l.parsePeerResponseSuccess = e;
}), 98);
