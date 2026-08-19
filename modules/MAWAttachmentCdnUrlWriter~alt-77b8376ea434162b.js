__d("MAWAttachmentCdnUrlWriter", [
	"FBLogger",
	"MAWAttachmentCdnUrlDb",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function() {
		return r("FBLogger")("wmi").tags(["maw_attachment_cdn_url_write"]);
	};
	async function s(t) {
		if (t.length !== 0) {
			var n = Array.from(new Map(t.map(function(e) {
				return [e.objectId, e];
			})).values()), a = await o("MAWAttachmentCdnUrlDb").getAttachmentCdnUrlDbPromise();
			try {
				await a.runInTransaction(["attachmentCdnUrls"], "readwrite", function(e) {
					return e.stores.attachmentCdnUrls.bulkPut(n);
				}, "MAWAttachmentCdnUrlWriteRows");
			} catch (t) {
				e().catching(r("getErrorSafe")(t)).warn("Failed to write attachment CDN URLs");
			}
		}
	}
	l.writeAttachmentCdnUrls = s;
}), 98);
