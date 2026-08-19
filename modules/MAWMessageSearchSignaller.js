__d("MAWMessageSearchSignaller", ["MAWFTSWorker"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		function e() {}
		var t = e.prototype;
		return t.shouldTerminateAll = function() {
			var e = o("MAWFTSWorker").getFTSWorker();
			return e.shouldTerminateAll();
		}, e;
	})();
	l.default = e;
}), 98);
