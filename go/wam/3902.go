const WamNonMessagePeerDataMediaUpload = 3902 // channel: regular

type NonMessagePeerDataMediaUploadEvent struct {
	PeerDataErrorCount int64 `wam:"peer_data_error_count"` // field 1
	PeerDataExistingDataNoUploadCount int64 `wam:"peer_data_existing_data_no_upload_count"` // field 2
	PeerDataNotFoundCount int64 `wam:"peer_data_not_found_count"` // field 3
	PeerDataRequestCount int64 `wam:"peer_data_request_count"` // field 4
	PeerDataRequestSessionId string `wam:"peer_data_request_session_id"` // field 5
	PeerDataRequestType PEERDATAREQUESTTYPE `wam:"peer_data_request_type"` // field 6
	PeerDataSuccessUploadCount int64 `wam:"peer_data_success_upload_count"` // field 7
	PeerDataResponseResult PEERDATARESPONSERESULTTYPE `wam:"peer_data_response_result"` // field 8
	PeerDataSuccessInlineNoUploadCount int64 `wam:"peer_data_success_inline_no_upload_count"` // field 9
}