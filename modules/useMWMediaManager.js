__d("useMWMediaManager", [
	"MWMediaManager",
	"MWMediaManagerFileSizeLimit",
	"justknobx",
	"react-compiler-runtime",
	"useMWMediaManagerUploadFailedToast"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("react-compiler-runtime").c(5), n = e.onUploadFailure, a = e.thread, i = r("useMWMediaManagerUploadFailedToast")(), l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = r("justknobx")._("2538"), t[0] = l) : l = t[0];
		var u = l, c;
		return t[1] !== n || t[2] !== i || t[3] !== a ? (c = {
			getMaxAttachmentSizeInMB: s,
			maxNumberOfAttachments: u,
			onUploadFailure: n,
			showUploadFailureToast: i,
			thread: a
		}, t[1] = n, t[2] = i, t[3] = a, t[4] = c) : c = t[4], o("MWMediaManager").useMediaManager(c);
	}
	function s(e, t) {
		return o("MWMediaManagerFileSizeLimit").getMWMaxAttachmentSizeInMB(t);
	}
	l.default = e;
}), 98);
