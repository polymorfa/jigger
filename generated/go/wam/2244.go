const WamPsBufferUpload = 2244 // channel: regular

type PsBufferUploadEvent struct {
	PsBufferUploadResult PSBUFFERUPLOADRESULT `wam:"ps_buffer_upload_result"` // field 1
	PsBufferUploadT string `wam:"ps_buffer_upload_t"` // field 2
	PsBufferUploadHttpResponseCode int64 `wam:"ps_buffer_upload_http_response_code"` // field 3
	PsTokenNotReadyReason PSTOKENNOTREADYREASON `wam:"ps_token_not_ready_reason"` // field 4
	WaConnectedToChatd bool `wam:"wa_connected_to_chatd"` // field 5
	ApplicationState APPLICATIONSTATE `wam:"application_state"` // field 6
	PsUploadReason PSUPLOADREASON `wam:"ps_upload_reason"` // field 9
	PsForceUpload bool `wam:"ps_force_upload"` // field 10
	PsDitheredT int64 `wam:"ps_dithered_t"` // field 11
	IsFromWamsys bool `wam:"is_from_wamsys"` // field 12
	PsBufferSequenceNumber int64 `wam:"ps_buffer_sequence_number"` // field 13
	IsUserSampled bool `wam:"is_user_sampled"` // field 14
	IsRealtime bool `wam:"is_realtime"` // field 15
}