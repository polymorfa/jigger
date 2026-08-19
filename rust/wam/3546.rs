pub const WAM_STATUS_POSTER_ACTIONS: u32 = 3546;

#[derive(Debug, Default)]
pub struct StatusPosterActionsEvent {
    /// field 1, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 2, wire `status_audience_size`
    pub status_audience_size: Option<i64>,
    /// field 3, wire `status_content_source`
    pub status_content_source: Option<STATUSCONTENTSOURCE>,
    /// field 4, wire `status_content_type`
    pub status_content_type: Option<STATUSCONTENTTYPE>,
    /// field 5, wire `status_creation_entry_point`
    pub status_creation_entry_point: Option<STATUSCREATIONENTRYPOINT>,
    /// field 7, wire `status_event_type`
    pub status_event_type: Option<STATUSEVENTTYPE>,
    /// field 8, wire `status_post_failure_reason`
    pub status_post_failure_reason: Option<String>,
    /// field 10, wire `status_privacy_type`
    pub status_privacy_type: Option<STATUSPRIVACYTYPE>,
    /// field 11, wire `status_session_id`
    pub status_session_id: Option<i64>,
    /// field 12, wire `status_id`
    pub status_id: Option<String>,
    /// field 13, wire `status_duration`
    pub status_duration: Option<i64>,
    /// field 14, wire `editable`
    pub editable: Option<bool>,
    /// field 15, wire `external_interactables`
    pub external_interactables: Option<i64>,
    /// field 16, wire `external_package_name`
    pub external_package_name: Option<String>,
    /// field 17, wire `share_type`
    pub share_type: Option<String>,
    /// field 18, wire `sticker_type`
    pub sticker_type: Option<STICKERTYPE>,
    /// field 19, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 20, wire `status_posting_session_id`
    pub status_posting_session_id: Option<i64>,
    /// field 21, wire `selected_layout_config_id`
    pub selected_layout_config_id: Option<SELECTEDLAYOUTCONFIGID>,
    /// field 22, wire `selected_media_count`
    pub selected_media_count: Option<i64>,
    /// field 23, wire `status_media_picker_format_type`
    pub status_media_picker_format_type: Option<STATUSMEDIAPICKERFORMATTYPE>,
    /// field 24, wire `paired_media_type`
    pub paired_media_type: Option<PAIREDMEDIATYPE>,
    /// field 25, wire `status_paired_media_quality`
    pub status_paired_media_quality: Option<STATUSPAIREDMEDIAQUALITY>,
    /// field 26, wire `default_trimmed_video_duration`
    pub default_trimmed_video_duration: Option<i64>,
    /// field 27, wire `original_video_duration`
    pub original_video_duration: Option<i64>,
    /// field 28, wire `is_favoured`
    pub is_favoured: Option<bool>,
    /// field 29, wire `media_index`
    pub media_index: Option<i64>,
    /// field 30, wire `status_category`
    pub status_category: Option<STATUSCATEGORY>,
    /// field 31, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
    /// field 32, wire `can_save_as_draft`
    pub can_save_as_draft: Option<bool>,
    /// field 33, wire `has_draft_available`
    pub has_draft_available: Option<bool>,
    /// field 34, wire `card_type`
    pub card_type: Option<ENGAGEMENTCARDTYPE>,
    /// field 35, wire `card_variant`
    pub card_variant: Option<ENGAGEMENTCARDVARIANT>,
    /// field 36, wire `cid`
    pub cid: Option<String>,
    /// field 37, wire `is_batched_post`
    pub is_batched_post: Option<bool>,
    /// field 38, wire `status_part_code`
    pub status_part_code: Option<String>,
}