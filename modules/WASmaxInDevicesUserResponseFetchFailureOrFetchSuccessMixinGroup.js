__d("WASmaxInDevicesUserResponseFetchFailureOrFetchSuccessMixinGroup", [
	"WAResultOrError",
	"WASmaxInDevicesFetchUserResponseFailureMixin",
	"WASmaxInDevicesFetchUserResponseSuccessMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxInDevicesFetchUserResponseFailureMixin").parseFetchUserResponseFailureMixin(e);
		if (t.success) return o("WAResultOrError").makeResult({
			name: "FetchUserResponseFailure",
			value: t.value
		});
		var n = o("WASmaxInDevicesFetchUserResponseSuccessMixin").parseFetchUserResponseSuccessMixin(e);
		return n.success ? o("WAResultOrError").makeResult({
			name: "FetchUserResponseSuccess",
			value: n.value
		}) : o("WASmaxParseUtils").errorMixinDisjunction(e, ["UserResponseFailure", "UserResponseSuccess"], [t, n]);
	}
	l.parseUserResponseFetchFailureOrFetchSuccessMixinGroup = e;
}), 98);
