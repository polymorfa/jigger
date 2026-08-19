__d("MAWSupportedImageTypes", ["cometIsMimeTypeForMedia"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["image/heic"];
	function s(t) {
		return t === "image/gif" || t === "image/webp" ? !0 : o("cometIsMimeTypeForMedia").isMimeTypeForPhoto(t) ? !e.includes(t) : !1;
	}
	l.isSupportedImageFileType = s;
}), 98);
