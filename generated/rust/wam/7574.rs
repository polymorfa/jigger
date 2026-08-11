pub const WAM_GROUP_SUSPENSION_APPEAL_EVENTS: u32 = 7574;

#[derive(Debug, Default)]
pub struct GroupSuspensionAppealEventsEvent {
    /// field 1, wire `group_suspension_appeal_ui_action`
    pub group_suspension_appeal_ui_action: Option<GROUPSUSPENSIONAPPEALUIACTION>,
    /// field 2, wire `group_suspension_appeal_ui_surface`
    pub group_suspension_appeal_ui_surface: Option<GROUPSUSPENSIONAPPEALUISURFACE>,
    /// field 3, wire `group_type_client`
    pub group_type_client: Option<GROUPTYPECLIENT>,
    /// field 4, wire `is_admin`
    pub is_admin: Option<bool>,
    /// field 5, wire `group_jid`
    pub group_jid: Option<String>,
    /// field 6, wire `group_suspension_appeal_error_message`
    pub group_suspension_appeal_error_message: Option<String>,
    /// field 7, wire `group_suspension_appeal_entry_point`
    pub group_suspension_appeal_entry_point: Option<GROUPSUSPENSIONAPPEALENTRYPOINT>,
}