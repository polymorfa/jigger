pub const WAM_PS_BUFFER_UPLOAD: u32 = 2244;

#[derive(Debug, Default)]
pub struct PsBufferUploadEvent {
    /// field 1, wire `ps_buffer_upload_result`
    pub ps_buffer_upload_result: Option<PSBUFFERUPLOADRESULT>,
    /// field 2, wire `ps_buffer_upload_t`
    pub ps_buffer_upload_t: Option<String>,
    /// field 3, wire `ps_buffer_upload_http_response_code`
    pub ps_buffer_upload_http_response_code: Option<i64>,
    /// field 4, wire `ps_token_not_ready_reason`
    pub ps_token_not_ready_reason: Option<PSTOKENNOTREADYREASON>,
    /// field 5, wire `wa_connected_to_chatd`
    pub wa_connected_to_chatd: Option<bool>,
    /// field 6, wire `application_state`
    pub application_state: Option<APPLICATIONSTATE>,
    /// field 9, wire `ps_upload_reason`
    pub ps_upload_reason: Option<PSUPLOADREASON>,
    /// field 10, wire `ps_force_upload`
    pub ps_force_upload: Option<bool>,
    /// field 11, wire `ps_dithered_t`
    pub ps_dithered_t: Option<i64>,
    /// field 12, wire `is_from_wamsys`
    pub is_from_wamsys: Option<bool>,
    /// field 13, wire `ps_buffer_sequence_number`
    pub ps_buffer_sequence_number: Option<i64>,
    /// field 14, wire `is_user_sampled`
    pub is_user_sampled: Option<bool>,
    /// field 15, wire `is_realtime`
    pub is_realtime: Option<bool>,
}