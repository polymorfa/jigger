__d("MAWBridgeFulfillRestorePromisePayloadHandler", ["MAWEBRestoreTrackingUtils", "Promise"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		return t.success ? o("MAWEBRestoreTrackingUtils").markEBRestoreSuccess(t.value.traceId) : o("MAWEBRestoreTrackingUtils").markEBRestoreFail(t.error.traceId), (e || (e = n("Promise"))).resolve();
	}
	l.call = s;
}), 98);
