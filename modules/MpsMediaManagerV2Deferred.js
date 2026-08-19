__d("MpsMediaManagerV2Deferred", ["promiseDone", "requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("MpsMediaManagerV2").__setRef("MpsMediaManagerV2Deferred");
	function s(t) {
		r("promiseDone")(e.load().then(function(e) {
			e.mpsMediaManager().dequeueDownload(t);
		}));
	}
	l.dequeueDownload = s;
}), 98);
