pub const WAM_PS_FMX_ACTION: u32 = 7054;

#[derive(Debug, Default)]
pub struct PsFmxActionEvent {
    /// field 1, wire `common_group_num`
    pub common_group_num: Option<i64>,
    /// field 2, wire `country_shown`
    pub country_shown: Option<bool>,
    /// field 3, wire `fmx_entry_point`
    pub fmx_entry_point: Option<FMXENTRYPOINT>,
    /// field 4, wire `fmx_event`
    pub fmx_event: Option<FMXEVENT>,
    /// field 5, wire `highlight_group_type`
    pub highlight_group_type: Option<HIGHLIGHTGROUPTYPE>,
    /// field 6, wire `is_sender_smb`
    pub is_sender_smb: Option<bool>,
    /// field 7, wire `not_a_contact_shown`
    pub not_acontact_shown: Option<bool>,
    /// field 8, wire `is_suspicious_fmx`
    pub is_suspicious_fmx: Option<bool>,
    /// field 9, wire `new_account_shown`
    pub new_account_shown: Option<bool>,
    /// field 10, wire `is_different_country`
    pub is_different_country: Option<bool>,
}