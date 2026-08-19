__d("MAWCacheServiceUtils", ["FBLogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "maw_cache_service_broadcast", s = typeof window != "undefined" ? window : self, u = function() {
		return s.BroadcastChannel ? new s.BroadcastChannel(e) : (r("FBLogger")("messenger_e2ee_web").warn("BroadcastChannel is not supported in this browser"), null);
	};
	function c(e, t) {
		var n = new Set(), r = [];
		return e.forEach(function(e) {
			var o = t(e);
			if (n.has(o)) {
				r.push(e);
				return;
			}
			n.add(o);
		}), r;
	}
	l.MAW_CACHE_SERVICE_BROADCAST_CHANNEL = e, l.globalScope = s, l.getMAWCacheServiceBroadcastChannel = u, l.findDuplicates = c;
}), 98);
