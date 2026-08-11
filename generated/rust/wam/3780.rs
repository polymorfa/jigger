pub const WAM_UI_MESSAGE_YOURSELF_ACTION: u32 = 3780;

#[derive(Debug, Default)]
pub struct UiMessageYourselfActionEvent {
    /// field 1, wire `ui_message_yourself_action_session_id`
    pub ui_message_yourself_action_session_id: Option<String>,
    /// field 2, wire `ui_message_yourself_action_type`
    pub ui_message_yourself_action_type: Option<UIMESSAGEYOURSELFACTIONTYPE>,
    /// field 3, wire `ui_message_yourself_funnel_name`
    pub ui_message_yourself_funnel_name: Option<UIMESSAGEYOURSELFFUNNELNAME>,
}