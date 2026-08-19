__d("useShouldShowPlaybackErrorFallback", [
	"MAWVideoAudioPlaybackErrorHandlerUtils",
	"react-compiler-runtime",
	"useMAWMediaDownloadStatus"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = o("react-compiler-runtime").c(3), a = r("useMAWMediaDownloadStatus")(e, t), i = a.validationResult;
		if (e == null) return !1;
		var l;
		return n[0] !== e || n[1] !== i ? (l = o("MAWVideoAudioPlaybackErrorHandlerUtils").isInvalidVideo(e, i), n[0] = e, n[1] = i, n[2] = l) : l = n[2], l;
	}
	l.default = e;
}), 98);
