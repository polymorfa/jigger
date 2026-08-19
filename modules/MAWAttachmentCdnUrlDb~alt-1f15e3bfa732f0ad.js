__d("MAWAttachmentCdnUrlDb", [
	"FBLogger",
	"MAWAttachmentCdnUrlSchema",
	"WAResolvable",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new (o("WAResolvable")).Resolvable();
	async function u(t) {
		try {
			var n = o("MAWAttachmentCdnUrlSchema").makeSchema(t);
			return await n.init(), e = n, s.resolve(n), n;
		} catch (e) {
			throw s.reject(e), r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).mustfix("Error performing MAW attachment CDN URL DB init"), e;
		}
	}
	function c() {
		if (e == null) throw r("err")("MAW attachment CDN URL DB is not initialized");
		return e;
	}
	function d() {
		return s.promise;
	}
	l.makeAttachmentCdnUrlDb = u, l.getAttachmentCdnUrlDb = c, l.getAttachmentCdnUrlDbPromise = d;
}), 98);
