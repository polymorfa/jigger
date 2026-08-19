__d("MAWAttachmentStateHandlerContentBase.react", [
	"FBLogger",
	"LSIntEnum",
	"MAWClientMediaStatusUtils",
	"MAWMediaDownloadStatusUIStateType",
	"react",
	"useMAWBulkMediaDownloadManualRetry",
	"useMAWMaybeAutoTriggerDownload",
	"useMAWMediaDownloadStatus"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useMemo, p = c.useRef;
	function _(e) {
		var t = e.attachmentsFromGroupToRetry, n = e.dbAttachment, a = e.descriptionForLogging, i = e.downloadStatusKeyOverride, l = e.errorComponentRenderer, u = e.errorWithBlurComponentRenderer, c = e.loadingPlaceholderRenderer, _ = e.mediaRenderQpl, f = e.shouldDisableAutoTriggerDownload, g = f === void 0 ? !1 : f, h = e.successfulComponentRenderer, y = e.xmaMediaType, C = m(function() {
			return t != null && t.length > 0 ? t : [{ attachment: n }];
		}, [n, t]), b = r("useMAWBulkMediaDownloadManualRetry")(C, _), v = r("useMAWMediaDownloadStatus")(n, _, i), S = v.status, R = v.uiState, L = p(null);
		d(function() {
			L.current === "downloaded" && R !== "downloaded" && r("FBLogger")("messenger_web_media").warn("[MAW Attachment] Download status regressed from downloaded to %s at %s", R, a), L.current = R;
		}, [R, a]), r("useMAWMaybeAutoTriggerDownload")({
			attachment: n,
			downloadStatusKeyOverride: i,
			downloadStatusV2: S != null ? o("MAWClientMediaStatusUtils").getMAWMediaStatus(S) : null,
			downloadType: "fullsizeAndPreview",
			mediaRenderQpl: _,
			shouldDisableAutoTriggerDownload: g,
			triggerUIView: "thread",
			xmaMediaType: y
		}), d(function() {
			var e = { string: {
				call_site: a,
				download_status_main_details: S == null ? void 0 : S.mainMediaStatusDetails,
				download_status_main_media: String((S == null ? void 0 : S.mainMediaStatus) != null ? o("MAWClientMediaStatusUtils").getMAWMediaDownloadStatus((s || (s = o("LSIntEnum"))).unwrapIntEnum(S.mainMediaStatus)) : S == null ? void 0 : S.mainMediaStatus),
				download_status_preview_details: S == null ? void 0 : S.previewMediaStatusDetails,
				download_status_preview_media: String((S == null ? void 0 : S.previewMediaStatus) != null ? o("MAWClientMediaStatusUtils").getMAWMediaDownloadStatus((s || (s = o("LSIntEnum"))).unwrapIntEnum(S.previewMediaStatus)) : S == null ? void 0 : S.previewMediaStatus),
				download_status_ui_state: R
			} };
			_ == null || _.addPoint("render-attachment-state-handler-content-wrapper-" + (R != null ? R : "null"), e);
		}, [
			_,
			R,
			S == null ? void 0 : S.mainMediaStatusDetails,
			S == null ? void 0 : S.mainMediaStatus,
			S == null ? void 0 : S.previewMediaStatusDetails,
			S == null ? void 0 : S.previewMediaStatus,
			a
		]), d(function() {
			switch (R) {
				case "non_retryable_error":
				case "retryable_error":
				case "non_retryable_error_with_preview":
				case "retryable_error_with_preview":
					S != null && S.mainMediaStatusDetails ? _ == null || _.endFailAfterDelay(R + ": " + (S == null ? void 0 : S.mainMediaStatusDetails)) : _ == null || _.endFailAfterDelay(R);
					break;
				case "downloaded":
				case "loading": break;
				default:
					_ == null || _.endFailAfterDelay("unknown_state", { string: { unknown_state_value: R } });
					break;
			}
		}, [
			_,
			R,
			a
		]);
		var E = o("MAWMediaDownloadStatusUIStateType").isRetryableErrorState(R);
		switch (R) {
			case "loading": return c(a + ".MAWAttachmentStateHandlerContentBase.NoMedia", !1);
			case "non_retryable_error":
			case "retryable_error": return l(E, b);
			case "non_retryable_error_with_preview":
			case "retryable_error_with_preview": return u == null ? l(E, b) : u(E, b);
			case "downloaded": return h(c);
			default: return r("FBLogger")("messenger_web_media").mustfix("[MAW Attachment Content] Unknown MediaDownloadStatusUIState %s", R), c(a + ".MAWAttachmentStateHandlerContentBase.UnknownState", !1);
		}
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
