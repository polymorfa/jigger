const WamNonMessagePeerDataRequest = 3906 // channel: regular

type NonMessagePeerDataRequestEvent struct {
	PeerDataRequestCount int64 `wam:"peer_data_request_count"` // field 1
	PeerDataRequestSessionId string `wam:"peer_data_request_session_id"` // field 2
	PeerDataRequestType PEERDATAREQUESTTYPE `wam:"peer_data_request_type"` // field 3
	PeerDataRequestErrorCode PEERDATAREQUESTERRORCODE `wam:"peer_data_request_error_code"` // field 4
}