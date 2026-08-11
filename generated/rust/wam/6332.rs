pub const WAM_PS_GROUP_EXIT_EXPERIENCE_GROUP_ACTION: u32 = 6332;

#[derive(Debug, Default)]
pub struct PsGroupExitExperienceGroupActionEvent {
    /// field 1, wire `ps_group_exit_experience_action`
    pub ps_group_exit_experience_action: Option<PSGROUPEXITEXPERIENCEACTIONS>,
    /// field 2, wire `ps_group_exit_experience_enabled`
    pub ps_group_exit_experience_enabled: Option<bool>,
    /// field 3, wire `ps_group_exit_experience_group_jid`
    pub ps_group_exit_experience_group_jid: Option<String>,
    /// field 4, wire `ps_group_exit_experience_touch_point`
    pub ps_group_exit_experience_touch_point: Option<GROUPEXITEXPERIENCEORIGIN>,
}