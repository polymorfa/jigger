pub const WAM_CONTACT_NOTIFICATION_SETTING_USER_JOURNEY: u32 = 5304;

#[derive(Debug, Default)]
pub struct ContactNotificationSettingUserJourneyEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `contact_notification_setting_action_type`
    pub contact_notification_setting_action_type: Option<CONTACTNOTIFICATIONSETTINGACTIONTYPE>,
    /// field 3, wire `group_size`
    pub group_size: Option<i64>,
    /// field 4, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
}