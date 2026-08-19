__d("MAWDocumentPreProcess", [
	"Promise",
	"WABlobToArrayBuffer",
	"WATagsLogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("WATagsLogger").TAGS(["MAWDocumentPreProcess"]);
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			return c.DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["start document preprocess"]))), (u || (u = n("Promise"))).resolve({
				file: e,
				filename: e.name,
				plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(e),
				type: "document"
			});
		}), m.apply(this, arguments);
	}
	function p(r) {
		c.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start optimistic document preprocess"])));
		var o = t.URL.createObjectURL(r);
		return (u || (u = n("Promise"))).resolve({
			file: r,
			filename: r.name,
			type: "document",
			url: o
		});
	}
	l.documentPreprocess = d, l.optimisticDocumentPreprocess = p;
}), 98);
