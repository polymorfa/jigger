__d("MAWMessageIntegrityCheckDeferred", ["promiseDone", "requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("MAWMessageIntegrityCheck").__setRef("MAWMessageIntegrityCheckDeferred");
	function s(t, n, o, a, i, l, s, u, c) {
		e.onReady(function(e) {
			return r("promiseDone")(e.runMessageIntegrityCheck(t, n, o, a, i, l, s, u, c));
		});
	}
	l.runMessageIntegrityCheckDeferred = s;
}), 98);
