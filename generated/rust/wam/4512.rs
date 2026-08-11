pub const WAM_GROUP_JOURNEY: u32 = 4512;

#[derive(Debug, Default)]
pub struct GroupJourneyEvent {
    /// field 1, wire `action_type`
    pub action_type: Option<CHATFILTERACTIONTYPES>,
    /// field 2, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 3, wire `group_size`
    pub group_size: Option<i64>,
    /// field 4, wire `surface`
    pub surface: Option<SURFACETYPE>,
    /// field 5, wire `thread_type`
    pub thread_type: Option<THREADTYPE>,
    /// field 6, wire `user_role`
    pub user_role: Option<USERROLETYPE>,
    /// field 7, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
}