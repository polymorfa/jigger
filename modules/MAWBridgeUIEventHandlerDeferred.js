__d("MAWBridgeUIEventHandlerDeferred", ["requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("MAWBridgeUIEventHandler").__setRef("MAWBridgeUIEventHandlerDeferred"), s = function(n, r) {
		e.load().then(function(e) {
			e.handleEvents(n, r);
		});
	};
	l.handleEvents = s;
}), 98);
