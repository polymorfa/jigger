__d("MAWMiActOnActThreadReadyDeferred", ["requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("MAWMiActOnActThreadReady").__setRef("MAWMiActOnActThreadReadyDeferred");
	function s(t, n, r, o) {
		return e.load().then(function(e) {
			var a = e.onActThreadReady;
			return a(t.tables, n, r, o);
		});
	}
	l.default = s;
}), 98);
