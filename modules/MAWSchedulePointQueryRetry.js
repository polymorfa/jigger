__d("MAWSchedulePointQueryRetry", [
	"LSMEBTaskCreationSource",
	"MAWBridgeEventTransmitter",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 1e4, s = new Map();
	function u(t, n) {
		return s.has(t) ? !1 : (s.set(t, !0), r("setTimeout")(function() {
			o("MAWBridgeEventTransmitter").issuePointQueryOutsideTxn(t, r("LSMEBTaskCreationSource").EB_POINT_QUERY_RETRY_DECRYPTION_FAILURES, n);
		}, e), !0);
	}
	function c() {
		s.clear();
	}
	l.schedulePointQueryRetry = u, l.resetRetryCacheForTesting = c;
}), 98);
