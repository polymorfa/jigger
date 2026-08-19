pub const WAM_PS_GROUP_SAFETY_CHECK_EXIT_DIALOG: u32 = 6252;

#[derive(Debug, Default)]
pub struct PsGroupSafetyCheckExitDialogEvent {
    /// field 1, wire `ps_group_safety_check_exit_dialog_action`
    pub ps_group_safety_check_exit_dialog_action: Option<PSGROUPSAFETYCHECKEXITDIALOGACTIONS>,
    /// field 2, wire `ps_safety_check_group_jid`
    pub ps_safety_check_group_jid: Option<String>,
    /// field 3, wire `integrity_group_user_hashed_id`
    pub integrity_group_user_hashed_id: Option<String>,
}