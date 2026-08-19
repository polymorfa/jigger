__d("MAWMediaSetClientMediaStatus", [
	"I64",
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
					var n, r, i, s = yield t.client_media_status.get(a);
					return t.client_media_status.upsert([a], babelHelpers.extends({
						downloadRetryCount: (n = s == null ? void 0 : s.downloadRetryCount) != null ? n : (e || (e = o("I64"))).zero,
						id: a,
						mainMediaStatus: o("MAWClientMediaStatusUtils").getClientMediaStatusType(l.mainMediaStatus),
						mainMediaStatusDetails: l.mainMediaStatusDetails,
						previewMediaStatus: (l == null ? void 0 : l.previewMediaStatus) != null ? o("MAWClientMediaStatusUtils").getClientMediaStatusType(l.previewMediaStatus) : void 0,
						previewMediaStatusDetails: (r = l.previewMediaStatusDetails) != null ? r : void 0
					}, o("MAWClientMediaStatusUtils").getValidationResults((i = l.validationResult) != null ? i : void 0)));
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})(), "readwrite", void 0, void 0, i.id + ":28");
		});
	}
	l.call = s;
}), 98);
