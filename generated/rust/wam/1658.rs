pub const WAM_STATUS_ITEM_VIEW: u32 = 1658;

#[derive(Debug, Default)]
pub struct StatusItemViewEvent {
    /// field 1, wire `status_viewer_session_id`
    pub status_viewer_session_id: Option<i64>,
    /// field 2, wire `status_row_index`
    pub status_row_index: Option<i64>,
    /// field 3, wire `status_item_view_result`
    pub status_item_view_result: Option<STATUSITEMVIEWRESULT>,
    /// field 4, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 5, wire `status_item_load_time`
    pub status_item_load_time: Option<String>,
    /// field 6, wire `status_item_view_time`
    pub status_item_view_time: Option<String>,
    /// field 7, wire `status_item_length`
    pub status_item_length: Option<String>,
    /// field 8, wire `status_item_replied`
    pub status_item_replied: Option<i64>,
    /// field 9, wire `status_item_unread`
    pub status_item_unread: Option<bool>,
    /// field 10, wire `status_item_view_count`
    pub status_item_view_count: Option<i64>,
    /// field 11, wire `status_row_section`
    pub status_row_section: Option<STATUSROWSECTION>,
    /// field 14, wire `status_item_impression_count`
    pub status_item_impression_count: Option<i64>,
    /// field 16, wire `status_item_index`
    pub status_item_index: Option<i64>,
    /// field 17, wire `psa_campaign_id`
    pub psa_campaign_id: Option<String>,
    /// field 18, wire `psa_campaign_item_index`
    pub psa_campaign_item_index: Option<i64>,
    /// field 19, wire `psa_link_available`
    pub psa_link_available: Option<bool>,
    /// field 20, wire `psa_link_open_result`
    pub psa_link_open_result: Option<PSALINKOPENRESULT>,
    /// field 21, wire `psa_link_load_time`
    pub psa_link_load_time: Option<String>,
    /// field 22, wire `psa_link_click`
    pub psa_link_click: Option<bool>,
    /// field 23, wire `is_poster_biz`
    pub is_poster_biz: Option<bool>,
    /// field 25, wire `is_poster_in_address_book`
    pub is_poster_in_address_book: Option<bool>,
    /// field 26, wire `url_status_clicked`
    pub url_status_clicked: Option<URLSTATUSCLICKED>,
    /// field 27, wire `url_status_type`
    pub url_status_type: Option<URLSTATUSTYPE>,
    /// field 29, wire `is_viewed_in_landscape`
    pub is_viewed_in_landscape: Option<bool>,
    /// field 30, wire `status_contains_music`
    pub status_contains_music: Option<bool>,
    /// field 31, wire `status_item3s_view_count`
    pub status_item3s_view_count: Option<i64>,
    /// field 32, wire `music_blocked`
    pub music_blocked: Option<bool>,
    /// field 34, wire `external_source_domain_type`
    pub external_source_domain_type: Option<INLINEVIDEOTYPE>,
    /// field 35, wire `is_already_downloaded`
    pub is_already_downloaded: Option<bool>,
    /// field 36, wire `status_type`
    pub status_type: Option<STATUSTYPE>,
    /// field 37, wire `is_resharable`
    pub is_resharable: Option<bool>,
    /// field 38, wire `paired_media_type`
    pub paired_media_type: Option<PAIREDMEDIATYPE>,
    /// field 39, wire `status_paired_media_quality`
    pub status_paired_media_quality: Option<STATUSPAIREDMEDIAQUALITY>,
    /// field 40, wire `is_reshare`
    pub is_reshare: Option<bool>,
    /// field 41, wire `reshare_source`
    pub reshare_source: Option<RESHARESOURCE>,
    /// field 42, wire `status_media_height`
    pub status_media_height: Option<i64>,
    /// field 43, wire `status_media_width`
    pub status_media_width: Option<i64>,
    /// field 44, wire `is_forwardable`
    pub is_forwardable: Option<bool>,
    /// field 45, wire `is_forwarded`
    pub is_forwarded: Option<bool>,
    /// field 46, wire `status_category`
    pub status_category: Option<STATUSCATEGORY>,
    /// field 47, wire `bytes_downloaded_start_view`
    pub bytes_downloaded_start_view: Option<String>,
    /// field 48, wire `estimated_bandwidth`
    pub estimated_bandwidth: Option<String>,
    /// field 49, wire `media_file_size`
    pub media_file_size: Option<i64>,
    /// field 51, wire `status_contains_question`
    pub status_contains_question: Option<bool>,
    /// field 52, wire `is_subscribed`
    pub is_subscribed: Option<bool>,
    /// field 53, wire `status_id`
    pub status_id: Option<String>,
    /// field 54, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 55, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
    /// field 56, wire `status_contains_reaction_sticker`
    pub status_contains_reaction_sticker: Option<bool>,
    /// field 57, wire `status_poster_contact_type`
    pub status_poster_contact_type: Option<STATUSPOSTERCONTACTTYPE>,
    /// field 58, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
}