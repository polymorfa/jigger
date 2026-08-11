pub const WAM_VIEW_ONCE_SCREENSHOT_ACTIONS: u32 = 3606;

#[derive(Debug, Default)]
pub struct ViewOnceScreenshotActionsEvent {
    /// field 1, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 2, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 3, wire `vo_message_type`
    pub vo_message_type: Option<VOMESSAGETYPE>,
    /// field 4, wire `vo_ss_action`
    pub vo_ss_action: Option<VOSSACTION>,
}