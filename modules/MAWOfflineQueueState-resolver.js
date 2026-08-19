__d("MAWOfflineQueueState-resolver", ["MAWOfflineQueueState"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return {
			read: function() {
				return o("MAWOfflineQueueState").offlineQueueState.getSnapshot();
			},
			subscribe: function(t) {
				return o("MAWOfflineQueueState").offlineQueueState.subscribe(t);
			}
		};
	}
	l.offlineQueueStats = e;
}), 98);
