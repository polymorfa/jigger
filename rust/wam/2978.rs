pub const WAM_STATUS_MUTE: u32 = 2978;

#[derive(Debug, Default)]
pub struct StatusMuteEvent {
    /// field 1, wire `status_session_id`
    pub status_session_id: Option<i64>,
    /// field 2, wire `status_viewer_session_id`
    pub status_viewer_session_id: Option<i64>,
    /// field 3, wire `status_item_index`
    pub status_item_index: Option<i64>,
    /// field 4, wire `psa_campaign_ids`
    pub psa_campaign_ids: Option<String>,
    /// field 5, wire `psa_campaign_item_index`
    pub psa_campaign_item_index: Option<i64>,
    /// field 6, wire `mute_origin`
    pub mute_origin: Option<MUTEORIGIN>,
    /// field 7, wire `psa_campaign_id`
    pub psa_campaign_id: Option<String>,
    /// field 8, wire `mute_action`
    pub mute_action: Option<MUTEACTION>,
    /// field 9, wire `is_poster_biz`
    pub is_poster_biz: Option<bool>,
    /// field 10, wire `is_poster_in_address_book`
    pub is_poster_in_address_book: Option<bool>,
    /// field 11, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 12, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
    /// field 13, wire `status_category`
    pub status_category: Option<STATUSCATEGORY>,
    /// field 14, wire `status_poster_contact_type`
    pub status_poster_contact_type: Option<STATUSPOSTERCONTACTTYPE>,
    /// field 15, wire `cid`
    pub cid: Option<String>,
}