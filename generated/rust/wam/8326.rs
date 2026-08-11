pub const WAM_WEBC_QUICK_ACTION: u32 = 8326;

#[derive(Debug, Default)]
pub struct WebcQuickActionEvent {
    /// field 1, wire `webc_quick_action_event_type`
    pub webc_quick_action_event_type: Option<WEBCQUICKACTIONEVENTTYPE>,
    /// field 2, wire `webc_quick_action_id`
    pub webc_quick_action_id: Option<WEBCQUICKACTIONID>,
    /// field 3, wire `webc_quick_action_is_customized`
    pub webc_quick_action_is_customized: Option<bool>,
    /// field 4, wire `webc_quick_action_num_visible`
    pub webc_quick_action_num_visible: Option<i64>,
    /// field 5, wire `webc_quick_action_slot_position`
    pub webc_quick_action_slot_position: Option<i64>,
    /// field 6, wire `webc_quick_action_surface`
    pub webc_quick_action_surface: Option<WEBCQUICKACTIONSURFACE>,
}