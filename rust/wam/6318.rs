pub const WAM_PS_GROUP_EXIT_EXPERIENCE_EXIT_DIALOG_INTERACTION: u32 = 6318;

#[derive(Debug, Default)]
pub struct PsGroupExitExperienceExitDialogInteractionEvent {
    /// field 1, wire `ps_exit_experience_reporting_enabled`
    pub ps_exit_experience_reporting_enabled: Option<bool>,
    /// field 2, wire `ps_group_exit_experience_enabled`
    pub ps_group_exit_experience_enabled: Option<bool>,
    /// field 3, wire `ps_group_exit_experience_exit_dialog_action`
    pub ps_group_exit_experience_exit_dialog_action: Option<PSGROUPEXITEXPERIENCEEXITDIALOGACTIONS>,
    /// field 4, wire `ps_group_exit_experience_group_jid`
    pub ps_group_exit_experience_group_jid: Option<String>,
    /// field 6, wire `ps_group_exit_experience_touch_point`
    pub ps_group_exit_experience_touch_point: Option<GROUPEXITEXPERIENCEORIGIN>,
}