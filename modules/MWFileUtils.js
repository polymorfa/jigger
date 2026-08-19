__d("MWFileUtils", [
	"fbt",
	"I64",
	"formatFileSize"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = s._(
		/*BTDS*/
		""
	);
	function c(t) {
		return t.filesize == null ? null : r("formatFileSize")((e || (e = o("I64"))).to_int32(t.filesize));
	}
	l.PLACEHOLDER_FILENAME = u, l.getFileSize = c;
}), 226);
