pub const WAM_DEEP_LINK_OPEN: u32 = 2136;

#[derive(Debug, Default)]
pub struct DeepLinkOpenEvent {
    /// field 2, wire `deep_link_open_from`
    pub deep_link_open_from: Option<DEEPLINKOPENFROM>,
    /// field 3, wire `deep_link_type`
    pub deep_link_type: Option<DEEPLINKTYPE>,
    /// field 4, wire `is_contact`
    pub is_contact: Option<bool>,
    /// field 5, wire `link_owner_type`
    pub link_owner_type: Option<OWNERTYPE>,
    /// field 6, wire `deep_link_session_id`
    pub deep_link_session_id: Option<String>,
    /// field 7, wire `source_surface`
    pub source_surface: Option<i64>,
    /// field 8, wire `campaign`
    pub campaign: Option<String>,
    /// field 9, wire `failure_reason`
    pub failure_reason: Option<String>,
}