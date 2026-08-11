pub const WAM_STATUS_REPLY: u32 = 1180;

#[derive(Debug, Default)]
pub struct StatusReplyEvent {
    /// field 1, wire `status_session_id`
    pub status_session_id: Option<i64>,
    /// field 2, wire `status_reply_result`
    pub status_reply_result: Option<STATUSREPLYRESULT>,
    /// field 3, wire `status_reply_message_type`
    pub status_reply_message_type: Option<STATUSREPLYMESSAGETYPE>,
    /// field 4, wire `is_poster_biz`
    pub is_poster_biz: Option<bool>,
    /// field 6, wire `is_poster_in_address_book`
    pub is_poster_in_address_book: Option<bool>,
    /// field 7, wire `is_mentioned`
    pub is_mentioned: Option<bool>,
    /// field 8, wire `status_content_type`
    pub status_content_type: Option<STATUSCONTENTTYPE>,
    /// field 9, wire `is_reply_bar_below_canvas`
    pub is_reply_bar_below_canvas: Option<bool>,
    /// field 10, wire `is_reply_bar_over_media`
    pub is_reply_bar_over_media: Option<bool>,
    /// field 11, wire `media_height`
    pub media_height: Option<i64>,
    /// field 12, wire `media_width`
    pub media_width: Option<i64>,
    /// field 13, wire `reply_entry_method`
    pub reply_entry_method: Option<REPLYENTRYMETHOD>,
    /// field 14, wire `reply_exit_method`
    pub reply_exit_method: Option<REPLYEXITMETHOD>,
    /// field 15, wire `post_contained_prompt`
    pub post_contained_prompt: Option<bool>,
    /// field 16, wire `is_recent_quick_reply_used`
    pub is_recent_quick_reply_used: Option<bool>,
    /// field 17, wire `status_category`
    pub status_category: Option<STATUSCATEGORY>,
    /// field 19, wire `is_subscribed`
    pub is_subscribed: Option<bool>,
    /// field 20, wire `message_send_result`
    pub message_send_result: Option<MESSAGESENDRESULTTYPE>,
    /// field 21, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 22, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
    /// field 23, wire `status_id`
    pub status_id: Option<String>,
    /// field 24, wire `status_viewer_session_id`
    pub status_viewer_session_id: Option<i64>,
    /// field 25, wire `status_poster_contact_type`
    pub status_poster_contact_type: Option<STATUSPOSTERCONTACTTYPE>,
    /// field 26, wire `quick_reply_source`
    pub quick_reply_source: Option<QUICKREPLYSOURCE>,
}