__d("MAWMediaSetClientMediaStatus", [
	"I64",
	"MAWClientMediaStatusUtils",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, a) {
		r("promiseDone")(t, function(t) {
			return t.runInTransaction(async function(t) {
				var r, i, l, s = await t.client_media_status.get(n);
				return t.client_media_status.upsert([n], babelHelpers.extends({
					downloadRetryCount: (r = s == null ? void 0 : s.downloadRetryCount) != null ? r : (e || (e = o("I64"))).zero,
					id: n,
					mainMediaStatus: o("MAWClientMediaStatusUtils").getClientMediaStatusType(a.mainMediaStatus),
					mainMediaStatusDetails: a.mainMediaStatusDetails,
					previewMediaStatus: (a == null ? void 0 : a.previewMediaStatus) != null ? o("MAWClientMediaStatusUtils").getClientMediaStatusType(a.previewMediaStatus) : void 0,
					previewMediaStatusDetails: (i = a.previewMediaStatusDetails) != null ? i : void 0
				}, o("MAWClientMediaStatusUtils").getValidationResults((l = a.validationResult) != null ? l : void 0)));
			}, "readwrite", void 0, void 0, i.id + ":28");
		});
	}
	l.call = s;
}), 98);
