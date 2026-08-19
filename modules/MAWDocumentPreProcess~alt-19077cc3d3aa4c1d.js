__d("MAWDocumentPreProcess", ["WABlobToArrayBuffer", "WATagsLogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("WATagsLogger").TAGS(["MAWDocumentPreProcess"]);
	async function c(t) {
		return u.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start document preprocess"]))), Promise.resolve({
			file: t,
			filename: t.name,
			plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(t),
			type: "document"
		});
	}
	function d(e) {
		u.DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["start optimistic document preprocess"])));
		var n = t.URL.createObjectURL(e);
		return Promise.resolve({
			file: e,
			filename: e.name,
			type: "document",
			url: n
		});
	}
	l.documentPreprocess = c, l.optimisticDocumentPreprocess = d;
}), 98);
