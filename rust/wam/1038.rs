pub const WAM_MEDIA_PICKER: u32 = 1038;

#[derive(Debug, Default)]
pub struct MediaPickerEvent {
    /// field 1, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 2, wire `media_picker_sent`
    pub media_picker_sent: Option<i64>,
    /// field 3, wire `media_picker_deleted`
    pub media_picker_deleted: Option<i64>,
    /// field 4, wire `media_picker_changed`
    pub media_picker_changed: Option<i64>,
    /// field 5, wire `media_picker_sent_unchanged`
    pub media_picker_sent_unchanged: Option<i64>,
    /// field 10, wire `media_picker_cropped_rotated`
    pub media_picker_cropped_rotated: Option<i64>,
    /// field 11, wire `media_picker_drawing`
    pub media_picker_drawing: Option<i64>,
    /// field 12, wire `media_picker_stickers`
    pub media_picker_stickers: Option<i64>,
    /// field 13, wire `media_picker_text`
    pub media_picker_text: Option<i64>,
    /// field 14, wire `media_picker_origin`
    pub media_picker_origin: Option<MEDIAPICKERORIGINTYPE>,
    /// field 15, wire `media_picker_t`
    pub media_picker_t: Option<String>,
    /// field 16, wire `chat_recipients`
    pub chat_recipients: Option<i64>,
    /// field 17, wire `status_recipients`
    pub status_recipients: Option<i64>,
    /// field 18, wire `media_picker_filter`
    pub media_picker_filter: Option<i64>,
    /// field 19, wire `media_picker_like_doc`
    pub media_picker_like_doc: Option<i64>,
    /// field 20, wire `media_picker_not_like_doc`
    pub media_picker_not_like_doc: Option<i64>,
    /// field 21, wire `media_picker_origin_third_party`
    pub media_picker_origin_third_party: Option<bool>,
    /// field 22, wire `is_view_once`
    pub is_view_once: Option<bool>,
    /// field 23, wire `photo_gallery_duration_t`
    pub photo_gallery_duration_t: Option<String>,
    /// field 24, wire `audience_selector_clicked`
    pub audience_selector_clicked: Option<bool>,
    /// field 25, wire `audience_selector_updated`
    pub audience_selector_updated: Option<bool>,
    /// field 26, wire `media_picker_has_location_sticker`
    pub media_picker_has_location_sticker: Option<bool>,
    /// field 27, wire `photo_quality_setting`
    pub photo_quality_setting: Option<MEDIAQUALITY>,
    /// field 28, wire `video_quality_setting`
    pub video_quality_setting: Option<MEDIAQUALITY>,
    /// field 29, wire `media_picker_session_id`
    pub media_picker_session_id: Option<String>,
    /// field 30, wire `picker_session_id`
    pub picker_session_id: Option<i64>,
    /// field 31, wire `motion_photo_impression_count`
    pub motion_photo_impression_count: Option<i64>,
    /// field 32, wire `motion_photo_sent_count`
    pub motion_photo_sent_count: Option<i64>,
    /// field 33, wire `media_picker_avatar_stickers`
    pub media_picker_avatar_stickers: Option<i64>,
    /// field 34, wire `hd_toggle_change`
    pub hd_toggle_change: Option<i64>,
    /// field 35, wire `hd_toggle_eligible`
    pub hd_toggle_eligible: Option<bool>,
    /// field 36, wire `hd_toggle_state`
    pub hd_toggle_state: Option<MEDIAQUALITY>,
    /// field 37, wire `caption_positions`
    pub caption_positions: Option<String>,
    /// field 38, wire `has_collection_caption`
    pub has_collection_caption: Option<bool>,
    /// field 39, wire `item_caption_count`
    pub item_caption_count: Option<i64>,
    /// field 41, wire `is_sent_in_landscape`
    pub is_sent_in_landscape: Option<bool>,
    /// field 42, wire `media_picker_ar_background`
    pub media_picker_ar_background: Option<i64>,
    /// field 43, wire `media_picker_ar_filter`
    pub media_picker_ar_filter: Option<i64>,
    /// field 44, wire `media_picker_ar_fun_effect`
    pub media_picker_ar_fun_effect: Option<i64>,
    /// field 45, wire `number_of_ar_post_capture`
    pub number_of_ar_post_capture: Option<i64>,
    /// field 46, wire `number_of_ar_pre_capture`
    pub number_of_ar_pre_capture: Option<i64>,
    /// field 47, wire `media_picker_iglu_lowlight`
    pub media_picker_iglu_lowlight: Option<i64>,
    /// field 48, wire `media_picker_iglu_touchup`
    pub media_picker_iglu_touchup: Option<i64>,
    /// field 49, wire `number_of_iglu_post_capture`
    pub number_of_iglu_post_capture: Option<i64>,
    /// field 50, wire `number_of_iglu_pre_capture`
    pub number_of_iglu_pre_capture: Option<i64>,
    /// field 51, wire `auto_scale_count`
    pub auto_scale_count: Option<i64>,
    /// field 52, wire `transform_count`
    pub transform_count: Option<i64>,
    /// field 53, wire `media_picker_position`
    pub media_picker_position: Option<String>,
    /// field 54, wire `is_fb_crossposting_enabled`
    pub is_fb_crossposting_enabled: Option<bool>,
    /// field 55, wire `is_ig_crossposting_enabled`
    pub is_ig_crossposting_enabled: Option<bool>,
}