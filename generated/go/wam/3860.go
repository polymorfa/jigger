const WamWebcLinkPreviewResponseHandle = 3860 // channel: regular

type WebcLinkPreviewResponseHandleEvent struct {
	IsPreviewSuccess bool `wam:"is_preview_success"` // field 2
	PreviewSessionId string `wam:"preview_session_id"` // field 3
	PreviewDurationMs int64 `wam:"preview_duration_ms"` // field 4
	DidRespondHqPreview bool `wam:"did_respond_hq_preview"` // field 5
}