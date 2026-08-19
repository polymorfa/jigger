__d("WASmaxInDevicesRemoveResponseSuccess", ["WASmaxInDevicesIQResultResponseMixin", "WASmaxParseUtils"], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		var n = o("WASmaxParseUtils").assertTag(e, "iq");
		if (!n.success) return n;
		var r = o("WASmaxInDevicesIQResultResponseMixin").parseIQResultResponseMixin(e, t);
		return r.success, r;
	}
	l.parseRemoveResponseSuccess = e;
}), 98);
