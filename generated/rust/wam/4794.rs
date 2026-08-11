pub const WAM_PRIVACY_TIP_ACTION: u32 = 4794;

#[derive(Debug, Default)]
pub struct PrivacyTipActionEvent {
    /// field 1, wire `privacy_tip_action_type`
    pub privacy_tip_action_type: Option<PRIVACYTIPACTIONTYPE>,
}