pub const WAM_KEEP_IN_CHAT_ERRORS: u32 = 3698;

#[derive(Debug, Default)]
pub struct KeepInChatErrorsEvent {
    /// field 2, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 3, wire `is_admin`
    pub is_admin: Option<bool>,
    /// field 4, wire `kic_action`
    pub kic_action: Option<KICACTIONTYPE>,
    /// field 5, wire `kic_error_code`
    pub kic_error_code: Option<KICERRORCODETYPE>,
    /// field 6, wire `kic_message_ephemerality_duration`
    pub kic_message_ephemerality_duration: Option<i64>,
    /// field 7, wire `can_edit_dm_settings`
    pub can_edit_dm_settings: Option<bool>,
}