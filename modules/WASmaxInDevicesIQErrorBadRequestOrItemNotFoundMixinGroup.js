__d("WASmaxInDevicesIQErrorBadRequestOrItemNotFoundMixinGroup", [
	"WAResultOrError",
	"WASmaxInDevicesIQErrorBadRequestMixin",
	"WASmaxInDevicesIQErrorItemNotFoundMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxInDevicesIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
		if (t.success) return o("WAResultOrError").makeResult({
			name: "IQErrorBadRequest",
			value: t.value
		});
		var n = o("WASmaxInDevicesIQErrorItemNotFoundMixin").parseIQErrorItemNotFoundMixin(e);
		return n.success ? o("WAResultOrError").makeResult({
			name: "IQErrorItemNotFound",
			value: n.value
		}) : o("WASmaxParseUtils").errorMixinDisjunction(e, ["IQErrorBadRequest", "IQErrorItemNotFound"], [t, n]);
	}
	l.parseIQErrorBadRequestOrItemNotFoundMixinGroup = e;
}), 98);
