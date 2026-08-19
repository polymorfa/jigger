__d("MAWFTSRestoreSyncLogger", [
	"FtsFetchEbMessagesEndFalcoEvent",
	"FtsFetchEbMessagesPageEndFalcoEvent",
	"FtsFetchEbMessagesPageStartFalcoEvent",
	"FtsFetchEbMessagesStartFalcoEvent",
	"FtsFetchOccamThreadsEndFalcoEvent",
	"FtsFetchOccamThreadsPageEndFalcoEvent",
	"FtsFetchOccamThreadsPageStartFalcoEvent",
	"FtsFetchOccamThreadsStartFalcoEvent",
	"MAWBridgeSendAndReceive",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new Set(), s = new Set(), u = null, c = !1, d = 0, m = 0;
	function p() {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			u != null && u !== "" || (u = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchGetFTSRestoreSessionId"));
		}), _.apply(this, arguments);
	}
	function f(t, n, o) {
		if (!n || s.has(t)) {
			s.add(t);
			return;
		}
		e.has(t) || (e.add(t), o && r("FtsFetchEbMessagesStartFalcoEvent").log(function() {
			return {
				app_name: "",
				session_id: u != null ? u : ""
			};
		})), r("FtsFetchEbMessagesPageStartFalcoEvent").log(function() {
			return {
				app_name: "",
				session_id: u != null ? u : ""
			};
		});
	}
	function g(t, n, o) {
		s.has(t) || !e.has(t) || (r("FtsFetchEbMessagesPageEndFalcoEvent").log(function() {
			return {
				app_name: "",
				messages_count: n.toString(),
				session_id: u != null ? u : ""
			};
		}), o || (s.add(t), r("FtsFetchEbMessagesEndFalcoEvent").log(function() {
			return {
				app_name: "",
				duration: 0,
				session_id: u != null ? u : "",
				total_messages_count: "0"
			};
		})));
	}
	function h(t) {
		s.has(t) || !e.has(t) || r("FtsFetchEbMessagesPageEndFalcoEvent").log(function() {
			return {
				app_name: "",
				messages_count: "0",
				session_id: u != null ? u : ""
			};
		});
	}
	function y() {
		r("FtsFetchOccamThreadsEndFalcoEvent").log(function() {
			return {
				app_name: "",
				duration: 0,
				remaining_threads_count: m.toString(),
				session_id: u != null ? u : "",
				total_threads_count: d.toString()
			};
		});
	}
	function C() {
		c || (c = !0, r("FtsFetchOccamThreadsStartFalcoEvent").log(function() {
			return {
				app_name: "",
				session_id: u != null ? u : ""
			};
		})), r("FtsFetchOccamThreadsPageStartFalcoEvent").log(function() {
			return {
				app_name: "",
				session_id: u != null ? u : ""
			};
		});
	}
	function b(e) {
		r("FtsFetchOccamThreadsPageEndFalcoEvent").log(function() {
			return {
				app_name: "",
				session_id: u != null ? u : "",
				thread_count: e.toString()
			};
		});
	}
	function v(e) {
		d++, e || m++;
	}
	l.initLoggingSessionId = p, l.onFetchMessagePageStart = f, l.onFetchMessagePageComplete = g, l.onFetchMessagePageFailed = h, l.onFetchThreadsComplete = y, l.onFetchThreadsPageStart = C, l.onFetchThreadsPageComplete = b, l.incrementTotalResultCount = v;
}), 98);
