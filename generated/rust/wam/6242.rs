pub const WAM_PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS: u32 = 6242;

#[derive(Debug, Default)]
pub struct PsGroupSafetyCheckUiInteractionsEvent {
    /// field 1, wire `ps_safety_check_group_jid`
    pub ps_safety_check_group_jid: Option<String>,
    /// field 2, wire `ps_safety_check_interaction`
    pub ps_safety_check_interaction: Option<PSGROUPSAFETYCHECKUIINTERACTIONS>,
    /// field 3, wire `integrity_group_user_hashed_id`
    pub integrity_group_user_hashed_id: Option<String>,
}