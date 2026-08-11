pub const WAM_WEBC_MEDIA_RMR: u32 = 1906;

#[derive(Debug, Default)]
pub struct WebcMediaRmrEvent {
    /// field 1, wire `webc_chat_position`
    pub webc_chat_position: Option<i64>,
    /// field 2, wire `webc_browser_network_type`
    pub webc_browser_network_type: Option<String>,
    /// field 3, wire `webc_message_index`
    pub webc_message_index: Option<i64>,
    /// field 5, wire `webc_message_t`
    pub webc_message_t: Option<String>,
    /// field 6, wire `webc_media_rmr_t`
    pub webc_media_rmr_t: Option<String>,
    /// field 7, wire `webc_media_size`
    pub webc_media_size: Option<i64>,
    /// field 8, wire `webc_media_rmr_error`
    pub webc_media_rmr_error: Option<bool>,
    /// field 9, wire `webc_chat_type`
    pub webc_chat_type: Option<WEBCCHATTYPE>,
    /// field 10, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 11, wire `webc_browser_storage_quota_bytes`
    pub webc_browser_storage_quota_bytes: Option<i64>,
    /// field 12, wire `webc_browser_storage_quota_used_bytes`
    pub webc_browser_storage_quota_used_bytes: Option<i64>,
    /// field 13, wire `webc_rmr_status_code`
    pub webc_rmr_status_code: Option<i64>,
    /// field 14, wire `webc_rmr_reason`
    pub webc_rmr_reason: Option<WEBCRMRREASONCODE>,
}