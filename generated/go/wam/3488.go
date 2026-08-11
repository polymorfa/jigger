const WamKeepInChatPerf = 3488 // channel: regular

type KeepInChatPerfEvent struct {
	ChatEphemeralityDuration int64 `wam:"chat_ephemerality_duration"` // field 1
	KicErrorCode KICERRORCODETYPE `wam:"kic_error_code"` // field 2
	KicMessageEphemeralityDuration int64 `wam:"kic_message_ephemerality_duration"` // field 3
	KicRequestType KICREQUESTTYPETYPE `wam:"kic_request_type"` // field 4
	RequestSendTime int64 `wam:"request_send_time"` // field 5
	Response RESPONSETYPE `wam:"response"` // field 6
	ThreadId string `wam:"thread_id"` // field 7
}