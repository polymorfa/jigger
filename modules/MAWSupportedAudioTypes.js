__d("MAWSupportedAudioTypes", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = [
		"audio/ogg",
		"audio/x-flac",
		"audio/flac"
	];
	function l(t) {
		return t.startsWith("audio/") ? !e.includes(t) : !1;
	}
	i.isSupportedAudioFileType = l;
}), 66);
