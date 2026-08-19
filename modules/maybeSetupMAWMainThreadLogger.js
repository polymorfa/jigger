__d("maybeSetupMAWMainThreadLogger", [
	"MessengerLogHistory",
	"cr:34938",
	"isArmadillo"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MessengerLogHistory").getInstance("client_init"), s = function() {
		n("cr:34938") != null && r("isArmadillo")() && (e.debug("Starting MAW main thread logger setup..."), n("cr:34938").setupMainWaLogger(), e.debug("Starting MAW main thread logger setup success"));
	};
	l.maybeSetupMAWMainThreadLogger = s;
}), 98);
