__d("MAWSupportedVideoTypes", ["cometIsMimeTypeForMedia"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"video/x-ms-wmv",
		"video/x-msvideo",
		"video/avi",
		"video/x-flv",
		"video/ogg",
		"video/mpeg"
	];
	function s(t) {
		return o("cometIsMimeTypeForMedia").isMimeTypeForVideo(t) ? !e.includes(t) : !1;
	}
	l.isSupportedVideoFileType = s;
}), 98);
