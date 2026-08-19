const WamSearchTheWebFunnel = 5702 // channel: regular

type SearchTheWebFunnelEvent struct {
	MessageType MESSAGETYPE `wam:"message_type"` // field 1
	StwEntryPoint STWENTRYPOINT `wam:"stw_entry_point"` // field 2
	StwFormat STWFORMAT `wam:"stw_format"` // field 3
	StwInteraction STWINTERACTION `wam:"stw_interaction"` // field 4
	ImageSearchFailedErrorType IMAGESEARCHFAILEDERRORTYPE `wam:"image_search_failed_error_type"` // field 5
}