pub const WAM_PS_GROUP_SAFETY_CHECK_ENABLED: u32 = 6238;

#[derive(Debug, Default)]
pub struct PsGroupSafetyCheckEnabledEvent {
    /// field 1, wire `ps_safety_check_group_jid`
    pub ps_safety_check_group_jid: Option<String>,
    /// field 2, wire `ps_was_safety_check_group_initially_muted`
    pub ps_was_safety_check_group_initially_muted: Option<bool>,
    /// field 3, wire `did_join_by_gil`
    pub did_join_by_gil: Option<bool>,
    /// field 4, wire `integrity_group_user_hashed_id`
    pub integrity_group_user_hashed_id: Option<String>,
    /// field 5, wire `was_added_by_contact`
    pub was_added_by_contact: Option<bool>,
    /// field 6, wire `will_safety_check_be_seen`
    pub will_safety_check_be_seen: Option<bool>,
}