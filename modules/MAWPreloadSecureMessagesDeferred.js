__d("MAWPreloadSecureMessagesDeferred", ["requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("MAWPreloadSecureMessages").__setRef("MAWPreloadSecureMessagesDeferred"), s = function() {
		for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
		return e.load().then(function(e) {
			return e.preloadSecureMessagesByThreadKey.apply(e, n);
		});
	};
	l.preloadSecureMessagesByThreadKey = s;
}), 98);
