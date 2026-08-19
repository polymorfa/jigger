__d("WmiMetadataDb", [
	"FBLogger",
	"WAResolvable",
	"WmiMetadataSchema",
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
				var n = o("WmiMetadataSchema").makeSchema(t);
				return e = n, yield n.init(), s.resolve(n), n;
			} catch (e) {
				throw r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).mustfix("Error performing messenger_web_metadata DB init"), e;
			}
		}), c.apply(this, arguments);
	}
	function d() {
		if (e == null) throw r("err")("messenger_web_metadata DB is not initialized");
		return e;
	}
	function m() {
		return s.promise;
	}
	l.makeMetadataDb = u, l.getMetadataDb = d, l.getMetadataDbPromise = m;
}), 98);
