__d("WASmaxInDevicesFetchUserResponseMixin", [
	"WAResultOrError",
	"WASmaxInDevicesUserResponseFetchFailureOrFetchSuccessMixinGroup",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "user");
		if (!t.success) return t;
		var n = o("WASmaxInDevicesUserResponseFetchFailureOrFetchSuccessMixinGroup").parseUserResponseFetchFailureOrFetchSuccessMixinGroup(e);
		return n.success ? o("WAResultOrError").makeResult({ userResponseFetchFailureOrFetchSuccessMixinGroup: n.value }) : n;
	}
	l.parseFetchUserResponseMixin = e;
}), 98);
