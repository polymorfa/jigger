__d("MAWUpdateMediaDownloadStatusByObjectIdApi", [
	"MAWGetMediaByObjectId",
	"MAWMediaDownloadStatusForUI",
	"MWFBLogger",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = async function(n, a, i) {
		r("vulture")("69D1CLoJyYsnZrvO5CxIBOLxqIw=");
		var t = await o("MAWGetMediaByObjectId").getMediaByObjectId(n), l = t.value;
		if (l == null || t.success !== !0) {
			o("MWFBLogger").MWMediaLogger().tags(["MediaDownload"]).WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["updateMediaDownloadStatusByObjectId - media not found for objectId: ", ""])), n);
			return;
		}
		o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
			details: i,
			hash: l.plaintextHash,
			status: a,
			type: "main"
		});
	};
	l.updateMediaDownloadStatusByObjectId = s;
}), 98);
