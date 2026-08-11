pub const WAM_CHANNEL_MESSAGE_VISIBILITY_TRACKING: u32 = 5998;

#[derive(Debug, Default)]
pub struct ChannelMessageVisibilityTrackingEvent {
    /// field 1, wire `cid`
    pub cid: Option<String>,
    /// field 4, wire `post_id`
    pub post_id: Option<String>,
    /// field 6, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 7, wire `is_vpv_impression`
    pub is_vpv_impression: Option<bool>,
    /// field 8, wire `is_starred_post`
    pub is_starred_post: Option<bool>,
    /// field 9, wire `contains_music`
    pub contains_music: Option<bool>,
    /// field 10, wire `channel_user_type`
    pub channel_user_type: Option<CHANNELUSERTYPE>,
    /// field 11, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 12, wire `is_original_author`
    pub is_original_author: Option<bool>,
    /// field 13, wire `ai_provenance_label_enabled`
    pub ai_provenance_label_enabled: Option<bool>,
    /// field 14, wire `ai_provenance_label_shown`
    pub ai_provenance_label_shown: Option<bool>,
}