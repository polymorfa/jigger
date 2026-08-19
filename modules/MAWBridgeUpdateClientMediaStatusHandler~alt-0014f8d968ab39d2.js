__d("MAWBridgeUpdateClientMediaStatusHandler", [
	"I64",
	"LSIntEnum",
	"MAWClientMediaStatusUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	async function u(t, n) {
		var r, a, i, l = n.details, u = n.key, c = n.status, d = n.type, m = n.validationResult, p = u.toString(), _ = await t.client_media_status.get(p), f = d === "main" ? (_ == null ? void 0 : _.mainMediaStatus) != null && (e || (e = o("I64"))).equal(_ == null ? void 0 : _.mainMediaStatus, (s || (s = o("LSIntEnum"))).ofNumber(1)) : (_ == null ? void 0 : _.previewMediaStatus) != null && (e || (e = o("I64"))).equal(_ == null ? void 0 : _.previewMediaStatus, (s || (s = o("LSIntEnum"))).ofNumber(1));
		if (!f) return t.client_media_status.upsert([p], babelHelpers.extends({
			downloadRetryCount: (r = _ == null ? void 0 : _.downloadRetryCount) != null ? r : (e || (e = o("I64"))).zero,
			id: p,
			mainMediaStatus: d === "main" ? o("MAWClientMediaStatusUtils").getClientMediaStatusType(c) : (a = _ == null ? void 0 : _.mainMediaStatus) != null ? a : (s || (s = o("LSIntEnum"))).ofNumber(4),
			mainMediaStatusDetails: d === "main" ? l : (i = _ == null ? void 0 : _.mainMediaStatusDetails) != null ? i : "updated_main_without_details",
			previewMediaStatus: d === "preview" ? o("MAWClientMediaStatusUtils").getClientMediaStatusType(c) : _ == null ? void 0 : _.previewMediaStatus,
			previewMediaStatusDetails: d === "preview" ? l : _ == null ? void 0 : _.previewMediaStatusDetails
		}, o("MAWClientMediaStatusUtils").getValidationResults(m)));
	}
	async function c(e, t) {
		await e.runInTransaction(function(e) {
			return u(e, t);
		}, "readwrite", void 0, void 0, i.id + ":76");
	}
	l.txnHandler = u, l.call = c;
}), 98);
