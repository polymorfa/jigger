__d("MAWMediaSetMediaValidatedResult", [
	"LSIntEnum",
	"MAWClientMediaStatusUtils",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, a) {
		r("promiseDone")(t, function(t) {
			return t.runInTransaction(async function(t) {
				var r = await t.client_media_status.get(n);
				return r == null ? t.client_media_status.add(babelHelpers.extends({
					id: n,
					mainMediaStatus: (e || (e = o("LSIntEnum"))).ofNumber(1),
					mainMediaStatusDetails: "optimistic_with_validation_result",
					previewMediaStatus: e.ofNumber(1),
					previewMediaStatusDetails: "optimistic_with_validation_result"
				}, o("MAWClientMediaStatusUtils").getValidationResults(a))) : t.client_media_status.put(babelHelpers.extends({}, r, { id: n }, o("MAWClientMediaStatusUtils").getValidationResults(a)));
			}, "readwrite", void 0, void 0, i.id + ":26");
		});
	}
	l.call = s;
}), 98);
