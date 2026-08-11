pub const WAM_PS_GROUP_SAFETY_CHECK_SHEET_SEEN: u32 = 6240;

#[derive(Debug, Default)]
pub struct PsGroupSafetyCheckSheetSeenEvent {
    /// field 1, wire `ps_safety_check_group_jid`
    pub ps_safety_check_group_jid: Option<String>,
    /// field 2, wire `integrity_group_user_hashed_id`
    pub integrity_group_user_hashed_id: Option<String>,
}