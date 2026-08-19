__d("MAWFTSRestoreSyncLogger", [
	"FtsFetchEbMessagesEndFalcoEvent",
	"FtsFetchEbMessagesPageEndFalcoEvent",
	"FtsFetchEbMessagesPageStartFalcoEvent",
	"FtsFetchEbMessagesStartFalcoEvent",
	"FtsFetchOccamThreadsEndFalcoEvent",
	"FtsFetchOccamThreadsPageEndFalcoEvent",
	"FtsFetchOccamThreadsPageStartFalcoEvent",
	"FtsFetchOccamThreadsStartFalcoEvent",
	"MAWBridgeSendAndReceive"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new Set(), s = new Set(), u = null, c = !1, d = 0, m = 0;
	async function p() {
		u != null && u !== "" || (u = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchGetFTSRestoreSessionId"));
	}
	function _(t, n, o) {
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
	function f(t, n, o) {
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
	function g(t) {
		s.has(t) || !e.has(t) || r("FtsFetchEbMessagesPageEndFalcoEvent").log(function() {
			return {
				app_name: "",
				messages_count: "0",
				session_id: u != null ? u : ""
			};
		});
	}
	function h() {
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
	function y() {
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
	function C(e) {
		r("FtsFetchOccamThreadsPageEndFalcoEvent").log(function() {
			return {
				app_name: "",
				session_id: u != null ? u : "",
				thread_count: e.toString()
			};
		});
	}
	function b(e) {
		d++, e || m++;
	}
	l.initLoggingSessionId = p, l.onFetchMessagePageStart = _, l.onFetchMessagePageComplete = f, l.onFetchMessagePageFailed = g, l.onFetchThreadsComplete = h, l.onFetchThreadsPageStart = y, l.onFetchThreadsPageComplete = C, l.incrementTotalResultCount = b;
}), 98);
