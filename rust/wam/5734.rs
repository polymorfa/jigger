pub const WAM_SHARE_CONTENT_USER_JOURNEY: u32 = 5734;

#[derive(Debug, Default)]
pub struct ShareContentUserJourneyEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `has_files`
    pub has_files: Option<bool>,
    /// field 3, wire `has_images`
    pub has_images: Option<bool>,
    /// field 4, wire `has_links`
    pub has_links: Option<bool>,
    /// field 5, wire `has_video`
    pub has_video: Option<bool>,
    /// field 6, wire `media_count`
    pub media_count: Option<i64>,
    /// field 7, wire `number_of_recipients`
    pub number_of_recipients: Option<i64>,
    /// field 8, wire `share_content_user_journey_action`
    pub share_content_user_journey_action: Option<SHARECONTENTUSERJOURNEYACTION>,
    /// field 9, wire `share_content_user_journey_surface_entry_point`
    pub share_content_user_journey_surface_entry_point: Option<TSSURFACE>,
    /// field 10, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 11, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 12, wire `caption_added`
    pub caption_added: Option<bool>,
    /// field 13, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 14, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 15, wire `is_forward_flow`
    pub is_forward_flow: Option<bool>,
    /// field 16, wire `message_selected_count`
    pub message_selected_count: Option<i64>,
    /// field 17, wire `has_music`
    pub has_music: Option<bool>,
    /// field 21, wire `has_caption_prefilled`
    pub has_caption_prefilled: Option<bool>,
    /// field 22, wire `has_bot_imagine_images`
    pub has_bot_imagine_images: Option<bool>,
    /// field 23, wire `prefilled_caption_removed`
    pub prefilled_caption_removed: Option<bool>,
    /// field 24, wire `share_content_user_journey_entry_point`
    pub share_content_user_journey_entry_point: Option<SHARECONTENTUSERJOURNEYENTRYPOINT>,
    /// field 25, wire `has_status_recipient`
    pub has_status_recipient: Option<bool>,
    /// field 27, wire `forward_user_journey_funnel_id`
    pub forward_user_journey_funnel_id: Option<String>,
}