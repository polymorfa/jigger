__d("MAWMediaDownloadStatusUIStateType", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		if (e == null) return !1;
		switch (e) {
			case "non_retryable_error":
			case "non_retryable_error_with_preview":
			case "retryable_error":
			case "retryable_error_with_preview": return !0;
			default: return !1;
		}
	}
	function l(e) {
		if (e == null) return !1;
		switch (e) {
			case "retryable_error":
			case "retryable_error_with_preview": return !0;
			default: return !1;
		}
	}
	i.isErrorState = e, i.isRetryableErrorState = l;
}), 66);
