__d("MAWAttachmentCdnUrlWriter", [
	"FBLogger",
	"MAWAttachmentCdnUrlDb",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function() {
		return r("FBLogger")("wmi").tags(["maw_attachment_cdn_url_write"]);
	};
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			if (t.length !== 0) {
				var n = Array.from(new Map(t.map(function(e) {
					return [e.objectId, e];
				})).values()), a = yield o("MAWAttachmentCdnUrlDb").getAttachmentCdnUrlDbPromise();
				try {
					yield a.runInTransaction(["attachmentCdnUrls"], "readwrite", function(e) {
						return e.stores.attachmentCdnUrls.bulkPut(n);
					}, "MAWAttachmentCdnUrlWriteRows");
				} catch (t) {
					e().catching(r("getErrorSafe")(t)).warn("Failed to write attachment CDN URLs");
				}
			}
		}), u.apply(this, arguments);
	}
	l.writeAttachmentCdnUrls = s;
}), 98);
