__d("MAWCreateMaybeAddPointForHeroTracing", [
	"MAWBridge",
	"MAWQplProxy",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return function(t, n) {
			e != null && r("promiseDone")(o("MAWQplProxy").workerBridgeDeferred.getPromise(), function() {
				return o("MAWBridge").getBridge().fireAndForget("event", "interactionTracingEvent", {
					data: n,
					interactionId: e,
					pointName: t,
					pointType: "AppTiming"
				}, !0);
			});
		};
	}
	l.createMaybeAddPointForHeroTracing = e;
}), 98);
