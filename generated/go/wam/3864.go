const WamWebcLinkPreviewDisplay = 3864 // channel: regular

type WebcLinkPreviewDisplayEvent struct {
	WebcDisplayStatus WEBCDISPLAYSTATUSTYPE `wam:"webc_display_status"` // field 1
	DidFallbackNonHq bool `wam:"did_fallback_non_hq"` // field 2
	DidRequestHq bool `wam:"did_request_hq"` // field 3
	DidRespondHqPreview bool `wam:"did_respond_hq_preview"` // field 4
}