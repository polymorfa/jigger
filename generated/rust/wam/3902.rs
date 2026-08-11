pub const WAM_NON_MESSAGE_PEER_DATA_MEDIA_UPLOAD: u32 = 3902;

#[derive(Debug, Default)]
pub struct NonMessagePeerDataMediaUploadEvent {
    /// field 1, wire `peer_data_error_count`
    pub peer_data_error_count: Option<i64>,
    /// field 2, wire `peer_data_existing_data_no_upload_count`
    pub peer_data_existing_data_no_upload_count: Option<i64>,
    /// field 3, wire `peer_data_not_found_count`
    pub peer_data_not_found_count: Option<i64>,
    /// field 4, wire `peer_data_request_count`
    pub peer_data_request_count: Option<i64>,
    /// field 5, wire `peer_data_request_session_id`
    pub peer_data_request_session_id: Option<String>,
    /// field 6, wire `peer_data_request_type`
    pub peer_data_request_type: Option<PEERDATAREQUESTTYPE>,
    /// field 7, wire `peer_data_success_upload_count`
    pub peer_data_success_upload_count: Option<i64>,
    /// field 8, wire `peer_data_response_result`
    pub peer_data_response_result: Option<PEERDATARESPONSERESULTTYPE>,
    /// field 9, wire `peer_data_success_inline_no_upload_count`
    pub peer_data_success_inline_no_upload_count: Option<i64>,
}