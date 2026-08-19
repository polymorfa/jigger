pub const WAM_MM_COLLECTION_WINDOW_STATE_EVENT: u32 = 6744;

#[derive(Debug, Default)]
pub struct MmCollectionWindowStateEventEvent {
    /// field 1, wire `business_lid_or_jid`
    pub business_lid_or_jid: Option<String>,
    /// field 2, wire `mm_has_disclosed_token`
    pub mm_has_disclosed_token: Option<bool>,
    /// field 3, wire `mm_has_disclosed_url`
    pub mm_has_disclosed_url: Option<bool>,
    /// field 4, wire `mm_has_show_disclosure_flag`
    pub mm_has_show_disclosure_flag: Option<bool>,
    /// field 5, wire `template_id`
    pub template_id: Option<String>,
    /// field 6, wire `mm_disclosure_flags`
    pub mm_disclosure_flags: Option<i64>,
    /// field 7, wire `ent_source_subplatform`
    pub ent_source_subplatform: Option<String>,
    /// field 8, wire `is_user_disclosed`
    pub is_user_disclosed: Option<bool>,
    /// field 9, wire `mm_has_undisclosed_token`
    pub mm_has_undisclosed_token: Option<bool>,
}