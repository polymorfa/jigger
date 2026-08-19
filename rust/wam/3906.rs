pub const WAM_NON_MESSAGE_PEER_DATA_REQUEST: u32 = 3906;

#[derive(Debug, Default)]
pub struct NonMessagePeerDataRequestEvent {
    /// field 1, wire `peer_data_request_count`
    pub peer_data_request_count: Option<i64>,
    /// field 2, wire `peer_data_request_session_id`
    pub peer_data_request_session_id: Option<String>,
    /// field 3, wire `peer_data_request_type`
    pub peer_data_request_type: Option<PEERDATAREQUESTTYPE>,
    /// field 4, wire `peer_data_request_error_code`
    pub peer_data_request_error_code: Option<PEERDATAREQUESTERRORCODE>,
}