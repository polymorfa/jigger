__d("MAWFTSRestoreSyncDeferred", ["JSResourceForInteraction", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("JSResourceForInteraction")("MAWFTSRestoreSync").__setRef("MAWFTSRestoreSyncDeferred");
	function s() {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield e.load(), n = t.getFTSRestoreSync;
			return n();
		}), u.apply(this, arguments);
	}
	l.getInstance = s;
}), 98);
