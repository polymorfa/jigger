__d("MAWBridgeInitOfflineQueueSyncStartHandler", ["requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("MessengerLogHistory").__setRef("MAWBridgeInitOfflineQueueSyncStartHandler");
	function s() {
		e.onReady(function(e) {
			var t = e.getInstance("maw_setup");
			t.debug("Init Offline Queue Sync Start");
		});
	}
	l.call = s;
}), 98);
