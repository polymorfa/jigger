__d("MAWMediaSetMediaValidatedResult", [
	"LSIntEnum",
	"MAWClientMediaStatusUtils",
	"asyncToGeneratorRuntime",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, a, l) {
		r("promiseDone")(t, function(t) {
			return t.runInTransaction((function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var n = yield t.client_media_status.get(a);
					return n == null ? t.client_media_status.add(babelHelpers.extends({
						id: a,
						mainMediaStatus: (e || (e = o("LSIntEnum"))).ofNumber(1),
						mainMediaStatusDetails: "optimistic_with_validation_result",
						previewMediaStatus: e.ofNumber(1),
						previewMediaStatusDetails: "optimistic_with_validation_result"
					}, o("MAWClientMediaStatusUtils").getValidationResults(l))) : t.client_media_status.put(babelHelpers.extends({}, n, { id: a }, o("MAWClientMediaStatusUtils").getValidationResults(l)));
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})(), "readwrite", void 0, void 0, i.id + ":26");
		});
	}
	l.call = s;
}), 98);
