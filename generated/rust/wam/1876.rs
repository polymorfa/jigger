pub const WAM_WEBC_MESSAGE_QUERY: u32 = 1876;

#[derive(Debug, Default)]
pub struct WebcMessageQueryEvent {
    /// field 1, wire `webc_browser_network_type`
    pub webc_browser_network_type: Option<String>,
    /// field 2, wire `webc_chat_position`
    pub webc_chat_position: Option<i64>,
    /// field 3, wire `webc_message_query_type`
    pub webc_message_query_type: Option<WEBCMESSAGEQUERYDIRECTION>,
    /// field 4, wire `webc_message_count`
    pub webc_message_count: Option<i64>,
    /// field 5, wire `webc_text_message_count`
    pub webc_text_message_count: Option<i64>,
    /// field 6, wire `webc_video_message_count`
    pub webc_video_message_count: Option<i64>,
    /// field 7, wire `webc_photo_message_count`
    pub webc_photo_message_count: Option<i64>,
    /// field 9, wire `webc_query_t`
    pub webc_query_t: Option<String>,
    /// field 10, wire `webc_response_bytes`
    pub webc_response_bytes: Option<i64>,
    /// field 11, wire `webc_earliest_message_index`
    pub webc_earliest_message_index: Option<i64>,
    /// field 12, wire `webc_earliest_message_t`
    pub webc_earliest_message_t: Option<String>,
    /// field 13, wire `webc_chat_type`
    pub webc_chat_type: Option<WEBCCHATTYPE>,
    /// field 14, wire `webc_audio_message_count`
    pub webc_audio_message_count: Option<i64>,
    /// field 15, wire `webc_ptt_message_count`
    pub webc_ptt_message_count: Option<i64>,
    /// field 16, wire `webc_document_message_count`
    pub webc_document_message_count: Option<i64>,
    /// field 17, wire `webc_sticker_message_count`
    pub webc_sticker_message_count: Option<i64>,
    /// field 18, wire `webc_other_message_count`
    pub webc_other_message_count: Option<i64>,
    /// field 19, wire `webc_message_query_trigger`
    pub webc_message_query_trigger: Option<WEBCQUERYTRIGGERTYPE>,
    /// field 20, wire `webc_browser_storage_quota_bytes`
    pub webc_browser_storage_quota_bytes: Option<i64>,
    /// field 21, wire `webc_browser_storage_quota_used_bytes`
    pub webc_browser_storage_quota_used_bytes: Option<i64>,
}