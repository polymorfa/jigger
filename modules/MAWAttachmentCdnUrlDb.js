__d("MAWAttachmentCdnUrlDb", [
	"FBLogger",
	"MAWAttachmentCdnUrlSchema",
	"WAResolvable",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new (o("WAResolvable")).Resolvable();
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			try {
				var n = o("MAWAttachmentCdnUrlSchema").makeSchema(t);
				return yield n.init(), e = n, s.resolve(n), n;
			} catch (e) {
				throw s.reject(e), r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).mustfix("Error performing MAW attachment CDN URL DB init"), e;
			}
		}), c.apply(this, arguments);
	}
	function d() {
		if (e == null) throw r("err")("MAW attachment CDN URL DB is not initialized");
		return e;
	}
	function m() {
		return s.promise;
	}
	l.makeAttachmentCdnUrlDb = u, l.getAttachmentCdnUrlDb = d, l.getAttachmentCdnUrlDbPromise = m;
}), 98);
