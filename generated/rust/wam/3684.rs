pub const WAM_NOTIFICATION_SETTING: u32 = 3684;

#[derive(Debug, Default)]
pub struct NotificationSettingEvent {
    /// field 1, wire `group_reaction_notification`
    pub group_reaction_notification: Option<bool>,
    /// field 2, wire `group_show_notification`
    pub group_show_notification: Option<bool>,
    /// field 3, wire `group_sound_tone`
    pub group_sound_tone: Option<NOTIFICATIONSOUNDTONE>,
    /// field 4, wire `in_app_notification_alert_style`
    pub in_app_notification_alert_style: Option<INAPPNOTIFICATIONALERTSTYLE>,
    /// field 5, wire `in_app_notification_sound`
    pub in_app_notification_sound: Option<bool>,
    /// field 6, wire `in_app_notification_vibrate`
    pub in_app_notification_vibrate: Option<bool>,
    /// field 7, wire `message_reaction_notification`
    pub message_reaction_notification: Option<bool>,
    /// field 8, wire `message_show_notification`
    pub message_show_notification: Option<bool>,
    /// field 9, wire `message_sound_tone`
    pub message_sound_tone: Option<NOTIFICATIONSOUNDTONE>,
    /// field 10, wire `show_preview`
    pub show_preview: Option<bool>,
    /// field 11, wire `offline_notification`
    pub offline_notification: Option<bool>,
    /// field 12, wire `status_reminder_notification`
    pub status_reminder_notification: Option<bool>,
    /// field 13, wire `unread_badge_setting`
    pub unread_badge_setting: Option<UNREADBADGESETTINGTYPE>,
    /// field 14, wire `status_notification_priority`
    pub status_notification_priority: Option<bool>,
    /// field 15, wire `status_notification_vibration`
    pub status_notification_vibration: Option<bool>,
    /// field 16, wire `status_reaction_notification`
    pub status_reaction_notification: Option<bool>,
    /// field 17, wire `status_sound_tone`
    pub status_sound_tone: Option<NOTIFICATIONSOUNDTONE>,
    /// field 18, wire `status_show_notification`
    pub status_show_notification: Option<bool>,
    /// field 19, wire `recommended_channels_notification_setting`
    pub recommended_channels_notification_setting: Option<bool>,
}