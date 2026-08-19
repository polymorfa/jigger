__d("MAWAttachmentCdnUrlReader", [
	"FBLogger",
	"MAWAttachmentCdnUrlDb",
	"WADirectPath",
	"WATimeUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function() {
		return r("FBLogger")("wmi").tags(["maw_attachment_cdn_url_read"]);
	}, s = 30 * o("WATimeUtils").DAY_MILLISECONDS;
	async function u(t) {
		var n = await o("MAWAttachmentCdnUrlDb").getAttachmentCdnUrlDbPromise();
		try {
			var a = await n.runInTransaction(["attachmentCdnUrls"], "readonly", function(e) {
				return e.stores.attachmentCdnUrls.get(t);
			}, "MAWAttachmentCdnUrlReadRow");
			return a == null || o("WATimeUtils").millisTime() - a.timestampMs > s ? null : o("WADirectPath").validateDirectPath(a.cdnUrl).value;
		} catch (t) {
			return e().catching(r("getErrorSafe")(t)).warn("Failed to read attachment CDN URL"), null;
		}
	}
	l.getAttachmentCdnUrlDirectPath = u;
}), 98);
