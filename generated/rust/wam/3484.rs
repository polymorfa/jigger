pub const WAM_KEEP_IN_CHAT_NOTIF: u32 = 3484;

#[derive(Debug, Default)]
pub struct KeepInChatNotifEvent {
    /// field 3, wire `kic_group_notification_taps`
    pub kic_group_notification_taps: Option<i64>,
    /// field 4, wire `kic_group_notifications`
    pub kic_group_notifications: Option<i64>,
    /// field 5, wire `kic_notification_taps`
    pub kic_notification_taps: Option<i64>,
    /// field 6, wire `kic_notifications`
    pub kic_notifications: Option<i64>,
}