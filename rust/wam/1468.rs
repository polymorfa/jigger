pub const WAM_QUICK_REPLY: u32 = 1468;

#[derive(Debug, Default)]
pub struct QuickReplyEvent {
    /// field 1, wire `quick_reply_action`
    pub quick_reply_action: Option<QUICKREPLYACTION>,
    /// field 2, wire `quick_reply_count`
    pub quick_reply_count: Option<i64>,
    /// field 3, wire `quick_reply_keyword_count`
    pub quick_reply_keyword_count: Option<i64>,
    /// field 4, wire `quick_reply_keyword_matched`
    pub quick_reply_keyword_matched: Option<bool>,
    /// field 5, wire `attachment_image_count`
    pub attachment_image_count: Option<i64>,
    /// field 6, wire `attachment_video_count`
    pub attachment_video_count: Option<i64>,
    /// field 7, wire `attachment_gif_count`
    pub attachment_gif_count: Option<i64>,
    /// field 8, wire `quick_reply_transcode_result`
    pub quick_reply_transcode_result: Option<QUICKREPLYTRANSCODERESULT>,
    /// field 9, wire `quick_reply_origin`
    pub quick_reply_origin: Option<QUICKREPLYORIGIN>,
    /// field 10, wire `is_smart_default`
    pub is_smart_default: Option<bool>,
    /// field 11, wire `quick_reply_entry_point`
    pub quick_reply_entry_point: Option<QUICKREPLYENTRYPOINT>,
    /// field 12, wire `label_thread_id`
    pub label_thread_id: Option<String>,
    /// field 13, wire `thread_entry_point`
    pub thread_entry_point: Option<String>,
    /// field 14, wire `thread_creation_date`
    pub thread_creation_date: Option<String>,
    /// field 15, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 16, wire `last_message_direction`
    pub last_message_direction: Option<LASTMESSAGEDIRECTION>,
    /// field 17, wire `message_depth`
    pub message_depth: Option<i64>,
    /// field 19, wire `quick_reply_type`
    pub quick_reply_type: Option<QUICKREPLYTYPE>,
    /// field 20, wire `list_ids`
    pub list_ids: Option<String>,
}