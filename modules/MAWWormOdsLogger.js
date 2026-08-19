__d("MAWWormOdsLogger", ["WABridge", "WAOdsEnums"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = { log: function(t) {
		return o("WABridge").getBridge().fireAndForget("event", "odsBumpEntityKey", {
			entity: o("WAOdsEnums").Entity.WORM,
			key: t
		});
	} };
	l.wormOdsWorkerLogger = e;
}), 98);
