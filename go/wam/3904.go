const WamNonMessagePeerDataOperationResponse = 3904 // channel: regular

type NonMessagePeerDataOperationResponseEvent struct {
	PeerDataErrorCount int64 `wam:"peer_data_error_count"` // field 1
	PeerDataNotFoundCount int64 `wam:"peer_data_not_found_count"` // field 2
	PeerDataRequestSessionId string `wam:"peer_data_request_session_id"` // field 3
	PeerDataRequestType PEERDATAREQUESTTYPE `wam:"peer_data_request_type"` // field 4
	PeerDataResponseCount int64 `wam:"peer_data_response_count"` // field 5
	PeerDataSuccessProcessCount int64 `wam:"peer_data_success_process_count"` // field 6
	PeerDataSuccessResponseCount int64 `wam:"peer_data_success_response_count"` // field 7
	PeerDataResponseApplyResult PEERDATARESPONSEAPPLYRESULTTYPE `wam:"peer_data_response_apply_result"` // field 8
	PeerDataRequestErrorCode PEERDATAREQUESTERRORCODE `wam:"peer_data_request_error_code"` // field 9
}