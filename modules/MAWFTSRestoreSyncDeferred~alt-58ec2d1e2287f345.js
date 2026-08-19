__d("MAWFTSRestoreSyncDeferred", ["JSResourceForInteraction"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("JSResourceForInteraction")("MAWFTSRestoreSync").__setRef("MAWFTSRestoreSyncDeferred");
	async function s() {
		var t = await e.load(), n = t.getFTSRestoreSync;
		return n();
	}
	l.getInstance = s;
}), 98);
