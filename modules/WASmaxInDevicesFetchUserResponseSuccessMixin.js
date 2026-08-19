__d("WASmaxInDevicesFetchUserResponseSuccessMixin", [
	"WAResultOrError",
	"WASmaxInDevicesDeviceListMixin",
	"WASmaxInDevicesICDCFromServerMixin",
	"WASmaxParseJid",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "devices");
		if (!t.success) return t;
		var n = o("WASmaxInDevicesDeviceListMixin").parseDeviceListMixin(e);
		return n.success, n;
	}
	function s(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "icdc");
		if (!t.success) return t;
		var n = o("WASmaxInDevicesICDCFromServerMixin").parseICDCFromServerMixin(e);
		return n.success, n;
	}
	function u(t) {
		var n = o("WASmaxParseUtils").assertTag(t, "user");
		if (!n.success) return n;
		var r = o("WASmaxParseUtils").optionalChildWithTag(t, "devices", e);
		if (!r.success) return r;
		var a = o("WASmaxParseUtils").optionalChildWithTag(t, "icdc", s);
		if (!a.success) return a;
		var i = o("WASmaxParseJid").attrUserJid(t, "jid");
		return i.success ? o("WAResultOrError").makeResult({
			jid: i.value,
			devices: r.value,
			icdc: a.value
		}) : i;
	}
	l.parseFetchUserResponseSuccessDevices = e, l.parseFetchUserResponseSuccessIcdc = s, l.parseFetchUserResponseSuccessMixin = u;
}), 98);
