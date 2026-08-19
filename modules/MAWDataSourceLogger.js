__d("MAWDataSourceLogger", ["MAWQPLLogger", "qpl"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		return e == null && (e = r("MAWQPLLogger")(r("qpl")._(25303796, "1974"))), e;
	}
	function u(e) {
		s().markQPLPoint(e, "insert_msgs_to_lsdb_dispatch_download_state_updates_start");
	}
	function c(e) {
		s().markQPLPoint(e, "insert_msgs_to_lsdb_dispatch_download_state_updates_end");
	}
	function d(e) {
		s().markQPLPoint(e, "insert_msgs_to_lsdb_call_bridge_handlers_start");
	}
	function m(e) {
		s().markQPLPoint(e, "insert_msgs_to_lsdb_call_bridge_handlers_end");
	}
	l.logDispatchDownloadStateUpdatesStart = u, l.logDispatchDownloadStateUpdatesEnd = c, l.logCallBridgeHandlersStart = d, l.logCallBridgeHandlersEnd = m;
}), 98);
