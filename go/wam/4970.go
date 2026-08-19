const WamSupportAiSession = 4970 // channel: regular

type SupportAiSessionEvent struct {
	SupportAiEventType SUPPORTAIEVENTTYPE `wam:"support_ai_event_type"` // field 1
	SupportAiErrorCode int64 `wam:"support_ai_error_code"` // field 3
	SupportAiErrorMessage string `wam:"support_ai_error_message"` // field 4
	CitationCmsId string `wam:"citation_cms_id"` // field 5
}