pub const WAM_WEBC_BACKGROUND_SYNC_ADOPTION: u32 = 5302;

#[derive(Debug, Default)]
pub struct WebcBackgroundSyncAdoptionEvent {
    /// field 1, wire `offboard_source`
    pub offboard_source: Option<OFFBOARDSOURCES>,
    /// field 2, wire `onboard_source`
    pub onboard_source: Option<ONBOARDSOURCES>,
    /// field 3, wire `push_notification_interaction`
    pub push_notification_interaction: Option<PUSHNOTIFICATIONINTERACTIONS>,
    /// field 4, wire `web_os_notification_setting`
    pub web_os_notification_setting: Option<WEBNOTIFICATIONSETTINGTYPE>,
}