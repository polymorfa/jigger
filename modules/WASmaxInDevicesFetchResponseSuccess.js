__d("WASmaxInDevicesFetchResponseSuccess", [
	"WAResultOrError",
	"WASmaxInDevicesFetchUserResponseMixin",
	"WASmaxInDevicesIQResultResponseMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "user");
		if (!t.success) return t;
		var n = o("WASmaxInDevicesFetchUserResponseMixin").parseFetchUserResponseMixin(e);
		return n.success, n;
	}
	function s(t, n) {
		var r = o("WASmaxParseUtils").assertTag(t, "iq");
		if (!r.success) return r;
		var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "users");
		if (!a.success) return a;
		var i = o("WASmaxInDevicesIQResultResponseMixin").parseIQResultResponseMixin(t, n);
		if (!i.success) return i;
		var l = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "user", 0, 25, e);
		return l.success ? o("WAResultOrError").makeResult(babelHelpers.extends({}, i.value, { usersUser: l.value })) : l;
	}
	l.parseFetchResponseSuccessUsersUser = e, l.parseFetchResponseSuccess = s;
}), 98);
