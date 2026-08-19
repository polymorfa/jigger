__d("MAWReceiverFetchQPLLogger", [
	"I64",
	"MAWLoggerUtils",
	"QPLUserFlow",
	"QuickPerformanceLogger",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 6e4, c = r("qpl")._(973799425, "190"), d = "error_message", m = {
		PREVIEW_FETCH_START: "preview_fetch_start",
		PREVIEW_FETCH_TASK_COMPLETED: "preview_fetch_task_completed",
		RECEIVER_FETCH_XMA_IN_VIEW: "receiver_fetch_xma_in_view"
	}, p = {
		ERROR_PARSING_XMA_DATACLASS_CONTENT: "error_parsing_xma_dataclass_content",
		EXISTING_ATTACHMENT_IS_NULL: "existing_attachment_is_null",
		EXISTING_MESSAGE_IS_NULL: "existing_message_is_null",
		RECEIVER_FECH_PARAMS_IS_NULL: "receiver_fech_params_is_null",
		RECEIVER_FETCH_TASK_FAILURE: "receiver_fetch_task_failure",
		TYPENAME_IS_NOT_XMA_SINGLE_CONTENT: "typename_is_not_xma_single_content",
		XMA_DATACLASS_IS_NULL: "xma_dataclass_is_null"
	};
	function _(e, t) {
		var n = o("MAWLoggerUtils").getInstanceKeyFromId(e);
		n != null && r("QPLUserFlow").addPoint(c, t, { instanceKey: n });
	}
	function f(e, t) {
		var n = o("MAWLoggerUtils").getInstanceKeyFromId(e);
		n != null && r("QPLUserFlow").addAnnotations(c, t, { instanceKey: n });
	}
	function g(e) {
		var t = o("MAWLoggerUtils").getInstanceKeyFromId(e);
		(s || (s = r("QuickPerformanceLogger"))).isMarkerOn(c, t) || (r("QPLUserFlow").start(c, {
			instanceKey: t,
			timeoutInMs: u
		}), _(e, m.RECEIVER_FETCH_XMA_IN_VIEW));
	}
	function h(e) {
		_(e, m.PREVIEW_FETCH_START);
	}
	function y(e) {
		var t = o("MAWLoggerUtils").getInstanceKeyFromId(e);
		_(e, m.PREVIEW_FETCH_TASK_COMPLETED), r("QPLUserFlow").endSuccess(c, { instanceKey: t });
	}
	function C(t, n, a, i) {
		var l, s = p[n], u = o("MAWLoggerUtils").getInstanceKeyFromId(t);
		r("QPLUserFlow").endFailure(c, s, {
			annotations: {
				int: i != null ? { error_code: (e || (e = o("I64"))).to_int32(i) } : {},
				string: a != null ? (l = {}, l[d] = a, l) : {}
			},
			instanceKey: u
		});
	}
	l.logReceiverFetchPoint = _, l.logReceiverFetchAnnotation = f, l.logReceiverFetchXMAStartQPL = g, l.logPreviewFetchStart = h, l.logSuccess = y, l.logFailure = C;
}), 98);
