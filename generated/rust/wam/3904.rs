pub const WAM_NON_MESSAGE_PEER_DATA_OPERATION_RESPONSE: u32 = 3904;

#[derive(Debug, Default)]
pub struct NonMessagePeerDataOperationResponseEvent {
    /// field 1, wire `peer_data_error_count`
    pub peer_data_error_count: Option<i64>,
    /// field 2, wire `peer_data_not_found_count`
    pub peer_data_not_found_count: Option<i64>,
    /// field 3, wire `peer_data_request_session_id`
    pub peer_data_request_session_id: Option<String>,
    /// field 4, wire `peer_data_request_type`
    pub peer_data_request_type: Option<PEERDATAREQUESTTYPE>,
    /// field 5, wire `peer_data_response_count`
    pub peer_data_response_count: Option<i64>,
    /// field 6, wire `peer_data_success_process_count`
    pub peer_data_success_process_count: Option<i64>,
    /// field 7, wire `peer_data_success_response_count`
    pub peer_data_success_response_count: Option<i64>,
    /// field 8, wire `peer_data_response_apply_result`
    pub peer_data_response_apply_result: Option<PEERDATARESPONSEAPPLYRESULTTYPE>,
    /// field 9, wire `peer_data_request_error_code`
    pub peer_data_request_error_code: Option<PEERDATAREQUESTERRORCODE>,
}