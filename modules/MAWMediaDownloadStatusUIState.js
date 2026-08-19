__d("MAWMediaDownloadStatusUIState", [
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSMediaUrlUtils",
	"MAWClientMediaStatusUtils",
	"MAWMediaDownloadStatus",
	"MessagingAttachmentType",
	"WATagsLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("WATagsLogger").TAGS(["MediaDownload"]), d = 5;
	function m(t, n, a) {
		if ((a == null ? void 0 : a.receiverFetchId) != null && o("LSMediaUrlUtils").hasValidReceiverFetchPreviewUrl(a.previewUrl, a.previewUrlExpirationTimestampMs)) return "downloaded";
		var i = n >= d, l = t != null ? t : {}, s = l.mainMediaStatus, u = l.previewMediaStatus, m = t == null || s === r("MAWMediaDownloadStatus").DOWNLOADING || s === r("MAWMediaDownloadStatus").MISSING_FILE || s === r("MAWMediaDownloadStatus").RETRYING || s === r("MAWMediaDownloadStatus").AUTOMATICALLY_RETRYABLE_TIMEOUT_FAILURE, p = s === r("MAWMediaDownloadStatus").SUCCESS, f = s === r("MAWMediaDownloadStatus").MANUAL_RETRYABLE_FAILURE, g = f && i, h = s === r("MAWMediaDownloadStatus").NOT_MANUAL_RETRYABLE_FAILURE, y = t == null || u === r("MAWMediaDownloadStatus").RETRYING || u === r("MAWMediaDownloadStatus").DOWNLOADING || u === r("MAWMediaDownloadStatus").MISSING_FILE || u === void 0 && m, C = u === r("MAWMediaDownloadStatus").SUCCESS, b = u === r("MAWMediaDownloadStatus").MANUAL_RETRYABLE_FAILURE || u === void 0 && f, v = b && i, S = u === r("MAWMediaDownloadStatus").NOT_MANUAL_RETRYABLE_FAILURE || u === void 0 && h, R = a != null && _(a);
		if (R && !y) {
			if (C || p) return h || g ? "non_retryable_error_with_preview" : f ? "retryable_error_with_preview" : "downloaded";
			if (S || v) return "non_retryable_error";
			if (b) return "retryable_error";
		} else {
			if (p) return "downloaded";
			if (h || g) return "non_retryable_error";
			if (f) return "retryable_error";
			if (m) return "loading";
		}
		return c.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["useMAWMediaDownloadStatusUIState: unexpected download status"]))), "loading";
	}
	function p(e, t, n) {
		var a, i = (n == null ? void 0 : n.transportKey) === "FBBroker" || (n == null ? void 0 : n.transportKey) === "FBLegacyBroker", l = !i && n != null && (s || (s = o("I64"))).to_int32(n.authorityLevel) === r("LSAuthorityLevel").OPTIMISTIC, c = l && t != null ? {
			id: t,
			mainMediaStatus: (u || (u = o("LSIntEnum"))).ofNumber(1),
			mainMediaStatusDetails: "optimistic_secure_upload",
			previewMediaStatus: (u || (u = o("LSIntEnum"))).ofNumber(1),
			previewMediaStatusDetails: "optimistic_secure_upload"
		} : e, d = c != null ? o("MAWClientMediaStatusUtils").getMAWMediaStatus(c) : null, p = m(d, (s || (s = o("I64"))).to_int32((a = c == null ? void 0 : c.downloadRetryCount) != null ? a : (s || (s = o("I64"))).zero), n);
		return {
			mawMediaStatus: d,
			nonDebouncedUIState: p,
			status: c
		};
	}
	function _(e) {
		if (e == null) return !1;
		var t = e.attachmentType;
		return (s || (s = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)) || (s || (s = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO));
	}
	l.getNonDebouncedUIStateAndStatus = p;
}), 98);
