pub const WAM_CHAT_MUTE: u32 = 2280;

#[derive(Debug, Default)]
pub struct ChatMuteEvent {
    /// field 1, wire `mute_duration`
    pub mute_duration: Option<String>,
    /// field 2, wire `mute_group_size`
    pub mute_group_size: Option<i64>,
    /// field 3, wire `action_conducted`
    pub action_conducted: Option<ACTIONCONDUCTED>,
    /// field 4, wire `mute_chat_type`
    pub mute_chat_type: Option<MUTECHATTYPE>,
    /// field 5, wire `chat_mute_notification_choice`
    pub chat_mute_notification_choice: Option<CHATMUTENOTIFICATIONCHOICE>,
    /// field 6, wire `mute_entry_point`
    pub mute_entry_point: Option<MUTEENTRYPOINT>,
    /// field 7, wire `wa_official_account_name`
    pub wa_official_account_name: Option<WAOFFICIALACCOUNTNAME>,
}