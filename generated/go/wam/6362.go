const WamThreadInteractionDataVoip = 6362 // channel: regular

type ThreadInteractionDataVoipEvent struct {
	CallOffersReceived int64 `wam:"call_offers_received"` // field 1
	CallOffersSent int64 `wam:"call_offers_sent"` // field 2
	CallsResultBusy int64 `wam:"calls_result_busy"` // field 3
	CallsResultCancelled int64 `wam:"calls_result_cancelled"` // field 4
	CallsResultConnected int64 `wam:"calls_result_connected"` // field 5
	CallsResultError int64 `wam:"calls_result_error"` // field 6
	CallsResultMissed int64 `wam:"calls_result_missed"` // field 7
	CallsResultRejected int64 `wam:"calls_result_rejected"` // field 8
	ThreadDs string `wam:"thread_ds"` // field 9
	TotalCallDuration int64 `wam:"total_call_duration"` // field 11
	VideoCallsOffered int64 `wam:"video_calls_offered"` // field 12
	VoiceCallsOffered int64 `wam:"voice_calls_offered"` // field 13
	ThreadId string `wam:"thread_id"` // field 14
	ThreadIdByLid string `wam:"thread_id_by_lid"` // field 15
	ThreadCreationDate string `wam:"thread_creation_date"` // field 16
}