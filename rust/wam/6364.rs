pub const WAM_STATUS_POST_IMPRESSION: u32 = 6364;

#[derive(Debug, Default)]
pub struct StatusPostImpressionEvent {
    /// field 1, wire `external_source_domain_type`
    pub external_source_domain_type: Option<INLINEVIDEOTYPE>,
    /// field 2, wire `is_first_view`
    pub is_first_view: Option<bool>,
    /// field 3, wire `is_poster_biz`
    pub is_poster_biz: Option<bool>,
    /// field 4, wire `is_sub_impression`
    pub is_sub_impression: Option<bool>,
    /// field 5, wire `is_viewed_in_landscape`
    pub is_viewed_in_landscape: Option<bool>,
    /// field 6, wire `music_blocked`
    pub music_blocked: Option<bool>,
    /// field 7, wire `psa_campaign_id`
    pub psa_campaign_id: Option<String>,
    /// field 8, wire `psa_link_available`
    pub psa_link_available: Option<bool>,
    /// field 9, wire `status_contains_music`
    pub status_contains_music: Option<bool>,
    /// field 10, wire `status_content_type`
    pub status_content_type: Option<STATUSCONTENTTYPE>,
    /// field 11, wire `status_id`
    pub status_id: Option<String>,
    /// field 12, wire `status_load_time`
    pub status_load_time: Option<String>,
    /// field 13, wire `status_media_type`
    pub status_media_type: Option<MEDIATYPE>,
    /// field 15, wire `status_pog_index`
    pub status_pog_index: Option<i64>,
    /// field 16, wire `status_post_index`
    pub status_post_index: Option<i64>,
    /// field 17, wire `status_post_playback_duration`
    pub status_post_playback_duration: Option<String>,
    /// field 18, wire `status_view_entrypoint`
    pub status_view_entrypoint: Option<STATUSROWSECTION>,
    /// field 19, wire `status_view_time`
    pub status_view_time: Option<String>,
    /// field 20, wire `status_viewer_session_id`
    pub status_viewer_session_id: Option<i64>,
    /// field 21, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 22, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
    /// field 23, wire `url_status_type`
    pub url_status_type: Option<URLSTATUSTYPE>,
    /// field 24, wire `is_self_view`
    pub is_self_view: Option<bool>,
    /// field 25, wire `status_category`
    pub status_category: Option<STATUSCATEGORY>,
    /// field 26, wire `status_poster_hash_id`
    pub status_poster_hash_id: Option<String>,
    /// field 28, wire `status_contains_question`
    pub status_contains_question: Option<bool>,
    /// field 29, wire `entry_method`
    pub entry_method: Option<STATUSVIEWENTRYMETHOD>,
    /// field 30, wire `is_successful_view`
    pub is_successful_view: Option<bool>,
    /// field 31, wire `status_item_view_result`
    pub status_item_view_result: Option<STATUSITEMVIEWRESULT>,
    /// field 32, wire `view_sequence_index`
    pub view_sequence_index: Option<i64>,
    /// field 33, wire `is_subscribed`
    pub is_subscribed: Option<bool>,
    /// field 34, wire `status_contains_reaction_sticker`
    pub status_contains_reaction_sticker: Option<bool>,
    /// field 35, wire `status_poster_contact_type`
    pub status_poster_contact_type: Option<STATUSPOSTERCONTACTTYPE>,
    /// field 37, wire `pog_view_sequence_index`
    pub pog_view_sequence_index: Option<i64>,
    /// field 38, wire `status_attribution_types`
    pub status_attribution_types: Option<String>,
    /// field 39, wire `status_group_id`
    pub status_group_id: Option<String>,
    /// field 40, wire `status_poster_id`
    pub status_poster_id: Option<String>,
    /// field 41, wire `group_status_size_bucket`
    pub group_status_size_bucket: Option<GROUPSTATUSSIZEBUCKET>,
    /// field 42, wire `is_close_sharing_post`
    pub is_close_sharing_post: Option<bool>,
    /// field 43, wire `is_last_status`
    pub is_last_status: Option<bool>,
    /// field 44, wire `status_view_exit_method`
    pub status_view_exit_method: Option<STATUSVIEWEXITMETHOD>,
    /// field 45, wire `is_engagement_card`
    pub is_engagement_card: Option<bool>,
    /// field 46, wire `channel_status_id`
    pub channel_status_id: Option<i64>,
    /// field 47, wire `channel_user_type`
    pub channel_user_type: Option<CHANNELUSERTYPE>,
    /// field 48, wire `cid`
    pub cid: Option<String>,
    /// field 49, wire `is_resharable`
    pub is_resharable: Option<bool>,
    /// field 50, wire `is_reshare`
    pub is_reshare: Option<bool>,
    /// field 51, wire `paired_media_type`
    pub paired_media_type: Option<PAIREDMEDIATYPE>,
    /// field 52, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 53, wire `is_group_mentioned`
    pub is_group_mentioned: Option<bool>,
    /// field 54, wire `ai_provenance_label_enabled`
    pub ai_provenance_label_enabled: Option<bool>,
    /// field 55, wire `ai_provenance_label_shown`
    pub ai_provenance_label_shown: Option<bool>,
    /// field 56, wire `status_placeholder_type`
    pub status_placeholder_type: Option<STATUSPLACEHOLDERTYPE>,
}