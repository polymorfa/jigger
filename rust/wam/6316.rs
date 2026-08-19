pub const WAM_PS_GROUP_EXIT_EXPERIENCE_EXIT_DELETE_CONFIRMATION_DIALOG_UI_INTERACTION: u32 = 6316;

#[derive(Debug, Default)]
pub struct PsGroupExitExperienceExitDeleteConfirmationDialogUiInteractionEvent {
    /// field 1, wire `ps_group_exit_experience_delete_confirmation_dialog_action`
    pub ps_group_exit_experience_delete_confirmation_dialog_action: Option<PSGROUPEXITEXPERIENCEDELETECONFIRMATIONDIALOGACTIONS>,
    /// field 2, wire `ps_group_exit_experience_group_jid`
    pub ps_group_exit_experience_group_jid: Option<String>,
    /// field 4, wire `ps_group_exit_experience_touch_point`
    pub ps_group_exit_experience_touch_point: Option<GROUPEXITEXPERIENCEORIGIN>,
}