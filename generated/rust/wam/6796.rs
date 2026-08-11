pub const WAM_MM_DISCLOSURE_STATE_FS_EVENT: u32 = 6796;

#[derive(Debug, Default)]
pub struct MmDisclosureStateFsEventEvent {
    /// field 1, wire `disclosure_event_type`
    pub disclosure_event_type: Option<DISCLOSUREEVENTTYPE>,
    /// field 2, wire `disclosure_interaction`
    pub disclosure_interaction: Option<DISCLOSUREINTERACTION>,
    /// field 3, wire `disclosure_source`
    pub disclosure_source: Option<DISCLOSURESOURCE>,
    /// field 4, wire `disclosure_suppression_reason`
    pub disclosure_suppression_reason: Option<DISCLOSURESUPPRESSIONREASON>,
    /// field 5, wire `disclosure_surface`
    pub disclosure_surface: Option<DISCLOSURESURFACE>,
    /// field 6, wire `is_companion_device`
    pub is_companion_device: Option<bool>,
    /// field 7, wire `is_user_disclosed`
    pub is_user_disclosed: Option<bool>,
    /// field 8, wire `mm_has_disclosed_url`
    pub mm_has_disclosed_url: Option<bool>,
    /// field 9, wire `mm_has_show_disclosure_flag`
    pub mm_has_show_disclosure_flag: Option<bool>,
    /// field 10, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 11, wire `user_became_disclosed`
    pub user_became_disclosed: Option<bool>,
    /// field 12, wire `mm_disclosure_flags`
    pub mm_disclosure_flags: Option<i64>,
}