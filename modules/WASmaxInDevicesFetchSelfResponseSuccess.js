__d("WASmaxInDevicesFetchSelfResponseSuccess", [
	"WAResultOrError",
	"WASmaxInDevicesDeviceInfoMixin",
	"WASmaxInDevicesIQResultResponseMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "device");
		if (!t.success) return t;
		var n = o("WASmaxInDevicesDeviceInfoMixin").parseDeviceInfoMixin(e);
		return n.success, n;
	}
	function s(t, n) {
		var r = o("WASmaxParseUtils").assertTag(t, "iq");
		if (!r.success) return r;
		var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "self");
		if (!a.success) return a;
		var i = o("WASmaxInDevicesIQResultResponseMixin").parseIQResultResponseMixin(t, n);
		if (!i.success) return i;
		var l = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "device", 1, 25, e);
		return l.success ? o("WAResultOrError").makeResult(babelHelpers.extends({}, i.value, { selfDevice: l.value })) : l;
	}
	l.parseFetchSelfResponseSuccessSelfDevice = e, l.parseFetchSelfResponseSuccess = s;
}), 98);
