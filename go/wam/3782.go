const WamMexEvent = 3782 // channel: regular

type MexEventEvent struct {
	IsMex bool `wam:"is_mex"` // field 1
	MexEventData string `wam:"mex_event_data"` // field 2
	MexEventEndTime int64 `wam:"mex_event_end_time"` // field 3
	MexEventOperation string `wam:"mex_event_operation"` // field 7
	MexEventRequestSize int64 `wam:"mex_event_request_size"` // field 8
	MexEventResponseSize int64 `wam:"mex_event_response_size"` // field 9
	MexEventRetries int64 `wam:"mex_event_retries"` // field 10
	MexEventStartTime int64 `wam:"mex_event_start_time"` // field 11
	MexEventDurationT string `wam:"mex_event_duration_t"` // field 12
	MexEventEnvelopeResponseStatus int64 `wam:"mex_event_envelope_response_status"` // field 13
	MexEventPayloadResponseStatus int64 `wam:"mex_event_payload_response_status"` // field 14
}