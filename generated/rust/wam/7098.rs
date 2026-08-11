pub const WAM_DEFENSE_MODE_QUARANTINE: u32 = 7098;

#[derive(Debug, Default)]
pub struct DefenseModeQuarantineEvent {
    /// field 1, wire `quarantine_action`
    pub quarantine_action: Option<DEFENSEMODEQUARANTINEACTION>,
    /// field 2, wire `defense_mode_quarantine_event_count`
    pub defense_mode_quarantine_event_count: Option<i64>,
    /// field 3, wire `defense_mode_quarantine_is_capi`
    pub defense_mode_quarantine_is_capi: Option<bool>,
    /// field 4, wire `jid_domain`
    pub jid_domain: Option<JIDDOMAINTYPE>,
}