__d("MAWUpdateMediaDownloadStatusByObjectIdApi", [
	"MAWGetMediaByObjectId",
	"MAWMediaDownloadStatusForUI",
	"MWFBLogger",
	"asyncToGeneratorRuntime",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
			r("vulture")("69D1CLoJyYsnZrvO5CxIBOLxqIw=");
			var i = yield o("MAWGetMediaByObjectId").getMediaByObjectId(t), l = i.value;
			if (l == null || i.success !== !0) {
				o("MWFBLogger").MWMediaLogger().tags(["MediaDownload"]).WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["updateMediaDownloadStatusByObjectId - media not found for objectId: ", ""])), t);
				return;
			}
			o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
				details: a,
				hash: l.plaintextHash,
				status: n,
				type: "main"
			});
		});
		return function(n, r, o) {
			return t.apply(this, arguments);
		};
	})();
	l.updateMediaDownloadStatusByObjectId = s;
}), 98);
