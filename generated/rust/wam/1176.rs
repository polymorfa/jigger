pub const WAM_STATUS_POST: u32 = 1176;

#[derive(Debug, Default)]
pub struct StatusPostEvent {
    /// field 1, wire `status_session_id`
    pub status_session_id: Option<i64>,
    /// field 2, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 3, wire `status_post_result`
    pub status_post_result: Option<STATUSPOSTRESULT>,
    /// field 4, wire `status_post_origin`
    pub status_post_origin: Option<STATUSPOSTORIGIN>,
    /// field 5, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 6, wire `default_status_privacy_setting`
    pub default_status_privacy_setting: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 7, wire `per_post_status_privacy_setting`
    pub per_post_status_privacy_setting: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 8, wire `status_audience_selector_clicked`
    pub status_audience_selector_clicked: Option<bool>,
    /// field 9, wire `status_audience_selector_updated`
    pub status_audience_selector_updated: Option<bool>,
    /// field 10, wire `status_mention_count`
    pub status_mention_count: Option<i64>,
    /// field 11, wire `is_result_terminal`
    pub is_result_terminal: Option<bool>,
    /// field 12, wire `message_send_t`
    pub message_send_t: Option<String>,
    /// field 13, wire `is_reshare`
    pub is_reshare: Option<bool>,
    /// field 14, wire `status_contains_music`
    pub status_contains_music: Option<bool>,
    /// field 15, wire `editable`
    pub editable: Option<bool>,
    /// field 16, wire `external_interactables`
    pub external_interactables: Option<i64>,
    /// field 17, wire `external_package_name`
    pub external_package_name: Option<String>,
    /// field 18, wire `share_type`
    pub share_type: Option<String>,
    /// field 19, wire `contains_prompt`
    pub contains_prompt: Option<bool>,
    /// field 20, wire `is_prompt_response`
    pub is_prompt_response: Option<bool>,
    /// field 21, wire `message_key_hash`
    pub message_key_hash: Option<String>,
    /// field 22, wire `extra_stickers_data`
    pub extra_stickers_data: Option<String>,
    /// field 23, wire `has_ar_filters`
    pub has_ar_filters: Option<bool>,
    /// field 24, wire `has_caption`
    pub has_caption: Option<bool>,
    /// field 25, wire `has_drawings`
    pub has_drawings: Option<bool>,
    /// field 26, wire `has_filters`
    pub has_filters: Option<bool>,
    /// field 27, wire `is_video_muted`
    pub is_video_muted: Option<bool>,
    /// field 28, wire `is_video_trimmed`
    pub is_video_trimmed: Option<bool>,
    /// field 29, wire `status_id`
    pub status_id: Option<String>,
    /// field 30, wire `status_type`
    pub status_type: Option<STATUSTYPE>,
    /// field 31, wire `stickers_count`
    pub stickers_count: Option<i64>,
    /// field 32, wire `text_status_color_changed`
    pub text_status_color_changed: Option<bool>,
    /// field 33, wire `text_status_font_changed`
    pub text_status_font_changed: Option<bool>,
    /// field 34, wire `text_tool_count`
    pub text_tool_count: Option<i64>,
    /// field 35, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 36, wire `is_cropped`
    pub is_cropped: Option<bool>,
    /// field 37, wire `is_rotated`
    pub is_rotated: Option<bool>,
    /// field 38, wire `is_video_manually_trimmed`
    pub is_video_manually_trimmed: Option<bool>,
    /// field 39, wire `status_audience_size`
    pub status_audience_size: Option<i64>,
    /// field 40, wire `is_same_song_from_attribution`
    pub is_same_song_from_attribution: Option<bool>,
    /// field 41, wire `is_from_layouts`
    pub is_from_layouts: Option<bool>,
    /// field 42, wire `url_has_additional_text`
    pub url_has_additional_text: Option<bool>,
    /// field 43, wire `is_media_ai_imagine_generated`
    pub is_media_ai_imagine_generated: Option<bool>,
    /// field 44, wire `dual_upload_paired_media_id`
    pub dual_upload_paired_media_id: Option<String>,
    /// field 45, wire `paired_media_type`
    pub paired_media_type: Option<PAIREDMEDIATYPE>,
    /// field 46, wire `status_paired_media_quality`
    pub status_paired_media_quality: Option<STATUSPAIREDMEDIAQUALITY>,
    /// field 47, wire `is_resharable`
    pub is_resharable: Option<bool>,
    /// field 48, wire `group_mention_count`
    pub group_mention_count: Option<String>,
    /// field 49, wire `individual_mention_count`
    pub individual_mention_count: Option<i64>,
    /// field 51, wire `is_forwardable`
    pub is_forwardable: Option<bool>,
    /// field 52, wire `is_forwarded`
    pub is_forwarded: Option<bool>,
    /// field 53, wire `status_category`
    pub status_category: Option<STATUSCATEGORY>,
    /// field 54, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
    /// field 55, wire `is_draft`
    pub is_draft: Option<bool>,
    /// field 56, wire `status_audience_selected`
    pub status_audience_selected: Option<i64>,
    /// field 57, wire `channel_status_id`
    pub channel_status_id: Option<i64>,
    /// field 58, wire `cid`
    pub cid: Option<String>,
    /// field 59, wire `is_batched`
    pub is_batched: Option<bool>,
    /// field 60, wire `status_part_code`
    pub status_part_code: Option<String>,
    /// field 61, wire `error_metadata`
    pub error_metadata: Option<String>,
    /// field 62, wire `status_post_failure_stage`
    pub status_post_failure_stage: Option<STATUSPOSTFAILURESTAGE>,
}