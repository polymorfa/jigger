__d("MAWSendUpdateFromUIPersistedDataServiceApi", ["MAWWorkerPersistedDataService"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		var e = t.cache, n = t.instanceKey, r = t.namespace, a = t.source;
		o("MAWWorkerPersistedDataService").getMAWWorkerPersistedDataService().emitBroadcastChannelMessageToUI(r, e, a, n);
	};
	l.sendUpdateFromUIPersistedDataService = e;
}), 98);
