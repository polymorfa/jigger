pub const WAM_UI_REVOKE_ACTION: u32 = 3298;

#[derive(Debug, Default)]
pub struct UiRevokeActionEvent {
    /// field 1, wire `message_action`
    pub message_action: Option<UIREVOKEACTIONTYPE>,
    /// field 2, wire `ui_revoke_action_duration`
    pub ui_revoke_action_duration: Option<i64>,
    /// field 3, wire `ui_revoke_action_session_id`
    pub ui_revoke_action_session_id: Option<String>,
}