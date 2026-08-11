pub const WAM_MM_DISCLOSURE_STATE_EVENT: u32 = 6552;

#[derive(Debug, Default)]
pub struct MmDisclosureStateEventEvent {
    /// field 1, wire `business_lid_or_jid`
    pub business_lid_or_jid: Option<String>,
    /// field 3, wire `disclosure_event_type`
    pub disclosure_event_type: Option<DISCLOSUREEVENTTYPE>,
    /// field 4, wire `disclosure_interaction`
    pub disclosure_interaction: Option<DISCLOSUREINTERACTION>,
    /// field 5, wire `disclosure_source`
    pub disclosure_source: Option<DISCLOSURESOURCE>,
    /// field 6, wire `disclosure_suppression_reason`
    pub disclosure_suppression_reason: Option<DISCLOSURESUPPRESSIONREASON>,
    /// field 7, wire `disclosure_surface`
    pub disclosure_surface: Option<DISCLOSURESURFACE>,
    /// field 8, wire `is_user_disclosed`
    pub is_user_disclosed: Option<bool>,
    /// field 9, wire `mm_has_disclosed_url`
    pub mm_has_disclosed_url: Option<bool>,
    /// field 10, wire `mm_has_show_disclosure_flag`
    pub mm_has_show_disclosure_flag: Option<bool>,
    /// field 11, wire `template_id`
    pub template_id: Option<String>,
    /// field 13, wire `user_became_disclosed`
    pub user_became_disclosed: Option<bool>,
    /// field 14, wire `is_companion_device`
    pub is_companion_device: Option<bool>,
    /// field 15, wire `delta_time_received`
    pub delta_time_received: Option<i64>,
    /// field 16, wire `ent_source_subplatform`
    pub ent_source_subplatform: Option<String>,
    /// field 18, wire `is_network_available`
    pub is_network_available: Option<bool>,
    /// field 19, wire `mm_disclosure_flags`
    pub mm_disclosure_flags: Option<i64>,
}