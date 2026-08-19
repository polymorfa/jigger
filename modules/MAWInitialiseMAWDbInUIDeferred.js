__d("MAWInitialiseMAWDbInUIDeferred", ["requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("MAWInitialiseMAWDbInUI").__setRef("MAWInitialiseMAWDbInUIDeferred");
	function s() {
		return e.load().then(function(e) {
			return e.MAWInitialiseMAWDbInUI();
		});
	}
	l.MAWInitialiseMAWDbInUI = s;
}), 98);
