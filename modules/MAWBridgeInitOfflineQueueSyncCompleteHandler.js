__d("MAWBridgeInitOfflineQueueSyncCompleteHandler", ["requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("MessengerLogHistory").__setRef("MAWBridgeInitOfflineQueueSyncCompleteHandler");
	function s() {
		e.onReady(function(e) {
			var t = e.getInstance("maw_setup");
			t.debug("Init Offline Queue Sync Complete");
		});
	}
	l.call = s;
}), 98);
